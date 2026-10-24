
import Hero from "../components/hero/hero";
import GameDiscussion from "../components/gamediscussion/gamediscussion";
import LiveScore from "../components/livescore/livescore";
import LatestNews from "../components/latestnews/latestnews";
import Explore from "../components/explore/explore";
import AboutHome from "../components/about/about";

function Home() {
    return (
        <main>
            <Hero />
            <GameDiscussion />
            <LiveScore />
            <LatestNews />
            <Explore />
            <AboutHome />
        </main>
    );
}

export default Home;
