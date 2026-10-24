
import "./livescore.css";

const teamStats = [
    {
        label: "Total Yards",
        panthers: 285,
        opponent: 241,
    },
    {
        label: "First Downs",
        panthers: 18,
        opponent: 15,
    },
    {
        label: "Passing Yards",
        panthers: 176,
        opponent: 162,
    },
    {
        label: "Rushing Yards",
        panthers: 109,
        opponent: 79,
    },
    {
        label: "Turnovers",
        panthers: 1,
        opponent: 2,
    },
];

const LiveScore = () => {
    return (
        <section id="live-score">
            <div className="home-box-title">
                <h2>
                    Live <span>Score</span>
                </h2>
                <p className="live-label">
                    <span className="live-dot"></span> LIVE
                </p>
            </div>

            <div id="game-info">
                <p>WEEK 8</p>
                <p>3RD QUARTER</p>
            </div>

            <div id="score-teams">
                <div className="score-team">
                    <div className="score-logo">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/carolinapanthers.png`}
                            alt="Carolina Panthers Logo"
                        />
                    </div>

                    <h3>PANTHERS</h3>
                    <p>CAROLINA</p>
                    <h2>24</h2>
                </div>

                <div id="game-status">
                    <h3>24 - 17</h3>
                    <p>8:42</p>
                </div>

                <div className="score-team">
                    <div className="score-logo">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/falcons.png`}
                            alt="Atlanta Falcons Logo"
                        />
                    </div>

                    <h3>FALCONS</h3>
                    <p>ATLANTA</p>
                    <h2>17</h2>
                </div>
            </div>

            <div id="team-stats">
                <h3>TEAM STATS</h3>

                {teamStats.map((stat) => (
                    <div className="stat-row" key={stat.label}>
                        <span>{stat.panthers}</span>
                        <p>{stat.label}</p>
                        <span>{stat.opponent}</span>
                    </div>
                ))}
            </div>

            <button
                id="full-stats"
                onClick={() =>
                    window.alert("Full game statistics coming soon!")
                }
            >
                VIEW FULL STATS
            </button>
        </section>
    );
};

export default LiveScore;
