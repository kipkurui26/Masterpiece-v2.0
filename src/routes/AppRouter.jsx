import { Route, Routes } from "react-router-dom";
import { Home } from "../features/home";
import { About } from "../features/about";
import AppShell from "../components/layout/AppShell";
import { Contact } from "../features/contact";
import { ResourceCenter } from "../features/resource-center";
import { Projects } from "../features/projects";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resource-centre" element={<ResourceCenter />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
