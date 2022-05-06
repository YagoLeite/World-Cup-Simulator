import React, { useEffect, useState } from "react";
import GroupTable from "./GroupTable";
import _GroupTable from "./_GroupTable";
import { Button, Grid, useToast, VStack } from "@chakra-ui/react";
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
    <VStack>
      <Grid
        px={["10px", "50px", "140px"]}
        pt={["15px", "36px"]}
        gridTemplateColumns="repeat(auto-fit, minmax(330px, 1fr))"
        gap={["95px"]}
        maxW="1440px"
      >
        {a &&
          groups.map((group, index) => (
            <_GroupTable key={index} group={group} />
          ))}
      </Grid>
    </VStack>
  );
};

export default Groups;
