const tabs = ["All Topics", "Latest", "Popular", "Unread"];

function ForumTabs() {
  return (
    <nav id="forum-tabs" aria-label="Forum topics">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={index === 0 ? "active-tab" : ""}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

export default ForumTabs;