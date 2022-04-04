import React, { useState } from "react";
import GroupTable from "./GroupTable";
import GroupGames from "./GroupGames";
import { Button } from "@chakra-ui/react";
import { CupState } from "../../context/Context";

const Groups = () => {
  const { state, dispatch } = CupState();
  const [group, setGroup] = useState(state.groupA);
  return (
    <div>
      <Button onClick={() => setGroup(state.groupA)}>A</Button>
      <Button onClick={() => setGroup(state.groupB)}>B</Button>
      <GroupTable group={group} />
      <GroupGames />
    </div>
  );
};

export default Groups;
