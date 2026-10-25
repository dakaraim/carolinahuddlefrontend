import GameCard from "./gamecard";

function GameCards() {
  return (
    <section id="game-cards">
      <GameCard
        title="NEXT GAME"
        homeTeam="CAROLINA PANTHERS"
        awayTeam="CLEVELAND BROWNS"
        homeImage="/images/carolinapanthers.png"
        awayImage="/images/browns.png"
        date="Sun, SEP 27, 2026"
        time="1:00 PM ET"
        stadium="Huntington Bank Field"
        network="FOX"
        action="GAME PREVIEW"
      />

      <GameCard
        title="LATEST GAME"
        homeTeam="PANTHERS"
        awayTeam="FALCONS"
        homeImage="/images/carolinapanthers.png"
        awayImage="/images/falcons.png"
        homeScore={24}
        awayScore={3}
        date="Sun, SEP 20, 2026"
        time="4:05 PM ET"
        stadium="Mercedes-Benz Stadium"
        network="FOX"
        action="GAME RECAP"
      />
    </section>
  );
}

export default GameCards;
