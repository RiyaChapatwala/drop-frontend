import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BottomSheet } from "react-spring-bottom-sheet";
import CardComponent from "../Component/CardComponent";
import Nav from "../Component/Nav";
import {
  blue,
  ec,
  font12,
  font16,
  font400,
  font600,
  grey,
  roboto,
  white,
} from "../Constant";
import customer from "../Images/customer.svg";
import soc from "../Images/societyEmpty.svg";
import Businessservice from "../services/Businessservice";
import Societyservice from "../services/Societyervice";

const Home = () => {
  const history = useHistory();
  const toast = useToast();

  const [society, setSociety] = useState([]);
  const [select, setSelect] = useState(false);
  const [selected, setSelected] = useState({ id: null, name: "" });
  const [customers, setCustomers] = useState([]);

  const fetchSociety = () => {
    Societyservice.getSocietyByUser().then((response) => {
      setSociety(response.body);
    });
  };

  useEffect(() => {
    if (society && society.length <= 0) {
      fetchSociety();
    }
  }, [society]);

  useEffect(() => {
    if (selected.id !== null) {
      Businessservice.getCustomerBySociety(selected.id)
        .then((res) => {
          console.log(res.data.customer);
          if (res.data) setCustomers(res.data.customer);
        })
        .catch((error) => {
          toast({
            title: "error",
            description: error.isAxiosError
              ? error.response?.data?.message
              : error.message,
            status: "error",
            duration: 3000,
          });
        });
    }
  }, [selected]);

  return (
    <Box w="100%" mt="5px">
      <Nav card={true} />
      <Flex mt="15px" w="100%" justifyContent={"space-between"}>
        <Flex
          w="80%"
          bg={white}
          py="2"
          px="2"
          border={`0.8px solid ${blue}`}
          borderRadius="0 10px 10px 0"
          alignItems={"center"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 45px"
        >
          <Flex flex="2">
            <Image src={soc} />

            <Text
              fontFamily={roboto}
              fontSize={font16}
              fontWeight={font400}
              color={`${society === "" ? grey : "black"}`}
              opacity="0.5"
              ml="3.5"
            >{`${
              selected.name === "" ? "Select Society" : selected.name
            }`}</Text>
          </Flex>
          <IoIosArrowDown
            size="22px"
            color={blue}
            cursor="pointer"
            onClick={() => setSelect(true)}
          />
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
      {customers.map((customer) => (
        <CardComponent
          key={customer.id}
          name={customer.name}
          id={customer.id}
        />
      ))}
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
          {society &&
            Object.keys(society)?.map((element) => (
              // console.log(element, "element")
              <GridItem
                p="2"
                key={society[element].id}
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
                  setSelected({
                    id: society[element].id,
                    name: society[element].name,
                  });
                  setSelect(false);
                }}
              >
                <Image
                  borderRadius="8px"
                  boxSize={"46px"}
                  objectFit="cover"
                  src={society[element].imageUrl}
                  fallbackSrc="https://via.placeholder.com/50"
                />
                <Text
                  mt="2"
                  color={grey}
                  fontWeight={font600}
                  fontSize={font12}
                  fontFamily={roboto}
                >
                  {society[element].name}
                </Text>
              </GridItem>
            ))}
        </Grid>
      </BottomSheet>
    </Box>
  );
};

export default Home;
