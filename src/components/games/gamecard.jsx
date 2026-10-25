const GameCard = ({
  title,
  homeTeam,
  awayTeam,
  homeImage,
  awayImage,
  homeScore,
  awayScore,
  date,
  time,
  stadium,
  network,
  action
}) => {
  const isLatest = homeScore !== undefined && awayScore !== undefined;

  return (
    <article className="game-card">
      <h2>{title}</h2>

      <div className={isLatest ? "score" : "teams"}>
        <div className="game-team">
          <img src={homeImage} alt={homeTeam} />
          <h3>{homeTeam}</h3>
        </div>

        {isLatest ? (
          <div className="game-score">
            <span className="number">{homeScore}</span>
            <span className="dash">-</span>
            <span className="number">{awayScore}</span>
          </div>
        ) : (
          <span className="vs">VS</span>
        )}

        <div className="game-team">
          <img src={awayImage} alt={awayTeam} />
          <h3>{awayTeam}</h3>
        </div>
      </div>

      <div className="game-info">
        <p>{date}</p>
        <p>{time}</p>
        <p>{stadium}</p>
        <p>{network}</p>
      </div>

      <div className="game-action">
        <button type="button">{action} →</button>
      </div>
    </article>
  );
};

export default GameCard;
