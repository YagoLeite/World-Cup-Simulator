import Head from "next/head";
import Groups from "../components/Groups/Groups";
import Finals from "../components/Finals/Finals";
import { Header } from "../components/Header";
import { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { CupState } from "../context/Context";

export default function Home() {
  // const [ui, setUI] = useState("group");
  const uiHandler = (key) => setUI(key);
  const { state } = CupState();
  return (
    <div>
      <Head>
        <title>World Cup Simulator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <Header />
      </Flex>
      {state.ui === "groups" && <Groups />}
      {state.ui === "finals" && <Finals />}
    </div>
  );
}
