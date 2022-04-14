import { Flex, Image, Text, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { SmallCloseIcon } from "@chakra-ui/icons";

const SingleMatch = (props) => {
  const [classNameTeamOne, setClassNameTeamOne] = useState("");
  const [classNameTeamTwo, setClassNameTeamTwo] = useState("");
  if (props.firstTeam && props.secondTeam) {
    const opacityTwo =
      props.firstTeam[props.position] && !props.secondTeam[props.position];
    const opacityOne =
      props.secondTeam[props.position] && !props.firstTeam[props.position];
  }

  useEffect(() => {
    setClassNameTeamOne("fade-in");
    setTimeout(() => {
      setClassNameTeamOne("");
    }, 400);
  }, [props.firstTeam]);

  useEffect(() => {
    setClassNameTeamTwo("fade-in");
    setTimeout(() => {
      setClassNameTeamTwo("");
    }, 400);
  }, [props.secondTeam]);

  return (
    <Stack
      w="100%"
      h="100px"
      justifyContent={props.justify}
      direction="row"
      marginX={props.margin}
    >
      <Stack pt="20px" opacity={opacityOne ? "0.5" : "1"}>
        {props.firstTeam ? (
          <Flex
            w={["40px", "50px", "30px", "50px"]}
            h={["40px", "50px", "30px", "50px"]}
            overflow="hidden"
            cursor="pointer"
            borderRadius="50%"
            boxShadow="lg"
            bg="gray.500"
            onClick={() => props.onClick(props.firstTeam, props.secondTeam)}
            className={classNameTeamOne}
          >
            <Image
              objectFit="cover"
              boxShadow="lg"
              src={props.firstTeam.flag}
            />
          </Flex>
        ) : (
          <Flex
            w={["40px", "50px", "30px", "50px"]}
            h={["40px", "50px", "30px", "50px"]}
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
      <Flex alignItems="center" justifyContent="center">
        <SmallCloseIcon />
      </Flex>
      <Stack pt="20px" opacity={opacityTwo ? "0.5" : "1"}>
        {props.secondTeam ? (
          <Flex
            w={["40px", "50px", "30px", "50px"]}
            h={["40px", "50px", "30px", "50px"]}
            overflow="hidden"
            cursor="pointer"
            borderRadius="50%"
            boxShadow="lg"
            bg="gray.500"
            className={classNameTeamTwo}
            onClick={() => props.onClick(props.secondTeam, props.firstTeam)}
          >
            <Image
              objectFit="cover"
              boxShadow="lg"
              src={props.secondTeam.flag}
            />
          </Flex>
        ) : (
          <Flex
            w={["40px", "50px", "30px", "50px"]}
            h={["40px", "50px", "30px", "50px"]}
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
