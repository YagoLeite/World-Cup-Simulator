import { Box, Text } from "@chakra-ui/react";
import React from "react";

const SingleMatch = (props) => {
  return (
    <Box>
      <Text>{props.firstTeam.name} </Text>
      <Text>{props.secondTeam.name} </Text>
    </Box>
  );
};

export default SingleMatch;
