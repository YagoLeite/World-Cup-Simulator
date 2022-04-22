import { Image, Flex, Text, Box, VStack } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import trophy from "../../styles/images/trophy.png";

const Winner = () => {
  const { state } = CupState();
  const winner = state.groupState.find((item) => item.winner);

  if (winner) {
    const trophies = new Array(winner.wins + 1).fill(1);
  }

  return (
    <div>
      {winner !== undefined && (
        <VStack justifyContent="center" alignItems="center">
          <Text>The winner is {winner.name}</Text>
          <Flex>
            {trophies.map((item, index) => (
              <Flex w="30px" h="30px" overflow="hidden">
                <Image
                  objectFit="cover"
                  src="https://www.seekpng.com/png/full/357-3576996_world-cup-trophy.png"
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
    </div>
  );
};

export default Winner;
