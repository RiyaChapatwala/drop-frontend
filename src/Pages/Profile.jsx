import { Box, Flex, Image } from "@chakra-ui/react";
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

const Profile = () => {
  return (
    <Box w="100%">
      <Layout card={true} />
      <Box p="5">
        <Flex>
          <Image src={name} />
          Edit Profile
        </Flex>
        <Flex>
          <Image src={business} />
          Edit Business
        </Flex>
        <Flex>
          <Image src={money} />
          Total Earning
        </Flex>
        <Flex>
          <Image src={money} />
          Subscription
        </Flex>
        <Flex>
          <Image src={aboutus} />
          About Us
        </Flex>
        <Flex>
          <Image src={service} />
          Terms Of Services
        </Flex>
        <Flex>
          <Image src={chat} />
          Support Chat
        </Flex>
        <Flex>
          <Image src={share} />
          Invite Your Friends To Drop
        </Flex>
        <Flex>
          <Image src={signout} />
          Signout
        </Flex>
      </Box>
    </Box>
  );
};

export default Profile;
