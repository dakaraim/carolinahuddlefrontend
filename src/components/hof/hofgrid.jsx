
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import HofCard from "./hofcard";
import PlayerModal from "./playermodal";

const players = [
  {
    _id: 1,
    name: "Steve Smith Sr.",
    number: 89,
    position: "Wide Receiver",
    years: "2001 - 2013",
    description:
      "A legendary Panthers receiver known for his toughness, speed, and memorable performances.",
    img_name: "images/stevesmith.png",
  },
  {
    _id: 2,
    name: "Cam Newton",
    number: 1,
    position: "Quarterback",
    years: "2011 - 2019",
    description:
      "A dynamic quarterback who became one of the most recognizable players in Panthers history.",
    img_name: "images/camnewton.png",
  },
  {
    _id: 3,
    name: "Luke Kuechly",
    number: 59,
    position: "Linebacker",
    years: "2012 - 2019",
    description:
      "A dominant linebacker known for his intelligence, tackling ability, and leadership on defense.",
    img_name: "images/lukekuechly.png",
  },
  {
    _id: 4,
    name: "Julius Peppers",
    number: 90,
    position: "Defensive End",
    years: "2002 - 2009",
    description:
      "An elite defensive end who became one of the most accomplished defensive players in franchise history.",
    img_name: "images/juliuspeppers.png",
  },
  {
    _id: 5,
    name: "Thomas Davis Sr.",
    number: 58,
    position: "Linebacker",
    years: "2005 - 2018",
    description:
      "A respected Panthers linebacker remembered for his leadership, toughness, and dedication to the team.",
    img_name: "images/thomasdavissr.png",
  },
  {
    _id: 6,
    name: "DeAngelo Williams",
    number: 34,
    position: "Running Back",
    years: "2006 - 2014",
    description:
      "A productive running back who provided Carolina with speed and big-play ability out of the backfield.",
    img_name: "images/deangelowilliams.png",
  },
  {
    _id: 7,
    name: "Jordan Gross",
    number: 69,
    position: "Offensive Tackle",
    years: "2003 - 2013",
    description:
      "A dependable offensive tackle who protected Panthers quarterbacks for more than a decade.",
    img_name: "images/jordangross.png",
  },
  {
    _id: 8,
    name: "Greg Olsen",
    number: 88,
    position: "Tight End",
    years: "2011 - 2019",
    description:
      "A reliable tight end who became one of Carolina's most important receiving targets.",
    img_name: "images/gregolsen.png",
  },
];

function HofGrid() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const changePlayer = (direction) => {
    const currentIndex = players.findIndex(
      (player) => player._id === selectedPlayer._id
    );

    const nextIndex =
      (currentIndex + direction + players.length) % players.length;

    setSelectedPlayer(players[nextIndex]);
  };

  return (
    <>
      <div id="hof-grid">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
        >
          {players.map((player) => (
            <SwiperSlide key={player._id}>
              <HofCard
                player={player}
                onClick={() => setSelectedPlayer(player)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
        onNext={() => changePlayer(1)}
        onPrevious={() => changePlayer(-1)}
      />
    </>
  );
}

export default HofGrid;
