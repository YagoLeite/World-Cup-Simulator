import React from "react";
import SingleMatchMobile from "./SingleMatchMobile";
import { Stack, Text, StackDivider, Button, Flex } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { mata_mata_Handler } from "../../functions";
import { CupState } from "../../../context/Context";

const SemiFinalsMobile = (props) => {
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
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex py={["30px"]} w="100%" justifyContent="space-around">
        <Flex
          w="50px"
          cursor="pointer"
          onClick={() => props.onNext("quartas")}
          alignItems="center"
          gap={1.5}
        >
          <ArrowLeftIcon color="gray.600" />
          <p>Quartas</p>
        </Flex>
        <Text>Semi</Text>
        <Flex
          w="50px"
          cursor="pointer"
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
        <SingleMatchMobile
          position="final"
          justify="space-around"
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
      </Stack>
    </Stack>
  );
};

export default SemiFinalsMobile;
