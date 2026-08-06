import solarisationData from "../data";

const { costFactors } = solarisationData;

const SolarisationCostFactors = () => (
  <section className="bg-gray-50">
    <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-brand-navy text-center">{costFactors.heading}</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-center">{costFactors.intro}</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {costFactors.factors.map((factor, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-brand-navy mb-2">{factor.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{factor.description}</p>
          </div>
        ))}
      </div>
      {costFactors.closing && (
        <p className="mx-auto text-gray-600 mt-10 max-w-2xl leading-relaxed text-center">{costFactors.closing}</p>
      )}
    </div>
  </section>
);

export default SolarisationCostFactors;