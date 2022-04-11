import { HStack, Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import MyButton from "./MyButton";

export const Header = () => {
  const scheme = "brand";
  return (
    <HStack>
      <MyButton />
    </HStack>
  );
};
