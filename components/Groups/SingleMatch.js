import { Flex, Input, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CupState } from "../../context/Context";

const SingleMatch = (props) => {
  const { state, dispatch } = CupState();
  const [goalsA, setGoalsA] = useState(0);
  const [goalsB, setGoalsB] = useState(0);

  const goalAChangeHandler = (event) => setGoalsA(event.target.value);
  const goalBChangeHandler = (event) => setGoalsB(event.target.value);

  useEffect(() => {
    // dispatch({
    //   type: "SCORE-UPDATE",
    //   payload: {
    //     scoringTeam: props.first.name,
    //     receivingTeam: props.second.name,
    //     value: goalsA,
    //   },
    // });
    // dispatch({
    //   type: "SCORE-UPDATE",
    //   payload: {
    //     scoringTeam: props.second.name,
    //     receivingTeam: props.first.name,
    //     value: goalsB,
    //   },
    // });
  }, [goalsA, goalsB]);

  return (
    <Flex>
      <Box>{props.first.name} </Box>
      <Input onChange={goalAChangeHandler} />
      X
      <Input onChange={goalBChangeHandler} />
      <Box>{props.second.name} </Box>
    </Flex>
  );
};

export default SingleMatch;
