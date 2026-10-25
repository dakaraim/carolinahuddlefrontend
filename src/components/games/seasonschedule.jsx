import { useState } from "react";
const games = [
  { week: 1, date: "Sept. 13", opponent: "Chicago Bears", location: "Home", time: "Final", result: "L 59 - 37" },
  { week: 2, date: "Sept. 20", opponent: "Atlanta Falcons", location: "Away", time: "Final", result: "W 34 - 3" },
  { week: 3, date: "Sept. 27", opponent: "Cleveland Browns", location: "Away", time: "Final", result: "L 21 - 18" },
  { week: 4, date: "Oct. 4", opponent: "Detroit Lions", location: "Home", time: "Final", result: "W 32 - 26" },
  { week: 5, date: "—", opponent: "BYE WEEK", location: "—", time: "—", result: "—" },
  { week: 6, date: "Oct. 18", opponent: "Philadelphia Eagles", location: "Away", time: "1:00 PM", result: "—" },
  { week: 7, date: "Oct. 25", opponent: "Tampa Bay Buccaneers", location: "Home", time: "1:00 PM", result: "—" },
  { week: 8, date: "Oct. 29", opponent: "Green Bay Packers", location: "Away", time: "8:15 PM", result: "—" },
  { week: 9, date: "Nov. 8", opponent: "Denver Broncos", location: "Home", time: "1:00 PM", result: "—" },
  { week: 10, date: "Nov. 15", opponent: "New Orleans Saints", location: "Away", time: "1:00 PM", result: "—" },
  { week: 11, date: "Nov. 22", opponent: "Baltimore Ravens", location: "Home", time: "1:00 PM", result: "—" },
  { week: 12, date: "Nov. 30", opponent: "Tampa Bay Buccaneers", location: "Away", time: "8:15 PM", result: "—" },
  { week: 13, date: "Dec. 6", opponent: "Minnesota Vikings", location: "Away", time: "4:25 PM", result: "—" },
  { week: 14, date: "Dec. 13", opponent: "New Orleans Saints", location: "Home", time: "1:00 PM", result: "—" },
  { week: 15, date: "Dec. 20", opponent: "Cincinnati Bengals", location: "Home", time: "1:00 PM", result: "—" },
  { week: 16, date: "TBD", opponent: "Pittsburgh Steelers", location: "Away", time: "TBD", result: "—" },
  { week: 17, date: "Jan. 3", opponent: "Seattle Seahawks", location: "Home", time: "1:00 PM", result: "—" },
  { week: 18, date: "TBD", opponent: "Atlanta Falcons", location: "Home", time: "TBD", result: "—" }
];

function SeasonSchedule() {
  const [showAll, setShowAll] = useState(false);

  const visibleGames = showAll ? games : games.slice(0, 7);

  return (
    <section id="schedule">
      <div id="schedule-title">
        <img
  src={`${process.env.PUBLIC_URL}/images/carolinapanthers.png`}
  alt="Panthers"/>
        <div> 
          <h2>SEASON SCHEDULE</h2>
          <p>CAROLINA PANTHERS</p>
        </div>
      </div>

      <div className="schedule-table-wrap">
        <table>
          <thead>
            <tr>
              <th>WEEK</th>
              <th>DATE</th>
              <th>OPPONENT</th>
              <th>LOCATION</th>
              <th>TIME (ET)</th>
              <th>RESULT</th>
            </tr>
          </thead>

          <tbody>
            {visibleGames.map((game) => (
              <tr key={game.week}>
                <td>{game.week}</td>
                <td>{game.date}</td>
                <td>{game.opponent}</td>
                <td>{game.location}</td>
                <td>{game.time}</td>
                <td>{game.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="schedule-button">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "SHOW LESS ↑" : "VIEW FULL SCHEDULE →"}
        </button>
      </div>
    </section>
  );
}

export default SeasonSchedule;
