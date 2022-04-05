import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import top from "../Images/top.svg";
import logo from "../Images/logo.svg";
import { font22, font600, poppins, white } from "../Constant";

const Layout = () => {
  return (
    <Box width="100%">
      <Image src={top} w="100%" h={["280px", "250px"]} />
      <Image
        src={logo}
        boxSize="65px"
        position="absolute"
        top="8%"
        left={["40%", "47%"]}
      />
      <Text
        color={white}
        fontWeight={font600}
        fontFamily={poppins}
        fontSize={font22}
        position="absolute"
        top="19%"
        left={["40%", "47%"]}
      >
        DROP
      </Text>
    </Box>
  );
};

export default Layout;
