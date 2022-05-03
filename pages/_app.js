import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import CupContext from "../context/Context";
import theme from "../components/theme";
import "@fontsource/Oswald/400.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CupContext>
        <Component {...pageProps} />
      </CupContext>
    </ChakraProvider>
  );
}

export default MyApp;
