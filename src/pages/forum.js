
import ForumHeader from "../components/forum/ForumHeader";
import ForumTabs from "../components/forum/ForumTabs";
import TopicList from "../components/forum/TopicList";
import CreatePost from "../components/forum/CreatePost";
import TopContributors from "../components/forum/TopContributors";

import "../components/forum/Forum.css";

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
                    <CreatePost />
                    <TopContributors />
                </aside>
            </section>
        </main>
    );
}

export default Forum;
