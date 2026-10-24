import ForumHeader from "../components/forum/forumheader";
import ForumTabs from "../components/forum/forumtabs";
import TopicList from "../components/forum/topiclist";
import TopContributors from "../components/forum/topcontributors";

import "../components/forum/forum.css";

function Forum() {
    return (
        <main className="forum-page">
            <ForumHeader />

            <section id="forum-content">
                <div id="forum-main">
                    <ForumTabs />
                    <TopicList />
                </div>

                <aside id="forum-sidebar">
                    <TopContributors />
                </aside>
            </section>
        </main>
    );
}

export default Forum;
