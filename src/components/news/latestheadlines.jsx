const headlines = [
  {
    image: "/images/carolinapractice.jpeg",
    alt: "Panthers practice",
    category: "TEAM",
    title: "Panthers Prepare for Their Next Matchup"
  },
  {
    image: "/images/carolinaimpact.jpeg",
    alt: "Panthers player",
    category: "PLAYERS",
    title: "Players Ready to Make an Impact"
  },
  {
    image: "/images/carolinadefense.jpeg",
    alt: "Panthers defense",
    category: "DEFENSE",
    title: "Panthers Defense Looks to Set the Tone"
  },
  {
    image: "/images/carolinapractice2.jpeg",
    alt: "Panthers game preparation",
    category: "GAMES",
    title: "Carolina Gets Ready for Game Day"
  }
];

function LatestHeadlines() {
  return (
    <section id="latest-headlines">
      <div className="sidebar-heading">
        <h2>LATEST HEADLINES</h2>
      </div>

      {headlines.map((headline) => (
        <article className="headline" key={headline.title}>
          <img src={headline.image} alt={headline.alt} />
          <div>
            <span>{headline.category}</span>
            <h3>{headline.title}</h3>
          </div>
        </article>
      ))}
    </section>
  );
}

export default LatestHeadlines;
