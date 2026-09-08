import DeliverableCard from "../../shared/DeliverableCard";
import MediaPlaceholder from "../../shared/MediaPlaceholder";
import drillingData from "../data";

const { process } = drillingData;

const DrillingProcess = () => (
  <section className="bg-gray-50">
    <div className="mx-auto px-4 md:px-12 lg:px-20 py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-brand-navy">{process.heading}</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">{process.intro}</p>
          {/* Numbered steps instead of prose paragraphs — matches "process → numbered steps" per SEO scannability audit */}
          <ol className="space-y-5">
            {process.stages.map((stage, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#1B1F5C] text-white flex items-center justify-center font-semibold text-sm">
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
        <MediaPlaceholder
          type={process.media.type}
          src={process.media.src}
          alt={process.media.alt}
          title={process.media.title}
          caption={process.media.caption}
          aspect="wide"
          objectFit="contain"
          className="lg:sticky lg:top-24"
        />
      </div>
      <DeliverableCard
        heading={process.deliverable.heading}
        items={process.deliverable.items}
        supportingLine={process.deliverable.supportingLine}
      />
    </div>
  </section>
);

export default DrillingProcess;