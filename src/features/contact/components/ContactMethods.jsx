const PHONE_DISPLAY = "0721 577 588";
const PHONE_TEL = "+254721577588";
const WHATSAPP_LINK = "https://wa.me/254721577588";
const SALES_EMAIL = "sales@masterpiecehydrosolutions.co.ke";
const INFO_EMAIL = "info@masterpiecehydrosolutions.co.ke";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
      <path
        d="M3 5c0-1.1.9-2 2-2h2.28a1 1 0 0 1 .98.8L9 7.5a1 1 0 0 1-.27.95L7.1 9.9a12.05 12.05 0 0 0 6 6l1.45-1.63a1 1 0 0 1 .95-.27l3.7.74a1 1 0 0 1 .8.98V19a2 2 0 0 1-2 2h-1C10.4 21 3 13.6 3 5Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11a15.6 15.6 0 0 1-1.62-.6c-2.86-1.24-4.73-4.14-4.87-4.33-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.65.5.24.57.82 1.98.89 2.12.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.28.75 1.24 1.61 2.01 1.11 1 2.04 1.31 2.32 1.46.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.64-.14.26.09 1.66.79 1.94.93.28.14.47.21.53.33.07.12.07.68-.17 1.35Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MethodCard({ icon, title, description, children }) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F9E9E]">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-semibold text-[#1B1F5C]">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function ContactMethods() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#1B1F5C] sm:text-4xl">
            Choose the Best Way to Contact Us
          </h2>
          <p className="mt-4 text-gray-600">
            Choose the contact method that best suits your enquiry.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <MethodCard
            icon={<PhoneIcon />}
            title="I Need a Quick Answer"
            description="If you'd like to speak directly with our team about your project or ask a question, give us a call."
          >
            
              <a href={`tel:${PHONE_TEL}`}
              className="text-lg font-semibold text-[#0F9E9E] hover:text-[#0d8a8a]"
            >
              {PHONE_DISPLAY}
            </a>
          </MethodCard>

          <MethodCard
            icon={<WhatsAppIcon />}
            title="I Want to Share Information About My Project"
            description="If you'd like to send your location, photographs, existing borehole reports, or other documents before we speak, WhatsApp is often the quickest option."
          >
            
              <a href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-[#0F9E9E] hover:text-[#0d8a8a]"
            >
              {PHONE_DISPLAY}
            </a>
          </MethodCard>

          <MethodCard
            icon={<MailIcon />}
            title="I Prefer Email"
            description="If you'd rather communicate by email, send us your enquiry and we'll respond as soon as possible."
          >
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Project enquiries
                </p>
                
                  <a href={`mailto:${SALES_EMAIL}`}
                  className="break-all text-sm font-semibold text-[#0F9E9E] hover:text-[#0d8a8a]"
                >
                  {SALES_EMAIL}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  General enquiries
                </p>
                
                  <a href={`mailto:${INFO_EMAIL}`}
                  className="break-all text-sm font-semibold text-[#0F9E9E] hover:text-[#0d8a8a]"
                >
                  {INFO_EMAIL}
                </a>
              </div>
            </div>
          </MethodCard>
        </div>
      </div>
    </section>
  );
}