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
      pt="65px"
    >
      <Flex w="100%" justifyContent="center" gap="48px" alignContent="center">
        <Flex
          className="skewed"
          w="201px"
          h="78px"
          bg="#E36262"
          color="white"
          onClick={() => dispatch({ type: "UI-UPDATE", value: "groups" })}
          cursor="pointer"
        >
          <Flex
            className="skewed2"
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            fontSize="32px"
            color="white"
          >
            Groups
          </Flex>
        </Flex>
        <Flex
          fontSize="32px"
          className="skewed"
          w="201px"
          h="78px"
          bg="#E36262"
          cursor="pointer"
          onClick={() => dispatch({ type: "UI-UPDATE", value: "finals" })}
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
        </VStack>
      )}
    </Flex>
  );
};

export default Controler;
