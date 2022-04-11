import React from "react";
import { Button } from "@chakra-ui/react";

const MyButton = () => {
  return (
    <Button
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
    </Button>
  );
};

export default MyButton;
