import { Box, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
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
  const { dispatch } = CupState();
  const test = useBreakpointValue({ base: "outline", md: "solid" });
  console.log(test);

  const onNext = (next) => {
    setKnockOut(next);
  };

  return (
    <Box minH="100vh">
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
          {knockOut === "oitavas" && <OitavasMobile onNext={onNext} />}
          {knockOut === "quartas" && <QuartasMobile onNext={onNext} />}
          {knockOut === "semi" && <SemiFinalsMobile onNext={onNext} />}
          {knockOut === "final" && <FinalsMobile onNext={onNext} />}
        </Box>
      )}
    </Box>
    // <Box px="1%">
    //   <Oitavas />
    //   <_Quartas />
    //   <SemiFinals />
    //   <_Finals />
    //   <Winner />
    //   <MyButton
    //     color1={"#0BFA1B"}
    //     color2={"green.200"}
    //     color3={"green.300"}
    //     onClick={() => dispatch({ type: "CLEAR" })}
    //   >
    //     Clear
    //   </MyButton>
    // </Box>
  );
};

export default Finals;
