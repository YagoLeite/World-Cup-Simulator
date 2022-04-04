import { Flex, Input, Box } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";

const SingleMatch = (props) => {
  const { state, dispatch } = CupState();

  const scoreChangeHandler = (event, name) => {
    // dispatch({
    //   type: "SCORE-UPDATE",
    //   value: event.target.value,
    //   group: props.group,
    // });
    console.log(event, name);
  };
  return (
    <Flex>
      <Box>{props.first.name}</Box>
      <Input
        onChange={(event) => scoreChangeHandler(event, props.first.name)}
      />
      X
      <Input
        onChange={(event) => scoreChangeHandler(event, props.second.name)}
      />
      <Box>{props.second.name}</Box>
    </Flex>
  );
};

export default SingleMatch;
