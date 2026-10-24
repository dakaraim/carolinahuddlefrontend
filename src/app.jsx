import { HashRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Router from "./router";
import "./app.css";

function App() {
    return (
        <HashRouter>
            <Header />
            <Router />
            <Footer />
        </HashRouter>
    );
}

export default App;
