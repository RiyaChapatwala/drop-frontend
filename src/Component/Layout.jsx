import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  colore2,
  font12,
  font16,
  font500,
  font600,
  roboto,
  white,
} from "../Constant";
import logo from "../Images/drop.svg";
import top from "../Images/top.svg";

const Layout = ({ card, screen, select, pricing }) => {
  const user = useSelector((state) => state.user.data.user);
  const history = useHistory();
  return (
    <Box width="100%">
      <Image
        src={top}
        w="100%"
        h={["250px", "350px", "250px", "max-content", "min-content"]}
      />
      {!card && !screen && (
        <>
          <Image
            src={logo}
            boxSize="80px"
            position="absolute"
            top={["120px", "180px", "120px", "160px", "160px"]}
            left={0}
            right={0}
            mx="auto"
            onClick={() => history.push("/")}
            cursor="pointer"
          />
        </>
      )}
      {select && (
        <Box
          cursor="pointer"
          position={"absolute"}
          top="5%"
          left={["7%", "5%", "28%", "32%", "37%"]}
        >
          <BiArrowBack
            size={"22px"}
            color={white}
            onClick={() => history.goBack()}
          />
        </Box>
      )}
      {pricing && (
        <Flex
          cursor="pointer"
          position={"absolute"}
          top="5%"
          color={white}
          left={["7%", "5%", "28%", "32%", "37%"]}
        >
          <BiArrowBack size={"22px"} onClick={() => history.goBack()} />
          <Text
            ml="17px"
            fontFamily={roboto}
            fontWeight={font600}
            fontSize={font16}
          >
            Our Pricing
          </Text>
        </Flex>
      )}
      {card && (
        <Flex direction="column">
          <Box
            cursor="pointer"
            position={"absolute"}
            top="5%"
            left={["7%", "5%", "28%", "32%", "37%"]}
          >
            <BiArrowBack
              size={"22px"}
              color={white}
              onClick={() => history.goBack()}
            />
          </Box>
          <Image
            objectFit="cover"
            src={user.imageUrl}
            boxSize="85px"
            borderRadius=" 11.5px"
            border="2px solid #FFFFFF"
            position="absolute"
            top="8%"
            left={0}
            right={0}
            mx="auto"
          />
          <Text
            textAlign="center"
            color={white}
            fontWeight={font600}
            fontFamily={roboto}
            fontSize={font16}
            position="absolute"
            top={["37%", "21%", "21%", "19%", "20%"]}
            // left={["35%", "45%"]}
            w={["100%", "100%", "50%", "40%", "30%"]}
          >
            {user.name}
          </Text>
          <Flex
            position="absolute"
            top={["45.5%", "24%", "25%", "22%", "23.5%"]}
            justify="center"
            // left={["35%", "45%"]}
            w={["100%", "100%", "50%", "40%", "30%"]}
          >
            <IoMdCall color={white} />

            <Text
              ml="1"
              color={colore2}
              fontWeight={font500}
              fontFamily={roboto}
              fontSize={font12}
            >
              +91 {user.mobileNo}
            </Text>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Layout;
