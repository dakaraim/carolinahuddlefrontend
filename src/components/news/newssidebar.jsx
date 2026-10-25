
import LatestHeadlines from "./latestheadlines";
import NewsCategories from "./newscategories";

function Sidebar() {
  return (
    <aside id="news-sidebar">
      <LatestHeadlines />
      <NewsCategories />
    </aside>
  );
}

export default Sidebar;
