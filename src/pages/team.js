
import TeamHeading from "../components/team/teamheading";
import FeaturedPlayers from "../components/team/featuredplayers";
import TeamContent from "../components/team/teamcontent";
import SeasonStats from "../components/team/seasonstats";
import "./team.css";

const Team = () => {
  return (
    <main id="team-page">
      <TeamHeading />
      <FeaturedPlayers />
      <TeamContent />
      <SeasonStats />
    </main>
  );
};

export default Team;
