const stats = [
  { value: "455+", label: "Hydrogeological Surveys Completed" },
  { value: "80+", label: "Boreholes Drilled & Equipped" },
  { value: "36+", label: "Boreholes Rehabilitated" },
  { value: "40+", label: "Borehole Inspections Conducted" },
];

export default function AboutStats() {
  return (
    <section className="bg-[#1B1F5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Experience Across Different Groundwater Conditions
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Every recommendation we make is informed by experience gained
            across hundreds of groundwater projects carried out in
            different geological settings across Kenya.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/5 border border-white/10 rounded-xl px-4 py-8"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#5DD9D9]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-300 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-gray-300 italic">
            Experience does not replace evidence. It helps us interpret the
            evidence your site provides.
          </p>
        </div>
      </div>
    </section>
  );
}