import { getTone } from "./sectionTone";

const SuitabilityCheck = ({ suitabilityCheck, tone = "white" }) => {
  if (!suitabilityCheck) return null;
  const t = getTone(tone);
  const { heading, paragraphs = [] } = suitabilityCheck;

  return (
    <section className={t.section}>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className={`text-2xl lg:text-3xl font-bold mb-6 ${t.heading}`}>{heading}</h2>
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className={t.body}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuitabilityCheck;