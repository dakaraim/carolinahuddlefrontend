
function PlayerModal({ player, onClose }) {
  if (!player) {
    return null;
  }

  return (
    <div
      id="player-modal"
      className="player-modal"
      onClick={onClose}
    >
      <div
        id="player-modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          id="close-player-modal"
          type="button"
          onClick={onClose}
          aria-label="Close player details"
        >
          &times;
        </button>

        <img
        id="modal-player-image"
         src={`${process.env.PUBLIC_URL}/${player.img_name.replace(/^\/+/, "")}`}
        alt={player.name}
        />

        <div>
          <h2 id="modal-player-name">{player.name}</h2>
          <p id="modal-player-number">Number: {player.number}</p>
          <p id="modal-player-position">
            Position: {player.position}
          </p>
          <p id="modal-player-years">
            Years: {player.years}
          </p>
          <p id="modal-player-description">
            {player.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlayerModal;
