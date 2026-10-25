
import { useState } from "react";

const PositionBox = ({ title, image, groups = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="position-box">
      <button
        type="button"
        className="position-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {image && <img src={image} alt="" />}
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="position-links">
          {groups.map((group) => (
            <div className="position-group" key={group.position}>
              <h3>{group.position}</h3>

              {group.players?.map((player) => (
                <a
                  href={player.url || "#"}
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
};

export default PositionBox;
