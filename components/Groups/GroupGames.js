import { Box } from "@chakra-ui/react";
import React from "react";
import SingleMatch from "./SingleMatch";
import { CupState } from "../../context/Context";

const GroupGames = () => {
  const { state } = CupState();
  const filteredList = state.groupState.filter(
    (country) => country.group === state.group
  );
  console.log(filteredList[0]);
  return (
    <Box w="700px">
      <SingleMatch first={filteredList[0]} second={filteredList[1]} />
      <SingleMatch first={filteredList[2]} second={filteredList[3]} />

      <SingleMatch first={filteredList[0]} second={filteredList[2]} />
      <SingleMatch first={filteredList[3]} second={filteredList[1]} />

      <SingleMatch first={filteredList[0]} second={filteredList[3]} />
      <SingleMatch first={filteredList[2]} second={filteredList[1]} />
    </Box>
  );
};

export default GroupGames;
