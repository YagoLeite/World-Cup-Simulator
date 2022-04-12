import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import _SingleMatch from "./_SingleMatch";
import { mata_mata_Handler } from "../functions";

const _Finals = () => {
  const { state, dispatch } = CupState();
  const findFinal = state.groupState.filter((item) => item.final);

  return (
    <Stack
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text>Final</Text>
      <HStack w="100%" justifyContent="space-evenly">
        <_SingleMatch
          justify="space-between"
          margin="22.7%"
          firstTeam={findFinal[0]}
          secondTeam={findFinal[1]}
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
