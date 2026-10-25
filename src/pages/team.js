
import TeamHeading from "../components/team/teamheading";
import FeaturedPlayers from "../components/team/featuredplayers";
import TeamContent from "../components/team/teamcontent";
import PositionBox from "../components/team/positionbox";
import Coaches from "../components/team/coaches";
import SeasonStats from "../components/team/seasonstats";
import "../components/team/team.css";

const Team = () => {
  return (
    <main id="team-page">
      <TeamHeading />
      <FeaturedPlayers />
      <TeamContent />
      <PositionBox />
      <Coaches />
      <SeasonStats />
    </main>
  );
};

export default Team;

