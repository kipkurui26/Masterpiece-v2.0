import { useEffect, useState } from "react";
import { SEO } from "../SEO";

const LAST_UPDATED = "September 2026";

// Cycled down the rail like the layers a borehole passes through —
// topsoil, clay, sand, gravel, bedrock, aquifer — repeating as needed.
const STRATA = [
  "#4A3B2A",
  "#9C5B36",
  "#C9AD73",
  "#8B8B7A",
  "#4B5A5D",
  "#1E6E76",
];

const AQUIFER = "#1E6E76";

const sections = [
  {
    id: "who-we-are",
    heading: "1. Who We Are",
    body: [
      "Masterpiece Hydro-Solutions is a water solutions company based in Ruai, Nairobi, Kenya. We provide services including:",
    ],
    list: [
      "Hydrogeological surveys",
      "Borehole drilling",
      "Borehole rehabilitation",
      "Borehole inspection and related services",
      "Plumbing and piping services",
      "Other water solutions within our areas of expertise",
    ],
    after: [
      "Our work is focused on helping property owners, farmers, developers, institutions and other clients make informed decisions about their water needs.",
      "For purposes of applicable data-protection law, Masterpiece Hydro-Solutions is the data controller responsible for your personal information.",
      "Masterpiece Hydro-Solutions — Ruai, Nairobi, Kenya",
      "For questions about this Privacy Policy or how we handle your personal information, please contact us using the details provided at the end of this Policy.",
    ],
  },
  {
    id: "information-we-collect",
    heading: "2. Personal Information We Collect",
    body: [
      "We collect information that is relevant and reasonably necessary for responding to your enquiry, assessing your water requirements, providing our services and managing our business relationship with you.",
      "Depending on how you interact with us, this may include:",
    ],
    list: [
      "Your name",
      "Telephone or mobile number",
      "Email address",
      "Property or project location",
      "Your water requirements",
      "Information about an existing borehole or water system",
      "The service you are interested in",
      "Details contained in an enquiry or message you send to us",
      "Information needed to prepare a quotation or proposal",
      "Information you provide during consultations, site visits or project discussions",
      "Photographs, documents or other information you voluntarily provide to help us understand a project",
      "Information contained in correspondence between you and Masterpiece",
    ],
    after: [
      "We aim to collect only information that is relevant to the purpose for which it is required.",
    ],
  },
  {
    id: "how-we-collect",
    heading: "3. How We Collect Your Information",
    body: ["We may collect personal information when you:"],
    list: [
      "Submit a form on our website",
      "Call or message us",
      "Contact us through WhatsApp",
      "Send us an email",
      "Submit a Facebook or Instagram lead form",
      "Contact us through our social media pages",
      "Request a quotation or service",
      "Communicate with us about an existing project",
      "Provide information during a consultation, site visit or project engagement",
    ],
    after: [
      "We may also receive information from someone contacting us on your behalf where this is appropriate and lawful.",
    ],
  },
  {
    id: "why-we-use",
    heading: "4. Why We Use Your Information",
    body: ["We use personal information for purposes including:"],
    list: [
      "Responding to enquiries",
      "Understanding your water requirements",
      "Advising you on an appropriate next step",
      "Assessing whether our services are suitable for your project",
      "Arranging consultations, site visits or surveys",
      "Preparing quotations and proposals",
      "Providing and managing our services",
      "Communicating with you about your project",
      "Following up on enquiries and service requests",
      "Maintaining appropriate business and client records",
      "Improving our services and customer experience",
      "Operating, maintaining and improving our website",
      "Protecting the security and integrity of our business and systems",
      "Complying with applicable legal and regulatory requirements",
    ],
    after: [
      "Where you have separately agreed to receive marketing communications, we may also use your contact information to send relevant information about our services.",
    ],
  },
  {
    id: "lawful-basis",
    heading: "5. Lawful Basis for Processing Personal Information",
    body: [
      "We process personal information only where there is a lawful basis to do so under applicable Kenyan data-protection law.",
      "Depending on the circumstances, this may include:",
    ],
    list: [
      "Your consent, where consent is required and has been provided",
      "Taking steps at your request before entering into a contract, such as responding to a service enquiry or preparing a quotation",
      "Performing a contract or providing services you have requested",
      "Complying with a legal obligation",
      "A legitimate interest, where permitted by law and where that interest does not override your rights and interests",
    ],
    after: [
      "Where we rely on your consent, you may withdraw it at any time, subject to any legal or contractual consequences that may apply.",
      "Withdrawing consent does not affect the lawfulness of processing carried out before the withdrawal.",
    ],
  },
  {
    id: "sharing",
    heading: "6. Sharing Your Information",
    body: [
      "We do not sell your personal information.",
      "We may share relevant personal information where reasonably necessary to provide our services, operate our business, comply with legal requirements or protect legitimate business interests.",
      "Depending on the circumstances, this may include sharing limited information with:",
    ],
    list: [
      "Employees and authorised members of the Masterpiece team",
      "Hydrogeological, technical or other professional personnel involved in delivering a project",
      "Contractors or project participants where their involvement is necessary to provide an agreed service",
      "Website, hosting, communication, technology or other service providers supporting our business",
      "Professional advisers where reasonably necessary",
      "Government, regulatory or law-enforcement authorities where disclosure is required or permitted by law",
    ],
    after: [
      "We aim to share only information that is relevant to the particular purpose.",
      "Where another organisation processes personal information on our behalf, we will take reasonable steps to ensure that the processing is handled in accordance with applicable data-protection requirements.",
    ],
  },
  {
    id: "international-transfers",
    heading: "7. International Data Transfers",
    body: [
      "Some technology, communication or service providers we use may process personal information outside Kenya.",
      "Where personal information is transferred outside Kenya, Masterpiece will take the measures required under applicable data-protection law, including appropriate safeguards where required.",
      "We will not knowingly transfer personal information in a manner that unlawfully compromises your data-protection rights.",
    ],
  },
  {
    id: "facebook-instagram",
    heading: "8. Facebook, Instagram and Lead Forms",
    body: [
      "Masterpiece may use Facebook and Instagram lead-generation tools to allow prospective clients to contact us.",
      "If you submit your details through one of these forms, we may receive information such as your name, telephone number, email address and information relating to your water needs.",
      "We use this information to respond to your enquiry, assess your requirements and, where appropriate, discuss our services with you.",
      "The platforms through which you submit information may also process your personal information under their own privacy policies and terms.",
      "Providing your details through a Masterpiece lead form does not automatically mean that you have agreed to receive unrelated marketing communications.",
      "Where separate consent is required for marketing, we will seek that consent appropriately.",
    ],
  },
  {
    id: "whatsapp",
    heading: "9. WhatsApp and Other Communication Platforms",
    body: [
      "If you contact Masterpiece through WhatsApp, telephone, email, Facebook, Instagram or another communication platform, your interaction may also be subject to that platform's own privacy practices.",
      "Masterpiece uses information received through these channels for legitimate business purposes, including responding to enquiries, communicating with clients and delivering requested services.",
      "We do not control how third-party platforms process information within their own systems.",
    ],
  },
  {
    id: "cookies",
    heading: "10. Cookies and Website Technologies",
    body: [
      "Our website may use cookies and similar technologies to support website functionality, understand how visitors use the website, improve performance or support analytics and advertising.",
      "The specific technologies used on our website may change as we improve our website and digital services.",
      "Where applicable, we will provide appropriate information about non-essential cookies and obtain consent where required by law.",
    ],
  },
  {
    id: "how-we-protect",
    heading: "11. How We Protect Your Information",
    body: [
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration, disclosure or destruction.",
      "Access to personal information is limited to people who reasonably need it for legitimate business or service-delivery purposes.",
      "However, no website, electronic communication system or method of storing information can be guaranteed to be completely secure.",
      "If a personal-data breach occurs, we will assess and respond to it in accordance with applicable data-protection law, including notifying affected individuals or the relevant regulator where required.",
    ],
  },
  {
    id: "retention",
    heading: "12. How Long We Keep Your Information",
    body: [
      "We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to provide our services, maintain appropriate business records, resolve disputes, comply with legal obligations or protect legitimate business interests.",
      "The appropriate retention period may vary depending on the type of information and the nature of our relationship with you.",
      "When personal information is no longer required, we will take reasonable steps to delete, anonymise or securely dispose of it, subject to any legal or legitimate business requirement to retain it.",
    ],
  },
  {
    id: "your-rights",
    heading: "13. Your Data Protection Rights",
    body: ["Subject to applicable law, you may have the right to:"],
    list: [
      "Be informed about how your personal information is being used",
      "Request access to personal information we hold about you",
      "Request correction of inaccurate or misleading information",
      "Request deletion or erasure of personal information where applicable",
      "Object to certain forms of processing",
      "Request restriction of processing in circumstances provided by law",
      "Request transfer of your personal information where the right to data portability applies",
      "Withdraw consent where processing is based on consent",
    ],
    after: [
      "These rights are provided under Kenya's data-protection framework and are subject to applicable legal conditions and exceptions.",
      "To exercise a right or raise a privacy concern, contact us using the details provided in this Policy.",
      "We may need to verify your identity before responding to certain requests.",
    ],
  },
  {
    id: "complaints",
    heading: "14. Complaints and Privacy Concerns",
    body: [
      "If you have a concern about how Masterpiece has handled your personal information, please contact us first so that we can investigate and address the concern.",
      "You may also lodge a complaint with the Office of the Data Protection Commissioner (ODPC), Kenya's data-protection regulator. The ODPC is responsible for regulating the processing of personal data and protecting the privacy rights of individuals in Kenya.",
    ],
  },
  {
    id: "third-party-sites",
    heading: "15. Third-Party Websites and Services",
    body: [
      "Our website or social media pages may contain links to third-party websites, platforms or services.",
      "These third parties have their own privacy practices and policies. Masterpiece is not responsible for how third parties process personal information within their own systems.",
      "We encourage you to review the privacy information provided by third-party services before submitting personal information to them.",
    ],
  },
  {
    id: "changes",
    heading: "16. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, website, technology, legal requirements or data-processing practices.",
      'When we make material changes, we will update the "Last updated" date at the top of this page.',
      "We encourage you to review this Privacy Policy periodically.",
    ],
  },
];

