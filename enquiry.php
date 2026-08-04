<?php

header('Content-Type: application/json');


// --- CORS: only allow your own domain(s) to call this ---
$allowedOrigins = [
    'https://masterpiecehydrosolutions.co.ke',
    'https://www.masterpiecehydrosolutions.co.ke',
    'https://masterpiece-v2-0.vercel.app',
    'http://localhost:3000', 
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body']);
    exit;
}

// --- Spam checks (server-side — this is the layer that actually matters) ---
if (!empty(trim((string)($data['website'] ?? '')))) {
    // Honeypot filled → silently report success, don't tip off the bot
    echo json_encode(['success' => true]);
    exit;
}

$elapsed = isset($data['elapsedSeconds']) ? (float) $data['elapsedSeconds'] : 999;
if ($elapsed < 3) {
    echo json_encode(['success' => true]);
    exit;
}

// --- Required fields ---
$required = [
    'fullName', 'location', 'hasBorehole', 'projectType',
    'projectStage', 'message', 'contactMethod', 'contactDetail',
];
foreach ($required as $field) {
    if (trim((string)($data[$field] ?? '')) === '') {
        http_response_code(422);
        echo json_encode(['success' => false, 'message' => "Missing required field: $field"]);
        exit;
    }
}

// --- Contact detail format validation ---
$contactMethod = $data['contactMethod'];
$contactDetail = trim($data['contactDetail']);

if (in_array($contactMethod, ['phone', 'whatsapp'], true)) {
    if (!preg_match('/^(?:\+254|0)7\d{8}$/', $contactDetail)) {
        http_response_code(422);
        echo json_encode(['success' => false, 'message' => 'Invalid phone number']);
        exit;
    }
} elseif ($contactMethod === 'email') {
    if (!filter_var($contactDetail, FILTER_VALIDATE_EMAIL)) {
        http_response_code(422);
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit;
    }
} else {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid contact method']);
    exit;
}

// --- Sanitize before dropping into the HTML email body ---
function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

$fullName     = e($data['fullName']);
$location     = e($data['location']);
$hasBorehole  = $data['hasBorehole'] === 'yes' ? 'Yes' : 'No';
$projectType  = e($data['projectType']);
$projectStage = e($data['projectStage']);
$message      = nl2br(e($data['message']));
$contactMethodLabel = ucfirst($contactMethod);
$contactDetailSafe  = e($contactDetail);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
// require __DIR__ . '/../../config.php';
require __DIR__ . '/config.php';



$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // From is always your own verified address — never the client's.
    // Reply-To is the client's address, only when they actually gave one.
    $mail->setFrom(SMTP_USER, 'Masterpiece Hydro-Solutions Website');
    // $mail->addAddress('sales@masterpiecehydrosolutions.co.ke');
    $mail->addAddress('kipkuruijapheth11@gmail.com');

    if ($contactMethod === 'email') {
        $mail->addReplyTo($contactDetail, $fullName);
    }

    $mail->isHTML(true);
    $mail->Subject = "New Project Enquiry from $fullName";
    $mail->Body = "
        <p><b>Full Name:</b> $fullName</p>
        <p><b>Project Location:</b> $location</p>
        <p><b>Existing Borehole:</b> $hasBorehole</p>
        <p><b>Type of Project:</b> $projectType</p>
        <p><b>Project Stage:</b> $projectStage</p>
        <p><b>Preferred Contact Method:</b> $contactMethodLabel</p>
        <p><b>Contact Detail:</b> $contactDetailSafe</p>
        <h3>Project Details</h3>
        <p>$message</p>
    ";
    $mail->AltBody = "New enquiry from $fullName ($location). "
        . "Existing borehole: $hasBorehole. Type: $projectType. Stage: $projectStage. "
        . "Contact via $contactMethodLabel: $contactDetailSafe.\n\n$message";

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    error_log('Enquiry mail error: ' . $mail->ErrorInfo);
    echo json_encode(['success' => false, 'message' => 'Mail could not be sent']);
}