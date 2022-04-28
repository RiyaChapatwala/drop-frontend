import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
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
import Userservice from "../services/Userservice";

const CustomerDetails = () => {
  const location = useLocation();
  const toast = useToast();

  useEffect(() => {
    Userservice.getCustomerByPhone(location.state?.mobileNo)
      .then((res) => console.log(res))
      .catch((error) =>
        toast({
          title: "error",
          description: error.isAxiosError
            ? error.response?.data?.message
            : error.message,
          status: "error",
          duration: 3000,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state?.mobileNo]);

  return (
    <Box w="100%">
      <Flex justify="space-between" align="flex-end" bg={lightblue}>
        <Flex direction="column" pt="44px" pl="16px" pb="15px">
          <Text fontWeight={font500} fontSize={font16} color={white}>
            {/* {name} */} Riyanka Jariwala
          </Text>
          <Flex color={lightWhite}>
            <IoMdCall />

            <Text
              ml="1"
              fontWeight={font400}
              fontFamily={roboto}
              fontSize={font12}
            >
              {/* +91 {user.mobileNo} */}
              +91 9876789876
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
      <CustomerCard />
    </Box>
  );
};

export default CustomerDetails;
