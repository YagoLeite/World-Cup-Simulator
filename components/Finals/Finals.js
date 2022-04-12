import { Box, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { CupState } from "../../context/Context";
import SingleMatch from "./SingleMatch";
import Quartas from "./Quartas";

const Finals = () => {
  const { state, dispatch } = CupState();
  const filteredList = state.groupState.filter((country) => country.index <= 1);
  const findingTeam = (group, index, finals) =>
    filteredList.find(
      (item) => item.group === group && item.index === index && item[finals]
    );

  const quartasHandler = (firstTeam, secondTeam, type) => {
    if (!firstTeam || !secondTeam) return;
    dispatch({ type, payload: { firstTeam, secondTeam } });
  };

  const findSemi = (a, b) =>
    state.groupState
      .filter((item) => item.semi)
      .find((item) => item.group === a || item.group === b);

  const findFinal = state.groupState.filter((item) => item.final);

  return (
    <VStack>
      <Box w="100vw" bg="red" h="600px" position="relative">
        <SingleMatch
          config={{
            firstTeam: {
              position: "absolute",
              top: "0",
              left: "0",
              h: "10%",
              w: "100px",
              bg: "green",
            },
            secondTeam: {
              position: "absolute",
              top: "10%",
              left: "0",
              h: "10%",
              w: "100px",
              bg: "salmon",
            },
          }}
          firstTeam={findingTeam("A", 0, "oitavas")}
          secondTeam={findingTeam("B", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />

        <SingleMatch
          config={{
            firstTeam: {
              position: "absolute",
              top: "20%",
              left: "0",
              h: "10%",
              w: "100px",
              bg: "blue",
            },
            secondTeam: {
              position: "absolute",
              top: "30%",
              left: "0",
              h: "10%",
              w: "100px",
              bg: "yellow",
            },
          }}
          firstTeam={findingTeam("B", 0, "oitavas")}
          secondTeam={findingTeam("A", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />

        <SingleMatch
          config={{
            firstTeam: {
              position: "absolute",
              top: " 50.5%",
              left: "0",
              h: "10%",
              w: "100px",
              bg: "green",
            },
            secondTeam: {
              position: "absolute",
              top: "90%",
              left: "0",
              h: "10%",
              w: "100px",
              bg: "salmon",
            },
          }}
          firstTeam={findingTeam("C", 0, "oitavas")}
          secondTeam={findingTeam("D", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />

        <SingleMatch
          config={{
            firstTeam: {
              position: "absolute",
              top: " 60.5%",
              left: "0",
              h: "10%",
              w: "100px",
              bg: "blue",
            },
            secondTeam: {
              position: "absolute",
              top: "80%",
              left: "0",
              h: "10%",
              w: "100px",
              bg: "yellow",
            },
          }}
          firstTeam={findingTeam("D", 0, "oitavas")}
          secondTeam={findingTeam("C", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />

        <SingleMatch
          config={{ position: "absolute", top: "0", right: "0" }}
          firstTeam={findingTeam("E", 0, "oitavas")}
          secondTeam={findingTeam("F", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />

        <SingleMatch
          config={{ position: "absolute", top: "150px", right: "0" }}
          firstTeam={findingTeam("F", 0, "oitavas")}
          secondTeam={findingTeam("E", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />

        <SingleMatch
          config={{ position: "absolute", bottom: "150px", right: "0" }}
          firstTeam={findingTeam("G", 0, "oitavas")}
          secondTeam={findingTeam("H", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />

        <SingleMatch
          config={{ position: "absolute", bottom: "0", right: "0" }}
          firstTeam={findingTeam("H", 0, "oitavas")}
          secondTeam={findingTeam("G", 1, "oitavas")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "QUARTAS-SELECTION")
          }
        />

        <Quartas />
      </Box>
      {/*  gap={3} direction="column">
        <Heading>Quartas</Heading>
        <SingleMatch
          firstTeam={
            findingTeam("A", 0, "quartas") || findingTeam("B", 1, "quartas")
          }
          secondTeam={
            findingTeam("B", 0, "quartas") || findingTeam("A", 1, "quartas")
          }
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "SEMI-SELECTION")
          }
          // onClick={() => console.log("oi")}
        />
        <SingleMatch
          firstTeam={
            findingTeam("C", 0, "quartas") || findingTeam("D", 1, "quartas")
          }
          secondTeam={
            findingTeam("D", 0, "quartas") || findingTeam("C", 1, "quartas")
          }
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "SEMI-SELECTION")
          }
        />
        <SingleMatch
          firstTeam={
            findingTeam("E", 0, "quartas") || findingTeam("F", 1, "quartas")
          }
          secondTeam={
            findingTeam("F", 0, "quartas") || findingTeam("E", 1, "quartas")
          }
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "SEMI-SELECTION")
          }
        />
        <SingleMatch
          firstTeam={
            findingTeam("G", 0, "quartas") || findingTeam("H", 1, "quartas")
          }
          secondTeam={
            findingTeam("H", 0, "quartas") || findingTeam("G", 1, "quartas")
          }
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "SEMI-SELECTION")
          }
        />
      </Flex>
      <Flex gap={3} direction="column">
        <Heading>Semi</Heading>
        <SingleMatch
          firstTeam={findSemi("A", "B")}
          secondTeam={findSemi("C", "D")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "FINAL-SELECTION")
          }
        />
        <SingleMatch
          firstTeam={findSemi("E", "F")}
          secondTeam={findSemi("G", "H")}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "FINAL-SELECTION")
          }
        />
      </Flex>
      <Flex direction="column" gap={3}>
        <Heading>Finals</Heading>
        <SingleMatch
          firstTeam={findFinal[0]}
          secondTeam={findFinal[1]}
          onClick={(firstTeam, secondTeam) =>
            quartasHandler(firstTeam, secondTeam, "FINAL-SELECTION")
          }
        />
      </Flex> */}
      <Box position="absolute" w="100%" bg="blue" h="10%" top="42.5%"></Box>
    </VStack>
  );
};

export default Finals;
