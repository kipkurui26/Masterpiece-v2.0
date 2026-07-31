import { Link } from "react-router-dom";

const ApproachSection = () => {
  return (
    <section className="bg-[#1B1F5C] py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Better Decisions Lead to Better Boreholes
        </h2>

        <p className="mt-5 text-base leading-relaxed text-gray-200 sm:text-lg">
          Many borehole projects begin with drilling. We believe they should begin with
          understanding.
        </p>

        <p className="mt-4 text-base leading-relaxed text-gray-300">
          Understanding the geology, groundwater potential, and the available evidence before
          drilling reduces uncertainty and helps every decision that follows be made with
          greater confidence. That principle shapes every recommendation we make, whether your
          project involves drilling a new borehole, rehabilitating an existing one, selecting
          pumping equipment, or developing a complete groundwater supply system.
        </p>

        <Link
          to="/about"
          className="mt-7 inline-block text-sm font-semibold text-[#5DD9D9] transition-colors duration-200 hover:text-white"
        >
          Learn About Our Approach →
        </Link>
      </div>
    </section>
  );
};

export default ApproachSection;