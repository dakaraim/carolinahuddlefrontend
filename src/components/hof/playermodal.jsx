
function PlayerModal({ player, onClose, onNext, onPrevious }) {
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

                <button
                    type="button"
                    className="modal-arrow previous-player"
                    onClick={onPrevious}
                    aria-label="Previous player"
                >
                    &#10094;
                </button>

                <img
                    id="modal-player-image"
                    src={`${process.env.PUBLIC_URL}/${player.img_name.replace(/^\/+/, "")}`}
                    alt={player.name}
                />

                <div>
                    <h2 id="modal-player-name">{player.name}</h2>
                    <p id="modal-player-number">
                        Number: {player.number}
                    </p>
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

                <button
                    type="button"
                    className="modal-arrow next-player"
                    onClick={onNext}
                    aria-label="Next player"
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default PlayerModal;