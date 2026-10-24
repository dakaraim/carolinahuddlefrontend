
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Forum from "./pages/forum";

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forum" element={<Forum />} />
            </Routes>
        </HashRouter>
    );
}
export default Router;


