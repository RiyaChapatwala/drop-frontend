import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineRightCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BottomSheet } from "react-spring-bottom-sheet";
import ButtonComponent from "../Component/ButtonComponent";
import {
  blue,
  ec,
  font12,
  font14,
  font16,
  font30,
  font400,
  font600,
  grey,
  lightblue,
  roboto,
  white,
} from "../Constant";
import name from "../Images/name.svg";
import number from "../Images/number.svg";
import { getSociety } from "../redux/reducers/userSlice";
import Societyservice from "../services/Societyervice";

const AddCustomer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data.user);

  const [roomNo, setRoomNo] = useState("");
  const [custName, setCustName] = useState("");
  const [wingName, setWingName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [select, setSelect] = useState(false);
  const [allSociety, setAllSociety] = useState([]);
  const [selected, setSelected] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchAllSociety = () => {
    Societyservice.getAllSociety()
      .then((response) => {
        dispatch(getSociety(response.data));
        setAllSociety(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (allSociety.length <= 0) {
      fetchAllSociety();
    }
  }, [allSociety, fetchAllSociety]);

  return (
    <Box w="100%" position="relative">
      <Flex
        pt="8"
        px="7"
        h="91px"
        background={lightblue}
        color={white}
        alignItems="center"
      >
        <Flex flex="2">
          <BiArrowBack
            cursor="pointer"
            onClick={() => history.goBack()}
            size={22}
          />
          <Text
            ml="4"
            fontFamily={roboto}
            fontWeight={font600}
            fontSize={font16}
          >
            Add Customer
          </Text>
        </Flex>

        <Avatar
          border={`1.5px solid ${white}`}
          size={"sm"}
          src={user.imageUrl || ""}
        />
      </Flex>
      <Flex flexDir={"column"} alignItems="center" height={"72%"}>
        <Flex
          justify="center"
          boxSize="85px"
          borderRadius="10px"
          bg={lightblue}
          mt="30px"
          alignItems="center"
        >
          {(wingName || roomNo) && (
            <Text
              textAlign="center"
              color={white}
              fontFamily={roboto}
              fontWeight={font600}
              fontSize={font30}
              textTransform="capitalize"
            >
              {wingName} {roomNo}
            </Text>
          )}
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
            value={custName}
            placeholder="Customer Name"
            border="none"
            onChange={(e) => setCustName(e.target.value)}
          />
        </Flex>
        <Flex
          w="90%"
          mt="15px"
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
            value={mobileNo}
            placeholder="Mobile No."
            border="none"
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </Flex>
        <Flex
          w="90%"
          mt="15px"
          py="3"
          px="3"
          mx="auto"
          border="1px solid #B4B3B3"
          borderRadius="6px"
          fontFamily={roboto}
          fontSize={font14}
          fontWeight={font400}
          background={white}
        >
          <Flex flex="2">
            <Image src={number} />
            <Text
              fontFamily={roboto}
              fontSize={font16}
              fontWeight={font400}
              color={`${selected === "" ? grey : "inherit"}`}
              opacity="0.5"
              ml="3.5"
            >{`${selected === "" ? "Select Society" : selected}`}</Text>
          </Flex>
          <AiOutlineRightCircle
            size="22px"
            color={blue}
            cursor="pointer"
            onClick={() => setSelect(true)}
          />
        </Flex>
        <Flex w="90%" mx="auto">
          <Flex
            w="80%"
            mt="15px"
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
              value={wingName}
              placeholder="Wing Name"
              border="none"
              onChange={(e) => setWingName(e.target.value)}
            />
          </Flex>
          <Flex
            // w=""
            mt="15px"
            py="1"
            px="3"
            mx="auto"
            border="1px solid #B4B3B3"
            borderRadius="6px"
            fontFamily={roboto}
            fontSize={font14}
            fontWeight={font400}
            background={white}
            ml="15px"
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
              value={roomNo}
              placeholder="Room No."
              border="none"
              onChange={(e) => setRoomNo(e.target.value)}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="85%"
        mx="auto"
        onClick={() => {
          history.push("/addSocietyAcc", { Soc: false, Acc: false });
        }}
      >
        <ButtonComponent name="CREATE" />
      </Flex>
      <BottomSheet
        open={select}
        onDismiss={() => {
          setSelect(false);
        }}
        className="hideScrollBar"
        snapPoints={({ maxHeight }) => [maxHeight * 0.63]}
      >
        <Grid
          className="hideScrollBar"
          templateColumns="repeat(3, 1fr)"
          rowGap={3}
          w="92%"
          mx="auto"
        >
          {Object.keys(allSociety)?.map((element) => (
            // console.log(element, "element")
            <GridItem
              p="2"
              key={allSociety[element].id}
              bg={white}
              height="116px"
              alignItems="center"
              justifyContent="center"
              border={`1.5px solid ${ec}`}
              borderRadius="8px"
              mr="10px"
              cursor="pointer"
              boxShadow="0px 15.8433px 35.6473px #F0EDF7"
              onClick={() => {
                setSelected(allSociety[element].name);
                setSelect(false);
              }}
            >
              <Image
                borderRadius="8px"
                boxSize={"46px"}
                objectFit="cover"
                src={allSociety[element].imageUrl}
                fallbackSrc="https://via.placeholder.com/50"
              />
              <Text
                mt="2"
                color={grey}
                fontWeight={font600}
                fontSize={font12}
                fontFamily={roboto}
              >
                {allSociety[element].name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </BottomSheet>
    </Box>
  );
};

export default AddCustomer;
