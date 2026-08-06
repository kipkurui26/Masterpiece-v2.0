import RehabilitationHero from "./components/RehabilitationHero";
import RehabilitationWhyItMatters from "./components/RehabilitationWhyItMatters";
import RehabilitationSuitabilityCheck from "./components/RehabilitationSuitabilityCheck";
import RehabilitationProcess from "./components/RehabilitationProcess";
import RehabilitationCostFactors from "./components/RehabilitationCostFactors";
import RehabilitationFAQ from "./components/RehabilitationFAQ";
import RehabilitationFinalCTA from "./components/RehabilitationFinalCTA";
import MediaGallery from "../shared/MediaGallery";
import rehabilitationData from "./data";

const Rehabilitation = () => (
  <>
    <RehabilitationHero />
    <RehabilitationWhyItMatters />
    <RehabilitationSuitabilityCheck />
    <RehabilitationProcess />
    <RehabilitationCostFactors />
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <MediaGallery items={rehabilitationData.gallery} />
      </div>
    </section>
    <RehabilitationFAQ />
    <RehabilitationFinalCTA />
  </>
);

export default Rehabilitation;