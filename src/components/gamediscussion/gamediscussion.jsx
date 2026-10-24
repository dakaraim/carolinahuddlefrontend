
import "./gamediscussion.css";

const discussions = [
    {
        initials: "KP",
        title: "Thoughts on the Panthers offense?",
        message:
            "The offense looked better today. What do you think they should focus on next game?",
        user: "KeepPounding89",
        time: "12 minutes ago",
    },
    {
        initials: "PN",
        title: "Game Day Predictions",
        message:
            "Who do you think has a big game for Carolina this week?",
        user: "PantherNation",
        time: "28 minutes ago",
    },
    {
        initials: "QC",
        title: "Defense Stepping Up",
        message:
            "The defense made some big plays. Which player impressed you the most?",
        user: "QueenCityFan",
        time: "45 minutes ago",
    },
    {
        initials: "CH",
        title: "Player of the Game?",
        message:
            "Who gets your vote for Panthers player of the game?",
        user: "CarolinaHuddle",
        time: "1 hour ago",
    },
];

const GameDiscussion = () => {
    return (
        <section id="game-discussion">
            <div className="home-box-title">
                <h2>
                    Game <span>Discussion</span>
                </h2>
                <p>PANTHER NATION</p>
            </div>

            <div className="discussion-posts">
                {discussions.map((discussion, index) => (
                    <article className="discussion-post" key={index}>
                        <div className="user-icon">
                            {discussion.initials}
                        </div>

                        <div className="post-content">
                            <h3>{discussion.title}</h3>
                            <p>{discussion.message}</p>
                            <small>
                                {discussion.user} · {discussion.time}
                            </small>
                        </div>
                    </article>
                ))}
            </div>

            <div id="home-forum-button">
                <a href={`${process.env.PUBLIC_URL}/forum.html`}>
                    VIEW ALL DISCUSSIONS →
                </a>
            </div>
        </section>
    );
};

export default GameDiscussion;
