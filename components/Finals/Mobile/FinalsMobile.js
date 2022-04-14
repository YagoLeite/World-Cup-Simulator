import React from "react";
import SingleMatchMobile from "./SingleMatchMobile";
import { Flex, Stack, Text, Button } from "@chakra-ui/react";
import { mata_mata_Handler } from "../../functions";
import { CupState } from "../../../context/Context";

const FinalsMobile = (props) => {
  const { state, dispatch } = CupState();
  const findFinal = state.groupState.filter((item) => item.final);
  const findFinalOne = state.groupState.find(
    (item) =>
      (item.final && item.group === "A") ||
      (item.final && item.group === "B") ||
      (item.final && item.group === "C") ||
      (item.final && item.group === "D")
  );
  const findFinalTwo = state.groupState.find(
    (item) =>
      (item.final && item.group === "E") ||
      (item.final && item.group === "F") ||
      (item.final && item.group === "G") ||
      (item.final && item.group === "H")
  );

  return (
    <Stack
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex>
        <Button onClick={() => props.onNext("semi")}>Semi-Finals</Button>
        <Text>Final</Text>
      </Flex>
      <Stack w="100%">
        <SingleMatchMobile
          position="winner"
          justify="space-around"
          firstTeam={findFinalOne}
          secondTeam={findFinalTwo}
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
    </Stack>
  );
};

export default FinalsMobile;
