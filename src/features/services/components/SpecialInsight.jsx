import { getTone } from "./sectionTone";

const SpecialInsight = ({ specialInsight, tone = "white" }) => {
  if (!specialInsight) return null;
  const t = getTone(tone);
  const { heading, paragraphs = [], list } = specialInsight;

  return (
    <section className={t.section}>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className={`text-2xl lg:text-3xl font-bold mb-6 ${t.heading}`}>{heading}</h2>
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className={t.body}>{p}</p>
          ))}
        </div>

        {list && (
          <ul className="mt-6 space-y-2">
            {list.map((item, i) => (
              <li key={i} className="flex gap-2 text-gray-600">
                <span className="text-brand-teal">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default SpecialInsight;