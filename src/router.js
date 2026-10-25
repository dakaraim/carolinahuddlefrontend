import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Forum from "./pages/forum";
import Team from "./pages/team";
import Games from "./pages/games";
import History from "./pages/history";
import News from "./pages/news";
import Hof from "./pages/hof";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/team" element={<Team />} />
            <Route path="/games" element={<Games />} />
            <Route path="/history" element={<History />} />
            <Route path="/news" element={<News />} />
            <Route path="/hof" element={<Hof />} />
        </Routes>

    );
}

export default Router;
