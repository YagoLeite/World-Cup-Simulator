import { Box } from "@chakra-ui/react";
import React from "react";
import SingleMatch from "./SingleMatch";

const GroupGames = (props) => {
  return (
    <Box w="500px">
      <SingleMatch
        group={props.group[1]}
        first={props.group[0][0]}
        second={props.group[0][1]}
      />
      <SingleMatch
        group={props.group[1]}
        first={props.group[0][2]}
        second={props.group[0][3]}
      />
      <SingleMatch
        group={props.group[1]}
        first={props.group[0][0]}
        second={props.group[0][2]}
      />
      <SingleMatch
        group={props.group[1]}
        first={props.group[0][1]}
        second={props.group[0][3]}
      />
      <SingleMatch
        group={props.group[1]}
        first={props.group[0][0]}
        second={props.group[0][3]}
      />
      <SingleMatch
        group={props.group[1]}
        first={props.group[0][1]}
        second={props.group[0][2]}
      />
    </Box>
  );
};

export default GroupGames;
