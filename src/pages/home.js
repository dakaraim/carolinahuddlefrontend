
import Hero from "../components/hero/Hero";
import GameDiscussion from "../components/gamediscussion/GameDiscussion";
import LiveScore from "../components/livescore/LiveScore";
import LatestNews from "../components/latestnews/LatestNews";
import Explore from "../components/explore/Explore";
import AboutHome from "../components/about/About";

function Home() {
    return (
        <main className="home-page">
            <Hero />

            <div className="home-content">
                <GameDiscussion />
                <LiveScore />
            </div>

            <LatestNews />
            <Explore />
            <AboutHome />
        </main>
    );
}

export default Home;
