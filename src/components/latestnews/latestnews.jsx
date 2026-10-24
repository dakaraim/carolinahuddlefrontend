
import "./LatestNews.css";

const newsItems = [
    {
        image: "carolinafront.jpeg",
        title: "Panthers Team Updates",
        description:
            "Stay updated with Carolina Panthers team news, player updates, and important announcements throughout the season.",
    },
    {
        image: "carolinafront2.jpeg",
        title: "Game Day Coverage",
        description:
            "Follow Carolina Panthers games with previews, results, team statistics, and discussions from Panther Nation.",
    },
    {
        image: "Carolinacoaching.jpeg",
        title: "Inside the Team",
        description:
            "Learn more about Panthers players, coaches, team performance, and everything happening around the team.",
    },
];

const LatestNews = () => {
    return (
        <section id="latest-news">
            <div className="section-title">
                <h2>
                    LATEST <span>NEWS</span>
                </h2>

                <a href={`${process.env.PUBLIC_URL}/news.html`}>
                    VIEW ALL NEWS →
                </a>
            </div>

            <div id="home-news-cards">
                {newsItems.map((item) => (
                    <article className="home-news-card" key={item.title}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                            alt={item.title}
                        />

                        <div className="home-news-card-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default LatestNews;
