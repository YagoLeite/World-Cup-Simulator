import { Text, Flex, VStack, useToast } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";

const Controler = () => {
  const { state, dispatch } = CupState();
  const toast = useToast();

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
            state.ui === "groups" &&
            " linear-gradient(25deg, rgba(184,28,28,1) 0%, rgba(221,60,60,1) 36%, rgba(255,92,92,1) 100%)"
          }
          color="white"
          onClick={() => dispatch({ type: "UI-UPDATE", value: "groups" })}
          cursor="pointer"
          boxShadow={
            state.ui === "groups" && "rgba(108, 122, 137, 0.4) -5px 5px"
          }
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
          boxShadow={
            state.ui === "finals" && "rgba(108, 122, 137, 0.4) -5px 5px"
          }
          bgGradient={
            state.ui === "finals" &&
            " linear-gradient(25deg, rgba(184,28,28,1) 0%, rgba(221,60,60,1) 36%, rgba(255,92,92,1) 100%)"
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
            Knockout
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
              _hover={{ color: "#ff3131" }}
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
                toast({
                  title: "Cleared All Groups",
                  status: "success",
                  duration: 800,
                  isClosable: true,
                });
                dispatch({ type: "CLEAR" });
              }}
              color="#E36262"
              _hover={{ color: "#ff3131" }}
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
