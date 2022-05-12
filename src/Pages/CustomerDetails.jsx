import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import CustomerCard from "../Component/CustomerCard";
import {
  font12,
  font13,
  font16,
  font400,
  font500,
  font600,
  lightblue,
  lightWhite,
  poppins,
  roboto,
  white,
  blue,
} from "../Constant";

const CustomerDetails = () => {
  const location = useLocation();

  const details = location.state && location.state.data;

  return (
    <Box w="100%">
      <Flex justify="space-between" align="flex-end" bg={lightblue}>
        <Flex direction="column" pt="44px" pl="16px" pb="15px">
          <Text fontWeight={font500} fontSize={font16} color={white}>
            {details && details?.name}
          </Text>
          <Flex color={lightWhite}>
            <IoMdCall />

            <Text
              ml="1"
              fontWeight={font400}
              fontFamily={roboto}
              fontSize={font12}
            >
              +91 {details?.mobileNo}
            </Text>
          </Flex>
        </Flex>
        <Flex pt="44px" pr="16px" pb="15px">
          {details.subscriber.map((element) => (
            <Flex
              //   ml="25px"
              align="center"
              w="75px"
              h="33px"
              borderRadius="6px"
              bg={white}
              px="1"
              justify="space-between"
            >
              <Image
                // filter={
                //   "invert(39%) sepia(86%) saturate(3835%) hue-rotate(225deg) brightness(104%) contrast(101%)"
                // }
                boxSize="15px"
                color={blue}
                src={element.type.logoUrl}
              />
              <Text
                fontFamily={poppins}
                fontWeight={font600}
                fontSize={font13}
                color={blue}
              >
                {element.type.name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <CustomerCard details={details} supplier={false} />
    </Box>
  );
};

export default CustomerDetails;
