import React from "react";
import { findingTeam, mata_mata_Handler, filteringByIndex } from "../functions";
import _SingleMatch from "./_SingleMatch";
import { CupState } from "../../context/Context";
import { Stack, Text, StackDivider } from "@chakra-ui/react";

const Oitavas = () => {
  const { state, dispatch } = CupState();
  const filteredList = filteringByIndex(state.groupState, 1);
  return (
    <Stack
      py="1%"
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text py="1%">Playoffs</Text>
      <Stack
        direction="row"
        w="100%"
        justifyContent="space-evenly"
        divider={<StackDivider borderColor="gray.500" />}
      >
        <_SingleMatch
          position="quartas"
          justify="space-evenly"
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
          position="quartas"
          justify="space-evenly"
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
          position="quartas"
          justify="space-evenly"
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
          position="quartas"
          justify="space-evenly"
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
          position="quartas"
          justify="space-evenly"
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
          position="quartas"
          justify="space-evenly"
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
          position="quartas"
          justify="space-evenly"
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
          position="quartas"
          justify="space-evenly"
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
      </Stack>
    </Stack>
  );
};

export default Oitavas;
