import { Box } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import SingleMatch from "./SingleMatch";

const Quartas = () => {
  const { state, dispatch } = CupState();
  const filteredList = state.groupState.filter((country) => country.index <= 1);
  const findingTeam = (group, index, finals) =>
    filteredList.find(
      (item) => item.group === group && item.index === index && item[finals]
    );
  const quartasHandler = (firstTeam, secondTeam, type) => {
    if (!firstTeam || !secondTeam) return;
    dispatch({ type, payload: { firstTeam, secondTeam } });
  };
  return (
    <Box>
      <SingleMatch
        config={{ position: "absolute", top: "75px", left: "200px" }}
        firstTeam={
          findingTeam("A", 0, "quartas") || findingTeam("B", 1, "quartas")
        }
        secondTeam={
          findingTeam("B", 0, "quartas") || findingTeam("A", 1, "quartas")
        }
        onClick={(firstTeam, secondTeam) =>
          quartasHandler(firstTeam, secondTeam, "SEMI-SELECTION")
        }
        // onClick={() => console.log("oi")}
      />
      <SingleMatch
        config={{ position: "absolute", bottom: "75px", left: "200px" }}
        firstTeam={
          findingTeam("C", 0, "quartas") || findingTeam("D", 1, "quartas")
        }
        secondTeam={
          findingTeam("D", 0, "quartas") || findingTeam("C", 1, "quartas")
        }
        onClick={(firstTeam, secondTeam) =>
          quartasHandler(firstTeam, secondTeam, "SEMI-SELECTION")
        }
      />
      <SingleMatch
        config={{ position: "absolute", top: "75px", right: "200px" }}
        firstTeam={
          findingTeam("E", 0, "quartas") || findingTeam("F", 1, "quartas")
        }
        secondTeam={
          findingTeam("F", 0, "quartas") || findingTeam("E", 1, "quartas")
        }
        onClick={(firstTeam, secondTeam) =>
          quartasHandler(firstTeam, secondTeam, "SEMI-SELECTION")
        }
      />
      <SingleMatch
        config={{ position: "absolute", bottom: "75px", right: "200px" }}
        firstTeam={
          findingTeam("G", 0, "quartas") || findingTeam("H", 1, "quartas")
        }
        secondTeam={
          findingTeam("H", 0, "quartas") || findingTeam("G", 1, "quartas")
        }
        onClick={(firstTeam, secondTeam) =>
          quartasHandler(firstTeam, secondTeam, "SEMI-SELECTION")
        }
      />
    </Box>
  );
};

export default Quartas;
