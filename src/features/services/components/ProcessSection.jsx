import { getTone } from "./sectionTone";
import MediaPlaceholder from "./MediaPlaceholder";

const ProcessSection = ({ process, tone = "gray" }) => {
  if (!process) return null;
  const t = getTone(tone);
  const { heading, intro, style = "narrative", paragraphs = [], stages = [], deliverable, media } = process;

  return (
    <section className={t.section}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className={`text-2xl lg:text-3xl font-bold mb-4 ${t.heading}`}>{heading}</h2>
        {intro && <p className={`${t.body} mb-8`}>{intro}</p>}

        {style === "stages" ? (
          <ol className="space-y-6">
            {stages.map((stage, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-brand-teal text-white flex items-center justify-center font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-navy mb-1">{stage.title}</h3>
                  <p className={t.body}>{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className={t.body}>{p}</p>
            ))}
          </div>
        )}

        {media && (
          <MediaPlaceholder
            type={media.type || "image"}
            src={media.src}
            caption={media.caption}
            aspect="wide"
            className="mt-10"
          />
        )}

        {deliverable && (
          <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-brand-navy mb-3">{deliverable.heading}</h3>
            <ul className="space-y-2">
              {deliverable.items.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-600">
                  <span className="text-brand-teal">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProcessSection;