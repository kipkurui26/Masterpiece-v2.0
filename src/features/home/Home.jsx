import ApproachSection from "./components/ApproachSection";
import ContactProcess from "./components/ContactProcess";
import FAQ from "./components/FAQ";
import FeaturedProjects from "./components/FeaturedProjects";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import ProjectJourney from "./components/ProjectJourney";
import ResourceCentrePreview from "./components/ResourceCenterPreview";
import StartingPointCards from "./components/StartingPointCards";
import Testimonials from "./components/Testimonials";
import TrustStats from "./components/TrustStats";
import WhyChooseUs from "./components/WhyChooseUs";

// SEO Setup
import { SEO } from "../../components/SEO";
import { PAGE_SEO } from "../../config/seo";

const Home = () => {
  return (
    <div>
      <SEO {...PAGE_SEO.home} />
      <Hero />
      <TrustStats />
      <ApproachSection />
      <StartingPointCards />
      <ProjectJourney />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <ResourceCentrePreview />
      <FAQ />
      <ContactProcess />
      <FinalCTA />
    </div>
  );
};

export default Home;
