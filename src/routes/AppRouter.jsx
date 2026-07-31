import { Route, Routes } from "react-router-dom";
import { Home } from "../features/home";
import { About } from "../features/about";
import AppShell from "../components/layout/AppShell";


const AppRouter = () => {
  return (
    <Routes>
        <Route element={<AppShell/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Route>
    </Routes>
  )
}

export default AppRouter;