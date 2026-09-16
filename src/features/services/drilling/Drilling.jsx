import DrillingHero from "./components/DrillingHero";
import DrillingWhyItMatters from "./components/DrillingWhyItMatters";
import DrillingProcess from "./components/DrillingProcess";
import DrillingCostFactors from "./components/DrillingCostFactors";
import DrillingSpecialInsight from "./components/DrillingSpecialInsight";
import DrillingFAQ from "./components/DrillingFAQ";
import DrillingFinalCTA from "./components/DrillingFinalCTA";
import MediaGallery from "../shared/MediaGallery";
import drillingData from "./data";

// SEO Setup
import { SEO } from "../../../components/SEO";
import { PAGE_SEO } from "../../../config/seo";
import { ServiceSchema } from "../../../components/ServiceSchema";

const Drilling = () => (
  <>
    <SEO {...PAGE_SEO.drilling} />
    <ServiceSchema
      name={PAGE_SEO.drilling.title}
      description={PAGE_SEO.drilling.description}
      path={PAGE_SEO.drilling.path}
    />
    <DrillingHero />
    <DrillingWhyItMatters />
    <DrillingProcess />
    <DrillingCostFactors />
    <DrillingSpecialInsight />
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <MediaGallery items={drillingData.gallery} />
      </div>
    </section>
    <DrillingFAQ />
    <DrillingFinalCTA />
  </>
);

export default Drilling;
