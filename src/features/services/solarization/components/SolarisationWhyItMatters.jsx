import solarisationData from "../data";

const { whyItMatters } = solarisationData;

const SolarisationWhyItMatters = () => (
  <section className="bg-white">
    <div className="max-w-3xl mx-auto px-6 py-16 lg:py-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-brand-navy">{whyItMatters.heading}</h2>
      <div className="space-y-4">
        {whyItMatters.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
        ))}
      </div>
    </div>
  </section>
);

export default SolarisationWhyItMatters;