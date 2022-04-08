import React, { useEffect, useState } from "react";
import GroupTable from "./GroupTable";
import { Button, Grid } from "@chakra-ui/react";
import { CupState } from "../../context/Context";
import Finals from "../Finals/Finals";

const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Groups = () => {
  const { state, dispatch } = CupState();
  const [a, setA] = useState(false);
  useEffect(() => {
    setA(true);
  }, []);
  return (
    <div>
      <Grid gridTemplateColumns="repeat(auto-fit, minmax(290px, 1fr))">
        {a && groups.map((group) => <GroupTable group={group} />)}
      </Grid>
      <Finals />
    </div>
  );
};

export default Groups;
