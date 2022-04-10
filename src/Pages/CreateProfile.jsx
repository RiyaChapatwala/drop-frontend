import { Box, Flex, Image, Input, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ButtonComponent from "../Component/ButtonComponent";
import {
  blue,
  font14,
  font16,
  font22,
  font400,
  font600,
  grey,
  lightblue,
  roboto,
  white,
} from "../Constant";
import name from "../Images/name.svg";
import number from "../Images/number.svg";
import { updateUser } from "../redux/reducers/userSlice";
import Authservice from "../services/Authservice";
import Mediaservice from "../services/Mediaservice";

const CreateProfile = () => {
  const [url, setUrl] = useState({ id: "", imgUrl: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const [fname, setFname] = useState("");
  const [phnNumber, setPhnNumber] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const toast = useToast();
  const inputFile = useRef(null);

  const user = useSelector((state) => state.user.data.user);
  console.log(user, "user");

  useEffect(() => {
    if (user.name) {
      setFname(user.name);
    }
    if (user.mobileNo) {
      setPhnNumber(user.mobileNo);
    }
    if (user.imageUrl && user.imageID) {
      setUrl({ id: user.imageID, imgUrl: user.imageUrl });
    }
  }, [user]);

  const handleClick = () => {
    const form = new FormData();
    form.append("file", selectedFile);
    form.append("folder", "user");
    Mediaservice.uploadMedia(form)
      .then((response) => {
        setUrl({ id: response.id, imgUrl: response.url });
        const data = {
          name: fname,
          mobileNo: phnNumber,
          imageUrl: response.imgUrl,
          imageID: response.id,
        };
        Authservice.updateUser(data)
          .then((res) => {
            if (res.name.toLowerCase() === fname.toLowerCase()) {
              dispatch(updateUser(res));
              history.push("/addSocietyAcc");
              toast({
                title: "Success",
                description: "Success",
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box w="100%">
      <Flex pt="12" px="7" h="91px" background={lightblue} color={white}>
        <BiArrowBack
          cursor="pointer"
          onClick={() => history.goBack()}
          size={22}
        />
        <Text ml="4" fontFamily={roboto} fontWeight={font600} fontSize={font16}>
          Create Profile
        </Text>
      </Flex>
      <Flex
        justify="center"
        alignItems="center"
        mt="30px"
        position="relative"
        width="100%"
      >
        <Box boxSize="85px" borderRadius="lg" border={`1.5px dashed ${blue}`}>
          <Image
            borderRadius="lg"
            border="none"
            boxSize={"83px"}
            objectFit="cover"
            bg="#E2E2E2"
            fallbackSrc="https://via.placeholder.com/150"
            src={url.imgUrl ? url.imgUrl : ""}
          />
        </Box>
        <Box
          position="absolute"
          left={["54%", "54%"]}
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
                setUrl({ imgUrl: URL.createObjectURL(event.target.files[0]) });
              }
            }}
          />
          {!selectedFile && (
            <BsPlusLg
              style={{ color: white, fontWeight: font600, fontSize: font22 }}
            />
          )}
        </Box>
      </Flex>
      <Flex
        w="90%"
        mt="30px"
        py="1"
        px="3"
        mx="auto"
        border="1px solid #B4B3B3"
        borderRadius="6px"
        fontFamily={roboto}
        fontSize={font14}
        fontWeight={font400}
        background={white}
      >
        <Image src={name} />
        <Input
          textTransform={"capitalize"}
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
          value={fname}
          placeholder="Full Name"
          border="none"
          onChange={(e) => setFname(e.target.value)}
        />
      </Flex>
      <Flex
        w="90%"
        mt="25px"
        py="1"
        px="3"
        mx="auto"
        border="1px solid #B4B3B3"
        borderRadius="6px"
        fontFamily={roboto}
        fontSize={font14}
        fontWeight={font400}
        background={white}
      >
        <Image src={number} />
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
            fontFamily: roboto,
          }}
          placeholder="Mobile Number"
          border="none"
          value={phnNumber}
          onChange={(e) => setPhnNumber(e.target.value)}
        />
      </Flex>
      <Flex w="85%" mt="40%" mx="auto" onClick={() => handleClick()}>
        <ButtonComponent name="CREATE" />
      </Flex>
    </Box>
  );
};

export default CreateProfile;
