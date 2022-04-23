import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  colore2,
  font12,
  font16,
  font22,
  font400,
  font600,
  poppins,
  roboto,
  white,
} from "../Constant";
import logo from "../Images/drop.svg";
import top from "../Images/top.svg";

const Layout = ({ card }) => {
  const user = useSelector((state) => state.user.data.user);
  const history = useHistory();
  return (
    <Box width="100%">
      <Image src={top} w="100%" h={["280px", "250px"]} />
      {!card && (
        <>
          <Image
            src={logo}
            boxSize="65px"
            position="absolute"
            top="5%"
            left={["40%", "47%"]}
            onClick={() => history.push("/")}
            cursor="pointer"
          />
          <Text
            color={white}
            fontWeight={font600}
            fontFamily={poppins}
            fontSize={font22}
            position="absolute"
            top={["13%", "16%"]}
            left={["40%", "47%"]}
          >
            DROP
          </Text>
        </>
      )}
      {card && (
        <Flex direction="column">
          <Image
            objectFit="cover"
            src={user.imageUrl}
            boxSize="65px"
            borderRadius=" 11.5px"
            border="2px solid #FFFFFF"
            position="absolute"
            top="5%"
            left={["40%", "47%"]}
          />
          <Text
            textAlign="center"
            color={white}
            fontWeight={font600}
            fontFamily={roboto}
            fontSize={font16}
            position="absolute"
            top={["16%", "17%"]}
            // left={["35%", "45%"]}
            w={["100%", "100%", "50%", "40%", "30%"]}
          >
            {user.name}
          </Text>
          <Flex
            position="absolute"
            top={["20%", "21%"]}
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
