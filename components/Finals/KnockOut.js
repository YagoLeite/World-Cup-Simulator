import { Box } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import _Quartas from "./_Quartas";
import Oitavas from "./Oitavas";
import SemiFinals from "./SemiFinals";
import _Finals from "./_Finals";
import Winner from "./Winner";
import MyButton from "../MyButton";

const Finals = () => {
  const { dispatch } = CupState();

  return (
    <Box bg="yellow">
      <Oitavas />;
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
  );
};

export default Finals;
