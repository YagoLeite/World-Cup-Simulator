import React from "react";
import SingleMatchMobile from "./SingleMatchMobile";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Stack, Text, StackDivider, Button, Flex } from "@chakra-ui/react";
import {
  findingTeam,
  mata_mata_Handler,
  filteringByIndex,
} from "../../functions";
import { CupState } from "../../../context/Context";

const OitavasMobile = (props) => {
  const { state, dispatch } = CupState();
  const filteredList = filteringByIndex(state.groupState, 1);
  return (
    <Stack
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      px="3%"
    >
      <Flex py="3%" w="100%" position="relative" cursor="pointer">
        <Text left="44%" position="absolute">
          Oitavas
        </Text>
        <Flex
          right="0"
          position="absolute"
          onClick={() => props.onNext("quartas")}
          alignItems="center"
          gap={1.5}
        >
          <p>Semi</p>
          <ArrowRightIcon color="gray.600" />
        </Flex>
      </Flex>
      <Stack
        direction="column"
        w="100%"
        alignItems="center"
        justifyContent="center"
        divider={
          <StackDivider alignSelf="center" w="80%" borderColor="gray.500" />
        }
      >
        <SingleMatchMobile
          position="quartas"
          justify="space-around"
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
        <SingleMatchMobile
          position="quartas"
          justify="space-around"
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
        <SingleMatchMobile
          position="quartas"
          justify="space-around"
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
        <SingleMatchMobile
          position="quartas"
          justify="space-around"
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
        <SingleMatchMobile
          position="quartas"
          justify="space-around"
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
        <SingleMatchMobile
          position="quartas"
          justify="space-around"
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
        <SingleMatchMobile
          position="quartas"
          justify="space-around"
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
        <SingleMatchMobile
          position="quartas"
          justify="space-around"
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

export default OitavasMobile;
