import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import React from "react";

const SingleMatch = (props) => {
  return (
    <Stack
      direction="row"
      borderLeft="1px"
      borderRight="1px"
      justifyContent="space-between"
      w="100%"
    >
      <Stack justifyContent="center" alignItems="center">
        <Flex
          w="50px"
          h="50px"
          overflow="hidden"
          borderRadius="50%"
          bg="gray.500"
          onClick={() => props.onClick(props.firstTeam, props.secondTeam)}
        >
          {props.firstTeam && <Image src={props.firstTeam.flag} />}
        </Flex>
        <Text
          cursor="pointer"
          onClick={() => props.onClick(props.firstTeam, props.secondTeam)}
        >
          {props.firstTeam?.name.slice(0, 3).toUpperCase()}
        </Text>
      </Stack>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Flex
          w="50px"
          h="50px"
          overflow="hidden"
          borderRadius="50%"
          bg="gray.500"
          onClick={() => props.onClick(props.secondTeam, props.firstTeam)}
        >
          {props.secondTeam && <Image src={props.secondTeam.flag} />}
        </Flex>
        <Text
          cursor="pointer"
          onClick={() => props.onClick(props.secondTeam, props.firstTeam)}
        >
          {props.secondTeam?.name.slice(0, 3).toUpperCase()}
        </Text>
      </Stack>
    </Stack>
  );
};

export default SingleMatch;
