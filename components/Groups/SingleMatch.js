import { Flex, Input, Box } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";

const SingleMatch = (props) => {
  const { state, dispatch } = CupState();
  console.log(props);

  return (
    <Flex>
      <Box>{props.first.name} </Box>
      <Input />
      X
      <Input />
      <Box>{props.second.name} </Box>
    </Flex>
  );
};

export default SingleMatch;
