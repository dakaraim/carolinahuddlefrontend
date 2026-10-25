function HofCard({ player, onSelect }) {
  return (
    <article
      className="hof-card"
      onClick={() => onSelect(player)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(player);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${player.name}`}
    >
      <img src={`/${player.img_name.replace(/^\/+/, "")}`} alt={player.name} />

      <div className="hof-info">
        <span className="hof-number">#{player.number}</span>
        <h3>{player.name}</h3>
        <p>{player.position}</p>
        <span className="hof-view">VIEW PLAYER →</span>
      </div>
    </article>
  );
}

export default HofCard;
