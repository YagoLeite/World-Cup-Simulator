import { Image, Flex, Text, Box, VStack } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";

const Winner = () => {
  const { state } = CupState();
  const winner = state.groupState.find((item) => item.winner);

  if (winner) {
    const trophies = new Array(winner.wins + 1).fill(1);
  }

  return (
    <VStack w="100%" justifyContent="center" alignItems="center">
      {winner !== undefined && (
        <VStack>
          <Text>The winner is {winner.name}</Text>
          <Flex>
            {trophies.map((item, index) => (
              <Flex
                justifyContent="space-evenly"
                key={index}
                w="70px"
                h="70px"
                overflow="hidden"
              >
                {/* <Image
                  objectFit="cover"
                  src="https://www.pngall.com/wp-content/uploads/2016/04/Trophy-Free-PNG-Image.png"
                /> */}
                <Image
                  objectFit="cover"
                  src="https://www.pngall.com/wp-content/uploads/4/Golden-Cup-PNG-Image.png"
                />
              </Flex>
            ))}
          </Flex>
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
    </VStack>
  );
};

export default Winner;
