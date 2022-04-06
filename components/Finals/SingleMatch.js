import { Box, Text } from "@chakra-ui/react";
import React from "react";

const SingleMatch = (props) => {
  return (
    <Box>
      <Text cursor="pointer" onClick={() => props.onClick(props.firstTeam)}>
        {props.firstTeam?.name}
      </Text>
      <Text cursor="pointer" onClick={() => props.onClick(props.secondTeam)}>
        {props.secondTeam?.name}
      </Text>
    </Box>
  );
};

export default SingleMatch;
