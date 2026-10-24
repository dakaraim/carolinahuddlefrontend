import TopicItem from "./topicItem";

const topics = [
  {
    id: 1,
    initials: "KP",
    title: "Thoughts on the Panthers offense?",
    description:
      "What do you think the offense needs to improve going into the next game?",
    author: "KeepPounding89",
    time: "12 minutes ago",
    replies: 14,
  },
  {
    id: 2,
    initials: "PN",
    title: "Game Day Predictions",
    description:
      "Drop your predictions for the next Panthers game. Who has a big game?",
    author: "PantherNation",
    time: "28 minutes ago",
    replies: 23,
  },
  {
    id: 3,
    initials: "QC",
    title: "Favorite Panthers Player",
    description:
      "Who is your favorite Panthers player and what made them your favorite?",
    author: "QueenCityFan",
    time: "1 hour ago",
    replies: 31,
  },
  {
    id: 4,
    initials: "CB",
    title: "What are your expectations this season?",
    description:
      "What are you hoping to see from Carolina throughout the rest of the season?",
    author: "CarolinaBlue",
    time: "2 hours ago",
    replies: 18,
  },
  {
    id: 5,
    initials: "CH",
    title: "Best Panthers Moment?",
    description:
      "What is your favorite moment in Carolina Panthers history?",
    author: "HuddleFan",
    time: "3 hours ago",
    replies: 42,
  },
];

function TopicList() {
  return (
    <section id="forum-list">
      {topics.map((topic) => (
        <TopicItem key={topic.id} {...topic} />
      ))}
    </section>
  );
}

export default TopicList;