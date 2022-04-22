import React from "react";
import { CupState } from "../../../context/Context";
import { Image, Flex, VStack, Text } from "@chakra-ui/react";

const WinnerMobile = () => {
  const { state } = CupState();
  const winner = state.groupState.find((item) => item.winner);

  if (winner) {
    const trophies = new Array(winner.wins + 1).fill(1);
  }

  return (
    <div>
      {winner !== undefined && (
        <VStack>
          <Text>The winner is {winner.name} </Text>
          {/* <Text>
            {winner.name} has won {winner.wins + 1} times
          </Text> */}
          <Flex>
            {trophies.map((item, index) => (
              <Flex key={index} w="30px" h="30px" overflow="hidden">
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
