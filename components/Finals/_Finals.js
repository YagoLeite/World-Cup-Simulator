import { HStack, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CupState } from "../../context/Context";
import _SingleMatch from "./_SingleMatch";
import { mata_mata_Handler } from "../functions";
import Winner from "./Winner";

import { motion } from "framer-motion";

const _Finals = () => {
  const { getButtonProps, getDisclosureProps, isOpen, onOpen, onClose } =
    useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);
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

  const winner = state.groupState.find((item) => item.winner);

  // useEffect(() => {
  //   if (!winner) return;
  //   onOpen();
  // }, [winner]);

  return (
    <Stack
      pt="1%"
      w="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text pt="1%">Final</Text>
      <HStack w="100%" justifyContent="space-evenly">
        <_SingleMatch
          position="winner"
          justify="space-between"
          margin="22.7%"
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
      </HStack>
    </Stack>
  );
};

export default _Finals;
