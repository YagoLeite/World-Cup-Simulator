import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import CupContext from "../context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CupContext>
        <Component {...pageProps} />
      </CupContext>
    </ChakraProvider>
  );
}

export default MyApp;
