
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forum from "./pages/Forum";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div style={{ color: "white", padding: "40px" }}>
                            <h1>Carolina Huddle Home Page</h1>
                            <p>The Home route is working!</p>
                        </div>
                    }
                />
                <Route path="/forum" element={<Forum />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
