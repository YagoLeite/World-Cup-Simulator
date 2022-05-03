import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const MainHeader = () => {
  return (
    <Box>
      <Heading w="100%" textAlign="center" fontSize="72">
        World Cup 2022
      </Heading>
      <Text
        w="100%"
        fontWeight="200"
        fontSize={["48"]}
        textAlign="center"
        fontFamily="heading"
      >
        Simulator
      </Text>
    </Box>
  );
};

export default MainHeader;
