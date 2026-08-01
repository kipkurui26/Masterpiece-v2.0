import { Link } from "react-router-dom";

export default function AboutFinalCTA() {
  return (
    <section className="bg-linear-to-br from-[#1B1F5C] to-[#0F9E9E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Planning a Borehole Project?
        </h2>

        <p className="mt-6 text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
          Whether you are exploring the groundwater potential of your land,
          planning a new borehole, improving an existing one, or considering
          the next stage of your water supply project, we are here to help.
        </p>

        <p className="mt-4 text-gray-100 leading-relaxed max-w-2xl mx-auto">
          Talk to our team about your project, and we will help you
          understand the most appropriate next step before you invest in
          the next stage of your project.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-block bg-white text-[#1B1F5C] font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Our Team
          </Link>
          
            <a href="tel:+254721577588"
            className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-colors duration-200"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}