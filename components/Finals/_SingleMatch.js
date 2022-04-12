import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import React from "react";

const SingleMatch = (props) => {
  return (
    <Stack
      w="100%"
      h="100px"
      justifyContent={props.justify}
      direction="row"
      marginX={props.margin}
    >
      <Stack pt="20px">
        {/* <Flex
          w={["15px", "20px", "30px", "50px"]}
          h={["15px", "20px", "30px", "50px"]}
          overflow="hidden"
          cursor="pointer"
          borderRadius="50%"
          bg="gray.500"
          onClick={() => props.onClick(props.firstTeam, props.secondTeam)}
        >
          {props.firstTeam && (
            <Image boxShadow="lg" objectFit="fill" src={props.firstTeam.flag} />
          )}
        </Flex> */}
        {props.firstTeam ? (
          <Flex
            w={["15px", "20px", "30px", "50px"]}
            h={["15px", "20px", "30px", "50px"]}
            overflow="hidden"
            cursor="pointer"
            borderRadius="50%"
            boxShadow="lg"
            bg="gray.500"
            onClick={() => props.onClick(props.firstTeam, props.secondTeam)}
          >
            <Image boxShadow="lg" src={props.firstTeam.flag} />
          </Flex>
        ) : (
          <Flex
            w={["15px", "20px", "30px", "50px"]}
            h={["15px", "20px", "30px", "50px"]}
            overflow="hidden"
            cursor="pointer"
            borderRadius="50%"
            bg="gray.500"
          ></Flex>
        )}
        <Text
          letterSpacing="1.5px"
          textAlign="center"
          fontWeight="600"
          fontSize={["12px", "15px"]}
          cursor="pointer"
          onClick={() => props.onClick(props.firstTeam, props.secondTeam)}
        >
          {props.firstTeam?.name.slice(0, 3).toUpperCase()}
        </Text>
      </Stack>
      <Stack pt="20px">
        {/* <Flex
          w={["15px", "20px", "30px", "50px"]}
          h={["15px", "20px", "30px", "50px"]}
          overflow="hidden"
          cursor="pointer"
          borderRadius="50%"
          bg="gray.500"
          onClick={() => props.onClick(props.secondTeam, props.firstTeam)}
        >
          {props.secondTeam && (
            <Image boxShadow="lg" src={props.secondTeam.flag} />
          )}
        </Flex> */}
        {props.secondTeam ? (
          <Flex
            w={["15px", "20px", "30px", "50px"]}
            h={["15px", "20px", "30px", "50px"]}
            overflow="hidden"
            cursor="pointer"
            borderRadius="50%"
            boxShadow="lg"
            bg="gray.500"
            onClick={() => props.onClick(props.secondTeam, props.firstTeam)}
          >
            <Image boxShadow="lg" src={props.secondTeam.flag} />
          </Flex>
        ) : (
          <Flex
            w={["15px", "20px", "30px", "50px"]}
            h={["15px", "20px", "30px", "50px"]}
            overflow="hidden"
            cursor="pointer"
            borderRadius="50%"
            bg="gray.500"
          ></Flex>
        )}
        <Text
          letterSpacing="1.5px"
          textAlign="center"
          fontWeight="600"
          fontSize={["12px", "15px"]}
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
