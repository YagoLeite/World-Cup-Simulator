import React from "react";
import { findingTeam, mata_mata_Handler, filteringByIndex } from "../functions";
import _SingleMatch from "./_SingleMatch";
import { CupState } from "../../context/Context";
import { Flex, HStack, Stack, Text, StackDivider } from "@chakra-ui/react";

const Oitavas = () => {
  const { state, dispatch } = CupState();
  const filteredList = filteringByIndex(state.groupState, 1);
  return (
    <Stack
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text>Oitavas</Text>
      <HStack
        w="100%"
        justifyContent="space-evenly"
        bg="gray.100"
        divider={<StackDivider borderColor="gray.800" />}
      >
        <_SingleMatch
          firstTeam={findingTeam("A", 0, "oitavas", filteredList)}
          secondTeam={findingTeam("B", 1, "oitavas", filteredList)}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "QUARTAS-SELECTION",
              dispatch
            )
          }
        />
        <_SingleMatch
          firstTeam={findingTeam("B", 0, "oitavas", filteredList)}
          secondTeam={findingTeam("A", 1, "oitavas", filteredList)}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "QUARTAS-SELECTION",
              dispatch
            )
          }
        />
        <_SingleMatch
          firstTeam={findingTeam("C", 0, "oitavas", filteredList)}
          secondTeam={findingTeam("D", 1, "oitavas", filteredList)}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "QUARTAS-SELECTION",
              dispatch
            )
          }
        />
        <_SingleMatch
          firstTeam={findingTeam("D", 0, "oitavas", filteredList)}
          secondTeam={findingTeam("C", 1, "oitavas", filteredList)}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "QUARTAS-SELECTION",
              dispatch
            )
          }
        />
        <_SingleMatch
          firstTeam={findingTeam("E", 0, "oitavas", filteredList)}
          secondTeam={findingTeam("F", 1, "oitavas", filteredList)}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "QUARTAS-SELECTION",
              dispatch
            )
          }
        />
        <_SingleMatch
          firstTeam={findingTeam("F", 0, "oitavas", filteredList)}
          secondTeam={findingTeam("E", 1, "oitavas", filteredList)}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "QUARTAS-SELECTION",
              dispatch
            )
          }
        />
        <_SingleMatch
          firstTeam={findingTeam("G", 0, "oitavas", filteredList)}
          secondTeam={findingTeam("H", 1, "oitavas", filteredList)}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "QUARTAS-SELECTION",
              dispatch
            )
          }
        />
        <_SingleMatch
          firstTeam={findingTeam("H", 0, "oitavas", filteredList)}
          secondTeam={findingTeam("G", 1, "oitavas", filteredList)}
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(
              firstTeam,
              secondTeam,
              "QUARTAS-SELECTION",
              dispatch
            )
          }
        />
      </HStack>
    </Stack>
  );
};

export default Oitavas;
