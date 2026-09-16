import RehabilitationHero from "./components/RehabilitationHero";
import RehabilitationWhyItMatters from "./components/RehabilitationWhyItMatters";
import RehabilitationSuitabilityCheck from "./components/RehabilitationSuitabilityCheck";
import RehabilitationProcess from "./components/RehabilitationProcess";
import RehabilitationCostFactors from "./components/RehabilitationCostFactors";
import RehabilitationFAQ from "./components/RehabilitationFAQ";
import RehabilitationFinalCTA from "./components/RehabilitationFinalCTA";
import MediaGallery from "../shared/MediaGallery";
import rehabilitationData from "./data";

// SEO Setup
import { SEO } from "../../../components/SEO";
import { PAGE_SEO } from "../../../config/seo";
import { ServiceSchema } from "../../../components/ServiceSchema";

const Rehabilitation = () => (
  <>
    <SEO {...PAGE_SEO.rehabilitation} />
    <ServiceSchema
      name={PAGE_SEO.rehabilitation.title}
      description={PAGE_SEO.rehabilitation.description}
      path={PAGE_SEO.rehabilitation.path}
    />
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
