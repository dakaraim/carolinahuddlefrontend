
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Forum from "./pages/forum";
import Team from "./pages/team";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/team" element={<Team />} />
        </Routes>
    );
}

export default Router;
