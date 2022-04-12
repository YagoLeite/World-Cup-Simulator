import { HStack } from "@chakra-ui/react";
import React from "react";
import MyButton from "./MyButton";
import { CupState } from "../context/Context";

export const Header = () => {
  const { dispatch } = CupState();
  return (
    <HStack>
      {[
        { content: "Fase De Grupos", ui: "groups" },
        { content: "Finais", ui: "finals" },
      ].map((item, key) => {
        return (
          <MyButton
            color1={"#0BFA1B"}
            color2={"green.200"}
            color3={"green.300"}
            key={key}
            onClick={() => dispatch({ type: "UI-UPDATE", value: item.ui })}
          >
            {item.content}
          </MyButton>
        );
      })}
    </HStack>
  );
};
