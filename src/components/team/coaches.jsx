
const coaches = [
    { name: "Dave Canales", role: "Head Coach", image: "canales.png" },
    { name: "Brad Idzik", role: "Offensive Coordinator", image: "idzik.png" },
    { name: "Ejiro Evero", role: "Defensive Coordinator", image: "evero.png" },
    { name: "Tracy Smith", role: "Special Teams Coordinator", image: "smith.png" }
];

function Coaches() {
    return (
        <aside id="coaches">
            <h2>COACHES</h2>

            {coaches.map((coach) => (
                <div className="coach" key={coach.name}>
                    <img
                        src={`/images/${coach.image}`}
                        alt={coach.name}
                    />
                    <div>
                        <h3>{coach.name}</h3>
                        <p>{coach.role}</p>
                    </div>
                </div>
            ))}

            <button type="button">VIEW FULL STAFF →</button>
        </aside>
    );
}

export default Coaches;
