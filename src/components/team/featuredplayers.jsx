
const featuredPlayers = [
    { name: "Bryce Young", position: "QB", image: "bryceyoung.png" },
    { name: "Chuba Hubbard", position: "RB", image: "chubahubbard.jpeg" },
    { name: "Tetairoa McMillan", position: "WR", image: "tetairoamcmillan.png" },
    { name: "Jaycee Horn", position: "CB", image: "jayceehorn.png" },
    { name: "Derrick Brown", position: "DT", image: "derrickbrown.png" }
];

function FeaturedPlayers() {
    return (
        <section id="featured-players">
            <div className="team-heading">
                <h2>FEATURED <span>PLAYERS</span></h2>
                <a
                    href="https://www.panthers.com/team/players-roster/"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Full Roster →
                </a>
            </div>

            <div id="player-list">
                {featuredPlayers.map((player) => (
                    <article className="player-card" key={player.name}>
                        <img
                            src={`/images/${player.image}`}
                            alt={player.name}
                        />
                        <h3>{player.name}</h3>
                        <p>{player.position}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default FeaturedPlayers;
