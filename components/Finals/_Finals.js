import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import _SingleMatch from "./_SingleMatch";
import { mata_mata_Handler } from "../functions";

const _Finals = () => {
  const { state, dispatch } = CupState();
  const findFinal = (a, b, c, d, e, f, g, h) =>
    state.groupState
      .filter((item) => item.final)
      .find(
        (item) =>
          (item.group === a && item.index === 0) ||
          (item.group === b && item.index === 0) ||
          (item.group === c && item.index === 0) ||
          (item.group === d && item.index === 0) ||
          (item.group === e && item.index === 1) ||
          (item.group === f && item.index === 1) ||
          (item.group === g && item.index === 1) ||
          (item.group === h && item.index === 1)
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
          firstTeam={findFinal("A", "C", "E", "G", "B", "D", "F", "H")}
          secondTeam={findFinal("B", "D", "F", "H", "A", "C", "E", "G")}
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
