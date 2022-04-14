import { HStack, Stack, Text, StackDivider } from "@chakra-ui/react";
import React from "react";
import _SingleMatch from "./_SingleMatch";
import { findingTeam, mata_mata_Handler, filteringByIndex } from "../functions";
import { CupState } from "../../context/Context";

const _Quartas = () => {
  const { state, dispatch } = CupState();
  const filteredList = filteringByIndex(state.groupState, 1);
  return (
    <Stack
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      pt="1%"
    >
      <Text pt="1%">Quartas</Text>
      <HStack
        w="100%"
        justifyContent="space-evenly"
        divider={<StackDivider borderColor="gray.400" />}
      >
        <_SingleMatch
          position="semi"
          margin="4.1%"
          justify="space-between"
          firstTeam={
            findingTeam("A", 0, "quartas", filteredList) ||
            findingTeam("B", 1, "quartas", filteredList)
          }
          secondTeam={
            findingTeam("B", 0, "quartas", filteredList) ||
            findingTeam("A", 1, "quartas", filteredList)
          }
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(firstTeam, secondTeam, "SEMI-SELECTION", dispatch)
          }
        />
        <_SingleMatch
          position="semi"
          margin="4.1%"
          justify="space-between"
          firstTeam={
            findingTeam("C", 0, "quartas", filteredList) ||
            findingTeam("D", 1, "quartas", filteredList)
          }
          secondTeam={
            findingTeam("D", 0, "quartas", filteredList) ||
            findingTeam("C", 1, "quartas", filteredList)
          }
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(firstTeam, secondTeam, "SEMI-SELECTION", dispatch)
          }
        />

        <_SingleMatch
          position="semi"
          margin="4.1%"
          justify="space-between"
          firstTeam={
            findingTeam("E", 0, "quartas", filteredList) ||
            findingTeam("F", 1, "quartas", filteredList)
          }
          secondTeam={
            findingTeam("F", 0, "quartas", filteredList) ||
            findingTeam("E", 1, "quartas", filteredList)
          }
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(firstTeam, secondTeam, "SEMI-SELECTION", dispatch)
          }
        />

        <_SingleMatch
          position="semi"
          margin="4.1%"
          justify="space-between"
          firstTeam={
            findingTeam("G", 0, "quartas", filteredList) ||
            findingTeam("H", 1, "quartas", filteredList)
          }
          secondTeam={
            findingTeam("H", 0, "quartas", filteredList) ||
            findingTeam("G", 1, "quartas", filteredList)
          }
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(firstTeam, secondTeam, "SEMI-SELECTION", dispatch)
          }
        />
      </HStack>
    </Stack>
  );
};

export default _Quartas;
