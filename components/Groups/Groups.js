import React, { useEffect, useState } from "react";
import _GroupTable from "./_GroupTable";
import { Grid, VStack } from "@chakra-ui/react";

const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Groups = () => {
  const [a, setA] = useState(false);
  useEffect(() => {
    setA(true);
  }, []);

  return (
    <VStack w="100%" color="white" bg="gray.700">
      <Grid
        px={["10px", "50px", "140px"]}
        pt={["15px", "36px"]}
        gridTemplateColumns="repeat(auto-fit, minmax(330px, 1fr))"
        gap={["24px", "95px"]}
        w="100%"
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
