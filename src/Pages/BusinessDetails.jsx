import { Box, Flex, Image, Input, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ButtonComponent from "../Component/ButtonComponent";
import Layout from "../Component/Layout";
import {
  blue,
  font12,
  font14,
  font22,
  font400,
  font600,
  grey,
  lato,
  poppins,
  roboto,
  white,
} from "../Constant";
import business from "../Images/business.svg";
import icon from "../Images/location.svg";
import Mediaservice from "../services/Mediaservice";
import Businessservice from "../services/Businessservice";
import { createbusiness } from "../redux/reducers/userSlice";
import { AiOutlineCopyright } from "react-icons/ai";

const BusinessDetails = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const toast = useToast();

  const [url, setUrl] = useState({ id: "", imgUrl: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const [addressLine, setAddressLine] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [type, setType] = useState();

  const user = useSelector((state) => state.user.data.user);
  const inputFile = useRef(null);

  useEffect(() => {
    Businessservice.getBusinessByUser()
      .then((res) => {
        if (res) {
          setBusinessName(res.data.name);
          setAddressLine(res.data.address);
          setUrl({ id: res.data.imageID, imgUrl: res.data.imageUrl });
        }
      })
      .catch(
        (error) =>
          console.log(
            error.isAxiosError ? error.response?.data?.message : error.message
          )
        // toast({
        //   title: "error",
        //   description: error.isAxiosError
        //     ? error.response?.data?.message
        //     : error.message,
        //   status: "error",
        //   duration: 3000,
        // })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const form = new FormData();
    form.append("file", selectedFile);
    form.append("folder", "business");
    Mediaservice.uploadMedia(form)
      .then((response) => setUrl({ id: response.id, imgUrl: response.url }))
      .catch((err) => console.log(err));

    location.state?.checked &&
      location.state?.checked.forEach((element) => {
        setType(element.id);
      });
  }, [selectedFile, location, type]);

  const handleClick = () => {
    const data = {
      name: businessName,
      address: addressLine,
      imageUrl: url.imgUrl,
      imageID: url.id,
      type: type,
    };

    if (location.state && location.state?.edit) {
      Businessservice.editBusiness(data)
        .then((response) => {
          if (response.success === true) {
            toast({
              title: "Success",
              description: "Business Successfully Updated",
              status: "success",
              duration: 3000,
            });
            history.push("/");
          }
        })
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
    } else {
      Businessservice.createBusiness(data)
        .then((response) => {
          if (response.success === true) {
            dispatch(createbusiness(response));

            history.push("/create-profile");
            toast({
              title: "Success",
              description: "Business Successfully Created",
              status: "success",
              duration: 3000,
            });
          }
        })
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
    }
  };

  return (
    <Box w="100%" fontFamily={poppins} h="100vh">
      <Layout select={true} />
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
          <Box boxSize="96px" borderRadius="lg" border={`1.5px dashed ${blue}`}>
            <Image
              borderRadius="lg"
              border="1px solid black"
              boxSize={"93px"}
              objectFit="cover"
              bg="#E2E2E2"
              fallbackSrc="https://via.placeholder.com/150"
              src={url.imgUrl ? url.imgUrl : user.imageUrl ? user.imageUrl : ""}
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
            value={businessName}
            _focus={{
              border: "none",
            }}
            _active={{
              bg: "transparent",
            }}
            _hover={{
              bg: "transperant",
              border: "none",
            }}
            _placeholder={{
              color: grey,
              opacity: "0.5",
            }}
            placeholder="Business Name"
            border="none"
            onChange={(e) => setBusinessName(e.target.value)}
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
          <Input
            _focus={{
              border: "none",
            }}
            _active={{
              bg: "transparent",
            }}
            _hover={{
              bg: "transperant",
              border: "none",
            }}
            _placeholder={{
              color: grey,
              opacity: "0.5",
            }}
            placeholder="Add Address"
            border="none"
            value={addressLine}
            onChange={(e) => setAddressLine(e.target.value)}
          />
          {/* <LocationInput
            address={addressLine}
            placeholder="Your Address"
            setAddress={setAddressLine}
          /> */}
        </Flex>
      </Flex>

      <Flex w="85%" mx="auto" mt="56px" onClick={() => handleClick()}>
        <ButtonComponent
          name={location.state && location.state.edit ? "EDIT" : "DONE"}
        />
      </Flex>
      <Flex color={"#727272"} mt="30px" pb="10px" w="100%" justify="center">
        <AiOutlineCopyright style={{ opacity: 0.5 }} />
        <Text
          opacity={0.5}
          fontFamily={lato}
          fontWeight={font400}
          fontSize={font12}
          ml="1"
        >
          2021-2022 DROP. All Rights Reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default BusinessDetails;
