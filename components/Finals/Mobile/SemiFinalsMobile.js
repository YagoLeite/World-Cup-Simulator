import React from "react";
import SingleMatchMobile from "./SingleMatchMobile";
import { Stack, Text, StackDivider, Button, Flex } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { mata_mata_Handler } from "../../functions";
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
      px="3%"
    >
      <Flex w="100%" justifyContent="space-between">
        <Flex
          onClick={() => props.onNext("quartas")}
          alignItems="center"
          gap={1.5}
        >
          <ArrowLeftIcon color="gray.600" />
          <p>Quartas</p>
        </Flex>
        <Text>Semi</Text>
        <Flex
          onClick={() => props.onNext("final")}
          alignItems="center"
          gap={1.5}
        >
          <p>Final</p>
          <ArrowRightIcon color="gray.600" />
        </Flex>
      </Flex>
      <Stack
        w="100%"
        divider={
          <StackDivider alignSelf="center" w="80%" borderColor="gray.500" />
        }
      >
        <SingleMatchMobile
          position="final"
          justify="space-around"
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
