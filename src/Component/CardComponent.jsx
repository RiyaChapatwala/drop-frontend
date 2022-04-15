import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import {
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

const CardComponent = ({ name }) => {
  const [count, setCount] = useState(0);
  const [done, setdone] = useState(false);

  return (
    <Flex bg={white} mt="15px" alignItems="center">
      <Flex
        justify="center"
        boxSize="55px"
        borderRadius="10px"
        bg={lightblue}
        alignItems="center"
      >
        <Text
          textAlign="center"
          color={white}
          fontFamily={roboto}
          fontWeight={font600}
          fontSize={font24}
          textTransform="capitalize"
        >
          12
        </Text>
      </Flex>
      <Flex flex="1" ml="20px" direction="column">
        <Text fontFamily={roboto} fontWeight={font500} fontSize={font14}>
          {name}
        </Text>
        <Image mt="8px" boxSize="17px" src={packet} />
      </Flex>
      {count > 0 && (
        <AiOutlineMinusCircle
          cursor="pointer"
          size="30px"
          color="#cccccc"
          onClick={() => setCount(count - 1)}
          mr="10px"
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
        mr="21px"
      />
      {!done ? (
        <Box
          px="2.5"
          py="5"
          fontWeight={font700}
          fontSize={font14}
          fontFamily={roboto}
          color={white}
          bg={lightblue}
          onClick={() => setdone(true)}
          ml="10px"
        >
          Done
        </Box>
      ) : (
        <Box ml="11px" px="4" py="5" bg="#cbcbcb">
          <BsCheckLg size="20px" color="white" />
        </Box>
      )}
    </Flex>
  );
};

export default CardComponent;
