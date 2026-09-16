import SurveyHero from "./components/SurveyHero";
import SurveyWhyItMatters from "./components/SurveyWhyItMatters";
import SurveyProcess from "./components/SurveyProcess";
import SurveySpecialInsight from "./components/SurveySpecialInsight";
import SurveyTrustStats from "./components/SurveyTrustStats";
import SurveyFAQ from "./components/SurveyFAQ";
import SurveyFinalCTA from "./components/SurveyFinalCTA";
import MediaGallery from "../shared/MediaGallery";
import surveyData from "./data";

// SEO Setup
import { SEO } from "../../../components/SEO";
import { PAGE_SEO } from "../../../config/seo";
import { ServiceSchema } from "../../../components/ServiceSchema";

const Survey = () => (
  <>
    <SEO {...PAGE_SEO.survey} />
    <ServiceSchema
      name={PAGE_SEO.survey.title}
      description={PAGE_SEO.survey.description}
      path={PAGE_SEO.survey.path}
    />
    <SurveyHero />
    <SurveyWhyItMatters />
    <SurveyProcess />
    <SurveySpecialInsight />
    <SurveyTrustStats />
    <section className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <MediaGallery items={surveyData.gallery} />
      </div>
    </section>
    <SurveyFAQ />
    <SurveyFinalCTA />
  </>
);

export default Survey;
