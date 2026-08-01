const scenarios = [
  "Sometimes that means recommending drilling.",
  "Sometimes it means rehabilitation.",
  "Sometimes it means advising against the option you initially expected.",
];

export default function RecommendationApproach() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1F5C]">
              What Guides Every Recommendation
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Every site presents its own geological conditions, which means
              the right recommendation for your project cannot simply be
              based on what worked somewhere else.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Before recommending your next step, we combine site
              investigations with hydrogeological interpretation,
              information from nearby boreholes, technical standards, and
              practical experience.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              You can expect a recommendation based on what the available
              evidence supports, because making the right decision at the
              right stage helps you avoid unnecessary cost and reduces risk
              throughout the life of your borehole.
            </p>
          </div>

          {/* Scenario cards column */}
          <div className="space-y-4">
            {scenarios.map((scenario) => (
              <div
                key={scenario}
                className="bg-white border-l-4 border-[#0F9E9E] rounded-lg shadow-sm p-5 flex items-start gap-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-6 h-6 text-[#0F9E9E] shrink-0 mt-0.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[#1B1F5C] font-medium leading-relaxed">
                  {scenario}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}