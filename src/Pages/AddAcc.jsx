import {
  Box,
  Flex,
  Image,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ButtonComponent from "../Component/ButtonComponent";
import {
  colorb4,
  colored,
  font12,
  font14,
  font16,
  font400,
  font600,
  grey,
  lightblue,
  roboto,
  white,
} from "../Constant";
import name from "../Images/name.svg";
import number from "../Images/number.svg";
import Authservice from "../services/Authservice";

const AddAcc = () => {
  const history = useHistory();
  const toast = useToast();

  const [user, setUser] = useState("");
  const [accNo, setAccNo] = useState("");
  const [confirmAccNo, setConfirmAccNo] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [upiID, setUpiID] = useState("");

  const handleClick = () => {
    if (accNo !== confirmAccNo) {
      toast({
        title: "error",
        description: "Account Number Didn't Match",
        status: "error",
        duration: 3000,
      });
    } else {
      const data = {
        UPIID: upiID,
        holderName: user,
        accountNo: accNo,
        IFSCCode: ifsc,
      };
      Authservice.createAccount(data)
        .then((res) => {
          if (res.success === true) {
            toast({
              title: "Success",
              description: "Success",
              status: "success",
              duration: 3000,
            });
            history.push("/addSocietyAcc", { Acc: false });
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
    <Box w="100%">
      <Flex
        pt="12"
        px="4"
        h="91px"
        background={lightblue}
        color={white}
        alignItems="center"
        justify="space-between"
      >
        <Flex cursor="pointer">
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
            Add Account
          </Text>
        </Flex>
        <Flex
          cursor="pointer"
          onClick={() =>
            history.push("/addSocietyAcc", { Soc: false, Acc: true })
          }
        >
          <Text
            mr="4"
            fontFamily={roboto}
            fontWeight={font600}
            fontSize={font16}
          >
            Skip For Now
          </Text>
          <BsArrowRight cursor="pointer" size={22} />
        </Flex>
      </Flex>
      <Flex flexDir={"column"} alignItems="center" height={"72%"}>
        <Tabs
          variant="unstyled"
          my="33px"
          w="90%"
          fontFamily={roboto}
          fontWeight={font400}
        >
          <TabList>
            <Tab
              w="50%"
              h="33px"
              _selected={{ color: "white", bg: lightblue }}
              bg={colored}
              borderRadius="6px"
              color={colorb4}
              fontSize={font12}
              _focus={{
                border: "none",
              }}
            >
              Bank Account
            </Tab>
            <Tab
              bg={colored}
              w="50%"
              h="33px"
              _selected={{ bg: lightblue, color: white }}
              borderRadius="6px"
              color={colorb4}
              fontSize={font12}
              _focus={{
                border: "none",
              }}
            >
              UPI ID
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex
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
                  value={user}
                  placeholder="User"
                  border="none"
                  onChange={(e) => setUser(e.target.value)}
                />
              </Flex>
              <Flex
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
                  value={accNo}
                  placeholder="Account Number"
                  border="none"
                  onChange={(e) => setAccNo(e.target.value)}
                />
              </Flex>
              <Flex
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
                  value={confirmAccNo}
                  placeholder="Confirm Account Number"
                  border="none"
                  onChange={(e) => setConfirmAccNo(e.target.value)}
                />
              </Flex>
              <Flex
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
                  value={ifsc}
                  placeholder="IFSC Code"
                  border="none"
                  onChange={(e) => setIfsc(e.target.value)}
                />
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex
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
                  value={upiID}
                  placeholder="UPI ID"
                  border="none"
                  onChange={(e) => setUpiID(e.target.value)}
                />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Flex w="85%" mx="auto" onClick={() => handleClick()}>
        <ButtonComponent name="SAVE" />
      </Flex>
    </Box>
  );
};

export default AddAcc;
