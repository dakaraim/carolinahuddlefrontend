
import "./Explore.css";

const exploreItems = [
    {
        title: "TEAM",
        description: "Meet the players and coaches.",
        link: "team.html",
    },
    {
        title: "GAMES",
        description: "View games, schedules, and results.",
        link: "games.html",
    },
    {
        title: "HISTORY",
        description: "Explore the history of the Carolina Panthers.",
        link: "history.html",
    },
    {
        title: "FORUM",
        description: "Join discussions with other Panthers fans.",
        link: "forum.html",
    },
    {
        title: "HALL OF FAME",
        description: "Celebrate some of the greatest Panthers players.",
        link: "hof.html",
    },
];

const Explore = () => {
    return (
        <section id="explore">
            <div className="section-title">
                <h2>
                    EXPLORE <span>CAROLINA HUDDLE</span>
                </h2>
            </div>

            <div id="explore-cards">
                {exploreItems.map((item) => (
                    <a
                        href={`${process.env.PUBLIC_URL}/${item.link}`}
                        className="explore-card"
                        key={item.title}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span className="explore-arrow">→</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Explore;
