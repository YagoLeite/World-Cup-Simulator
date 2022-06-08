import React from "react";
import _GroupTable from "./_GroupTable";
import { Grid, VStack } from "@chakra-ui/react";
import GroupTable from "./GroupTable";

const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Groups = () => {
  return (
    <VStack w="100%" color="white" bg="gray.700" px={["18px"]}>
      <Grid
        px={["10px", "50px", "140px"]}
        pt={["15px", "36px"]}
        gridTemplateColumns="repeat(auto-fit, minmax(290px, 1fr))"
        gap={["24px", "95px"]}
        w="100%"
        maxW="1300px"
      >
        {/* {a &&
          groups.map((group, index) => (
            <_GroupTable key={index} group={group} />
          ))} */}
        {groups.map((group, index) => {
          return <GroupTable group={group} key={index} />;
        })}
      </Grid>
    </VStack>
  );
};

export default Groups;
