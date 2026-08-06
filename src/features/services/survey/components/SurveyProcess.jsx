import MediaPlaceholder from "../../shared/MediaPlaceholder";
import DeliverableCard from "../../shared/DeliverableCard";
import surveyData from "../data";

const { process } = surveyData;

const SurveyProcess = () => (
  <section className="bg-gray-50">
    <div className="mx-auto px-4 md:px-12 lg:px-20 py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-brand-navy">
            {process.heading}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">{process.intro}</p>
          <div className="space-y-4">
            {process.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
        <MediaPlaceholder
          type={process.media.type}
          src={process.media.src}
          caption={process.media.caption}
          aspect="wide"
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

export default SurveyProcess;
