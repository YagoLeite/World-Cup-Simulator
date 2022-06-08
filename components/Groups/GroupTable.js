import React, { useEffect, useState } from "react";
import { Reorder, motion } from "framer-motion";
import { CupState } from "../../context/Context";
import { Box, Flex, Text, useToast, HStack, VStack } from "@chakra-ui/react";
import Team from "./Team";

const position = (
  <Flex direction="column" justify="space-between" alignItems="left">
    {["1º", "2º", "3º", "4º"].map((position, index) => (
      <Flex
        key={index}
        py="5px"
        my="18px"
        h="100%"
        gap="24px"
        borderColor={index <= 1 ? "rgb(255, 176, 74)" : "gray.700"}
        borderRadius="2px"
        borderBottomWidth="5px"
        justifyContent="center"
        alignItems="center"
      >
        {position}
      </Flex>
    ))}
  </Flex>
);

const GroupTable = (props) => {
  const { state, dispatch } = CupState();
  const toast = useToast();
  const filteredList = state.groupState
    .filter((country) => country.group === props.group)
    .sort((a, b) => a.index - b.index);
  const [items, setItems] = useState(filteredList);

  const oitavasHandler = () => {
    dispatch({ type: "SCORE-UPDATE", value: items });
    dispatch({ type: "OITAVAS-SELECTION", value: props.group });
    toast({
      title: "Group Confirmed",
      status: "success",
      duration: 800,
      isClosable: true,
    });
  };

  const onDragEnd = () => {
    dispatch({ type: "SCORE-UPDATE", value: items });
    dispatch({ type: "OITAVAS-SELECTION", value: props.group });
    console.log("oi");
  };

  return (
    <Box bg="gray.700" py="16px" w="100%">
      <Text fontSize={["32px"]}> Group {props.group} </Text>
      <Flex gap="4px">
        {position}
        <Box w="100%">
          <Reorder.Group axis="y" onReorder={setItems} values={items}>
            <Flex direction="column" justify="space-between" alignItems="left">
              {items.map((team, index) => {
                return (
                  <Team
                    onDragEnd={onDragEnd}
                    team={team}
                    index={index}
                    key={team.name}
                  />
                );
              })}
            </Flex>
          </Reorder.Group>
        </Box>
      </Flex>
      <Flex w="100%" justifyContent="flex-end">
        <Flex
          as={motion.div}
          justify="center"
          alignItems="center"
          bg="#E36262"
          cursor="pointer"
          onClick={oitavasHandler}
          w={["100px", "140px"]}
          _hover={{ bg: "#d73838" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Text
            pb="2px"
            fontWeight="400"
            fontSize={["24px", "32px"]}
            color="white"
          >
            Confirm
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default GroupTable;
