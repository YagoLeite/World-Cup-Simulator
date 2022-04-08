import React from "react";
import SingleMatch from "./SingleMatch";

const SemiFinals = (props) => {
  return (
    <div>
      <SingleMatch
        firstTeam={findSemi("A", "B")}
        secondTeam={findSemi("C", "D")}
        onClick={(firstTeam, secondTeam) =>
          quartasHandler(firstTeam, secondTeam, "FINAL-SELECTION")
        }
      />
      <SingleMatch
        firstTeam={findSemi("E", "F")}
        secondTeam={findSemi("G", "H")}
        onClick={(firstTeam, secondTeam) =>
          quartasHandler(firstTeam, secondTeam, "FINAL-SELECTION")
        }
      />
    </div>
  );
};

export default SemiFinals;
