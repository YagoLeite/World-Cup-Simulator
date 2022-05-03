import React, { useEffect, useState } from "react";
import GroupTable from "./GroupTable";
import _GroupTable from "./_GroupTable";
import { Button, Grid, useToast } from "@chakra-ui/react";
import { CupState } from "../../context/Context";

const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Groups = () => {
  const { state, dispatch } = CupState();
  const [a, setA] = useState(false);
  useEffect(() => {
    setA(true);
  }, []);

  const toast = useToast();

  return (
    <Grid
      px="140px"
      pt="36px"
      gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))"
      // gridTemplateColumns={"repeat(autofit, minmax(290px, 1fr))"}
      gap={["95px"]}
    >
      {a &&
        groups.map((group, index) => <_GroupTable key={index} group={group} />)}
    </Grid>
  );
};

export default Groups;
