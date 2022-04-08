import { Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import SingleMatch from "./SingleMatch";

const Finals = () => {
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

  const findSemi = (a, b) =>
    state.groupState
      .filter((item) => item.semi)
      .find((item) => item.group === a || item.group === b);

  const findFinal = state.groupState.filter((item) => item.final);

  return (
    <HStack>
      <Flex gap={3} direction="column">
        <Heading>Oitavas</Heading>
        <SingleMatch
          firstTeam={findingTeam("A", 0, "oitavas")}
          secondTeam={findingTeam("B", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />
        <SingleMatch
          firstTeam={findingTeam("B", 0, "oitavas")}
          secondTeam={findingTeam("A", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />
        <SingleMatch
          firstTeam={findingTeam("C", 0, "oitavas")}
          secondTeam={findingTeam("D", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />
        <SingleMatch
          firstTeam={findingTeam("D", 0, "oitavas")}
          secondTeam={findingTeam("C", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />
        <SingleMatch
          firstTeam={findingTeam("E", 0, "oitavas")}
          secondTeam={findingTeam("F", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />
        <SingleMatch
          firstTeam={findingTeam("F", 0, "oitavas")}
          secondTeam={findingTeam("E", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />
        <SingleMatch
          firstTeam={findingTeam("G", 0, "oitavas")}
          secondTeam={findingTeam("H", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />
        <SingleMatch
          firstTeam={findingTeam("H", 0, "oitavas")}
          secondTeam={findingTeam("G", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />
      </Flex>
      <Flex gap={3} direction="column">
        <Heading>Quartas</Heading>
        <SingleMatch
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
      </Flex>
      <Flex gap={3} direction="column">
        <Heading>Semi</Heading>
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
      </Flex>
      <Flex direction="column" gap={3}>
        <Heading>Finals</Heading>
        <SingleMatch
          firstTeam={findFinal[0]}
          secondTeam={findFinal[1]}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "FINAL-SELECTION")
          }
        />
      </Flex>
    </HStack>
  );
};

export default Finals;
