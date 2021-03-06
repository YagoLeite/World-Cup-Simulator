import Head from "next/head";
import Groups from "../components/Groups/Groups";
import KnockOut from "../components/Finals/KnockOut";
import { Header } from "../components/Header/Header";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { CupState } from "../context/Context";

export default function Home() {
  const { state, dispatch } = CupState();
  const bg = useColorModeValue("white", "gray.700");
  // useEffect(() => {
  //   if (localStorage.getItem("state"))
  //     dispatch({
  //       type: "LOADING",
  //       value: { ...JSON.parse(localStorage.getItem("state")), ui: "groups" },
  //     });
  // }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem("state", JSON.stringify(state));
  // }, [state]);

  return (
    <Box bg={bg}>
      <Head>
        <title>World Cup Simulator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {state.ui === "groups" && <Groups />}
      {state.ui === "finals" && <KnockOut />}
    </Box>
  );
}
