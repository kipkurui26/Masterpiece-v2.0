import AboutFinalCTA from "./components/AboutFinalCTA";
import AboutHero from "./components/AboutHero";
import AboutStats from "./components/AboutStats";
import AboutWhyChooseUs from "./components/AboutWhyCHooseUs";
import MeetTheHydrogeologist from "./components/MeetTheHydrologist";
import OurPhilosophy from "./components/OurPhylosophy";
import ProjectStages from "./components/ProjectStages";
import RecommendationApproach from "./components/RecommendationApproach";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import WhyWeExist from "./components/WhyWeExist";

const About = () => {
  return (
    <div className="">
     <AboutHero/>
     <WhyWeExist/>
     <OurPhilosophy/>
     <ProjectStages/>
     <WhoWeWorkWith/>
     <RecommendationApproach/>
     <MeetTheHydrogeologist/>
     <AboutStats/>
     <AboutWhyChooseUs/>
     <AboutFinalCTA/>
    </div>
  );
};

export default About;
