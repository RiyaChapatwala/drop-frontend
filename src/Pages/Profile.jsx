import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../Component/Layout";
import name from "../Images/name.svg";
import business from "../Images/business.svg";
import money from "../Images/money.svg";
import aboutus from "../Images/aboutus.svg";
import chat from "../Images/chat.svg";
import service from "../Images/service.svg";
import signout from "../Images/signout.svg";
import share from "../Images/share.svg";
import subscription from "../Images/subscription.svg";
import pricing from "../Images/pricing.svg";
import { font14, font500, lightblue, roboto } from "../Constant";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Profile = () => {
  const history = useHistory();
  return (
    <Box w="100%">
      <Layout card={true} />
      <Box
        px="33px"
        py="5"
        fontFamily={roboto}
        fontWeight={font500}
        fontSize={font14}
      >
        <Flex
          cursor="pointer"
          onClick={() => history.push("/create-profile", { edit: true })}
        >
          <Image mr="12px" src={name} />
          Edit Profile
        </Flex>
        <Flex mt="20px">
          <Image mr="12px" src={business} />
          Edit Business
        </Flex>
        <Flex mt="20px">
          <Image mr="12px" src={money} />
          Total Earning
        </Flex>
        <Flex mt="20px">
          <Image mr="12px" src={subscription} />
          Subscription
        </Flex>
        <Flex mt="20px">
          <Image mr="12px" src={pricing} />
          Our Pricing
        </Flex>
        <Flex
          cursor="pointer"
          mt="20px"
          onClick={() => history.push("/aboutus")}
        >
          <Image mr="12px" src={aboutus} />
          About Us
        </Flex>
        <Flex mt="20px">
          <Image mr="12px" src={service} />
          Terms Of Services
        </Flex>
        <Link
          textDecoration="none"
          href="https://chat.whatsapp.com/L7v4LPgQQ1sAZ0tsQ3XqpU"
        >
          <Flex mt="20px" cursoe="pointer">
            <Image mr="12px" src={chat} />
            Support Chat
          </Flex>
        </Link>
        <Flex mt="20px">
          <Image mr="12px" src={share} />
          Invite Your Friends To Drop
        </Flex>
        <Flex mt="20px">
          <Image mr="12px" src={signout} />
          Signout
        </Flex>
        <Text color="#001833" textAlign="center" mt="5">
          drop by{" "}
          <Link to="https://drop-pwa.netlify.app" color={lightblue}>
            ZOGNEST.
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Profile;
