import { useEffect, useState } from "react";
import { SEO } from "../SEO";

const LAST_UPDATED = "September 2026";

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
    id: "acceptance",
    heading: "1. Acceptance of These Terms",
    body: [
      "Welcome to the Masterpiece Hydro-Solutions website. These Terms of Use govern your access to and use of our website, content, online forms and related digital services.",
      "By accessing or using this website, you agree to use it responsibly and in accordance with these Terms of Use and applicable law.",
      "If you do not agree with these Terms, please do not use the website.",
    ],
  },
  {
    id: "about-us",
    heading: "2. About Masterpiece Hydro-Solutions",
    body: [
      "Masterpiece Hydro-Solutions is a water solutions company based in Ruai, Nairobi, Kenya.",
      "Our services may include hydrogeological surveys, borehole drilling, borehole rehabilitation, borehole inspection and related services, plumbing and piping services, and other water solutions within our areas of expertise.",
      "Information presented on this website is intended to help visitors understand our services and make informed enquiries. It does not by itself create a contract for the provision of services.",
    ],
  },
  {
    id: "website-use",
    heading: "3. Permitted Use of the Website",
    body: [
      "You may use this website for lawful purposes, including learning about our company and services, contacting us, requesting information and making legitimate service enquiries.",
      "You agree not to:",
    ],
    list: [
      "Use the website for any unlawful, fraudulent or malicious purpose",
      "Attempt to gain unauthorised access to the website or its systems",
      "Interfere with the security, availability or operation of the website",
      "Introduce malicious code, viruses or other harmful technologies",
      "Use automated systems to scrape, copy or collect website content without permission",
      "Misrepresent your identity or provide information that you know to be false or misleading",
      "Use our website or content in a way that infringes another person's rights",
      "Attempt to circumvent technical or security measures used to protect the website",
    ],
    after: [
      "We reserve the right to restrict or terminate access to the website where we reasonably believe that these Terms or applicable law have been violated.",
    ],
  },
  {
    id: "service-information",
    heading: "4. Information About Our Services",
    body: [
      "We make reasonable efforts to ensure that descriptions of our services are accurate and useful. However, information on the website is general information and may not describe every condition, limitation or requirement applicable to a particular project.",
      "Water availability, groundwater conditions, drilling requirements, project costs, site conditions and technical recommendations can vary significantly from one location to another.",
      "A website description, general statement or example should therefore not be treated as a guarantee that a particular result, water yield, project outcome or service cost will apply to your property.",
      "Where appropriate, our recommendations may depend on site-specific assessments, surveys, inspections, consultations or other technical information.",
    ],
  },
  {
    id: "enquiries",
    heading: "5. Enquiries and Requests for Services",
    body: [
      "Submitting an enquiry through our website, email, telephone, WhatsApp or social media channels does not automatically create a contract between you and Masterpiece Hydro-Solutions.",
      "We may contact you to clarify your requirements, discuss the proposed scope of work, arrange a site visit or provide further information.",
      "Before commencing services, we may provide a quotation, proposal, scope of work, agreement or other documentation setting out the applicable terms for the particular project.",
      "A service engagement will only become binding in accordance with the applicable agreement or other arrangement accepted by the parties.",
    ],
  },
  {
    id: "quotations",
    heading: "6. Quotations, Estimates and Project Scope",
    body: [
      "Where we provide a quotation or estimate, it will be based on the information reasonably available to us at the time it is prepared.",
      "The final scope, price, timing and other project conditions may depend on factors including site conditions, access, materials, equipment, regulatory requirements, client instructions and changes requested during the project.",
      "Where a quotation or estimate is subject to specific conditions, assumptions, exclusions or an expiry period, those details will form part of the applicable quotation or project documentation.",
      "Additional or different work requested by a client may require a revised quotation or agreement before the additional work is undertaken.",
    ],
  },
  {
    id: "payments",
    heading: "7. Payments and Commercial Terms",
    body: [
      "Where you engage Masterpiece Hydro-Solutions for services, applicable payment terms, deposits, balances, cancellation provisions and other commercial conditions will be communicated as part of the relevant quotation, agreement or project documentation.",
      "You are responsible for making payments in accordance with the agreed terms.",
      "Where a project requires third-party permits, fees, materials, specialist services or other costs, responsibility for those costs will be determined by the applicable quotation or agreement.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "8. Intellectual Property",
    body: [
      "Unless otherwise stated, the content published on this website, including text, logos, branding, graphics, photographs, illustrations, layout and other materials, belongs to Masterpiece Hydro-Solutions or is used with permission.",
      "You may view and use the website for your personal or legitimate business information needs.",
      "You may not reproduce, modify, distribute, publish, sell, licence or commercially exploit our website content without our prior written permission, except where permitted by applicable law.",
      "Nothing in these Terms transfers ownership of our intellectual property to you.",
    ],
  },
  {
    id: "user-submissions",
    heading: "9. Information You Submit to Us",
    body: [
      "When you submit information through our website or communicate with us through other channels, you are responsible for ensuring that the information you provide is accurate and that you have the right to provide it.",
      "You should not submit confidential information belonging to another person unless you are authorised to do so.",
      "We will handle personal information in accordance with our Privacy Policy and applicable data-protection law.",
      "Submitting information to us does not give you ownership of our systems, website content or intellectual property.",
    ],
  },
  {
    id: "privacy",
    heading: "10. Privacy and Personal Information",
    body: [
      "Our collection and use of personal information is explained in our Privacy Policy.",
      "We may collect information such as your name, telephone number, email address, property or project location, water requirements and other information necessary to respond to your enquiry or provide requested services.",
      "By using our website or submitting information to us, you acknowledge that your information may be processed in accordance with our Privacy Policy and applicable Kenyan data-protection law.",
      "Our Privacy Policy forms part of the information governing your use of this website.",
    ],
  },
  {
    id: "third-party-services",
    heading: "11. Third-Party Websites and Services",
    body: [
      "Our website may contain links, integrations or references to third-party websites, platforms or services, including social-media and communication platforms.",
      "Third-party services operate independently from Masterpiece Hydro-Solutions and may have their own terms, privacy policies and practices.",
      "We do not control third-party websites or guarantee the availability, accuracy, security or content of services operated by third parties.",
      "Your use of a third-party service is subject to the terms and policies of that third party.",
    ],
  },
  {
    id: "website-availability",
    heading: "12. Website Availability and Accuracy",
    body: [
      "We aim to keep our website available and information reasonably accurate, but we do not guarantee that the website will always be available, uninterrupted, error-free or completely up to date.",
      "We may modify, suspend, remove or discontinue parts of the website or its functionality without prior notice where reasonably necessary.",
      "We may also correct errors, update information or make changes to reflect changes in our services, technology or business operations.",
    ],
  },
  {
    id: "technical-advice",
    heading: "13. Technical Information and Professional Advice",
    body: [
      "Information published on this website is general in nature and should not be treated as a substitute for a site-specific technical assessment or professional advice.",
      "Groundwater conditions, geological characteristics, borehole performance and water-system requirements vary by location and project.",
      "Where a project requires technical assessment, our recommendations may be based on information obtained through appropriate surveys, inspections, consultations, measurements or other professional processes.",
      "You should consider the circumstances of your particular property or project before making significant technical or financial decisions.",
    ],
  },
  {
    id: "disclaimers",
    heading: "14. Disclaimers",
    body: [
      "To the extent permitted by applicable law, information on this website is provided for general informational purposes and without guarantees that every piece of information will be complete, current or suitable for every particular purpose.",
      "We do not guarantee that using the website will produce a particular commercial, technical, financial or project outcome.",
      "Nothing in these Terms is intended to exclude or limit any consumer right, warranty, liability or protection that cannot lawfully be excluded or limited under applicable law.",
    ],
  },
  {
    id: "liability",
    heading: "15. Limitation of Liability",
    body: [
      "To the extent permitted by applicable law, Masterpiece Hydro-Solutions will not be responsible for losses arising solely from your inability to access the website, reliance on general website information, interruptions caused by events outside our reasonable control, or your use of third-party websites or services.",
      "This section does not exclude or limit liability where doing so would be unlawful, including liability that cannot legally be excluded or limited under applicable Kenyan law.",
      "Where services are provided under a separate agreement, the rights, responsibilities and liabilities of the parties will be governed by that agreement in addition to any applicable law.",
    ],
  },
  {
    id: "indemnity",
    heading: "16. Your Responsibility",
    body: [
      "You are responsible for your use of the website and for complying with these Terms and applicable law.",
      "Where permitted by law, you may be responsible for losses or reasonable costs incurred by Masterpiece Hydro-Solutions as a result of your unlawful use of the website, deliberate misuse of our systems, infringement of our intellectual property rights, or violation of these Terms.",
    ],
  },
  {
    id: "changes",
    heading: "17. Changes to These Terms",
    body: [
      "We may update these Terms of Use from time to time to reflect changes in our website, services, business practices, technology or legal requirements.",
      'When we make changes, we will update the "Last updated" date at the top of this page.',
      "Your continued use of the website after updated Terms are published means that you will be subject to the revised Terms from the effective date, to the extent permitted by applicable law.",
      "We encourage you to review these Terms periodically.",
    ],
  },
  {
    id: "governing-law",
    heading: "18. Governing Law",
    body: [
      "These Terms of Use are governed by the laws of Kenya, except where applicable law requires otherwise.",
      "Any dispute relating to the use of this website will be handled in accordance with applicable Kenyan law and any applicable dispute-resolution process.",
      "Nothing in these Terms prevents a consumer from exercising rights or pursuing remedies available under applicable law.",
    ],
  },
  {
    id: "severability",
    heading: "19. Severability",
    body: [
      "If any provision of these Terms is found to be invalid, unlawful or unenforceable, that provision will be interpreted or modified to the extent necessary to make it enforceable where legally possible.",
      "The remaining provisions will continue to apply to the extent permitted by law.",
    ],
  },
  {
    id: "entire-understanding",
    heading: "20. Entire Understanding",
    body: [
      "These Terms govern your general use of the Masterpiece Hydro-Solutions website.",
      "Specific services may be governed by separate quotations, agreements, scopes of work or other project documentation. Where there is a conflict between these website Terms and a specific written agreement for services, the applicable service agreement will govern the relevant project matter.",
    ],
  },
];

