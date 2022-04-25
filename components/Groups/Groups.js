import React, { useEffect, useState } from "react";
import GroupTable from "./GroupTable";
import { Button, Grid, VStack } from "@chakra-ui/react";
import { CupState } from "../../context/Context";

const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Groups = () => {
  const { state, dispatch } = CupState();
  const [a, setA] = useState(false);
  useEffect(() => {
    setA(true);
  }, []);

  return (
    <Grid
      p="3%"
      gridTemplateColumns="repeat(auto-fit, minmax(290px, 1fr))"
      // gridTemplateColumns={"repeat(autofit, minmax(290px, 1fr))"}
      gap={2}
    >
      {a &&
        groups.map((group, index) => <GroupTable key={index} group={group} />)}
    </Grid>
  );
};

export default Groups;
