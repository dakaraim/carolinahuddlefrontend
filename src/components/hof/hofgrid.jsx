
import { useState, useEffect } from "react";
import HofCard from "./hofcard";
import PlayerModal from "./playermodal";

const API_URL = "https://carolinahuddlebackend-1.onrender.com/api/players";

const initialForm = {
  name: "",
  number: "",
  position: "",
  years: "",
  description: "",
  img_name: "",
};

function HofGrid() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Could not load Hall of Fame players.");
        }

        const data = await response.json();
        setPlayers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSuccess("");
  };

  const validateForm = () => {
    const errors = {};
    const number = Number(formData.number);

    if (formData.name.trim().length < 2) {
      errors.name = "Name must contain at least 2 characters.";
    }

    if (
      formData.number.trim() === "" ||
      !Number.isInteger(number) ||
      number < 0 ||
      number > 99
    ) {
      errors.number = "Jersey number must be an integer between 0 and 99.";
    }

    if (formData.position.trim().length < 2) {
      errors.position = "Position must contain at least 2 characters.";
    }

    if (!formData.years.trim()) {
      errors.years = "Years played are required.";
    }

    if (formData.description.trim().length < 10) {
      errors.description = "Description must contain at least 10 characters.";
    }

    if (!formData.img_name.trim()) {
      errors.img_name = "Image path is required.";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          number: Number(formData.number),
          position: formData.position.trim(),
          years: formData.years.trim(),
          description: formData.description.trim(),
          img_name: formData.img_name.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not add player.");
      }

      setPlayers((current) => [...current, data.player]);
      setSuccess("Player successfully added to the Hall of Fame!");
      setFormData(initialForm);
      setFormErrors({});
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const changePlayer = (direction) => {
    if (!selectedPlayer) return;

    const currentIndex = players.findIndex(
      (player) => player.id === selectedPlayer.id
    );

    const nextIndex =
      (currentIndex + direction + players.length) % players.length;

    setSelectedPlayer(players[nextIndex]);
  };

  if (loading) {
    return <p>Loading Hall of Fame players...</p>;
  }

  if (error && players.length === 0) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <div id="hof-grid">
        {players.map((player) => (
          <HofCard
            key={player.id}
            player={player}
            onClick={() => setSelectedPlayer(player)}
          />
        ))}
      </div>

      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
        onNext={() => changePlayer(1)}
        onPrevious={() => changePlayer(-1)}
      />

      <section id="add-player-section">
        <div className="add-player-heading">
          <h2>ADD TO THE <span>HALL OF FAME</span></h2>
          <p>Recognize another Carolina Panthers legend.</p>
        </div>

        <form id="add-player-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Player Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {formErrors.name && <p className="form-error">{formErrors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="number">Jersey Number</label>
              <input
                id="number"
                name="number"
                type="number"
                min="0"
                max="99"
                step="1"
                value={formData.number}
                onChange={handleChange}
                required
              />
              {formErrors.number && <p className="form-error">{formErrors.number}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                name="position"
                type="text"
                value={formData.position}
                onChange={handleChange}
                required
              />
              {formErrors.position && <p className="form-error">{formErrors.position}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="years">Years Played</label>
              <input
                id="years"
                name="years"
                type="text"
                value={formData.years}
                onChange={handleChange}
                required
              />
              {formErrors.years && <p className="form-error">{formErrors.years}</p>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Player Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            />
            {formErrors.description && <p className="form-error">{formErrors.description}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="img_name">Player Image Path</label>
            <input
              id="img_name"
              name="img_name"
              type="text"
              placeholder="images/playername.png"
              value={formData.img_name}
              onChange={handleChange}
              required
            />
            {formErrors.img_name && <p className="form-error">{formErrors.img_name}</p>}
          </div>

          {success && <p className="form-success">{success}</p>}
          {error && <p className="form-error">{error}</p>}

          <button
            type="submit"
            id="add-player-button"
            disabled={submitting}
          >
            {submitting ? "ADDING PLAYER..." : "ADD PLAYER"}
          </button>
        </form>
      </section>
    </>
  );
}

export default HofGrid;
