import React from "react";
import _SingleMatch from "./_SingleMatch";
import { CupState } from "../../context/Context";
import { HStack } from "@chakra-ui/react";

const SemiFinals = () => {
  const { state, dispatch } = CupState();
  const findSemi = (a, b) =>
    state.groupState
      .filter((item) => item.semi)
      .find((item) => item.group === a || item.group === b);
  return (
    <HStack bg="gray.100">
      <_SingleMatch
        firstTeam={findSemi("A", "B")}
        secondTeam={findSemi("C", "D")}
        onClick={(firstTeam, secondTeam) =>
          quartasHandler(firstTeam, secondTeam, "FINAL-SELECTION")
        }
      />
      <_SingleMatch
        firstTeam={findSemi("E", "F")}
        secondTeam={findSemi("G", "H")}
        onClick={(firstTeam, secondTeam) =>
          quartasHandler(firstTeam, secondTeam, "FINAL-SELECTION")
        }
      />
    </HStack>
  );
};

export default SemiFinals;
