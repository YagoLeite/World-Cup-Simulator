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
    <VStack>
      <Grid
        // gridTemplateColumns={["repeat(2, 290px)", "repeat(4, 290px)"]}
        gridTemplateColumns="repeat(4, minmax(290px, 1fr))"
        gap={3}
      >
        {a && groups.map((group) => <GroupTable group={group} />)}
      </Grid>
    </VStack>
  );
};

export default Groups;
