import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  blue,
  colorf4,
  font12,
  font13,
  font14,
  font400,
  font600,
  grey,
  lato,
  poppins,
  roboto,
  white,
} from "../Constant";
import backImg from "../Images/customer-back.svg";
import drop from "../Images/drop.svg";
import number from "../Images/number.svg";
import { AiOutlineCopyright } from "react-icons/ai";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Customer_home = () => {
  const [phnNumber, setPhnNumber] = useState("");

  const history = useHistory();
  const toast = useToast();

  return (
    <Box bgImage={backImg} w="100%" h="100vh">
      <Flex justify="center">
        <Image mt="32%" src={drop} boxSize="98px" />
      </Flex>
      <Flex
        w="90%"
        mt="50px"
        py="1"
        px="3"
        mx="auto"
        border="1px solid #B4B3B3"
        borderRadius="6px"
        fontFamily={roboto}
        fontSize={font14}
        fontWeight={font400}
        background={white}
      >
        <Image src={number} />
        <Input
          _focus={{
            border: "none",
          }}
          _active={{
            bg: "transparent",
          }}
          _hover={{
            bg: "transperant",
            border: "none",
          }}
          _placeholder={{
            color: grey,
            opacity: "0.5",
            fontFamily: roboto,
          }}
          placeholder="Mobile Number"
          border="none"
          value={phnNumber}
          onChange={(e) => setPhnNumber(e.target.value)}
        />
      </Flex>
      <Flex
        w="85%"
        mx="auto"
        mt="175px"
        onClick={() => {
          if (phnNumber !== "") {
            history.push("/customer-deatils", {
              supplier: false,
              mobileNo: phnNumber,
            });
          } else {
            toast({
              title: "error",
              description: "Please Enter Your Mobile Number",
              status: "error",
              duration: 3000,
            });
          }
        }}
      >
        <Button
          w="100%"
          h="52px"
          color={blue}
          borderRadius="8px"
          bg={white}
          border="1px solid #B4B3B3"
          fontFamily={poppins}
          fontSize={font13}
          fontWeight={font600}
          boxShadow="0px 16px 60px rgba(37, 37, 28, 0.15)"
        >
          SUBMIT
        </Button>
      </Flex>
      <Flex color={colorf4} mt="20px" w="100%" justify="center">
        <AiOutlineCopyright />
        <Text
          opacity={0.5}
          fontFamily={lato}
          fontWeight={font400}
          fontSize={font12}
        >
          2021-2022 DROP. All Rights Reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Customer_home;
