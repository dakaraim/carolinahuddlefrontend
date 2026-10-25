
import TeamHeading from "../components/team/TeamHeading";
import FeaturedPlayers from "../components/team/FeaturedPlayers";
import TeamContent from "../components/team/TeamContent";
import SeasonStats from "../components/team/SeasonStats";
import "./team.css";

function Team() {
    return (
        <main className="team-page">
            <TeamHeading />
            <FeaturedPlayers />
            <TeamContent />
            <SeasonStats />
        </main>
    );
}

export default Team;
