import { Link } from "react-router-dom";

const WHATSAPP_URL = `https://wa.me/254721577588?text=${encodeURIComponent(
  "Hello Masterpiece Hydro-Solutions, I've been reading your guides and would like to discuss a borehole project.",
)}`;

const ResourceCTA = () => (
  <section className="bg-linear-to-br from-[#1B1F5C] to-[#0F9E9E] py-16">
    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        Have a Question About Your Borehole Project?
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-200">
        Our guides explain the general principles. Talk to our team about your
        site and we'll help you understand the most appropriate next step.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/contact#enquiry-form"
          className="inline-block rounded-md bg-white px-8 py-3 text-sm font-semibold text-[#1B1F5C] transition-colors duration-200 hover:bg-[#5DD9D9]"
        >
          Discuss Your Project
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md border border-white px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#1B1F5C]"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default ResourceCTA;