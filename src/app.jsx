
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import GameDiscussion from "./components/game-discussion/GameDiscussion";
import LiveScore from "./components/live-score/LiveScore";
import LatestNews from "./components/latest-news/LatestNews";
import Explore from "./components/explore/Explore";
import AboutHome from "./components/about-home/AboutHome";
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
