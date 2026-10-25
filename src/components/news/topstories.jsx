
import StoryCard from "./storycard";

const stories = [
  {
    image: "/images/carolinapractice.jpeg",
    imageAlt: "Carolina Panthers practice",
    category: "TEAM",
    title: "Panthers Prepare for Their Next Matchup",
    description: "Carolina continues preparing for its next opponent as the team looks to improve on both sides of the football.",
    date: "September 20, 2026"
  },
  {
    image: "/images/carolinarunout.jpeg",
    imageAlt: "Panthers players ready for game day",
    category: "PLAYERS",
    title: "Panthers Players Ready for Game Day",
    description: "Carolina's players are focused on making an impact as the team prepares for another important game on the schedule.",
    date: "September 18, 2026"
  },
  {
    image: "/images/carolinadefense.jpeg",
    imageAlt: "Carolina Panthers defense",
    category: "DEFENSE",
    title: "Defense Looks to Set the Tone",
    description: "The Panthers defense is working to create pressure, force turnovers, and keep opposing offenses from finding the end zone.",
    date: "September 16, 2026"
  },
  {
    image: "/images/carolinadevlop.jpeg",
    imageAlt: "Carolina Panthers team",
    category: "GAMES",
    title: "Carolina Gets Ready for Another Game",
    description: "Panther Nation is getting ready for another game as Carolina looks to earn an important victory this week.",
    date: "September 14, 2026"
  },
  {
    image: "/images/carolinafans2.jpg",
    imageAlt: "Carolina Panthers fans",
    category: "COMMUNITY",
    title: "Panther Nation Shows Its Support",
    description: "Panthers fans continue to show their support for the team throughout the Carolinas and across the country.",
    date: "September 12, 2026"
  },
  {
    image: "/images/Carolinacoaching.jpeg",
    imageAlt: "Carolina Panthers coaching staff",
    category: "COACHING",
    title: "Coaching Staff Focuses on Improvement",
    description: "Carolina's coaching staff continues working with the roster to improve execution and prepare the team for upcoming opponents.",
    date: "September 10, 2026"
  },
  {
    image: "/images/carolinapractice3.jpeg",
    imageAlt: "Carolina Panthers roster",
    category: "ROSTER",
    title: "Panthers Roster Continues to Develop",
    description: "Players across the Panthers roster are competing for opportunities and working to make an impact throughout the season.",
    date: "September 8, 2026"
  },
  {
    image: "/images/carolinadave.jpeg",
    imageAlt: "Carolina Panthers team",
    category: "TEAM",
    title: "Carolina Continues Building for the Season",
    description: "The Panthers continue working toward their goals as players and coaches prepare for the challenges ahead.",
    date: "September 6, 2026"
  },
  {
    image: "/images/Carolinafans.jpeg",
    imageAlt: "Carolina Panthers fans cheering",
    category: "FANS",
    title: "Fans Bring Energy to Panther Nation",
    description: "Carolina fans continue bringing energy and excitement while supporting the Panthers throughout the football season.",
    date: "September 4, 2026"
  }
];

function TopStories() {
  return (
    <section id="top-stories">
      <div className="section-heading">
        <h2>TOP STORIES</h2>
        <a href="#story-grid">VIEW ALL NEWS →</a>
      </div>

      <div id="story-grid">
        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </div>
    </section>
  );
}

export default TopStories;
