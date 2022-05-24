import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillInfoCircle, AiOutlineCheckCircle } from "react-icons/ai";
import Layout from "../Component/Layout";
import { blue, font12, font16, font500, roboto, white } from "../Constant";
import drop from "../Images/drop.svg";
import example from "../Images/example.svg";

const Pricing = () => {
  return (
    <Box w="100%" h={["135vh", "150vh", "150vh", "125vh"]}>
      <Layout card={false} screen={true} pricing={true} />
      <Flex
        w="max-content"
        direction="column"
        position="absolute"
        justify="center"
        top={["27%", "35%", "35%", "32%"]}
        left={0}
        right={0}
        mx="auto"
        // left={["5%", "36.5%"]}
        bg={white}
        borderRadius="10px"
        boxShadow="0px 16px 60px rgba(37, 37, 28, 0.15)"
        fontFamily={roboto}
        fontWeight={font500}
        fontSize={font16}
      >
        <Flex justify="center">
          <Image src={drop} boxSize="91px" position="absolute" top="-35px" />
        </Flex>
        <Box
          w="40%"
          h="0.1%"
          // color={blue}
          bg={blue}
          my="30px"
          position="absolute"
          top="45px"
          left={0}
          right={0}
          mx="auto"
        />
        <Flex px="30px" alignItems="center" mt="90px">
          <AiOutlineCheckCircle size="21px" color={blue} />
          <Text ml="13px">Add Unlimited Customer</Text>
        </Flex>
        <Flex px="30px" alignItems="center" mt="12px">
          <AiOutlineCheckCircle size="21px" color={blue} />
          <Text ml="13px">Get Customer View Application</Text>
        </Flex>
        <Flex px="30px" alignItems="center" mt="12px">
          <AiOutlineCheckCircle size="21px" color={blue} />
          <Text ml="13px">Add UPI</Text>
        </Flex>
        <Flex px="30px" alignItems="center" mt="12px">
          <AiOutlineCheckCircle size="21px" color={blue} />
          <Text ml="13px">View Earning & Transactions</Text>
        </Flex>
        <Flex px="30px" alignItems="center" mt="12px">
          <AiOutlineCheckCircle size="21px" color={blue} />
          <Text ml="13px">24/7 Chat Support</Text>
        </Flex>
        <Flex
          position="relative"
          py="1.5"
          px="3"
          bg="#f8f8f8"
          mb="50px"
          mt="20px"
        >
          <AiFillInfoCircle />
          <Text ml="6px" fontSize={font12} color="#EB7100">
            Total Client <span style={{ color: blue }}>+</span> 2 Rs Service
            Charge <span style={{ color: blue }}>= Subscription Price</span>
          </Text>
          <Flex
            position="absolute"
            left={0}
            right={0}
            mx="auto"
            w="max-content"
            top={12}
          >
            <Image src={example} />
          </Flex>
        </Flex>
        {/* <Flex h="50%" /> */}
      </Flex>
    </Box>
  );
};

export default Pricing;
