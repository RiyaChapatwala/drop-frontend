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
import { setSociety } from "../redux/reducers/userSlice";
import Mediaservice from "../services/Mediaservice";
import Societyservice from "../services/Societyervice";
import soc from "../Images/societyFill.svg";

const AddSociety = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const toast = useToast();
  const inputFile = useRef(null);

  const [socName, setSocName] = useState("");
  const [url, setUrl] = useState({ id: "", imgUrl: "" });
  const [selectedFile, setSelectedFile] = useState(null);

  const society = useSelector((state) => state.user.society);

  useEffect(() => {
    if (society && society.length > 0) {
      setSocName(society[society.length - 1].societyName);
      setUrl({
        id: society[society.length - 1].societyImageID,
        imgUrl: society[society.length - 1].societyImageUrl,
      });
    }
  }, [society]);

  const handleClick = () => {
    const form = new FormData();
    form.append("file", selectedFile);
    form.append("folder", "society");
    Mediaservice.uploadMedia(form)
      .then((response) => {
        setUrl({ id: response.id, imgUrl: response.url });
        const data = {
          societyName: socName,
          societyImageUrl: response.url,
          societyImageID: response.id,
        };
        Societyservice.createSociety(data)
          .then((res) => {
            if (res.data) {
              dispatch(
                setSociety({
                  societyName: res.data.name,
                  societyImageID: res.data.imageID,
                  societyImageUrl: res.data.imageUrl,
                })
              );
              toast({
                title: "Success",
                description: "Success",
                status: "success",
                duration: 3000,
              });
              history.push("/addSocietyAcc", { Soc: false });
            }
          })
          .catch((error) => {
            console.log(error);
            toast({
              title: "error",
              description: error.isAxiosError
                ? error.response?.data?.message
                : error.message,
              status: "error",
              duration: 3000,
            });
          });
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
          Add Society
        </Text>
      </Flex>
      <Flex flexDir={"column"} alignItems="center" height={"72%"}>
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
                  setUrl({
                    imgUrl: URL.createObjectURL(event.target.files[0]),
                  });
                }
              }}
            />
            {!selectedFile && (
              <BsPlusLg
                style={{
                  color: white,
                  fontWeight: font600,
                  fontSize: font22,
                }}
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
          <Image src={soc} />
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
            value={socName}
            placeholder="Society Name"
            border="none"
            onChange={(e) => setSocName(e.target.value)}
          />
        </Flex>
      </Flex>
      <Flex w="85%" mx="auto" onClick={() => handleClick()}>
        <ButtonComponent name="CREATE" />
      </Flex>
    </Box>
  );
};

export default AddSociety;
