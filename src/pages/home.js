
import About from "../components/about/about";
import Explore from "../components/explore/explore";
import GameDiscussion from "../components/gamediscussion/gamediscussion";
import LiveScore from "../components/livescore/livescore";
import LatestNews from "../components/latestnews/latestnews";

function Home() {
    return (
        <main className="home-page">
            <About />
            <Explore />
            <GameDiscussion />
            <LiveScore />
            <LatestNews />
        </main>
    );
}

export default Home;