const contact = {
  id: "contact-us",
  heading: "21. Contact Us",
  intro:
    "If you have a question about these Terms of Use, our website, our services or any information published on this website, please contact us.",
  name: "Masterpiece Hydro-Solutions",
  address: "Ruai, Nairobi, Kenya",
  phone: "0721 577588",
  email: "info@masterpiecehydrosolutions.co.ke",
  website: "masterpiecehydrosolutions.co.ke",
  tagline: "Reliable boreholes begin with informed decisions.",
};

const allIds = [...sections.map((section) => section.id), contact.id];

function TermsOfUse() {
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
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Terms of Use | Masterpiece Hydro-Solutions"
        description="Read the Terms of Use governing access to and use of the Masterpiece Hydro-Solutions website and related digital services."
        canonical="/terms-of-use"
      />

      <div
        id="top"
        className="bg-[#EEF0EC] text-[#1B2421] font-sans leading-relaxed px-6 py-14 sm:py-20"
      >
        {/* Page introduction */}
        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-2">
            Terms of Use
          </h1>

          <p className="text-sm text-[#445048] mb-7">
            Last updated: {LAST_UPDATED}
          </p>

          <p className="max-w-3xl text-[1.0625rem] mb-4">
            These Terms of Use explain the rules that apply when you access
            or use the Masterpiece Hydro-Solutions website and related
            digital services.
          </p>

          <p className="max-w-3xl text-[1.0625rem] mb-4">
            By using this website, you agree to use it responsibly and in
            accordance with these Terms, our Privacy Policy and applicable
            law.
          </p>

          <p className="max-w-3xl text-[1.0625rem]">
            These Terms are intended to explain the general conditions
            governing use of our website. Specific projects and services may
            be subject to separate quotations, agreements or scopes of work.
          </p>
        </header>

        {/* Mobile contents */}
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

        {/* Main layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[16rem_minmax(0,1fr)] gap-14 items-start">
          {/* Desktop contents rail */}
          <nav
            aria-label="Terms of Use sections"
            className="hidden lg:block sticky top-8"
          >
            <p className="text-[0.8125rem] text-[#445048] font-medium mb-3">
              Contents
            </p>

            <ol className="border-l-[3px] border-[#C7CBC2]">
              {sections.map((section, index) => {
                const isActive = activeId === section.id;
                const color = STRATA[index % STRATA.length];

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

          {/* Terms content */}
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

                {section.body?.map((paragraph, index) => (
                  <p key={index} className="mb-3.5">
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="list-disc pl-5 mb-3.5 space-y-1.5">
                    {section.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.after?.map((paragraph, index) => (
                  <p key={index} className="mb-3.5">
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
          className="block max-w-6xl mx-auto lg:pl-[18rem] mt-14 text-sm text-[#1E6E76] hover:text-[#1B2421] text-center lg:text-left"
        >
          Back to top
        </a>
      </div>
    </>
  );
}

export default TermsOfUse;
