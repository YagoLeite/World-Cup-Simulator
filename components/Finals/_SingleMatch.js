import { Flex, Image, Text, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

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
      <motion.div whileHover={{ scale: 1.1 }}>
        <Stack pt="20px" opacity={opacityOne ? "0.5" : "1"}>
          {props.firstTeam ? (
            <Flex
              w={{ md: "20px", lg: "30px", xl: "40px" }}
              h={{ md: "20px", lg: "30px", xl: "40px" }}
              overflow="hidden"
              cursor="pointer"
              borderRadius="50%"
              boxShadow="dark-lg"
              bg="gray.500"
              onClick={() => props.onClick(props.firstTeam, props.secondTeam)}
              className={classNameTeamOne}
            >
              {props.firstTeam.flag && (
                <Image
                  objectFit="cover"
                  boxShadow="lg"
                  alt="country flag"
                  src={props.firstTeam.flag}
                />
              )}
            </Flex>
          ) : (
            <Flex
              w={{ md: "20px", lg: "30px", xl: "40px" }}
              h={{ md: "20px", lg: "30px", xl: "40px" }}
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
      </motion.div>
      <Flex alignItems="center" justifyContent="center">
        <SmallCloseIcon />
      </Flex>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Stack pt="20px" opacity={opacityTwo ? "0.5" : "1"}>
          {props.secondTeam ? (
            <Flex
              w={{ md: "20px", lg: "30px", xl: "40px" }}
              h={{ md: "20px", lg: "30px", xl: "40px" }}
              overflow="hidden"
              cursor="pointer"
              borderRadius="50%"
              boxShadow="dark-lg"
              bg="gray.500"
              className={classNameTeamTwo}
              onClick={() => props.onClick(props.secondTeam, props.firstTeam)}
            >
              {props.secondTeam.flag && (
                <Image
                  alt="country flag"
                  objectFit="cover"
                  boxShadow="lg"
                  src={props.secondTeam.flag}
                />
              )}
            </Flex>
          ) : (
            <Flex
              w={{ md: "20px", lg: "30px", xl: "40px" }}
              h={{ md: "20px", lg: "30px", xl: "40px" }}
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
      </motion.div>
    </Stack>
  );
};

export default SingleMatch;
