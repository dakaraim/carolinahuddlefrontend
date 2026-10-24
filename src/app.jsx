
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import GameDiscussion from "./components/gamediscussion/GameDiscussion";
import LiveScore from "./components/livescore/LiveScore";
import LatestNews from "./components/latestnews/LatestNews";
import Explore from "./components/explore/Explore";
import AboutHome from "./components/about/About";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
    return (
        <>
            <Header />

            <main>
                <Hero />

                <div className="home-content">
                    <GameDiscussion />
                    <LiveScore />
                </div>

                <LatestNews />

                <Explore />

                <AboutHome />
            </main>

            <Footer />
        </>
    );
}

export default App;
