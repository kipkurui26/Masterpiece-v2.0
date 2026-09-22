import { useState, useRef, useEffect, useCallback } from "react";
import useStats from "../../../hooks/useStats";

// const ENDPOINT_URL = import.meta.env.VITE_ENQUIRY_ENDPOINT;
// const ENDPOINT_URL = 'http://localhost:8000/enquiry.php';
const ENDPOINT_URL = "https://masterpiecehydrosolutions.co.ke/enquiry.php";
const MIN_SUBMIT_SECONDS = 3;
const TOAST_DURATION_MS = 8000;
const TOAST_EASE = "cubic-bezier(0.65, 0, 0.35, 1)";

const PROJECT_TYPE_OPTIONS = {
  no: [
    "Hydrogeological Survey",
    "Confirm my drilling point",
    "New Borehole",
    "Borehole Drilling",
    "Not sure",
  ],
  yes: [
    "Borehole Equipping",
    "Borehole Solarisation",
    "Borehole Rehabilitation",
    "Borehole Inspection",
    "Test Pumping",
    "Water Quality Analysis",
    "Not sure",
  ],
};

const PROJECT_STAGE_OPTIONS = [
  "I'm exploring my options",
  "I'm planning my project",
  "I'm ready to get started",
  "I need help with an existing borehole",
  "I'm not sure",
];

const CONTACT_DETAIL_CONFIG = {
  phone: { label: "Phone Number", placeholder: "07XX XXX XXX" },
  whatsapp: { label: "WhatsApp Number", placeholder: "07XX XXX XXX" },
  email: { label: "Email Address", placeholder: "you@example.com" },
};

const PHONE_REGEX = /^(?:\+254|0)7\d{8}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormData = {
  fullName: "",
  location: "",
  hasBorehole: "",
  projectType: "",
  projectStage: "",
  message: "",
  contactMethod: "",
  contactDetail: "",
  website: "",
};

