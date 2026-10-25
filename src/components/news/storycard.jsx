
function StoryCard({ story }) {
  return (
    <article className="story-card">
      <img src={story.image} alt={story.imageAlt} />
      <span className="news-category">{story.category}</span>
      <h3>{story.title}</h3>
      <p>{story.description}</p>
      <small>{story.date}</small>
    </article>
  );
}

export default StoryCard;
