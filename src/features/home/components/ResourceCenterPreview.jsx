import { Link } from "react-router-dom";

const POPULAR_RESOURCES = [
  { name: "Hydrogeological Surveys", path: "/resource-centre/hydrogeological-surveys" },
  { name: "Borehole Drilling", path: "/resource-centre/borehole-drilling" },
  { name: "Borehole Costs", path: "/resource-centre/borehole-costs" },
  { name: "Test Pumping", path: "/resource-centre/test-pumping" },
  { name: "Water Quality Analysis", path: "/resource-centre/water-quality-analysis" },
  { name: "Borehole Rehabilitation", path: "/resource-centre/borehole-rehabilitation" },
  { name: "Borehole Solarisation", path: "/resource-centre/borehole-solarisation" },
];

const ResourceCentrePreview = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#1B1F5C] sm:text-3xl">Learn Before You Invest</h2>
        <p className="mt-3 text-base text-gray-600">
          Make informed decisions before investing in your borehole project. Explore practical
          guides covering every stage of groundwater development, from hydrogeological surveys
          and drilling to rehabilitation, solarisation, and long-term borehole management.
        </p>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#0F9E9E]">
          Popular Resources
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {POPULAR_RESOURCES.map((resource) => (
            <Link
              key={resource.name}
              to={resource.path}
              className="rounded-full border border-[#5DD9D9] px-4 py-2 text-sm font-medium text-[#1B1F5C] transition-colors duration-200 hover:bg-[#5DD9D9]/20"
            >
              {resource.name}
            </Link>
          ))}
        </div>

        <Link
          to="/resource-centre"
          className="mt-8 inline-block text-sm font-semibold text-[#0F9E9E] transition-colors duration-200 hover:text-[#1B1F5C]"
        >
          Visit the Resource Centre →
        </Link>
      </div>
    </section>
  );
};

export default ResourceCentrePreview;