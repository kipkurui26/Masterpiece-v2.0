import surveyData from "../data";

const { trustStats } = surveyData;

const SurveyTrustStats = () => (
  <section className="bg-brand-navy">
    <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
      {trustStats.map((stat, i) => (
        <div key={i}>
          <p className="text-3xl font-bold text-brand-teal-light mb-1">{stat.value}</p>
          <p className="text-gray-500 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SurveyTrustStats;