import React from "react";
import _SingleMatch from "./_SingleMatch";
import { CupState } from "../../context/Context";
import { HStack, Stack, StackDivider, Text } from "@chakra-ui/react";
import { mata_mata_Handler } from "../functions";

const SemiFinals = () => {
  const { state, dispatch } = CupState();
  const findSemi = (a, b) =>
    state.groupState
      .filter((item) => item.semi)
      .find((item) => item.group === a || item.group === b);
  return (
    <Stack
      pt="1%"
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text pt="1%">Semi</Text>
      <HStack
        w="100%"
        divider={<StackDivider borderColor="gray.500" />}
        justifyContent="space-evenly"
      >
        <_SingleMatch
          position="final"
          justify="space-between"
          margin="10.5%"
          firstTeam={findSemi("A", "B")}
          secondTeam={findSemi("C", "D")}
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
          firstTeam={findSemi("E", "F")}
          secondTeam={findSemi("G", "H")}
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
