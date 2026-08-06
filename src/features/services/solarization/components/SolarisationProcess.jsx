import solarisationData from "../data";

const { process } = solarisationData;

const SolarisationProcess = () => (
  <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-brand-navy">{process.heading}</h2>
      <p className="text-gray-600 mb-10 leading-relaxed">{process.intro}</p>
      <ol className="space-y-6">
        {process.stages.map((stage, i) => (
          <li key={i} className="flex gap-4">
            <span className="shrink-0 w-9 h-9 rounded-full bg-[#1B1F5C] text-white flex items-center justify-center font-semibold">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold text-brand-navy mb-1">{stage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default SolarisationProcess;