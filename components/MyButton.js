import React from "react";
import { Button } from "@chakra-ui/react";

const MyButton = (props) => {
  return (
    <Button
      bgColor={props.color1}
      color="green.700"
      fontWeight="medium"
      rounded="md"
      shadow="base"
      size={"md"}
      _focus={{
        outline: "none",
      }}
      transition="background 0.8s"
      backgroundPosition="center"
      key={props.key ? props.key : null}
      onClick={props.onClick}
      _hover={{
        bgColor: props.color2,
        bgGradient: `radial(circle, transparent 1%, ${props.color2} 1%)`,
        bgPos: "center",
        backgroundSize: "15000%",
      }}
      _active={{
        bgColor: props.color3,
        backgroundSize: "100%",
        transition: "background 0s",
      }}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
