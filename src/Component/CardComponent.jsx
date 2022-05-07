import { Box, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import {
  blue,
  colore2,
  font12,
  font14,
  font24,
  font500,
  font600,
  font700,
  lightblue,
  roboto,
  white,
} from "../Constant";
import packet from "../Images/packet.svg";
import Businessservice from "../services/Businessservice";
import { BsFillCheckCircleFill } from "react-icons/bs";

const CardComponent = ({
  id,
  name,
  deliveredCount,
  wing,
  selected,
  houseNo,
  onClick,
  individual,
  setCustomers,
  setTodayDelievery,
}) => {
  const [count, setCount] = useState(1);
  const [done, setdone] = useState(false);

  const toast = useToast();

  const handleClick = () => {
    const data = {
      userID: id,
      quantity: count,
    };
    Businessservice.createDelievery(data)
      .then(() =>
        Businessservice.getCustomerBySociety(selected, wing).then((res) => {
          if (res.data) {
            setCustomers([]);
            setTodayDelievery([]);
            res.data.customer?.forEach((cust) => {
              if (!cust.isTodayDelivered) {
                setCustomers((old) => [...old, cust]);
              } else {
                setTodayDelievery((old) => [...old, cust]);
              }
            });
          }
        })
      )
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
  };

  return (
    <Flex
      cursor="pointer"
      bg={white}
      mt={individual ? "25px" : "15px"}
      onClick={onClick}
      // alignItems="center"
      justifyContent={"space-between"}
      fontFamily={roboto}
    >
      <Flex px="3" py="2">
        <Flex
          boxSize="65px"
          borderRadius={individual ? "50%" : "10px"}
          bg={lightblue}
          alignItems="center"
          border="1.6px solid #5669FF"
          justify="center"
        >
          <Text
            textAlign="center"
            color={white}
            fontWeight={font600}
            fontSize={font24}
            textTransform="capitalize"
          >
            {houseNo}
          </Text>
        </Flex>
        <Flex ml="16px" direction="column">
          <Text fontWeight={font500} fontSize={font14}>
            {name}
          </Text>
          <Flex alignItems="center" mt="5px">
            <Image mr="8px" boxSize="17px" src={packet} />
            <Text color={blue} fontSize={font12} fontWeight={font700}>
              {deliveredCount}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        {!individual && (
          <Flex my="auto" mr="10px" align="center">
            {count > 1 && (
              <AiOutlineMinusCircle
                cursor="pointer"
                size="30px"
                color="#cccccc"
                onClick={(e) => {
                  e.stopPropagation();
                  setCount(count - 1);
                }}
              />
            )}
            <Text
              fontWeight={font700}
              fontFamily={roboto}
              fontSize={font14}
              mr="10px"
              ml="10px"
            >
              {count > 0 && count}
            </Text>
            <AiFillPlusCircle
              cursor="pointer"
              size="30px"
              color={lightblue}
              onClick={(e) => {
                e.stopPropagation();
                setCount(count + 1);
              }}
            />
          </Flex>
        )}
        {!individual ? (
          <Box>
            {!done ? (
              <Box
                px="3"
                py="7"
                fontWeight={font700}
                fontSize={font14}
                fontFamily={roboto}
                color={white}
                bg={lightblue}
                onClick={(e) => {
                  e.stopPropagation();
                  setdone(true);
                  handleClick();
                }}
                ml="10px"
              >
                Done
              </Box>
            ) : (
              <Box textAlign="center" ml="11px" px="5" py="8" bg="#cbcbcb">
                <BsCheckLg size="20px" color="white" />
              </Box>
            )}
          </Box>
        ) : (
          <Box mr="24px" py="7" fontWeight={font700}>
            <BsFillCheckCircleFill size="20px" color={colore2} />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default CardComponent;
