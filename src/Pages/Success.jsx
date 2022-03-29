import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ButtonComponent from "../Component/ButtonComponent";
import Layout from "../Component/Layout";
import { blue, font16, font20, font500, poppins } from "../Constant";
import gify from "../Images/gify.gif";

const Success = () => {
  return (
    <Box w="100%" fontFamily={poppins}>
      <Layout />
      <Flex direction="column" justify="center" alignItems="center">
        <Image src={gify} boxSize={"167px"} />
        <Text
          mt="3"
          textAlign="center"
          w="75%"
          color={blue}
          fontWeight={font500}
          fontSize={font20}
          lineHeight="24px"
        >
          <span style={{ fontSize: font16 }}>Your Account</span>
          <br /> Is Successfully Created
        </Text>
      </Flex>
      <Flex w="85%" mx="auto" mt="9">
        <ButtonComponent name="NEXT" />
      </Flex>
    </Box>
  );
};

export default Success;
