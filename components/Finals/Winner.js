import { Image, Flex, Text, Box, VStack } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Winner = () => {
  const { state } = CupState();
  const winner = state.groupState.find((item) => item.winner);

  return (
    <VStack
      w="100%"
      pt="24px"
      mb="30px"
      justifyContent="center"
      alignItems="center"
    >
      {winner !== undefined && (
        <VStack gap={["12px", "24px"]}>
          <Text fontSize={"24px"}>The winner is {winner.name}</Text>
          <Flex
            borderRadius="50%"
            overflow="hidden"
            w={["150px", "200px", "300px"]}
            h={["150px", "200px", "300px"]}
            boxShadow="lg"
            borderColor="#c9c9c9"
            borderWidth="1px"
          >
            <Image objectFit="cover" alt="Winners flag" src={winner.flag} />
          </Flex>
          {/* <Flex gap="12px">
            {[...winner.wins, "2022"].map((item, index) => {
              return (
                <VStack key={index}>
                  <Text>{item}</Text>
                  <FontAwesomeIcon icon={faTrophy} />
                </VStack>
              );
            })}
          </Flex> */}
        </VStack>
      )}
    </VStack>
  );
};

export default Winner;
