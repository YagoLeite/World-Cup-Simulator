import {
  Text,
  Flex,
  VStack,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";

const Controler = () => {
  const { state, dispatch } = CupState();
  const toast = useToast();
  const shadowBG = useColorModeValue(
    "rgba(12, 46, 0, 0.4)",
    "rgba(108, 122, 137, 0.4)"
  );
  return (
    <Flex
      w="100%"
      justifyContent="center"
      direction="column"
      alignContent="center"
      pt={["30px", "65px"]}
    >
      <Flex
        w="100%"
        justifyContent="center"
        gap={["20px", "25px", "48px"]}
        alignContent="center"
      >
        <Flex
          className="skewed"
          w={["130px", "180px", "200px"]}
          h={["50px", "70px", "78px"]}
          bg={state.ui !== "groups" && "red.500"}
          bgGradient={
            state.ui === "groups" && "linear(45deg, red.500 60%, red.300)"
          }
          color="white"
          onClick={() => dispatch({ type: "UI-UPDATE", value: "groups" })}
          cursor="pointer"
          boxShadow={state.ui === "groups" && `${shadowBG} -5px 5px`}
        >
          <Flex
            className="skewed2"
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            fontSize={["24px", "32px"]}
            color="white"
          >
            Groups
          </Flex>
        </Flex>
        <Flex
          fontSize={["24px", "32px"]}
          className="skewed"
          w={["130px", "180px", "201px"]}
          h={["50px", "70px", "78px"]}
          bg={state.ui !== "finals" && "red.500"}
          cursor="pointer"
          onClick={() => dispatch({ type: "UI-UPDATE", value: "finals" })}
          boxShadow={state.ui === "finals" && `${shadowBG} -5px 5px`}
          bgGradient={
            state.ui === "finals" && "linear(45deg, red.500 60%, red.300)"
          }
        >
          <Flex
            className="skewed2"
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            color="white"
          >
            KnockOut
          </Flex>
        </Flex>
      </Flex>
      {state.ui === "groups" && (
        <VStack pt="18px" w="100%" justifyContent="center">
          <Text>Drag and drop the teams to select its position</Text>
          <Flex gap="3px">
            <Text>Or</Text>
            <Text
              cursor="pointer"
              textDecoration="underline"
              onClick={() => {
                toast({
                  title: "All Groups Confirmed",
                  status: "success",
                  duration: 800,
                  isClosable: true,
                });
                dispatch({ type: "CONFIRM-ALL" });
              }}
              color="#E36262"
            >
              Confirm all
            </Text>
          </Flex>
        </VStack>
      )}
      {state.ui === "finals" && (
        <VStack pt="18px" w="100%" justifyContent="center">
          <Text>Click on the team to select the winner</Text>
          <Flex gap="3px">
            <Text>Or</Text>
            <Text
              cursor="pointer"
              textDecoration="underline"
              onClick={() => {
                dispatch({ type: "CLEAR" });
              }}
              color="#E36262"
            >
              Clear all
            </Text>
          </Flex>
        </VStack>
      )}
    </Flex>
  );
};

export default Controler;
