import { Image, Flex, Text, VStack, Link } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { CupState } from "../../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Winner = () => {
  const { state } = CupState();
  const winner = state.groupState.find((item) => item.winner);
  const ref = useRef(null);

  useEffect(() => {
    const scroll = () => ref.current.scrollIntoView({ behavior: "smooth" });
    if (winner) {
      scroll();
    }
  }, [winner]);

  const flip = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <VStack
      w="100%"
      pt="24px"
      mb="30px"
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      {winner !== undefined && (
        <motion.div
          key={winner}
          onClick={(e) => e.stopPropagation()}
          variants={flip}
          initial="hidden"
          animate="visible"
          // exit="exit"
        >
          <VStack gap={["12px", "24px"]}>
            <Text fontSize={"24px"}>The winner is {winner.name}</Text>
            <Flex
              borderRadius="50%"
              overflow="hidden"
              w={["150px", "200px", "300px"]}
              h={["150px", "200px", "300px"]}
              boxShadow="dark-lg"
              borderColor="#c9c9c9"
              borderWidth="1px"
            >
              {winner.flag && (
                <Image objectFit="cover" alt="Winners flag" src={winner.flag} />
              )}
            </Flex>
            <Flex gap="12px">
              {[...winner.wins, { year: "2022", place: "qatar" }].map(
                (item, index) => {
                  return (
                    <Link
                      key={index}
                      isExternal
                      href={
                        item.year === "2022"
                          ? `https://www.fifa.com/tournaments/mens/worldcup/${item.place}${item.year}`
                          : `https://www.fifa.com/tournaments/mens/worldcup/${item.year}${item.place}`
                      }
                    >
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <VStack>
                          <Flex
                            w="40px"
                            h="40px"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Text>{item.year}</Text>
                          </Flex>
                          <FontAwesomeIcon icon={faTrophy} />
                        </VStack>
                      </motion.div>
                    </Link>
                  );
                }
              )}
            </Flex>
            <Text>For more information click on the year!</Text>
          </VStack>
        </motion.div>
      )}
    </VStack>
  );
};

export default Winner;
