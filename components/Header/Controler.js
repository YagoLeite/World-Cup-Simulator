import { Text, Flex, Box, VStack } from "@chakra-ui/react";
import React from "react";

const Controler = () => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      direction="column"
      alignContent="center"
      pt="65px"
    >
      <Flex w="100%" justifyContent="center" gap="48px" alignContent="center">
        <Flex className="skewed" w="201px" h="78px" bg="#E36262" color="white">
          <Flex
            className="skewed2"
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            fontSize="32px"
            color="white"
          >
            Groups
          </Flex>
        </Flex>
        <Flex
          fontSize="32px"
          className="skewed"
          w="201px"
          h="78px"
          bg="#E36262"
        >
          <Flex
            className="skewed2"
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            color="white"
          >
            KnockOut
          </Flex>
        </Flex>
      </Flex>
      <VStack pt="18px" w="100%" justifyContent="center">
        <Text>Drag n' drop the teams to select its position</Text>
        <Flex gap="3px">
          <Text>Or</Text>
          <Text color="#E36262">Confirm all</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Controler;
