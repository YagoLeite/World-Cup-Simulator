import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const GroupTable = (props) => {
  return (
    <div>
      <Box>
        {props.group?.map((country, index) => (
          <Flex gap={2} key={index}>
            <Box>{country.name}</Box>
            <Box>{country.points} </Box>
            <Box>{country.won} </Box>
            <Box>{country.lost} </Box>
          </Flex>
        ))}
      </Box>
    </div>
  );
};

export default GroupTable;
