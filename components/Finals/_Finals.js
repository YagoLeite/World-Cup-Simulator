import { HStack } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import _SingleMatch from "./_SingleMatch";
import { mata_mata_Handler } from "../functions";

const _Finals = () => {
  const { state, dispatch } = CupState();
  const findFinal = state.groupState.filter((item) => item.final);
  return (
    <HStack bg="gray.100">
      <_SingleMatch
        firstTeam={findFinal[0]}
        secondTeam={findFinal[1]}
        onClick={(firstTeam, secondTeam) =>
          mata_mata_Handler(firstTeam, secondTeam, "WINNER-SELECTION", dispatch)
        }
        // onClick={() => console.log("oi")}
      />
    </HStack>
  );
};

export default _Finals;
