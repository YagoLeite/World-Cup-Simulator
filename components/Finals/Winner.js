import { Image, Flex, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Winner = () => {
  const { state } = CupState();
  const winner = state.groupState.find((item) => item.winner);
  console.log("oi");

  return (
    <VStack
      w="100%"
      pt="24px"
      mb="30px"
      justifyContent="center"
      alignItems="center"
    >
      {winner !== undefined && (
        <VStack gap={["12px", "24px"]}>
          <Text fontSize={"24px"}>The winner is {winner.name}</Text>
          <Flex
            borderRadius="50%"
            overflow="hidden"
            w={["150px", "200px", "300px"]}
            h={["150px", "200px", "300px"]}
            boxShadow="lg"
            borderColor="#c9c9c9"
            borderWidth="1px"
          >
            {winner.flag && (
              <Image objectFit="cover" alt="Winners flag" src={winner.flag} />
            )}
          </Flex>
          <Flex gap="12px">
            {[...winner.wins, { year: 2022, place: "qatar" }].map(
              (item, index) => {
                return (
                  <Link
                    key={index}
                    isExternal
                    href={
                      // item.year !== 2022
                      //   ? `https://www.fifa.com/tournaments/mens/worldcup/${item.place}${item.year}`
                      //   : `https://www.fifa.com/tournaments/mens/worldcup/${item.year}${item.place}`
                      "https://www.linkedin.com/feed/"
                    }
                  >
                    <VStack>
                      <Text>{item.year}</Text>
                      <FontAwesomeIcon icon={faTrophy} />
                    </VStack>
                  </Link>
                );
              }
            )}
          </Flex>
          <Text>For more information click on the year!</Text>
        </VStack>
      )}
    </VStack>
  );
};

export default Winner;
