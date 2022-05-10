import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { CupState } from "../../context/Context";
import _Quartas from "./_Quartas";
import Oitavas from "./Oitavas";
import SemiFinals from "./SemiFinals";
import _Finals from "./_Finals";
import Winner from "./Winner";
import OitavasMobile from "./Mobile/OitavasMobile";
import QuartasMobile from "./Mobile/QuartasMobile";
import SemiFinalsMobile from "./Mobile/SemiFinalsMobile";
import FinalsMobile from "./Mobile/FinalsMobile";

const Finals = () => {
  const [knockOut, setKnockOut] = useState("oitavas");
  const { state, dispatch } = CupState();
  const test = useBreakpointValue({ lg: "solid", xl: "solid" });

  const onNext = (next) => {
    setKnockOut(next);
  };

  const winner = state.groupState.find((item) => item.winner);
  console.log(winner);

  return (
    <VStack bg="gray.700" color="white" w="100%" minH="100vh">
      {test === "solid" && (
        <Box w="100%" maxW="1440px" px="1%">
          <Oitavas />
          <_Quartas />
          <SemiFinals />
          <_Finals />
          {winner && <Winner />}
        </Box>
      )}
      {test !== "solid" && (
        <Box w="100%">
          {knockOut === "oitavas" && <OitavasMobile onNext={onNext} />}
          {knockOut === "quartas" && <QuartasMobile onNext={onNext} />}
          {knockOut === "semi" && <SemiFinalsMobile onNext={onNext} />}
          {knockOut === "final" && <FinalsMobile onNext={onNext} />}
        </Box>
      )}
    </VStack>
  );
};

export default Finals;
