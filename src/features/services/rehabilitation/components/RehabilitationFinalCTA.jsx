import CTAButton from "../../shared/CTAButton";
import rehabilitationData from "../data";

const { finalCTA } = rehabilitationData;

const RehabilitationFinalCTA = () => (
  <section className="bg-linear-to-r from-[#1B1F5C] to-[#0F9E9E]">
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">{finalCTA.heading}</h2>
      <p className="text-gray-100 mb-8 leading-relaxed">{finalCTA.body}</p>
      <div className="flex flex-col items-center gap-4">
        <CTAButton {...finalCTA.primaryCTA} variant="primary" />
        {finalCTA.secondaryOptions?.length > 0 && (
          <p className="text-gray-200 text-sm">{finalCTA.secondaryOptions.join(" • ")}</p>
        )}
      </div>
    </div>
  </section>
);

export default RehabilitationFinalCTA;