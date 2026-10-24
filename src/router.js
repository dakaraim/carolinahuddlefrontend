
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Forum from "./pages/forum";

function Router() {
    return (
        <BrowserRouter basename="/carolinahuddlefrontend">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forum" element={<Forum />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
