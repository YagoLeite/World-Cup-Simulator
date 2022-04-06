import React from "react";
import GroupTable from "./GroupTable";
import { Button } from "@chakra-ui/react";
import { CupState } from "../../context/Context";
import Finals from "../Finals/Finals";

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
      <Button onClick={() => dispatch({ type: "GROUP-UPDATE", value: "C" })}>
        C
      </Button>
      <Button onClick={() => dispatch({ type: "GROUP-UPDATE", value: "D" })}>
        D
      </Button>
      <Button onClick={() => dispatch({ type: "GROUP-UPDATE", value: "E" })}>
        E
      </Button>
      <Button onClick={() => dispatch({ type: "GROUP-UPDATE", value: "F" })}>
        F
      </Button>

      <Button onClick={() => dispatch({ type: "GROUP-UPDATE", value: "G" })}>
        G
      </Button>
      <Button onClick={() => dispatch({ type: "GROUP-UPDATE", value: "H" })}>
        H
      </Button>
      <GroupTable />
      <Finals />
    </div>
  );
};

export default Groups;
