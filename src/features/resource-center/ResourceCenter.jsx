import ComingSoon from "../../components/ui/ComingSoon";

// SEO Setup
import { SEO } from "../../components/SEO";
import { PAGE_SEO } from "../../config/seo";

const ResourceCenter = () => {
  return (
    <div>
      <SEO {...PAGE_SEO.resourceCentre} />
      <ComingSoon section="The Resource Centre" />
    </div>
  );
};

export default ResourceCenter;
