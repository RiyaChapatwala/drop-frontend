import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../Component/Layout";
import {
  blue,
  font12,
  font13,
  font22,
  font400,
  font500,
  font600,
  poppins,
} from "../Constant";
import fb from "../Images/fb.svg";
import google from "../Images/google.svg";

const LogIn = () => {
  return (
    <>
      <Box w="100%" fontFamily={poppins}>
        <Layout />
        {/* <Box left="28%" position="absolute" bottom={["40%", "40%"]}> */}
        <Box mt={["12", "16"]}>
          <Text
            fontSize={font22}
            textAlign="center"
            color={blue}
            fontFamily={poppins}
            fontWeight={font600}
          >
            Welcome Back
          </Text>
          <Text
            fontSize={font12}
            textAlign="center"
            color={blue}
            fontFamily={poppins}
            fontWeight={font400}
          >
            Sign In To Continue
          </Text>
        </Box>
        {/* <Flex
          position="absolute"
          bottom={["28%", "26%"]}
          left={["8%", "11%"]}
          alignItems="center"
          background={blue}
          py={["4", "3"]}
          px="16"
          borderRadius="8px"
          boxShadow="0px 16px 60px rgba(37, 37, 28, 0.15)"
        > */}
        <Flex
          mt="8"
          // px="16"
          w="92%"
          mx="auto"
          alignItems="center"
          justify="center"
          background={blue}
          py={["4", "3"]}
          borderRadius="8px"
          boxShadow="0px 16px 60px rgba(37, 37, 28, 0.15)"
        >
          <Image src={fb} mr="12px" />
          <Text fontSize={font13} fontWeight={font600} color="white">
            SIGN IN WITH FACEBOOK
          </Text>
        </Flex>
        <Flex
          justify="center"
          mt="4"
          w="92%"
          mx="auto"
          py={["3", "3"]}
          alignItems="center"
          background="white"
          borderRadius="8px"
          boxShadow="0px 16px 60px rgba(37, 37, 28, 0.15)"
        >
          <Image src={google} />
          <Text fontSize={font13} ml="10px" fontWeight={font600} color="black">
            SIGN IN WITH GOOGLE
          </Text>
        </Flex>
        <Flex alignItems="center" w="85%" justify="center" mx="auto" mt="7">
          <Text
            // alignSelf="center"
            textAlign="center"
            fontSize={font12}
            fontWeight={font500}
            color="red"
          >
            <span style={{ color: blue }}>
              By logging in you agree to DROP{" "}
            </span>
            Terms and Services, Privacy policy and Content policy
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default LogIn;
