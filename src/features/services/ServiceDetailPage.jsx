import ServiceHero from "./components/ServiceHero";
import WhyItMatters from "./components/WhyItMatters";
import ProcessSection from "./components/ProcessSection";
import SuitabilityCheck from "./components/SuitabilityCheck";
import CostFactors from "./components/CostFactors";
import SpecialInsight from "./components/SpecialInsight";
import TrustStatsBand from "./components/TrustStatsBand";
import ServiceFAQ from "./components/ServiceFAQ";
import ServiceFinalCTA from "./components/ServiceFinalCTA";

const ServiceDetailPage = ({ content }) => {
  if (!content) return null;

  // Alternate white/gray-50 across the body sections that are actually present.
  let toneToggle = 0;
  const nextTone = () => (toneToggle++ % 2 === 0 ? "white" : "gray");

  return (
    <>
      <ServiceHero hero={content.hero} />
      <WhyItMatters whyItMatters={content.whyItMatters} tone={nextTone()} />
      <ProcessSection process={content.process} tone={nextTone()} />
      <SuitabilityCheck suitabilityCheck={content.suitabilityCheck} tone={nextTone()} />
      <CostFactors costFactors={content.costFactors} tone={nextTone()} />
      <SpecialInsight specialInsight={content.specialInsight} tone={nextTone()} />
      <TrustStatsBand trustStats={content.trustStats} />
      <ServiceFAQ faq={content.faq} tone={nextTone()} />
      <ServiceFinalCTA finalCTA={content.finalCTA} />
    </>
  );
};

export default ServiceDetailPage;