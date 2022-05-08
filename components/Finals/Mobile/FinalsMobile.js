import React from "react";
import SingleMatchMobile from "./SingleMatchMobile";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { mata_mata_Handler } from "../../functions";
import { CupState } from "../../../context/Context";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import Winner from "../Winner";

const FinalsMobile = (props) => {
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
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex py={["30px"]} w="100%" justifyContent="space-around">
        <Flex
          w="50px"
          cursor="pointer"
          onClick={() => props.onNext("semi")}
          alignItems="center"
          gap={1.5}
        >
          <ArrowLeftIcon color="gray.600" />
          <p>Semi</p>
        </Flex>
        <Text>Finals</Text>
        <Flex w="50px"></Flex>
      </Flex>
      <Stack w="100%">
        <SingleMatchMobile
          position="winner"
          justify="space-around"
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
      </Stack>
      <Winner />
    </Stack>
  );
};

export default FinalsMobile;
