import React from "react";
import _SingleMatch from "./_SingleMatch";
import { CupState } from "../../context/Context";
import { HStack, Stack, StackDivider, Text } from "@chakra-ui/react";
import { mata_mata_Handler } from "../functions";

const SemiFinals = () => {
  const { state, dispatch } = CupState();
  const findSemi = (a, b, c, d) =>
    state.groupState
      .filter((item) => item.semi)
      .find(
        (item) =>
          (item.group === a && item.index === 0) ||
          (item.group === b && item.index === 0) ||
          (item.group === c && item.index === 1) ||
          (item.group === d && item.index === 1)
      );
  return (
    <Stack
      pt="1%"
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text pt="1%">Semifinals</Text>
      <HStack
        w="100%"
        divider={<StackDivider borderColor="gray.500" />}
        justifyContent="space-evenly"
      >
        <_SingleMatch
          position="final"
          justify="space-between"
          margin="10.5%"
          firstTeam={findSemi("A", "C", "B", "D")}
          secondTeam={findSemi("E", "G", "F", "H")}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "FINAL-SELECTION",
              dispatch
            )
          }
        />
        <_SingleMatch
          position="final"
          justify="space-between"
          margin="10.5%"
          firstTeam={findSemi("B", "D", "A", "C")}
          secondTeam={findSemi("F", "H", "G", "E")}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "FINAL-SELECTION",
              dispatch
            )
          }
        />
      </HStack>
    </Stack>
  );
};

export default SemiFinals;
