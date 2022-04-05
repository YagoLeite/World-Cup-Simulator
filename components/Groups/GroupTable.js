import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";

const GroupTable = () => {
  const { state } = CupState();
  const filteredList = state.groupState.filter(
    (country) => country.group === state.group
  );

  return (
    <Box>
      {filteredList.map((country, index) => (
        <Flex gap={2} key={index}>
          <Text>{country.name} </Text>
          <Text>{country.points} </Text>
          <Text>{country.won} </Text>
          <Text>{country.draw}</Text>
          <Text>{country.lost} </Text>
          <Text>{country.goalsFor} </Text>
          <Text>{country.goalsAgainst} </Text>
          <Text>{country.saldo} </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default GroupTable;
