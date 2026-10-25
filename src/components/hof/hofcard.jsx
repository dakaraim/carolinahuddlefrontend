
function HofCard({ player, onClick }) {
  return (
    <div className="hof-card" onClick={onClick}>
      <img
        src={`${process.env.PUBLIC_URL}/${player.img_name.replace(/^\/+/, "")}`}
        alt={player.name}
        className="hof-card-image"
      />
      <h3>{player.name}</h3>
    </div>
  );
}
export default HofCard;
 