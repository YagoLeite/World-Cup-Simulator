import { Box, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import _Quartas from "./_Quartas";
import Oitavas from "./Oitavas";
import SemiFinals from "./SemiFinals";
import _Finals from "./_Finals";
import Winner from "./Winner";
import MyButton from "../MyButton";
import OitavasMobile from "./Mobile/OitavasMobile";
import QuartasMobile from "./Mobile/OitavasMobile";
import SemiFinalsMobile from "./Mobile/SemiFinalsMobile";
import FinalsMobile from "./Mobile/FinalsMobile";

const Finals = () => {
  const { dispatch } = CupState();
  const test = useBreakpointValue({ base: "outline", md: "solid" });
  console.log(test);

  return (
    <Box>
      {test === "solid" && (
        <Box px="1%">
          <Oitavas />
          <_Quartas />
          <SemiFinals />
          <_Finals />
          <Winner />
          <MyButton
            color1={"#0BFA1B"}
            color2={"green.200"}
            color3={"green.300"}
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear
          </MyButton>
        </Box>
      )}
      {test === "outline" && (
        <Box>
          <OitavasMobile />
          <QuartasMobile />
          <SemiFinalsMobile />
          <FinalsMobile />
        </Box>
      )}
    </Box>
  );
};

export default Finals;
