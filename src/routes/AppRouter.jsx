// src/router/AppRouter.jsx
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "../features/home";
import { About } from "../features/about";
import AppShell from "../components/layout/AppShell";
import { Contact } from "../features/contact";
import { ResourceCenter } from "../features/resource-center";
import { Projects } from "../features/projects";
import { Survey } from "../features/services/survey";
import { Drilling } from "../features/services/drilling";
import { Equipping } from "../features/services/equipping";
import { Solarization } from "../features/services/solarization";
import { Rehabilitation } from "../features/services/rehabilitation";
import { Inspection } from "../features/services/inspection";
import PrivacyPolicy from "../components/ui/PrivacyPolicy";
import PageNotFound from "../components/layout/PageNotFound";
import TermsOfUse from "../components/ui/TermsOfUse";

const TITLES = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/resource-centre": "Resource Centre",
  "/projects": "Projects",
  "/services/hydrogeological-surveys": "Hydrogeological Surveys",
  "/services/borehole-drilling": "Borehole Drilling",
  "/services/borehole-equipping": "Borehole Equipping",
  "/services/borehole-solarisation": "Borehole Solarisation",
  "/services/borehole-rehabilitation": "Borehole Rehabilitation",
  "/services/borehole-inspection": "Borehole Inspection",
};

const SITE_NAME = "Masterpiece Hydro-Solution";

function usePageTitleFromRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = TITLES[pathname];
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  }, [pathname]);
}
const AppRouter = () => {
  usePageTitleFromRoute();
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resource-centre" element={<ResourceCenter />} />
        <Route path="/projects" element={<Projects />} />

        {/* {TODO : Nest the services pages} */}
        <Route path="/services/hydrogeological-surveys" element={<Survey />} />
        <Route path="/services/borehole-drilling" element={<Drilling />} />
        <Route path="/services/borehole-equipping" element={<Equipping />} />
        <Route
          path="/services/borehole-solarisation"
          element={<Solarization />}
        />
        <Route
          path="/services/borehole-rehabilitation"
          element={<Rehabilitation />}
        />
        <Route path="/services/borehole-inspection" element={<Inspection />} />
      </Route>

      <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="terms-of-use" element={<TermsOfUse/>}/>

      {/* Outside AppShell — no Navbar/Footer */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
