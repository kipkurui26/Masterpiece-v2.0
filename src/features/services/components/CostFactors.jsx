import { getTone } from "./sectionTone";

const CostFactors = ({ costFactors, tone = "gray" }) => {
  if (!costFactors) return null;
  const t = getTone(tone);
  const { heading, intro, factors = [] } = costFactors;

  return (
    <section className={t.section}>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${t.heading}`}>{heading}</h2>
        {intro && <p className={`${t.body} mb-10 max-w-2xl`}>{intro}</p>}

        <div className="grid sm:grid-cols-2 gap-6">
          {factors.map((factor, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-brand-navy mb-2">{factor.title}</h3>
              <p className="text-gray-600 text-sm">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostFactors;