import rehabilitationData from "../data";

const { process } = rehabilitationData;

const RehabilitationProcess = () => (
  <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-brand-navy">{process.heading}</h2>
      <p className="text-gray-600 mb-10 leading-relaxed">{process.intro}</p>
      <ol className="space-y-5">
        {process.stages.map((stage, i) => (
          <li key={i} className="flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-semibold text-sm">
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

export default RehabilitationProcess;