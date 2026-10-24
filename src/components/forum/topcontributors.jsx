const contributors = [
  { rank: 1, initials: "KP", name: "KeepPounding89", posts: 328 },
  { rank: 2, initials: "PN", name: "PantherNation", posts: 245 },
  { rank: 3, initials: "QC", name: "QueenCityFan", posts: 196 },
  { rank: 4, initials: "CB", name: "CarolinaBlue", posts: 154 },
  { rank: 5, initials: "CH", name: "HuddleFan", posts: 121 },
];

function TopContributors() {
  return (
    <section id="top-contributors">
      <h2>
        TOP <span>CONTRIBUTORS</span>
      </h2>

      {contributors.map((person) => (
        <div className="contributor" key={person.rank}>
          <div className="contributor-rank">{person.rank}</div>

          <div className="contributor-avatar">{person.initials}</div>

          <div className="contributor-info">
            <h3>{person.name}</h3>
            <p>{person.posts} Posts</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TopContributors;