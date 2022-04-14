import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import _SingleMatch from "./_SingleMatch";
import { mata_mata_Handler } from "../functions";

const _Finals = () => {
  const { state, dispatch } = CupState();
  const findFinal = state.groupState.filter((item) => item.final);
  const findFinalOne = state.groupState.find(
    (item) =>
      (item.final && item.group === "A") ||
      (item.final && item.group === "B") ||
      (item.final && item.group === "C") ||
      (item.final && item.group === "D")
  );
  const findFinalTwo = state.groupState.find(
    (item) =>
      (item.final && item.group === "E") ||
      (item.final && item.group === "F") ||
      (item.final && item.group === "G") ||
      (item.final && item.group === "H")
  );

  return (
    <Stack
      pt="1%"
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text pt="1%">Final</Text>
      <HStack w="100%" justifyContent="space-evenly">
        <_SingleMatch
          position="winner"
          justify="space-between"
          margin="22.7%"
          firstTeam={findFinalOne}
          secondTeam={findFinalTwo}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "WINNER-SELECTION",
              dispatch
            )
          }
        />
      </HStack>
    </Stack>
  );
};

export default _Finals;
