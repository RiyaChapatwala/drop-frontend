import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import {
  blue,
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

const CardComponent = ({ name, deliveredCount, wing, houseNo, onClick }) => {
  const [count, setCount] = useState(0);
  const [done, setdone] = useState(false);

  return (
    <Flex
      cursor="pointer"
      bg={white}
      mt="15px"
      onClick={onClick}
      // alignItems="center"
      justifyContent={"space-between"}
      fontFamily={roboto}
    >
      <Flex px="3" py="2">
        <Flex
          boxSize="65px"
          borderRadius="10px"
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
            {wing} {houseNo}
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
        <Flex my="auto" mr="10px" align="center">
          {count > 0 && (
            <AiOutlineMinusCircle
              cursor="pointer"
              size="30px"
              color="#cccccc"
              onClick={() => setCount(count - 1)}
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
            onClick={() => setCount(count + 1)}
          />
        </Flex>
        {!done ? (
          <Box
            px="3"
            py="6"
            fontWeight={font700}
            fontSize={font14}
            fontFamily={roboto}
            color={white}
            bg={lightblue}
            onClick={(e) => {
              e.stopPropagation();
              setdone(true);
            }}
            ml="10px"
          >
            Done
          </Box>
        ) : (
          <Box textAlign="center" ml="11px" px="5" py="6" bg="#cbcbcb">
            <BsCheckLg size="20px" color="white" />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default CardComponent;
