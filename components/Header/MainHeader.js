import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const MainHeader = () => {
  return (
    <Box>
      <Heading
        w="100%"
        textAlign="center"
        fontSize={["48px", "56px", "64px", "72px"]}
      >
        World Cup 2022
      </Heading>
      <Text
        w="100%"
        fontWeight="200"
        fontSize={["32px", "32px", "40px", "48px"]}
        textAlign="center"
        fontFamily="Arial"
      >
        Simulator
      </Text>
    </Box>
  );
};

export default MainHeader;
