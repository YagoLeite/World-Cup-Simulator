import { Box, Text } from "@chakra-ui/react";
import React from "react";

const SingleMatch = (props) => {
  return (
    <Box {...props.config}>
      <Text
        cursor="pointer"
        onClick={() => props.onClick(props.firstTeam, props.secondTeam)}
        {...props.config.firstTeam}
      >
        {props.firstTeam?.name}
      </Text>

      <Text
        cursor="pointer"
        onClick={() => props.onClick(props.secondTeam, props.firstTeam)}
        {...props.config.secondTeam}
      >
        {props.secondTeam?.name}
      </Text>
    </Box>
  );
};

export default SingleMatch;
