import {
  Box,
  useBreakpointValue,
  useDisclosure,
  Flex,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CupState } from "../../context/Context";
import _Quartas from "./_Quartas";
import Oitavas from "./Oitavas";
import SemiFinals from "./SemiFinals";
import _Finals from "./_Finals";
import Winner from "./Winner";
import MyButton from "../MyButton";
import OitavasMobile from "./Mobile/OitavasMobile";
import QuartasMobile from "./Mobile/QuartasMobile";
import SemiFinalsMobile from "./Mobile/SemiFinalsMobile";
import FinalsMobile from "./Mobile/FinalsMobile";

const Finals = () => {
  const [knockOut, setKnockOut] = useState("oitavas");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state, dispatch } = CupState();
  const test = useBreakpointValue({ lg: "solid", xl: "solid" });

  const onNext = (next) => {
    setKnockOut(next);
  };

  // const winner = state.groupState.find((item) => item.winner);

  // useEffect(() => {
  //   if (!winner) return;
  //   onOpen();
  // }, [winner]);

  return (
    <VStack minH="100vh" w="100%">
      {test === "solid" && (
        <Box px="1%">
          <Oitavas />
          <_Quartas />
          <SemiFinals />
          <_Finals />
          <Flex justifyContent="center" alignItems="center">
            {/* <Winner /> */}
          </Flex>
        </Box>
      )}
      {test !== "solid" && (
        <Box>
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
