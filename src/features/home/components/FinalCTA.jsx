import { Link } from "react-router-dom";

const CONTACT = {
  phone: "0721577588",
  whatsapp: "0721577588",
  email: "sales@masterpiecehydrosolutions.co.ke",
};

const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.05c-1.44 0-2.85-.39-4.08-1.11l-.29-.17-3.02.75.8-2.94-.19-.3a8.13 8.13 0 0 1-1.25-4.37c0-4.49 3.66-8.15 8.15-8.15 4.49 0 8.15 3.66 8.15 8.15 0 4.5-3.66 8.14-8.27 8.14zm4.47-6.11c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
  </svg>
);

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const FinalCTA = () => {
  return (
    <section className="bg-linear-to-br from-[#1B1F5C] to-[#0F9E9E] py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to Start Your Borehole Project?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-200">
          Whether you are exploring your site's groundwater potential, planning a new borehole,
          improving an existing one, or considering the next stage of your water supply project,
          we're here to help.
        </p>
        <p className="mt-2 text-base leading-relaxed text-gray-300">
          Talk to our team about your project, and we'll help you understand the most
          appropriate next step before you invest in the next stage of your project.
        </p>

        {/* Primary CTA */}
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-semibold text-[#1B1F5C] transition-colors duration-200 hover:bg-[#5DD9D9]"
        >
          Discuss Your Project
        </Link>

        {/* Secondary contact options */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          
            <a href={`tel:${CONTACT.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-gray-200 transition-colors duration-200 hover:text-[#5DD9D9]"
          >
            <PhoneIcon className="h-4 w-4" />
            Call {CONTACT.phone}
          </a>
          
            <a href={`https://wa.me/254${CONTACT.whatsapp.replace(/^0/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-200 transition-colors duration-200 hover:text-[#5DD9D9]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          
            <a href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-sm font-medium text-gray-200 transition-colors duration-200 hover:text-[#5DD9D9]"
          >
            <MailIcon className="h-4 w-4" />
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;