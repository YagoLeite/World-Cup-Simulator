import React from "react";
import { Reorder } from "framer-motion";
import { Flex, Text, Image } from "@chakra-ui/react";

const Team = ({ team, index, onDragEnd }) => {
  return (
    <Reorder.Item onDragEnd={onDragEnd} value={team} id={team}>
      <Flex
        px="8px"
        py="5px"
        my="18px"
        h="100%"
        w="100%"
        justify="space-arround"
        alignItems="center"
        borderRadius="2px"
        borderBottomWidth="5px"
        bg="gray.700"
        borderColor={index <= 1 ? "rgb(255, 176, 74)" : "gray.700"}
        cursor="grab"
        opacity={index <= 1 ? 1 : 0.5}
        gap={["24px"]}
      >
        <Flex
          w="60px"
          h="60px"
          bg="gray.700"
          borderColor="#c9c5c9"
          borderWidth="1px"
          borderRadius="50%"
          overflow="hidden"
          alt="country flag"
        >
          {team.flag && (
            <Image objectFit="cover" alt="country flag" src={team.flag} />
          )}
        </Flex>
        <Text fontSize={["24px"]}>{team.name}</Text>
      </Flex>
    </Reorder.Item>
  );
};

export default Team;
