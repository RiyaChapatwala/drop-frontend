import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BottomSheet } from "react-spring-bottom-sheet";
import CardComponent from "../Component/CardComponent";
import CustomerCard from "../Component/CustomerCard";
import Nav from "../Component/Nav";
import {
  blue,
  colore2,
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
import societyimg from "../Images/society.svg";
import soc from "../Images/societyEmpty.svg";
import { setSelectedSociety } from "../redux/reducers/userSlice";
import Businessservice from "../services/Businessservice";
import Societyservice from "../services/Societyervice";
import Userservice from "../services/Userservice";

const Home = () => {
  const history = useHistory();
  const toast = useToast();
  const dispatch = useDispatch();

  const [customerDetails, setCustomerDetails] = useState();
  const [society, setSociety] = useState([]);
  const [wing, setWing] = useState([]);
  const [select, setSelect] = useState(false);
  const [customerView, setCustomerView] = useState(false);
  const [selected, setSelected] = useState({ id: null, name: "" });
  const [selectedWing, setSelectedWing] = useState("");
  const [customers, setCustomers] = useState([]);
  const [todayDelievery, setTodayDelievery] = useState([]);
  const selectedSoc = useSelector((state) => state.user.selectedSociety);
  const today = true;

  const fetchSociety = () => {
    Societyservice.getSocietyByUser().then((response) => {
      if (Object.keys(response.body).length > 0) {
        setSociety(response.body);
      }
    });
  };

  const fetchWing = () => {
    Societyservice.getAllWing(selected.id).then((response) => {
      if (response.body.length > 0) {
        setSelectedWing(response.body[0].wing);
        setWing(response.body);
      }
    });
  };

  useEffect(() => {
    if (society && society.length <= 0) {
      fetchSociety();
    }
    if (wing.length <= 0 && selected.id) {
      fetchWing();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [society, selected, wing]);

  useEffect(() => {
    if (selectedSoc.id !== null && selectedSoc.name !== "") {
      setSelected({ id: selectedSoc.id, name: selectedSoc.name });
    }
  }, [selectedSoc.id, selectedSoc.name]);

  useEffect(() => {
    if (selected.id !== null) {
      Businessservice.getCustomerBySociety(selected.id, selectedWing)
        .then((res) => {
          if (res.data) {
            setCustomers([]);
            setTodayDelievery([]);
            res.data.customer?.forEach((cust) => {
              if (!cust.isTodayDelivered) {
                setCustomers((old) => [...old, cust]);
              } else {
                setTodayDelievery((old) => [...old, cust]);
              }
            });
          }
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, selectedWing]);

  // useEffect(() => {
  //   if (selected.id !== null)
  //     Businessservice.getDelivery(selected.id).then((response) => {
  //       console.log("delievry", response);
  //       setTodayDelievery((old) => [...old, response.data.data]);
  //     });
  // }, []);

  const handleCustomerView = (id) => {
    setCustomerView(true);
    Userservice.getCustomerById(id).then((res) => {
      console.log(res.data, "home");
      setCustomerDetails(res.data);
    });
  };

  return (
    <Box w="100%" h="100vh">
      <Nav card={true} />
      <Flex mt="15px" w="100%" justifyContent={"space-between"}>
        <Flex
          onClick={() => setSelect(true)}
          w={wing.length > 0 ? "65%" : "82%"}
          bg={white}
          h="48px"
          px="2"
          border={`0.8px solid ${blue}`}
          borderRadius="0 10px 10px 0"
          alignItems={"center"}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 45px"
        >
          <Flex flex={wing.length > 0 ? "2" : ""}>
            <Image src={soc} />

            <Text
              fontFamily={roboto}
              fontSize={font16}
              fontWeight={font400}
              color={`${society === "" ? grey : "black"}`}
              opacity="0.5"
              ml="3.5"
              whiteSpace={"nowrap"}
            >{`${
              selected?.name === ""
                ? "Select Society/Apartment/Building"
                : selected.name
            }`}</Text>
          </Flex>
          <IoIosArrowDown size="22px" color={blue} cursor="pointer" />
        </Flex>
        {wing.length > 0 && (
          <Select
            w="max-content"
            bg={white}
            h="48px"
            px="2"
            placeholder={selected.name === "" ? "wing" : ""}
            justify="space-between"
            border={`0.8px solid ${blue}`}
            borderRadius="10px 10px 10px 10px"
            alignItems={"center"}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 45px"
            value={selectedWing}
            onChange={(e) => setSelectedWing(e.target.value)}
          >
            {wing.map((item, index) => (
              <option
                fontFamily={roboto}
                fontSize={font16}
                fontWeight={font400}
                opacity="0.5"
                ml="3.5"
                key={index}
                value={item.wing}
              >
                {item.wing}
              </option>
            ))}
          </Select>
        )}

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
      {customers ? (
        customers.map((customer) => (
          <CardComponent
            individual={false}
            onClick={() => handleCustomerView(customer.id)}
            key={customer.id}
            name={customer.name}
            id={customer.id}
            deliveredCount={customer.deliveredCount}
            wing={customer.wing}
            houseNo={customer.houseNo}
            selected={selected.id}
            setCustomers={setCustomers}
            setTodayDelievery={setTodayDelievery}
          />
        ))
      ) : (
        <Flex mt="50%" w="40%" mx="auto" color={colore2}>
          No Customer Found
        </Flex>
      )}
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
          <Flex
            bg={white}
            height="116px"
            w={["90%", "92%", "90%", "105px"]}
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            border={`1.5px dashed ${blue}`}
            borderRadius="8px"
            mr="10px"
            cursor="pointer"
            onClick={() => {
              history.push("/addSociety", { home: true });
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
                  dispatch(
                    setSelectedSociety({
                      id: society[element].id,
                      name: society[element].name,
                    })
                  );

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

      <BottomSheet
        open={customerView}
        onDismiss={() => {
          setCustomerView(false);
        }}
        className="hideScrollBar"
        snapPoints={({ maxHeight }) => [maxHeight * 0.63]}
      >
        <CustomerCard details={customerDetails} supplier={true} />
      </BottomSheet>
      <BottomSheet
        open={today}
        // onDismiss={() => setToday(false)}
        blocking={false}
        className="hideScrollBar"
        snapPoints={({ maxHeight }) => [maxHeight / 13, maxHeight * 0.6]}
      >
        {todayDelievery.map((customer) => (
          <CardComponent
            individual={true}
            key={customer.id}
            name={customer.name}
            id={customer.id}
            deliveredCount={customer.todayCount}
            wing={customer.wing}
            houseNo={customer.houseNo}
          />
        ))}
      </BottomSheet>
    </Box>
  );
};

export default Home;
