
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Forum from "./pages/forum";
import Team from "./pages/team";
import Games from "./pages/games";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/team" element={<Team />} />
            <Route path="/games" element={<Games />} />
        </Routes>
    );
}

export default Router;
