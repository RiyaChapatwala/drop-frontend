import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Component/Nav";
import {
  bg,
  blue,
  font12,
  font14,
  font16,
  font400,
  font600,
  grey,
  lightblack,
  poppins,
  roboto,
  white,
} from "../Constant";
import account from "../Images/account.svg";
import addCustomer from "../Images/addCustomer.svg";
import customer from "../Images/customer.svg";
import no from "../Images/no.svg";
import soc from "../Images/societyEmpty.svg";
import societyimg from "../Images/society.svg";
import Societyservice from "../services/Societyervice";

const HomeBefore1 = () => {
  const history = useHistory();

  const [showSoc, setShowSoc] = useState(true);
  const [showAcc, setShowAcc] = useState(true);
  const [back, setBack] = useState(true);
  const [cust, setCust] = useState(false);

  const [society, setSociety] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state !== undefined) {
      if (location.state.Soc === false) {
        setShowSoc(false);
        setBack(false);
        setCust(true);
      }
      if (location.state.Acc === false) {
        setShowAcc(false);
      }
      if (location.state.Cust === false) {
        setCust(false);
      }
    }
  }, [location]);

  useEffect(() => {
    Societyservice.getSocietyByUser().then((response) => {
      setSociety(response.body[0].name);
    });
  }, []);

  return (
    <Box w="100%" bg={bg} h="100vh">
      <Nav />
      <Flex
        px="3"
        justify="flex-start"
        alignItems="center"
        mt="30px"
        position="relative"
        width="100%"
      >
        {showSoc && (
          <Flex
            bg={white}
            height="126px"
            width="111px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            border={`1.5px dashed ${blue}`}
            borderRadius="8px"
            mr="10px"
            cursor="pointer"
            onClick={() => {
              history.push("/addSociety", { home: false });
              setShowSoc(false);
            }}
          >
            <Image boxSize={"46px"} src={societyimg} />
            <Text
              mt="2"
              color={grey}
              fontWeight={font600}
              fontSize={font12}
              fontFamily={roboto}
            >
              Add Society
            </Text>
          </Flex>
        )}
        {showAcc && (
          <Flex
            bg={white}
            height="126px"
            width="111px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            border={`1.5px dashed ${blue}`}
            borderRadius="8px"
            cursor="pointer"
            onClick={() => {
              history.push("/addAcc");
              setShowAcc(false);
            }}
          >
            <Image boxSize={"46px"} src={account} />
            <Text
              mt="2"
              color={grey}
              fontWeight={font600}
              fontSize={font12}
              fontFamily={roboto}
            >
              Add Account
            </Text>
          </Flex>
        )}
      </Flex>
      {back && (
        <Flex
          position="absolute"
          top="48%"
          left="38%"
          alignItems={"center"}
          flexDir={"column"}
        >
          <Image src={no} />
          <Text
            textAlign={"center"}
            w="80%"
            fontWeight={font400}
            fontSize={font14}
            fontFamily={poppins}
            color={lightblack}
          >
            There isn't a single customer in this business.
          </Text>
        </Flex>
      )}
      {cust && (
        <Box w="100%" mt="20px">
          <Flex w="100%" justifyContent={"space-between"}>
            <Flex
              w="80%"
              bg={white}
              p="3"
              border={`0.8px solid ${blue}`}
              borderRadius="0 10px 10px 0"
              alignItems={"center"}
              boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 45px"
            >
              <Image src={soc} />
              <Text
                ml="2.5"
                fontWeight={font600}
                fontSize={font16}
                fontFamily={poppins}
                color={grey}
                textTransform="capitalize"
              >
                {society}
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justify="center"
              w="15%"
              bg={blue}
              borderRadius="10px 0 0 10px"
              cursor="pointer"
              onClick={() => history.push("/addCustomer")}
            >
              <Image color={white} src={customer} />
            </Flex>
          </Flex>
          <Flex
            position="absolute"
            top="53%"
            left="41%"
            alignItems={"center"}
            flexDir={"column"}
          >
            <Image h="224px" w="254px" src={addCustomer} />
            <Text
              textAlign={"center"}
              w="80%"
              fontWeight={font400}
              fontSize={font14}
              fontFamily={poppins}
              color={lightblack}
            >
              Add Customer By Clicking Add Button
            </Text>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default HomeBefore1;
