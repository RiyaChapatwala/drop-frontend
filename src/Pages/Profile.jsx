import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../Component/Layout";
import name from "../Images/name.svg";
import business from "../Images/business.svg";
import money from "../Images/money.svg";
import aboutus from "../Images/aboutus.svg";
import chat from "../Images/chat.svg";
import service from "../Images/service.svg";
import signout from "../Images/signout.svg";
import shareIcon from "../Images/share.svg";
import subscription from "../Images/subscription.svg";
import pricing from "../Images/pricing.svg";
import { font14, font500, lightblue, roboto } from "../Constant";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BottomSheet } from "react-spring-bottom-sheet";
import Share from "../Component/Share";
import drop from "../Images/drop.svg";
import Authservice from "../services/Authservice";
import { logout } from "../redux/reducers/userSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [share, setShare] = useState(false);
  return (
    <Box w="100%" h={["100vh", "max-content"]}>
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
        <Flex
          mt="18px"
          cursor="pointer"
          onClick={() => history.push("/businessDetails", { edit: true })}
        >
          <Image mr="12px" src={business} />
          Edit Business
        </Flex>
        <Flex mt="18px">
          <Image mr="12px" src={money} />
          Total Earning
        </Flex>
        <Flex mt="18px">
          <Image mr="12px" src={subscription} />
          Subscription
        </Flex>
        <Flex mt="18px" onClick={() => history.push("/pricing")}>
          <Image mr="12px" src={pricing} />
          Our Pricing
        </Flex>
        <Flex
          cursor="pointer"
          mt="18px"
          onClick={() => history.push("/aboutus")}
        >
          <Image mr="12px" src={aboutus} />
          About Us
        </Flex>
        <Flex mt="18px">
          <Image mr="12px" src={service} />
          Terms Of Services
        </Flex>
        <Link
          textDecoration="none"
          href="https://chat.whatsapp.com/L7v4LPgQQ1sAZ0tsQ3XqpU"
        >
          <Flex mt="18px" cursoe="pointer">
            <Image mr="12px" src={chat} />
            Support Chat
          </Flex>
        </Link>
        <Flex mt="18px" cursor="pointer" onClick={() => setShare(true)}>
          <Image mr="12px" src={shareIcon} />
          Invite Your Friends To Drop
        </Flex>
        <Flex
          mt="18px"
          cursor="pointer"
          onClick={() => {
            Authservice.logout();
            dispatch(logout());
          }}
        >
          <Image mr="12px" src={signout} />
          Signout
        </Flex>
        <Text color="#001833" textAlign="center" mt="10">
          drop by{" "}
          <Link to="https://drop-pwa.netlify.app" color={lightblue}>
            ZOGNEST.
          </Link>
        </Text>
      </Box>
      <BottomSheet
        open={share}
        onDismiss={() => {
          setShare(false);
        }}
        snapPoints={({ maxHeight }) => [maxHeight * 0.63]}
      >
        <Share
          imageUrl={drop}
          eventName="drop"
          setShare={setShare}
          shareUrl="https://drop-pwa.netlify.app"
        />
      </BottomSheet>
    </Box>
  );
};

export default Profile;
