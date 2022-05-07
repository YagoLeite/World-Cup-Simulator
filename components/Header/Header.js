import React from "react";
import { Flex, Icon, Link, Box } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import MainHeader from "./MainHeader";
import Controler from "./Controler";

export const Header = () => {
  const github = (
    <Flex
      pr={["16px", "16px", "24px", "48px", "48px"]}
      w="100%"
      h="85px"
      alignItems="center"
      justifyContent="flex-end"
      gap={["8px", "8px", "24px"]}
    >
      <Link
        isExternal
        aria-label="Go to Yago's Leite GitHub page"
        href="https://github.com/YagoLeite"
      >
        <Icon
          as={AiFillGithub}
          display="block"
          transition="color 0.2s"
          w="5"
          h="5"
          _hover={{ color: "gray.600" }}
        />
      </Link>
    </Flex>
  );

  return (
    <Box bg="gray.700" color="white">
      {github}
      <MainHeader />
      <Controler />
    </Box>
  );
};

export default Header;
