// src/router/AppRouter.jsx
import { Route, Routes } from "react-router-dom";
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
import PageNotFound from "../components/layout/PageNotFound";

const AppRouter = () => {
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

      {/* Outside AppShell — no Navbar/Footer */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
