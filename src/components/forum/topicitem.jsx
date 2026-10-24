function TopicItem({ initials, title, description, author, time, replies }) {
  return (
    <article className="forum-topic">
      <div className="forum-avatar">{initials}</div>

      <div className="forum-topic-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{author} · {time}</span>
      </div>

      <div className="forum-numbers">
        <strong>{replies}</strong>
        <span>Replies</span>
      </div>
    </article>
  );
}

export default TopicItem;