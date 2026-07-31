import ApproachSection from "./components/ApproachSection"
import FeaturedProjects from "./components/FeaturedProjects"
import Hero from "./components/Hero"
import ProjectJourney from "./components/ProjectJourney"
import StartingPointCards from "./components/StartingPointCards"
import TrustStats from "./components/TrustStats"
import WhyChooseUs from "./components/WhyChooseUs"

const Home = () => {
  return (
    <div>
      <Hero/>
      <TrustStats/>
      <ApproachSection/>
      <StartingPointCards/>
      <ProjectJourney/>
      <WhyChooseUs/>
      <FeaturedProjects/>
    </div>
  )
}

export default Home