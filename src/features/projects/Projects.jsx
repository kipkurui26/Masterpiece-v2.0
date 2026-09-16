import ComingSoon from "../../components/ui/ComingSoon";

// SEO Setup
import { SEO } from "../../components/SEO";
import { PAGE_SEO } from "../../config/seo";

const Projects = () => {
  return (
    <div>
      <SEO {...PAGE_SEO.projects} />
      <ComingSoon section="Our Projects" />;
    </div>
  );
};

export default Projects;
