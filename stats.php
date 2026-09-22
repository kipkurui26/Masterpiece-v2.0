<?php

header('Content-Type: application/json');

// --- CORS: same allowed origins as enquiry.php ---
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
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

/**
 * ---------------------------------------------------------
 *  Edit the numbers below to update the stats shown on the
 *  website (home page, about page, and the enquiry form).
 *  Just change the number after the => sign and save the file.
 *  Do not remove the commas.
 * ---------------------------------------------------------
 */
$stats = [
    'surveysCompleted'         => 455,
    'boreholesDrilledEquipped' => 80,
    'boreholesRehabilitated'   => 36,
    'boreholeInspections'      => 40,
];

echo json_encode(['success' => true, 'stats' => $stats]);