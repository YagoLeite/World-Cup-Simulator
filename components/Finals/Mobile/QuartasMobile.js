import { Flex, Stack, Text, StackDivider, Button } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";
import SingleMatchMobile from "./SingleMatchMobile";
import {
  findingTeam,
  mata_mata_Handler,
  filteringByIndex,
} from "../../functions";
import { CupState } from "../../../context/Context";

const QuartasMobile = (props) => {
  const { state, dispatch } = CupState();
  const filteredList = filteringByIndex(state.groupState, 1);
  return (
    <Stack
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      p="3%"
    >
      <Flex py="3%" justifyContent="space-between" w="100%">
        <Flex
          w="50px"
          onClick={() => props.onNext("oitavas")}
          alignItems="center"
          gap={1.5}
          cursor="pointer"
        >
          <ArrowLeftIcon color="gray.600" />
          <p>Oitavas</p>
        </Flex>
        <Text>Quartas</Text>
        <Flex
          mr="2%"
          w="50px"
          cursor="pointer"
          onClick={() => props.onNext("semi")}
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
        justifyContent="space-around"
        divider={
          <StackDivider alignSelf="center" w="80%" borderColor="gray.500" />
        }
      >
        <SingleMatchMobile
          position="semi"
          justify="space-around"
          firstTeam={
            findingTeam("A", 0, "quartas", filteredList) ||
            findingTeam("B", 1, "quartas", filteredList)
          }
          secondTeam={
            findingTeam("B", 0, "quartas", filteredList) ||
            findingTeam("A", 1, "quartas", filteredList)
          }
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(firstTeam, secondTeam, "SEMI-SELECTION", dispatch)
          }
        />
        <SingleMatchMobile
          position="semi"
          justify="space-around"
          firstTeam={
            findingTeam("C", 0, "quartas", filteredList) ||
            findingTeam("D", 1, "quartas", filteredList)
          }
          secondTeam={
            findingTeam("D", 0, "quartas", filteredList) ||
            findingTeam("C", 1, "quartas", filteredList)
          }
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(firstTeam, secondTeam, "SEMI-SELECTION", dispatch)
          }
        />

        <SingleMatchMobile
          position="semi"
          justify="space-around"
          firstTeam={
            findingTeam("E", 0, "quartas", filteredList) ||
            findingTeam("F", 1, "quartas", filteredList)
          }
          secondTeam={
            findingTeam("F", 0, "quartas", filteredList) ||
            findingTeam("E", 1, "quartas", filteredList)
          }
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(firstTeam, secondTeam, "SEMI-SELECTION", dispatch)
          }
        />

        <SingleMatchMobile
          position="semi"
          justify="space-around"
          firstTeam={
            findingTeam("G", 0, "quartas", filteredList) ||
            findingTeam("H", 1, "quartas", filteredList)
          }
          secondTeam={
            findingTeam("H", 0, "quartas", filteredList) ||
            findingTeam("G", 1, "quartas", filteredList)
          }
          onClick={(firstTeam, secondTeam) =>
            mata_mata_Handler(firstTeam, secondTeam, "SEMI-SELECTION", dispatch)
          }
        />
      </Stack>
    </Stack>
  );
};

export default QuartasMobile;
