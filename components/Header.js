// import { Heading, HStack, VStack } from "@chakra-ui/react";
// import React from "react";
// import MyButton from "./MyButton";
// import { CupState } from "../context/Context";

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
  useDisclosure,
  CloseButton,
  Box,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { FaMoon, FaSun, FaHeart } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

export const Header = () => {
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const bg = useColorModeValue("white", "gray.700");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="100vw">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>{/* <Logo /> */}oi</HStack>
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="1vw"
              align="center"
              color="gray.400"
            >
              <HStack spacing="5" display={{ md: "flex" }}>
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
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
            </Flex>
          </Flex>
        </chakra.div>
      </chakra.header>
    </Box>
  );
};

export default Header;
