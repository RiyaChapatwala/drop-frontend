import { Box, Flex, Text } from "@chakra-ui/react";
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
} from "../Constant";

const CustomerDetails = () => {
  const location = useLocation();

  console.log(location.state, "heyo");

  const details = location.state && location.state.data;
  console.log(details, "yyy");

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
          <Flex
            //   ml="25px"
            align="center"
            w="85px"
            h="33px"
            borderRadius="6px"
            bg={white}
          >
            <Text>icon</Text>
            <Text fontFamily={poppins} fontWeight={font600} fontSize={font13}>
              WATER
            </Text>
          </Flex>
          <Flex>icons</Flex>
          <Flex>icons</Flex>
        </Flex>
      </Flex>
      <CustomerCard details={details} supplier={false} />
    </Box>
  );
};

export default CustomerDetails;
