import { Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import SingleMatch from "./SingleMatch";

const Finals = () => {
  const { state, dispatch } = CupState();
  const filteredList = state.groupState.filter((country) => country.index <= 1);
  const findingTeam = (group, index) =>
    filteredList.find(
      (item) => item.group === group && item.index === index && item.oitavas
    );

  const quartasHandler = (firstTeam, secondTeam) => {
    if (!firstTeam || !secondTeam) return;
    dispatch({ type: "QUARTAS-SELECTION", payload: { firstTeam, secondTeam } });
  };

  const findQuartas = (group, index) => {
    return state.groupState.filter(
      (item) => item.quartas && item.index === index && item.group === group
    );
  };

  console.log(findQuartas("A", 0));

  // console.log(state.groupState.filter((item) => item.quartas));

  return (
    <HStack>
      <Flex gap={3} direction="column">
        <Heading>Oitavas</Heading>
        <SingleMatch
          to="quartas"
          firstTeam={findingTeam("A", 0)}
          secondTeam={findingTeam("B", 1)}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam)
          }
        />
        <SingleMatch
          to="quartas"
          firstTeam={findingTeam("B", 0)}
          secondTeam={findingTeam("A", 1)}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam)
          }
        />
        <SingleMatch
          to="quartas"
          firstTeam={findingTeam("C", 0)}
          secondTeam={findingTeam("D", 1)}
        />
        <SingleMatch
          to="quartas"
          firstTeam={findingTeam("D", 0)}
          secondTeam={findingTeam("C", 1)}
        />
        <SingleMatch
          to="quartas"
          firstTeam={findingTeam("E", 0)}
          secondTeam={findingTeam("F", 1)}
        />
        <SingleMatch
          to="quartas"
          firstTeam={findingTeam("F", 0)}
          secondTeam={findingTeam("E", 1)}
        />
        <SingleMatch
          to="quartas"
          firstTeam={findingTeam("G", 0)}
          secondTeam={findingTeam("H", 1)}
        />
        <SingleMatch
          to="quartas"
          firstTeam={findingTeam("H", 0)}
          secondTeam={findingTeam("G", 1)}
        />
      </Flex>
      <Flex gap={3} direction="column">
        <Heading>Quartas</Heading>
        <SingleMatch
          to="semi"
          firstTeam={findQuartas("A", 0)[0] || findQuartas("B", 1)[0]}
        />
      </Flex>
    </HStack>
  );
};

export default Finals;
