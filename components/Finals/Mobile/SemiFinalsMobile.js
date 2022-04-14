import React from "react";
import SingleMatchMobile from "./SingleMatchMobile";
import { Stack, Text, StackDivider, Button, Flex } from "@chakra-ui/react";
import {
  findingTeam,
  mata_mata_Handler,
  filteringByIndex,
} from "../../functions";
import { CupState } from "../../../context/Context";

const SemiFinalsMobile = (props) => {
  const { state, dispatch } = CupState();
  const findSemi = (a, b) =>
    state.groupState
      .filter((item) => item.semi)
      .find((item) => item.group === a || item.group === b);
  return (
    <Stack
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex>
        <Button onClick={() => props.onNext("quartas")}>Quartas</Button>
        <Text>Semi</Text>
        <Button onClick={() => props.onNext("final")}>Final</Button>
      </Flex>
      <Stack w="100%" divider={<StackDivider borderColor="gray.500" />}>
        <SingleMatchMobile
          position="final"
          justify="space-around"
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
        <SingleMatchMobile
          position="final"
          justify="space-around"
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
      </Stack>
    </Stack>
  );
};

export default SemiFinalsMobile;
