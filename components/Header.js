import { HStack, Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import MyButton from "./MyButton";

export const Header = () => {
  const scheme = "brand";
  const step1 = useColorModeValue("600", "300");
  const step2 = useColorModeValue("500", "400");
  const step3 = useColorModeValue("300", "500");
  return (
    <HStack>
      {/* <Button
        // bgColor={`${scheme}.${step1}`}
        bgColor="green.100"
        color="white"
        fontWeight="medium"
        rounded="md"
        shadow="base"
        size={"md"}
        _focus={{
          outline: "none",
        }}
        transition="background 0.8s"
        backgroundPosition="center"
        _hover={{
          bgColor: "green.300",
          bgGradient: `radial(circle, transparent 1%, green.300 1%)`,
          bgPos: "center",
          backgroundSize: "15000%",
        }}
        _active={{
          bgColor: "green.600",
          backgroundSize: "100%",
          transition: "background 0s",
        }}
      >
        Click Me
      </Button> */}
      <MyButton />
    </HStack>
  );
};
