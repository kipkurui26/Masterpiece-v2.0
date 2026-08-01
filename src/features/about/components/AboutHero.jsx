import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="bg-[#1B1F5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        <span className="inline-block text-[#5DD9D9] font-semibold tracking-wide uppercase text-sm mb-4">
          About Masterpiece Hydro-Solutions
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          Every Successful Borehole Begins with Understanding
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Your borehole's long-term performance depends on decisions made long
          before drilling starts. Understanding your site's geology and
          groundwater potential provides the foundation for every decision
          that follows.
        </p>

        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Whether you are planning a new borehole, improving an existing one,
          or developing a complete groundwater supply system, our role is to
          help you make informed decisions based on evidence rather than
          assumptions.
        </p>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-block bg-[#0F9E9E] hover:bg-[#5DD9D9] text-white hover:text-[#1B1F5C] font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}