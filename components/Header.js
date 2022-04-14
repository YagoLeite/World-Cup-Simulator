import { Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import MyButton from "./MyButton";
import { CupState } from "../context/Context";

export const Header = () => {
  const { dispatch } = CupState();
  return (
    <VStack>
      <Heading>Simulador da Copa 2022</Heading>
      <HStack w="100%" justifyContent="space-around">
        {[
          { content: "Fase De Grupos", ui: "groups" },
          { content: "Finais", ui: "finals" },
        ].map((item, key) => {
          return (
            <MyButton
              color1={"green.50"}
              color2={"#0BFA1B"}
              color3={"green.300"}
              key={key}
              onClick={() => dispatch({ type: "UI-UPDATE", value: item.ui })}
            >
              {item.content}
            </MyButton>
          );
        })}
      </HStack>
    </VStack>
  );
};
