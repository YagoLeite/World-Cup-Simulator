// import { Heading, HStack, VStack } from "@chakra-ui/react";
// import React from "react";
// import MyButton from "./MyButton";
import { CupState } from "../../context/Context";
import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import MainHeader from "./MainHeader";

export const Header = () => {
  const { dispatch } = CupState();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const bg = useColorModeValue("white", "gray.700");

  const github = (
    <Flex
      pr="48px"
      w="100%"
      h="85px"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Flex gap={3} w="50px">
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
        <IconButton
          size={["sm", "md"]}
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          onClick={toggleMode}
          icon={<SwitchIcon />}
        />
      </Flex>
    </Flex>
  );

  return (
    <Box>
      {github}
      <MainHeader />
      {/* <Flex gap={3}>
          <Button
            onClick={() => dispatch({ type: "UI-UPDATE", value: "groups" })}
          >
            Groups
          </Button>
          <Button
            onClick={() => dispatch({ type: "UI-UPDATE", value: "finals" })}
          >
            KnockOut
          </Button>
        </Flex> */}
    </Box>
  );
};

export default Header;
