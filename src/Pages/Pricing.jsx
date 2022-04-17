import { Box, Center, Divider, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillInfoCircle, AiOutlineCheckCircle } from "react-icons/ai";
import Layout from "../Component/Layout";
import { blue, font12, font16, font500, roboto, white } from "../Constant";
import drop from "../Images/drop.svg";
import example from "../Images/example.svg";

const Pricing = () => {
  return (
    <Box w="100%">
      <Layout card={false} />
      <Center>
      <SimpleGrid columns={1} spacing={10}>

      <Flex
        direction="column"
        justify="center"
        top="30%"
        bg={white}
        borderRadius="10px"
        boxShadow="0px 16px 60px rgba(37, 37, 28, 0.15)"
        fontFamily={roboto}
        fontWeight={font500}
        fontSize={font16}
      >
        <Flex justify="center">
          <Image src={drop} boxSize="91px"/>
        </Flex>
        <Center>

        <Divider
          w="83%"
          color={blue}
          my="30px"
          top="45px"
          />
          </Center>
        <Flex px="30px" alignItems="center" mt="12px">
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
          <Text ml="13px">View Earning - Transactions</Text>
        </Flex>
        <Flex px="30px" alignItems="center" mt="12px">
          <AiOutlineCheckCircle size="21px" color={blue} />
          <Text ml="13px">24/7 Chat Support</Text>
        </Flex>
        
        <Flex
          py="1.5"
          px="3"
          bg="#f8f8f8"
          mb="50px"
          mt="20px"
        >
          <Center>

          <AiFillInfoCircle />
          <Text ml="6px" fontSize={font12} color="#EB7100">
            Total Client <span style={{ color: blue }}>+</span> 2 Rs Service
            Charge <span style={{ color: blue }}>= Subscription Price</span>
          </Text>
          
          </Center>
        </Flex>
      </Flex>
      <Flex top="60%">
        <Image src={example} />
      </Flex>
      </SimpleGrid>

      </Center>

    </Box>
  );
};

export default Pricing;
