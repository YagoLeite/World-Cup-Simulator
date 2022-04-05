import React, { useState } from "react";
import GroupTable from "./GroupTable";
import GroupGames from "./GroupGames";
import { Button } from "@chakra-ui/react";
import { CupState } from "../../context/Context";

const Groups = () => {
  const { state, dispatch } = CupState();
  return (
    <div>
      <Button onClick={() => dispatch({ type: "GROUP-UPDATE", value: "A" })}>
        A
      </Button>
      <Button onClick={() => dispatch({ type: "GROUP-UPDATE", value: "B" })}>
        B
      </Button>
      <GroupTable />
      <GroupGames />
    </div>
  );
};

export default Groups;
