import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ButtonComponent from "../Component/ButtonComponent";
import Layout from "../Component/Layout";
import { blue, font12, font22, font400, font600, poppins } from "../Constant";

const BusinessDetails = () => {
  return (
    <Box w="100%" fontFamily={poppins}>
      <Layout />
      <Flex direction="column" justify="center" alignItems="center" mt="12">
        <Text
          fontFamily={poppins}
          lineHeight="33px"
          textAlign="center"
          fontSize={font22}
          fontWeight={font600}
          color={blue}
        >
          Select Business
        </Text>
        <Text
          fontFamily={poppins}
          textAlign="center"
          fontSize={font12}
          fontWeight={font400}
          color={blue}
          mb="40px"
        >
          Select and Continue
        </Text>
      </Flex>

      <Flex w="85%" mx="auto" mt="9">
        <ButtonComponent name="NEXT" />
      </Flex>
    </Box>
  );
};

export default BusinessDetails;
