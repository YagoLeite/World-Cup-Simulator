import React from "react";
import { CupState } from "../../../context/Context";
import { Image, Flex } from "@chakra-ui/react";

const WinnerMobile = () => {
  const { state } = CupState();
  console.log(state.groupState.find((item) => item.winner));

  return (
    <div>
      {state.groupState.find((item) => item.winner) !== undefined && (
        <Flex
          borderRadius="50%"
          overflow="hidden"
          w={["100px", "150px"]}
          h={["100px", "150px"]}
          boxShadow="lg"
          borderColor="#c9c9c9"
          borderWidth="1px"
        >
          <Image
            objectFit="cover"
            alt="Winners flag"
            src={state.groupState.find((item) => item.winner).flag}
          />
        </Flex>
      )}
    </div>
  );
};

export default WinnerMobile;
