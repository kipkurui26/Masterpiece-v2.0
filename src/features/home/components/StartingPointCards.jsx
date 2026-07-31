import { Link } from "react-router-dom";

const STARTING_POINTS = [
  {
    question: "Planning a New Borehole?",
    description:
      "Start with a Hydrogeological Survey to understand your site's groundwater potential before investing in drilling.",
    cta: "Learn About Hydrogeological Surveys →",
    path: "/services/hydrogeological-surveys",
  },
  {
    question: "Ready to Drill?",
    description:
      "Professional Borehole Drilling carried out to the required technical standards for long-term performance.",
    cta: "Explore Borehole Drilling →",
    path: "/services/borehole-drilling",
  },
  {
    question: "Need to Equip Your Borehole?",
    description:
      "Professional Borehole Equipping designed around your borehole's characteristics and water requirements.",
    cta: "View Borehole Equipping →",
    path: "/services/borehole-equipping",
  },
  {
    question: "Looking to Reduce Operating Costs?",
    description:
      "Borehole Solarisation provides an efficient solar-powered pumping solution designed around your water requirements.",
    cta: "Discover Borehole Solarisation →",
    path: "/services/borehole-solarisation",
  },
  {
    question: "Is Your Existing Borehole Underperforming?",
    description:
      "Borehole Rehabilitation may restore performance without the cost of drilling a replacement borehole.",
    cta: "Learn About Borehole Rehabilitation →",
    path: "/services/borehole-rehabilitation",
  },
];

const StartingPointCards = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#1B1F5C] sm:text-3xl">
            Find the Right Starting Point
          </h2>
          <p className="mt-3 text-base text-gray-600">
            The right place to begin is not always drilling. It depends on your site's
            conditions and your project's requirements.
          </p>
        </div>

        {/* 5 cards: 1 col mobile, 2 col tablet, 3 col desktop (last card spans to center on the extra row) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STARTING_POINTS.map((item) => (
            <div
              key={item.question}
              className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-[#1B1F5C]">{item.question}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
              <Link
                to={item.path}
                className="mt-5 text-sm font-semibold text-[#0F9E9E] transition-colors duration-200 hover:text-[#1B1F5C]"
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartingPointCards;