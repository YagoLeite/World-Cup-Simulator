import { Image, Flex, Text, Box, VStack } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";

const Winner = () => {
  const { state } = CupState();
  const winner = state.groupState.find((item) => item.winner);

  return (
    <div>
      {winner !== undefined && (
        <VStack justifyContent="center" alignItems="center">
          <Text>The winner is {winner.name}</Text>
          <Flex
            borderRadius="50%"
            overflow="hidden"
            w="300px"
            h="300px"
            boxShadow="lg"
            borderColor="#c9c9c9"
            borderWidth="1px"
          >
            <Image objectFit="cover" alt="Winners flag" src={winner.flag} />
          </Flex>
        </VStack>
      )}
    </div>
  );
};

export default Winner;
