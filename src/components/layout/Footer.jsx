import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resource Centre", path: "/resource-centre" },
  { name: "Contact Us", path: "/contact" },
];

const SERVICE_LINKS = [
  {
    name: "Hydrogeological Surveys",
    path: "/services/hydrogeological-surveys",
  },
  { name: "Borehole Drilling", path: "/services/borehole-drilling" },
  { name: "Borehole Equipping", path: "/services/borehole-equipping" },
  { name: "Borehole Solarisation", path: "/services/borehole-solarisation" },
  {
    name: "Borehole Rehabilitation",
    path: "/services/borehole-rehabilitation",
  },
];

const AREAS_SERVED = [
  "Nairobi",
  "Kajiado",
  "Machakos",
  "Makueni",
  "Narok",
  "Nakuru",
  "Kiambu",
  "Kisumu",
  "Bomet",
];

const CONTACT = {
  phone: "0721577588",
  whatsapp: "0721577588",
  email: "sales@masterpiecehydrosolutions.co.ke",
  facebook: "https://facebook.com/masterpiecehydrosolutions", // placeholder — swap for real handle
  website: "https://masterpiecehydrosolutions.co.ke", // placeholder — confirm live domain
};

const PhoneIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.05c-1.44 0-2.85-.39-4.08-1.11l-.29-.17-3.02.75.8-2.94-.19-.3a8.13 8.13 0 0 1-1.25-4.37c0-4.49 3.66-8.15 8.15-8.15 4.49 0 8.15 3.66 8.15 8.15 0 4.5-3.66 8.14-8.27 8.14zm4.47-6.11c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
  </svg>
);

const MailIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 22v-8.5h2.85l.43-3.31H13.5V8.05c0-.96.27-1.61 1.64-1.61h1.75V3.48A23.6 23.6 0 0 0 14.35 3.3c-2.53 0-4.26 1.54-4.26 4.37v2.44H7.25v3.31h2.84V22z" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const FooterHeading = ({ children }) => (
  <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#5DD9D9]">
    {children}
  </h3>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1F5C] text-gray-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">
            Masterpiece Hydro-Solutions
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            Professional groundwater and borehole solutions across Kenya.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Masterpiece Hydro-Solutions on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-500 text-gray-200 transition-colors duration-200 hover:border-[#5DD9D9] hover:text-[#5DD9D9]"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>

            <a
              href={CONTACT.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Masterpiece Hydro-Solutions website"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-500 text-gray-200 transition-colors duration-200 hover:border-[#5DD9D9] hover:text-[#5DD9D9]"
            >
              <GlobeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-[#5DD9D9]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Our Services</FooterHeading>
          <ul className="space-y-2">
            {SERVICE_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-[#5DD9D9]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Areas We Serve</FooterHeading>
          <p className="text-sm leading-relaxed text-gray-300">
            {AREAS_SERVED.join(", ")}, and other areas across Kenya.
          </p>

          <FooterHeading>
            <span className="mt-6 block">Contact</span>
          </FooterHeading>
          <ul className="space-y-2">
            <li>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors duration-200 hover:text-[#5DD9D9]"
              >
                <PhoneIcon className="h-4 w-4 shrink-0" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/254${CONTACT.whatsapp.replace(/^0/, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors duration-200 hover:text-[#5DD9D9]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                WhatsApp {CONTACT.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors duration-200 hover:text-[#5DD9D9]"
              >
                <MailIcon className="h-4 w-4 shrink-0" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-gray-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Masterpiece Hydro-Solutions. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link
              to="/privacy-policy"
              className="transition-colors duration-200 hover:text-[#5DD9D9]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              className="transition-colors duration-200 hover:text-[#5DD9D9]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
