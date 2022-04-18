// import { Heading, HStack, VStack } from "@chakra-ui/react";
// import React from "react";
// import MyButton from "./MyButton";
import { CupState } from "../context/Context";

// export const Header = () => {
//   const { dispatch } = CupState();
//   return (
//     <VStack>
//       <Heading>Simulador da Copa 2022</Heading>
//       <HStack w="100%" justifyContent="space-around">
//         {[
//           { content: "Fase De Grupos", ui: "groups" },
//           { content: "Finais", ui: "finals" },
//         ].map((item, key) => {
//           return (
//             <MyButton
//               color1={"green.50"}
//               color2={"#0BFA1B"}
//               color3={"green.300"}
//               key={key}
//               onClick={() => dispatch({ type: "UI-UPDATE", value: item.ui })}
//             >
//               {item.content}
//             </MyButton>
//           );
//         })}
//       </HStack>
//     </VStack>
//   );
// };
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

export const Header = () => {
  const { dispatch } = CupState();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const bg = useColorModeValue("white", "gray.700");

  return (
    <Flex
      w="full"
      h="full"
      pt="4px"
      pr="1%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box w="50px" />
      <Box>
        <Text>World Cup 2022 Simulator</Text>
        <Flex gap={3}>
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
        </Flex>
      </Box>
      <Flex gap={2.5} w="50px">
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
};

export default Header;
