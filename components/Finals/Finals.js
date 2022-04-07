import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { CupState } from "../../context/Context";
import SingleMatch from "./SingleMatch";

const Finals = () => {
  const { state, dispatch } = CupState();
  const filteredList = state.groupState.filter((country) => country.index <= 1);
  const findingTeam = (group, index) =>
    filteredList.find(
      (item) => item.group === group && item.index === index && item.oitavas
    );

  const [quarta11, setQuarta11] = useState();
  const [quarta12, setQuarta12] = useState();

  const test = (team) => {
    setQuarta11(team);
  };

  const test2 = (team) => {
    setQuarta12(team);
  };

  return (
    <HStack>
      <Flex gap={3} direction="column">
        <Heading>Oitavas</Heading>
        <SingleMatch
          firstTeam={findingTeam("A", 0)}
          secondTeam={findingTeam("B", 1)}
          onClick={test}
        />
        <SingleMatch
          firstTeam={findingTeam("B", 0)}
          secondTeam={findingTeam("A", 1)}
          onClick={test2}
        />
        <SingleMatch
          firstTeam={findingTeam("C", 0)}
          secondTeam={findingTeam("D", 1)}
        />
        <SingleMatch
          firstTeam={findingTeam("D", 0)}
          secondTeam={findingTeam("C", 1)}
        />
        <SingleMatch
          firstTeam={findingTeam("E", 0)}
          secondTeam={findingTeam("F", 1)}
        />
        <SingleMatch
          firstTeam={findingTeam("F", 0)}
          secondTeam={findingTeam("E", 1)}
        />
        <SingleMatch
          firstTeam={findingTeam("G", 0)}
          secondTeam={findingTeam("H", 1)}
        />
        <SingleMatch
          firstTeam={findingTeam("H", 0)}
          secondTeam={findingTeam("G", 1)}
        />
      </Flex>
      <Flex gap={3} direction="column">
        <Heading>Quartas</Heading>
        <SingleMatch firstTeam={quarta11} secondTeam={quarta12} />
      </Flex>
    </HStack>
  );
};

export default Finals;
