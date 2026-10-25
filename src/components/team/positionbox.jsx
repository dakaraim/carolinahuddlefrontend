
import { useState } from "react";

function PositionBox({ title, image, groups }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section className="position-box">
            <button
                className="position-header dropdown-header"
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
            >
                <img src={`/images/${image}`} alt="" />
                <span>{title}</span>
                <span className="dropdown-arrow">
                    {isOpen ? "▼" : "▶"}
                </span>
            </button>

            {isOpen && (
                <div className="position-links">
                    {groups.map((group) => (
                        <div className="position-group" key={group.position}>
                            <h3>{group.position}</h3>

                            {group.players.map((player) => (
                                <a
                                    href={player.url}
                                    key={player.name}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {player.name}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default PositionBox;
