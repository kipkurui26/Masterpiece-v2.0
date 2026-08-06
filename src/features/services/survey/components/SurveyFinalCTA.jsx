import CTAButton from "../../shared/CTAButton";
import surveyData from "../data";

const { finalCTA } = surveyData;

const SurveyFinalCTA = () => (
  <section className="bg-linear-to-r from-[#1B1F5C] to-[#0F9E9E]">
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">{finalCTA.heading}</h2>
      <p className="text-gray-100 mb-8 leading-relaxed">{finalCTA.body}</p>
      <CTAButton {...finalCTA.primaryCTA} variant="primary" />
      {finalCTA.reassurance && (
        <p className="text-gray-200 text-sm mt-6 max-w-xl mx-auto leading-relaxed">{finalCTA.reassurance}</p>
      )}
    </div>
  </section>
);

export default SurveyFinalCTA;