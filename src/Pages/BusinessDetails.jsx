import { Box, Flex, Text, Image, Input } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import ButtonComponent from "../Component/ButtonComponent";
import Layout from "../Component/Layout";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import business from "../Images/business.svg";
import icon from "../Images/location.svg";

import {
  blue,
  font12,
  font22,
  font400,
  font600,
  poppins,
  roboto,
  font14,
  grey,
  white,
} from "../Constant";
import LocationInput from "../Component/LocationInput";

const BusinessDetails = () => {
  const location = useLocation();
  console.log(location.state.checked, "here");
  const [url, setUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [addressLine, setAddressLine] = useState("");

  console.log(selectedFile);

  const user = useSelector((state) => state.user.data.user);
  const inputFile = useRef(null);

  return (
    <Box w="100%" fontFamily={poppins}>
      <Layout />
      <Flex direction="column" justify="center" alignItems="center" mt="8">
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
        >
          Select and Continue
        </Text>
        <Flex
          justify="center"
          alignItems="center"
          mt="20px"
          position="relative"
          width="100%"
        >
          <Box borderRadius="lg" border="1px solid black" boxSize="85px">
            <Image
              object-fit="cover"
              bg="#E2E2E2"
              src={url ? url : user.imageUrl ? user.imageUrl : ""}
            />
          </Box>
          <Box
            position="absolute"
            left={["53%", "53%"]}
            top="62%"
            transform="translate(-90%,-90%)"
            borderRadius="50%"
            p="2"
            cursor="pointer"
            onClick={() => inputFile.current?.click()}
          >
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              ref={inputFile}
              accept="image/*"
              onChange={(event) => {
                if (event.target.files && event.target.files[0]) {
                  setSelectedFile(event.target.files[0]);
                  setUrl(URL.createObjectURL(event.target.files[0]));
                }
              }}
            />
            {!selectedFile && <BsPlusLg boxSize={25} />}
          </Box>
        </Flex>
        <Flex
          w="85%"
          px="3"
          mt="25px"
          py="1"
          border="1px solid #B4B3B3"
          borderRadius="6px"
          fontFamily={roboto}
          fontSize={font14}
          fontWeight={font400}
          background={white}
        >
          <Image src={business} />
          <Input
            color={grey}
            opacity="0.5"
            placeholder="Business Name"
            border="none"
          />
        </Flex>
        <Flex
          w="85%"
          mt="25px"
          py="1"
          px="3"
          border="1px solid #B4B3B3"
          borderRadius="6px"
          fontFamily={roboto}
          fontSize={font14}
          fontWeight={font400}
          background={white}
        >
          <Image src={icon} />
          <LocationInput
            address={addressLine}
            placeholder="Your Address"
            setAddress={setAddressLine}
          />
        </Flex>
      </Flex>

      <Flex w="85%" mx="auto" mt="9">
        <ButtonComponent name="NEXT" />
      </Flex>
    </Box>
  );
};

export default BusinessDetails;
