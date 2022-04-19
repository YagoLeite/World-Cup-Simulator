import { Image, Flex } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";

const Winner = () => {
  const { state } = CupState();
  console.log(state.groupState.find((item) => item.winner));

  return (
    <Flex
      borderRadius="50%"
      overflow="hidden"
      w="300px"
      h="300px"
      boxShadow="dark-lg"
    >
      {state.groupState.find((item) => item.winner) !== undefined && (
        <Image
          objectFit="cover"
          boxShadow="lg"
          alt="Winners flag"
          src={state.groupState.find((item) => item.winner).flag}
        />
      )}
    </Flex>
  );
};

export default Winner;
