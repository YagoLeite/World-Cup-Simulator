import React, { useState } from "react";
import GroupTable from "./GroupTable";
import GroupGames from "./GroupGames";
import { Button } from "@chakra-ui/react";
import { CupState } from "../../context/Context";

const Groups = () => {
  const { state, dispatch } = CupState();
  const [group, setGroup] = useState([Object.values(state.groupA), "groupA"]);
  return (
    <div>
      <Button onClick={() => setGroup([Object.values(state.groupA), "groupA"])}>
        A
      </Button>
      <Button onClick={() => setGroup([Object.values(state.groupB), "groupB"])}>
        B
      </Button>
      <GroupTable group={group} />
      <GroupGames group={group} />
    </div>
  );
};

export default Groups;