function FormField({ label, error, required, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#1B1F5C]">
        {label}
        {required && <span className="text-[#0F9E9E]"> *</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

const inputClasses = (hasError) =>
  `w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F9E9E]/50 ${
    hasError ? "border-red-400" : "border-gray-300"
  }`;

/**
 * Toast confirmation, top-right, with:
 * - cubic-bezier slide/fade entrance
 * - an 8s auto-dismiss
 * - a reverse progress bar (starts full, drains to empty) driven by the same 8s
 * - a manual close button
 */
function EnquiryToast({ onClose }) {
  const [entered, setEntered] = useState(false);
  const [draining, setDraining] = useState(false);
  const dismissTimer = useRef(null);

  useEffect(() => {
    // Two RAFs so the browser paints the "before" state first,
    // otherwise the entrance/drain transitions can get skipped.
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        setEntered(true);
        setDraining(true);
      });
      dismissTimer.current = raf2;
    });

    const timeout = setTimeout(onClose, TOAST_DURATION_MS);

    return () => {
      cancelAnimationFrame(raf1);
      if (dismissTimer.current) cancelAnimationFrame(dismissTimer.current);
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-auto fixed right-6 top-6 z-50 w-[calc(100%-3rem)] max-w-sm overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
      style={{
        transform: entered ? "translateX(0)" : "translateX(1.5rem)",
        opacity: entered ? 1 : 0,
        transition: `transform 450ms ${TOAST_EASE}, opacity 450ms ${TOAST_EASE}`,
      }}
    >
      <div className="flex items-start gap-3 px-5 py-4">
        <div className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#0F9E9E]/10">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4 text-[#0F9E9E]"
            aria-hidden="true"
          >
            <path
              d="M4 10.5l3.5 3.5L16 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex-1 pt-0.5">
          <p className="text-sm font-semibold text-[#1B1F5C]">Enquiry sent</p>
          <p className="mt-1 text-sm leading-snug text-gray-600">
            We&apos;ve received your details and will reach out using your
            preferred contact method soon.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="flex-none rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Reverse progress bar: full width, drains to 0 over TOAST_DURATION_MS */}
      <div className="h-1 w-full bg-gray-100">
        <div
          className="h-full bg-[#0F9E9E]"
          style={{
            width: draining ? "0%" : "100%",
            transition: draining
              ? `width ${TOAST_DURATION_MS}ms linear`
              : "none",
          }}
        />
      </div>
    </div>
  );
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [toast, setToast] = useState(null); // null | { key: number }
  const stats = useStats();
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const showToast = useCallback(() => {
    setToast({ key: Date.now() });
  }, []);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  const update = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleHasBoreholeChange = (value) => {
    setFormData((prev) => ({ ...prev, hasBorehole: value, projectType: "" }));
    setErrors((prev) => ({
      ...prev,
      hasBorehole: undefined,
      projectType: undefined,
    }));
  };

  const handleContactMethodChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      contactMethod: value,
      contactDetail: "",
    }));
    setErrors((prev) => ({
      ...prev,
      contactMethod: undefined,
      contactDetail: undefined,
    }));
  };

  const validate = () => {
    const next = {};

    if (!formData.fullName.trim()) next.fullName = "Please enter your name.";
    if (!formData.location.trim())
      next.location = "Please enter your project location.";
    if (!formData.hasBorehole) next.hasBorehole = "Please select an option.";
    if (!formData.projectType)
      next.projectType = "Please select a project type.";
    if (!formData.projectStage)
      next.projectStage = "Please select your project stage.";
    if (!formData.contactMethod)
      next.contactMethod = "Please choose a contact method.";

    if (!formData.contactDetail.trim()) {
      next.contactDetail = "This field is required.";
    } else if (
      (formData.contactMethod === "phone" ||
        formData.contactMethod === "whatsapp") &&
      !PHONE_REGEX.test(formData.contactDetail.trim())
    ) {
      next.contactDetail = "Enter a valid Kenyan number, e.g. 0721 577 588.";
    } else if (
      formData.contactMethod === "email" &&
      !EMAIL_REGEX.test(formData.contactDetail.trim())
    ) {
      next.contactDetail = "Enter a valid email address.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot: bots fill hidden fields, real visitors never do
    if (formData.website.trim() !== "") {
      setFormData(initialFormData);
      setStatus("idle");
      showToast(); // fail silently — don't tip off the bot
      return;
    }

    // Time trap: instant submissions are almost always automated
    const elapsedSeconds = (Date.now() - mountedAt.current) / 1000;
    if (elapsedSeconds < MIN_SUBMIT_SECONDS) {
      setFormData(initialFormData);
      setStatus("idle");
      showToast();
      return;
    }

    if (!validate()) return;

    setStatus("submitting");

    try {
      const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          location: formData.location,
          hasBorehole: formData.hasBorehole,
          projectType: formData.projectType,
          projectStage: formData.projectStage,
          message: formData.message,
          contactMethod: formData.contactMethod,
          contactDetail: formData.contactDetail,
          website: formData.website,
          elapsedSeconds: (Date.now() - mountedAt.current) / 1000,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setFormData(initialFormData);
      setErrors({});
      setStatus("idle");
      showToast();
    } catch {
      setStatus("error");
    }
  };

  const projectTypeOptions =
    formData.hasBorehole === "yes"
      ? PROJECT_TYPE_OPTIONS.yes
      : formData.hasBorehole === "no"
        ? PROJECT_TYPE_OPTIONS.no
        : [];

  const contactDetailConfig = CONTACT_DETAIL_CONFIG[formData.contactMethod];

  return (
    <section id="enquiry-form" className="bg-white py-20">
      {toast && <EnquiryToast key={toast.key} onClose={closeToast} />}

      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="text-xl text-gray-600 font-bold">
            {stats.surveysCompleted}+ surveys and{" "}
            {stats.boreholesDrilledEquipped}+ borehole projects completed across
            Kenya.
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#1B1F5C] sm:text-4xl">
            Your Enquiry Starts With a Conversation
          </h2>
          <p className="mt-4 text-gray-600">
            Every project is different. Tell us about your project, and
            we&apos;ll use the information you provide to understand your
            requirements and recommend the most appropriate next step. Please
            provide as much information as you&apos;re comfortable sharing.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
          {/* Honeypot — visually hidden, not display:none, so basic bots still see & fill it */}
          <div
            className="absolute h-0 w-0 overflow-hidden opacity-0"
            aria-hidden="true"
          >
            <label htmlFor="website">Leave this field blank</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={(e) => update("website", e.target.value)}
            />
          </div>

          <FormField label="Full Name" required error={errors.fullName}>
            <input
              type="text"
              className={inputClasses(errors.fullName)}
              value={formData.fullName}
              onChange={(e) => update("fullName", e.target.value)}
            />
          </FormField>

          <FormField
            label="Project Location (County / Town)"
            required
            error={errors.location}
          >
            <input
              type="text"
              className={inputClasses(errors.location)}
              value={formData.location}
              onChange={(e) => update("location", e.target.value)}
            />
          </FormField>

          <FormField
            label="Do you already have a borehole on this property?"
            required
            error={errors.hasBorehole}
          >
            <div className="flex gap-6">
              {["yes", "no"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="hasBorehole"
                    value={value}
                    checked={formData.hasBorehole === value}
                    onChange={() => handleHasBoreholeChange(value)}
                    className="h-4 w-4 accent-[#0F9E9E]"
                  />
                  {value === "yes" ? "Yes" : "No"}
                </label>
              ))}
            </div>
          </FormField>

          {formData.hasBorehole && (
            <FormField
              label="Type of Project"
              required
              error={errors.projectType}
            >
              <select
                className={inputClasses(errors.projectType)}
                value={formData.projectType}
                onChange={(e) => update("projectType", e.target.value)}
              >
                <option value="">Select an option</option>
                {projectTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </FormField>
          )}

          <FormField
            label="Which best describes your project stage today?"
            required
            error={errors.projectStage}
          >
            <select
              className={inputClasses(errors.projectStage)}
              value={formData.projectStage}
              onChange={(e) => update("projectStage", e.target.value)}
            >
              <option value="">Select an option</option>
              {PROJECT_STAGE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Tell Us About Your Project" error={errors.message}>
            <textarea
              rows={5}
              className={inputClasses(errors.message)}
              placeholder="Tell us what you're planning, where your project is located, any challenges you're experiencing, or the questions you'd like us to help answer."
              value={formData.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </FormField>

          <FormField
            label="Preferred Contact Method"
            required
            error={errors.contactMethod}
          >
            <div className="flex flex-wrap gap-6">
              {["phone", "whatsapp", "email"].map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value={value}
                    checked={formData.contactMethod === value}
                    onChange={() => handleContactMethodChange(value)}
                    className="h-4 w-4 accent-[#0F9E9E]"
                  />
                  {CONTACT_DETAIL_CONFIG[value].label
                    .replace(" Number", "")
                    .replace(" Address", "")}
                </label>
              ))}
            </div>
          </FormField>

          {contactDetailConfig && (
            <FormField
              label={contactDetailConfig.label}
              required
              error={errors.contactDetail}
            >
              <input
                type={formData.contactMethod === "email" ? "email" : "tel"}
                placeholder={contactDetailConfig.placeholder}
                className={inputClasses(errors.contactDetail)}
                value={formData.contactDetail}
                onChange={(e) => update("contactDetail", e.target.value)}
              />
            </FormField>
          )}

          {status === "error" && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              Something went wrong sending your enquiry. Please try again, or
              contact us directly by phone or WhatsApp.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-lg bg-[#0F9E9E] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-[#0d8a8a] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Discuss My Project"}
          </button>
        </form>
      </div>
    </section>
  );
}