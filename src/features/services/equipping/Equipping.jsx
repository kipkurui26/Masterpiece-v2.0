import EquippingHero from "./components/EquippingHero";
import EquippingWhyItMatters from "./components/EquippingWhyItMatters";
import EquippingProcess from "./components/EquippingProcess";
import EquippingCostFactors from "./components/EquippingCostFactors";
import EquippingPumpSelection from "./components/EquippingPumpSelection";
import EquippingFAQ from "./components/EquippingFAQ";
import EquippingFinalCTA from "./components/EquippingFinalCTA";
import MediaGallery from "../shared/MediaGallery";
import equippingData from "./data";

// SEO Setup
import { SEO } from "../../../components/SEO";
import { PAGE_SEO } from "../../../config/seo";
import { ServiceSchema } from "../../../components/ServiceSchema";

const Equipping = () => (
  <>
    <SEO {...PAGE_SEO.equipping} />
        <ServiceSchema
      name={PAGE_SEO.equipping.title}
      description={PAGE_SEO.equipping.description}
      path={PAGE_SEO.equipping.path}
    />
    <EquippingHero />
    <EquippingWhyItMatters />
    <EquippingProcess />
    <EquippingCostFactors />
    <EquippingPumpSelection />
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <MediaGallery items={equippingData.gallery} />
      </div>
    </section>
    <EquippingFAQ />
    <EquippingFinalCTA />
  </>
);

export default Equipping;
