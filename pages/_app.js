import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import CupContext from "../context/Context";
import theme from "../components/theme";
import "@fontsource/oswald/200.css";
import "@fontsource/oswald/300.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";

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
