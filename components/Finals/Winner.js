import { Image, Box } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";

const Winner = () => {
  const { state } = CupState();
  console.log(state.groupState.find((item) => item.winner));

  return (
    <Box>
      {state.groupState.find((item) => item.winner) && (
        <Image src={state.groupState.find((item) => item.winner).flag} />
      )}
    </Box>
  );
};

export default Winner;
