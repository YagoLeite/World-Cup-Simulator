import React from "react";
import { CupState } from "../../../context/Context";
import { Image, Flex, VStack, Text } from "@chakra-ui/react";

const WinnerMobile = () => {
  const { state } = CupState();
  const winner = state.groupState.find((item) => item.winner);

  return (
    <div>
      {winner !== undefined && (
        <VStack>
          <Text>The winner is {winner.name} </Text>
          <Flex
            borderRadius="50%"
            overflow="hidden"
            w={["100px", "150px"]}
            h={["100px", "150px"]}
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

export default WinnerMobile;
