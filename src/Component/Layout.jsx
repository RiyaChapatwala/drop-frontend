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
  font400,
  font600,
  roboto,
  white,
} from "../Constant";
import logo from "../Images/drop.svg";
import top from "../Images/top.svg";

const Layout = ({ card, screen }) => {
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
            boxSize="65px"
            position="absolute"
            top="5%"
            left={0}
            right={0}
            mx="auto"
            onClick={() => history.push("/")}
            cursor="pointer"
          />
        </>
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
            boxSize="65px"
            borderRadius=" 11.5px"
            border="2px solid #FFFFFF"
            position="absolute"
            top="5%"
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
            top={["14.5%", "17%", "17%", "17%", "16%"]}
            // left={["35%", "45%"]}
            w={["100%", "100%", "50%", "40%", "30%"]}
          >
            {user.name}
          </Text>
          <Flex
            position="absolute"
            top={["17.5%", "18%", "21%", "20%", "20%"]}
            justify="center"
            // left={["35%", "45%"]}
            w={["100%", "100%", "50%", "40%", "30%"]}
          >
            <IoMdCall color={white} />

            <Text
              ml="1"
              color={colore2}
              fontWeight={font400}
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
