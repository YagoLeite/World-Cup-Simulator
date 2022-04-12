import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import React from "react";

const SingleMatch = (props) => {
  return (
    <Stack w="100%" h="100px" justifyContent="space-evenly" direction="row">
      <Stack pt="20px">
        <Flex
          w={["15px", "20px", "30px", "30px", "50px"]}
          h={["15px", "20px", "30px", "30px", "50px"]}
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
      <Stack pt="20px">
        <Flex
          w={["15px", "20px", "30px", "30px", "50px"]}
          h={["15px", "20px", "30px", "30px", "50px"]}
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
