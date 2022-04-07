import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  blue,
  font12,
  font16,
  font600,
  grey,
  lightblue,
  roboto,
  white,
} from "../Constant";
import account from "../Images/account.svg";
import society from "../Images/society.svg";
import Businessservice from "../services/Businessservice";

const HomeBefore1 = () => {
  const history = useHistory();
  const [showSoc, setShowSoc] = useState(true);
  const [showAcc, setShowAcc] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.state === false) {
      setShowSoc(false);
    }
  }, [location]);

  // useEffect(() => {
  //   Businessservice.getBusiness().then((response) =>
  //     console.log(response, "business")
  //   );
  // }, []);

  return (
    <Box w="100%">
      <Flex pt="12" px="7" h="91px" background={lightblue} color={white}>
        <BiArrowBack onClick={() => history.goBack()} size={22} />
        <Text ml="4" fontFamily={roboto} fontWeight={font600} fontSize={font16}>
          Business Name
        </Text>
      </Flex>
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
            onClick={() => {
              history.push("/addSociety");
              setShowSoc(false);
            }}
          >
            <Image boxSize={"46px"} src={society} />
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
            onClick={() => setShowAcc(false)}
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
    </Box>
  );
};

export default HomeBefore1;
