import PositionBox from "./positionbox";
import Coaches from "./coaches";

const offense = [
    {
        position: "QB",
        players: [
            { name: "Bryce Young", url: "https://www.panthers.com/team/players-roster/bryce-young/" },
            { name: "Kenny Pickett", url: "https://www.panthers.com/team/players-roster/kenny-pickett/" },
            { name: "Haynes King", url: "https://www.panthers.com/team/players-roster/haynes-king/" }
        ]
    },
    {
        position: "RB",
        players: [
            { name: "Chuba Hubbard", url: "https://www.panthers.com/team/players-roster/chuba-hubbard/" },
            { name: "AJ Dillon", url: "https://www.panthers.com/team/players-roster/aj-dillon/" },
            { name: "Anthony Tyus III", url: "https://www.panthers.com/team/players-roster/anthony-tyus-iii/" }
        ]
    },
    {
        position: "WR",
        players: [
            { name: "Tetairoa McMillan", url: "https://www.panthers.com/team/players-roster/tetairoa-mcmillan/" },
            { name: "Brycen Tremayne", url: "https://www.panthers.com/team/players-roster/brycen-tremayne/" },
            { name: "Jalen Coker", url: "https://www.panthers.com/team/players-roster/jalen-coker/" },
            { name: "David Moore", url: "https://www.panthers.com/team/players-roster/david-moore/" },
            { name: "Xavier Legette", url: "https://www.panthers.com/team/players-roster/xavier-legette/" },
            { name: "John Metchie III", url: "https://www.panthers.com/team/players-roster/john-metchie-iii/" }
        ]
    },
    {
        position: "TE",
        players: [
            { name: "Tommy Tremble", url: "https://www.panthers.com/team/players-roster/tommy-tremble/" },
            { name: "Mitchell Evans", url: "https://www.panthers.com/team/players-roster/mitchell-evans/" },
            { name: "Darren Waller", url: "https://www.panthers.com/team/players-roster/darren-waller/" },
            { name: "Ja'Tavion Sanders", url: "https://www.panthers.com/team/players-roster/ja-tavion-sanders/" },
            { name: "Feleipe Franks", url: "https://www.panthers.com/team/players-roster/feleipe-franks/" }
        ]
    },
    {
        position: "LT",
        players: [
            { name: "Rasheed Walker", url: "https://www.panthers.com/team/players-roster/rasheed-walker/" },
            { name: "Stone Forsythe", url: "https://www.panthers.com/team/players-roster/stone-forsythe/" },
            { name: "Albert Reese", url: "https://www.panthers.com/team/players-roster/albert-reese/" }
        ]
    },
    {
        position: "LG",
        players: [
            { name: "Damien Lewis", url: "https://www.panthers.com/team/players-roster/damien-lewis/" },
            { name: "Corey Bullock", url: "https://www.panthers.com/team/players-roster/corey-bullock/" }
        ]
    },
    {
        position: "C",
        players: [
            { name: "Luke Fortner", url: "https://www.panthers.com/team/players-roster/luke-fortner/" },
            { name: "Sam Hecht", url: "https://www.panthers.com/team/players-roster/sam-hecht/" }
        ]
    },
    {
        position: "RG",
        players: [
            { name: "Robert Hunt", url: "https://www.panthers.com/team/players-roster/robert-hunt/" },
            { name: "Torricelli Simpkkins III", url: "https://www.panthers.com/team/players-roster/torricelli-simpkins-iii/" }
        ]
    },
    {
        position: "RT",
        players: [
            { name: "Monroe Freeling", url: "https://www.panthers.com/team/players-roster/monroe-freeling/" },
            { name: "Stone Forsythe", url: "https://www.panthers.com/team/players-roster/stone-forsythe/" },
            { name: "Albert Reese", url: "https://www.panthers.com/team/players-roster/albert-reese/" }
        ]
    }
];

const defense = [
    {
        position: "DL",
        players: [
            { name: "Bobby Brown III", url: "https://www.panthers.com/team/players-roster/bobby-brown-iii/" },
            { name: "TeRah Edwards", url: "https://www.panthers.com/team/players-roster/terah-edwards/" },
            { name: "Lee Hunter", url: "https://www.panthers.com/team/players-roster/lee-hunter/" },
            { name: "Cam Jackson", url: "https://www.panthers.com/team/players-roster/cam-jackson/" },
            { name: "Derrick Brown", url: "https://www.panthers.com/team/players-roster/derrick-brown/" },
            { name: "Aaron Hall", url: "https://www.panthers.com/team/players-roster/aaron-hall/" }
        ]
    },
    {
        position: "OLB",
        players: [
            { name: "Patrick Jones II", url: "https://www.panthers.com/team/players-roster/patrick-jones-ii/" },
            { name: "Trevis Gipson", url: "https://www.panthers.com/team/players-roster/trevis-gipson/" },
            { name: "Thomas Incoom", url: "https://www.panthers.com/team/players-roster/thomas-incoom/" },
            { name: "Jaelan Phillips", url: "https://www.panthers.com/team/players-roster/jaelan-phillips/" },
            { name: "Princely Umanmielen", url: "https://www.panthers.com/team/players-roster/princely-umanmielen/" }
        ]
    },
    {
        position: "LB",
        players: [
            { name: "Devin Lloyd", url: "https://www.panthers.com/team/players-roster/devin-lloyd/" },
            { name: "Jackson Kuwatch", url: "https://www.panthers.com/team/players-roster/jackson-kuwatch/" },
            { name: "Bobby Okereke", url: "https://www.panthers.com/team/players-roster/bobby-okereke/" },
            { name: "Tyrel Dodson", url: "https://www.panthers.com/team/players-roster/tyrel-dodson/" }
        ]
    },
    {
        position: "CB",
        players: [
            { name: "Akayleb Evans", url: "https://www.panthers.com/team/players-roster/akayleb-evans/" },
            { name: "Chau Smith-Wade", url: "https://www.panthers.com/team/players-roster/chau-smith-wade/" },
            { name: "Will Lee III", url: "https://www.panthers.com/team/players-roster/will-lee-iii/" }
        ]
    },
    {
        position: "S",
        players: [
            { name: "Tre'von Moehrig", url: "https://www.panthers.com/team/players-roster/tre-von-moehrig/" },
            { name: "Zakee Wheatley", url: "https://www.panthers.com/team/players-roster/zakee-wheatley/" },
            { name: "Nick Scott", url: "https://www.panthers.com/team/players-roster/nick-scott/" },
            { name: "Lathan Ransom", url: "https://www.panthers.com/team/players-roster/lathan-ransom/" },
            { name: "Isaiah Simmons", url: "https://www.panthers.com/team/players-roster/isaiah-simmons/" }
        ]
    }
];


function TeamContent() {
  return (
    <section id="team-content">
      <PositionBox
        title="OFFENSE"
        image="bryceyoung.png"
        groups={offense}
      />

      <PositionBox
        title="DEFENSE"
        image="derrickbrown.png"
        groups={defense}
      />

      <Coaches />
    </section>
  );
}

export default TeamContent;