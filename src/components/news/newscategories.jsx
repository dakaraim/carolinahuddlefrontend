const categories = [
  "TEAM NEWS",
  "PLAYERS",
  "DEFENSE",
  "OFFENSE",
  "GAMES",
  "COMMUNITY",
  "AROUND THE NFL"
];

function NewsCategories() {
  return (
    <section id="categories">
      <div className="sidebar-heading">
        <h2>CATEGORIES</h2>
      </div>

      {categories.map((category) => (
        <a
          href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
          key={category}
        >
          {category}
        </a>
      ))}
    </section>
  );
}

export default NewsCategories;
