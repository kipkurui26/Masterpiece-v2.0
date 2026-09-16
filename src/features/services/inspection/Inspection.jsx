import InspectionHero from "./components/InspectionHero";
import InspectionDeliverables from "./components/InspectionDeliverables";
import InspectionUseCases from "./components/InspectionUseCases";
import InspectionScope from "./components/InspectionScope";
import InspectionProcess from "./components/InspectionProcess";
import InspectionLimitations from "./components/InspectionLimitations";
import InspectionCostFactors from "./components/InspectionCostFactors";
import InspectionFAQ from "./components/InspectionFAQ";
import InspectionFinalCTA from "./components/InspectionFinalCTA";
import MediaGallery from "../shared/MediaGallery";
import { gallery } from "./data";

// SEO Setup
import { SEO } from "../../../components/SEO";
import { PAGE_SEO } from "../../../config/seo";
import { ServiceSchema } from "../../../components/ServiceSchema";

const Inspection = () => {
  return (
    <div>
      <SEO {...PAGE_SEO.inspection} />
      <ServiceSchema
        name={PAGE_SEO.inspection.title}
        description={PAGE_SEO.inspection.description}
        path={PAGE_SEO.inspection.path}
      />
      <InspectionHero />
      <InspectionDeliverables />
      <InspectionUseCases />
      <InspectionScope />
      <InspectionProcess />
      <InspectionLimitations />
      <InspectionCostFactors />
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
          <MediaGallery items={gallery} />
        </div>
      </section>
      <InspectionFAQ />
      <InspectionFinalCTA />
    </div>
  );
};

export default Inspection;
