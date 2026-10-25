
import LatestHeadlines from "./latestheadlines";
import NewsCategories from "./newscategories";

function NewsSidebar() {
  return (
    <aside id="news-sidebar">
      <LatestHeadlines />
      <NewsCategories />
    </aside>
  );
}

export default NewsSidebar;