const contact = {
  id: "contact-us",
  heading: "17. Contact Us",
  intro:
    "If you have a question about this Privacy Policy, want to exercise your data-protection rights, or have a concern about how Masterpiece handles your personal information, please contact us.",
  name: "Masterpiece Hydro-Solutions",
  address: "Ruai, Nairobi, Kenya",
  phone: "0721 577588",
  email: "info@masterpiecehydrosolutions.co.ke",
  website: "masterpiecehydrosolutions.co.ke",
  tagline: "Reliable boreholes begin with informed decisions.",
};

const allIds = [...sections.map((s) => s.id), contact.id];

function PrivacyPolicy() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
      }
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy | Masterpiece Hydro-Solutions"
        description="Learn how Masterpiece Hydro-Solutions collects, uses, stores and protects your personal information in line with Kenya's Data Protection Act, 2019."
        canonical="/privacy-policy"
      />

      <div
        id="top"
        className="bg-[#EEF0EC] text-[#1B2421] font-sans leading-relaxed px-6 py-14 sm:py-20"
      >
        {/* Page introduction */}
        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-2">
            Privacy Policy
          </h1>

          <p className="text-sm text-[#445048] mb-7">
            Last updated: {LAST_UPDATED}
          </p>

          <p className="max-w-3xl text-[1.0625rem] mb-4">
            Masterpiece Hydro-Solutions ("Masterpiece", "we", "us" or "our")
            respects your privacy and is committed to handling your personal
            information responsibly.
          </p>

          <p className="max-w-3xl text-[1.0625rem] mb-4">
            This Privacy Policy explains how we collect, use, store, protect
            and share personal information when you visit our website,
            contact us, request our services, submit an enquiry, or interact
            with us through channels such as Facebook, Instagram, WhatsApp,
            email or telephone.
          </p>

          <p className="max-w-3xl text-[1.0625rem]">
            We handle personal information in accordance with applicable
            Kenyan data-protection law, including the Data Protection Act,
            2019 and applicable regulations.
          </p>
        </header>

        {/* Mobile-only contents disclosure */}
        <details className="lg:hidden max-w-3xl mx-auto mb-10 border border-[#C7CBC2] px-4">
          <summary className="cursor-pointer py-3 font-medium">
            Contents
          </summary>

          <ol className="pl-5 pb-3 text-[0.9375rem] space-y-1.5">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-[#1E6E76] hover:text-[#1B2421]"
                >
                  {section.heading}
                </a>
              </li>
            ))}

            <li>
              <a
                href={`#${contact.id}`}
                className="text-[#1E6E76] hover:text-[#1B2421]"
              >
                {contact.heading}
              </a>
            </li>
          </ol>
        </details>

        {/* Main policy layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[16rem_minmax(0,1fr)] gap-14 items-start">
          {/* Desktop contents rail */}
          <nav
            aria-label="Privacy Policy sections"
            className="hidden lg:block sticky top-8"
          >
            <p className="text-[0.8125rem] text-[#445048] font-medium mb-3">
              Contents
            </p>

            <ol className="border-l-[3px] border-[#C7CBC2]">
              {sections.map((section, i) => {
                const isActive = activeId === section.id;
                const color = STRATA[i % STRATA.length];

                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`block pl-4 py-2 -ml-0.75 border-l-[3px] text-sm transition-colors ${
                        isActive
                          ? "font-semibold text-[#1B2421]"
                          : "text-[#445048] hover:text-[#1B2421]"
                      }`}
                      style={{
                        borderLeftColor: isActive
                          ? color
                          : "transparent",
                        background: isActive
                          ? `linear-gradient(to right, ${color}1f, transparent 70%)`
                          : undefined,
                      }}
                    >
                      {section.heading}
                    </a>
                  </li>
                );
              })}

              <li>
                <a
                  href={`#${contact.id}`}
                  aria-current={
                    activeId === contact.id ? "true" : undefined
                  }
                  className={`block pl-4 py-2 -ml-0.75 border-l-[3px] text-sm transition-colors ${
                    activeId === contact.id
                      ? "font-semibold text-[#1B2421]"
                      : "text-[#445048] hover:text-[#1B2421]"
                  }`}
                  style={{
                    borderLeftColor:
                      activeId === contact.id
                        ? AQUIFER
                        : "transparent",
                    background:
                      activeId === contact.id
                        ? `linear-gradient(to right, ${AQUIFER}1f, transparent 70%)`
                        : undefined,
                  }}
                >
                  {contact.heading}
                </a>
              </li>
            </ol>
          </nav>

          {/* Policy content */}
          <main className="min-w-0 max-w-4xl">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="pb-9 mb-9 border-b border-[#C7CBC2] scroll-mt-8 last:border-b-0"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="font-serif text-xl sm:text-[1.375rem] font-semibold mb-3.5"
                >
                  {section.heading}
                </h2>

                {section.body?.map((paragraph, i) => (
                  <p key={i} className="mb-3.5">
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="list-disc pl-5 mb-3.5 space-y-1.5">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.after?.map((paragraph, i) => (
                  <p key={i} className="mb-3.5">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            {/* Contact */}
            <section
              id={contact.id}
              aria-labelledby={`${contact.id}-heading`}
              className="scroll-mt-8"
            >
              <h2
                id={`${contact.id}-heading`}
                className="font-serif text-xl sm:text-[1.375rem] font-semibold mb-3.5"
              >
                {contact.heading}
              </h2>

              <p className="mb-3.5">{contact.intro}</p>

              <address className="not-italic leading-loose my-4">
                {contact.name}
                <br />

                {contact.address}
                <br />

                Phone:{" "}
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="text-[#1E6E76] hover:text-[#1B2421]"
                >
                  {contact.phone}
                </a>

                <br />

                Email:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[#1E6E76] hover:text-[#1B2421]"
                >
                  {contact.email}
                </a>

                <br />

                Website:{" "}
                <a
                  href={`https://${contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E6E76] hover:text-[#1B2421]"
                >
                  {contact.website}
                </a>
              </address>

              <p className="font-serif italic text-[#445048]">
                {contact.tagline}
              </p>
            </section>
          </main>
        </div>

        {/* Back to top */}
        <a
          href="#top"
          className="block max-w-6xl mx-auto lg:pl-72 mt-14 text-sm text-[#1E6E76] hover:text-[#1B2421] text-center lg:text-left"
        >
          Back to top
        </a>
      </div>
    </>
  );
}

export default PrivacyPolicy;
