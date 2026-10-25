
import NewsHeading from "../components/news/newsheading";
import NewsContent from "../components/news/newscontent";
import TopStories from "../components/news/topstories";
import StoryCard from "../components/news/storycard";
import NewsSidebar from "../components/news/newssidebar";
import LatestHeadlines from "../components/news/latestheadlines";
import NewsCategories from "../components/news/newscategories";
import "../components/news/news.css";

function News() {
  const featuredStory = {
    image: "/images/carolinapractice.jpeg",
    imageAlt: "Carolina Panthers players practicing",
    category: "TEAM",
    title: "Panthers Prepare for Their Next Matchup",
    description:
      "The Panthers continue preparing for their upcoming matchup.",
    date: "September 20, 2026",
  };

  return (
    <main id="news-page">
      <NewsHeading />

      <div id="news-layout">
        <section id="top-stories">
          <TopStories />
          <StoryCard story={featuredStory} />
        </section>

        <NewsSidebar>
          <LatestHeadlines />
          <NewsCategories />
        </NewsSidebar>
      </div>
    </main>
  );
}

export default News;
