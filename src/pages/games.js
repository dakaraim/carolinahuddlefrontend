import GamesHeading from "../components/games/gamesheading";
import GameCards from "../components/games/gamecards";
import SeasonSchedule from "../components/games/seasonschedule";
import Stadium from "../components/games/stadium";
import "../components/games/games.css";

const Games = () => {
  return (
    <main id="games-page">
      <GamesHeading />
      <GameCards />
      <SeasonSchedule />
      <Stadium />
    </main>
  );
};

export default Games;
