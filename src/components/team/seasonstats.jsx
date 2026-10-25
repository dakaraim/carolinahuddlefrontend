
const stats = [
    { label: "RECORD", value: "1-1" },
    { label: "POINTS/GAME", value: "24.7" },
    { label: "TOTAL YARDS/GAME", value: "420.3" },
    { label: "PASSING YARDS/GAME", value: "324.0" },
    { label: "RUSHING YARDS/GAME", value: "96.5" },
    { label: "TURNOVERS", value: "4" }
];

function SeasonStats() {
    return (
        <section id="season-stats">
            <div className="stats-title">
                <h2>SEASON STATS</h2>
                <p>CAROLINA PANTHERS</p>
            </div>

            <div id="stats">
                {stats.map((stat) => (
                    <div className="stat" key={stat.label}>
                        <p>{stat.label}</p>
                        <h3>{stat.value}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SeasonStats;
