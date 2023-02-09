import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LoginWithGoogle from "../Component/GoogleLogin";
import Layout from "../Component/Layout";
import LoginBypass from "../Component/LoginByPass";
import {
  blue,
  font12,
  font13,
  font16,
  font22,
  font400,
  font500,
  font600,
  poppins,
} from "../Constant";
import fb from "../Images/fb.svg";
import SplashScreen from "./SplashScreen";
import playStore from "../Images/google-play.png";

const LogIn = () => {
  const [screen, setScreen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScreen(false);
      setLoading(false);
    }, [1500]);
  }, []);
  return (
    <Box w="100%" h={["100vh", "100%"]}>
      {screen && <SplashScreen loading={loading} />}

      {!screen && (
        <Box w="100%" h="100%" fontFamily={poppins}>
          <Layout screen={screen} />
          {/* <Box left="28%" position="absolute" bottom={["40%", "40%"]}> */}

          {/* <Box mt={["12", "16"]}>
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
          </Box> */}

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
          {/* <Flex
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
          <LoginWithGoogle /> */}
          <a
            href="https://play.google.com/store/apps/details?id=com.zognest.drop"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={playStore}
              boxSize="200px"
              // position="absolute"
              // top="5%"
              // left={0}
              // right={0}
              mx="auto"
              cursor="pointer"
            />
          </a>
          <Flex
            alignItems="center"
            w="85%"
            justify="center"
            // pb="2"
            mx="auto"
            mt="7"
          >
            <Text
              // alignSelf="center"
              textAlign="center"
              fontSize={font12}
              fontWeight={font500}
              color={blue}
            >
              <span>By logging in our app, you agree to our </span>
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            w="85%"
            justify="center"
            // pb="2"
            mx="auto"
            mt="7"
          >
            <Text
              // alignSelf="center"
              textAlign="center"
              fontSize={font12}
              fontWeight={font500}
              color="red"
            >
              <a
                target="_blank"
                href="https://dropsupply.in/api/files/privacyPolicy"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </Text>
            <Text
              // alignSelf="center"
              textAlign="center"
              fontSize={font12}
              fontWeight={font500}
              color="red"
            >
              <a
                target="_blank"
                href="https://dropsupply.in/api/files/refundPolicy"
                rel="noreferrer"
              >
                Refund Policy
              </a>
            </Text>
            <Text
              // alignSelf="center"
              textAlign="center"
              fontSize={font12}
              fontWeight={font500}
              color="red"
            >
              <a
                target="_blank"
                href="https://dropsupply.in/api/files/termsAndConditions"
                rel="noreferrer"
              >
                Terms And Conditions
              </a>
            </Text>
            <Text
              // alignSelf="center"
              textAlign="center"
              fontSize={font12}
              fontWeight={font500}
              color="red"
            >
              <a
                target="_blank"
                href="https://dropsupply.in/api/files/contactUs"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </Text>
            <Text
              // alignSelf="center"
              textAlign="center"
              fontSize={font12}
              fontWeight={font500}
              color="red"
            >
              <a
                target="_blank"
                href="https://dropsupply.in/api/files/shippingandDelivery"
                rel="noreferrer"
              >
                Shippingand Delivery
              </a>
            </Text>
          </Flex>

          <Text
            // alignSelf="center"
            textAlign="center"
            fontSize={font16}
            fontWeight={font500}
            color={blue}
            mb={200}
          >
            <a
              target="_blank"
              href="https://dropsupply.in/api/files/pricing"
              rel="noreferrer"
            >
              Pricing
            </a>
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default LogIn;
