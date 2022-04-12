import { Box, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import SingleMatch from "./SingleMatch";
import _Quartas from "./_Quartas";
import Oitavas from "./Oitavas";
import SemiFinals from "./SemiFinals";

import { findingTeam, mata_mata_Handler, filteringByIndex } from "../functions";

const Finals = () => {
  const { state, dispatch } = CupState();
  const filteredList = filteringByIndex(state.groupState, 1);

  return (
    <Box>
      <Oitavas />;
      <_Quartas />
      <SemiFinals />
    </Box>
  );
};

export default Finals;
