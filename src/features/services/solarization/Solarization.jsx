import SolarisationHero from "./components/SolarisationHero";
import SolarisationWhyItMatters from "./components/SolarisationWhyItMatters";
import SolarisationSuitabilityCheck from "./components/SolarisationSuitabilityCheck";
import SolarisationProcess from "./components/SolarisationProcess";
import SolarisationCostFactors from "./components/SolarisationCostFactors";
import SolarisationFAQ from "./components/SolarisationFAQ";
import SolarisationFinalCTA from "./components/SolarisationFinalCTA";
import MediaGallery from "../shared/MediaGallery";
import solarisationData from "./data";

const Solarisation = () => (
  <>
    <SolarisationHero />
    <SolarisationWhyItMatters />
    <SolarisationSuitabilityCheck />
    <SolarisationProcess />
    <SolarisationCostFactors />
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <MediaGallery items={solarisationData.gallery} />
      </div>
    </section>
    <SolarisationFAQ />
    <SolarisationFinalCTA />
  </>
);

export default Solarisation;