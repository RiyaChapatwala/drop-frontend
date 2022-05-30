import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  blue,
  color74,
  colorea,
  font12,
  font14,
  font16,
  font24,
  font26,
  font400,
  font500,
  font56,
  font600,
  font700,
  grey,
  lightblue,
  poppins,
  roboto,
  white,
  yellow,
} from "../Constant";
import packet from "../Images/packet.svg";
import water from "../Images/water.svg";
import Authservice from "../services/Authservice";
import Businessservice from "../services/Businessservice";

const CustomerCard = ({ supplier, details, handleCustomerView }) => {
  const history = useHistory();
  const toast = useToast();
  const [currentDate, setCurrentDate] = useState();
  const [menu, setMenu] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDates = (rangeInfo) => {
    setCurrentDate(rangeInfo);

    if (rangeInfo && details) {
      handleCustomerView(details.id, rangeInfo?.view.title);
    }
    if (details?.paid) {
      setIsPaid(true);
    } else if (!details?.paid) {
      setIsPaid(false);
    }
  };

  const handlePayment = (id, date) => {
    setIsLoading(true);
    Businessservice.addPayment(id, date).then((res) => {
      if (res.success) {
        setIsLoading(false);

        setIsPaid(true);
        toast({
          title: "DONE",
          status: "succes",
          duration: 3000,
        });
      }
    });
  };

  const handleRemind = (id, month) => {
    Businessservice.remindMe(id, month).then((res) => {
      if (res.success) {
        setReminder(true);
        toast({
          title: "Succss",
          description: `${res.data.title} Is Set`,
          status: "success",
          duration: 3000,
        });
      }
    });
  };

  const handleDelete = () => {
    Authservice.deleteUser(details?.id).then((res) => {
      if (res.success) {
        toast({
          title: "Success",
          description: "User Has Been Deleted",
          status: "success",
          duration: 3000,
        });
      }
    });
  };

  //gty is for taking the total quantity of delievered like [4,2,5] for the date 25,27,29
  const qty = [];
  details?.delivered.forEach((ele) => qty.push(ele.quantity));
  let events = [];

  const renderEventContent = (eventInfo) => {
    let data = (
      <Flex fontSize={"13px"}>
        {eventInfo.event.title} <Image boxSize={"13px"} mt="0.5" src={water} />
      </Flex>
    );
    return data;
  };

  details?.delivered.forEach((element) => {
    for (let i = 0; i < element.quantity; i++) {
      events.push({
        title: element.quantity,
        start: element.createdAt.split("T")[0],
      });
    }
  });
  const variants = {
    open: { opacity: 1, x: "50%" },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <Box onClick={() => setMenu(false)} w="100%" fontFamily={roboto}>
      {!menu && (
        <Flex
          onClick={(e) => {
            e.stopPropagation();
            setMenu(true);
          }}
          cursor="pointer"
          justify={"flex-end"}
          px="16px"
        >
          <BsThreeDots size={"22px"} />
        </Flex>
      )}
      {menu && (
        <motion.nav animate={menu ? "open" : "closed"} variants={variants}>
          <Flex
            w="250px"
            h="45px"
            bg={white}
            px="20px"
            boxShadow=" 0px 4px 4px rgba(165, 165, 165, 0.1)"
            pb="12px"
            onClick={() => history.push("/addCustomer", { from: "edit" })}
            cursor="pointer"
            alignItems="center"
          >
            <AiOutlineEdit size={"20px"} />
            <Text
              ml="16px"
              fontSize={font14}
              fontWeight={font400}
              fontFamily={roboto}
            >
              Edit
            </Text>
          </Flex>
          <Flex
            mt="1"
            w="250px"
            h="45px"
            bg={white}
            px="20px"
            boxShadow=" 0px 4px 4px rgba(165, 165, 165, 0.1)"
            py={"12px"}
            cursor="pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            alignItems="center"
          >
            <AiOutlineDelete size="20px" />
            <Text
              ml="16px"
              fontSize={font14}
              fontWeight={font400}
              fontFamily={roboto}
            >
              Delete User
            </Text>
          </Flex>
          {/* <FocusLock>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay>
                <ModalContent
                  mt="20%"
                  w={["100%", "100%", "50%", "40%", "30%"]}
                >
                  <ModalHeader
                    textAlign={"center"}
                    fontSize="lg"
                    fontWeight="bold"
                    color="red"
                    pb="0"
                  >
                    Remove Customer
                  </ModalHeader>

                  <ModalBody pb="4">
                    Are you sure you want to remove this user?
                  </ModalBody>

                  <ModalFooter p={0} w="100%" justifyContent={"space-between"}>
                    <Button
                      textAlign={"center"}
                      w="50%"
                      h="44px"
                      border={`1px solid ${bg1}`}
                      color={blue}
                      py="2"
                      cursor={"pointer"}
                      onClick={onClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      w="50%"
                      textAlign={"center"}
                      h="44px"
                      border={`1px solid ${bg1}`}
                      color={blue}
                      colorScheme="red"
                      py="2"
                      bg="transparent"
                      _hover={{
                        bg: "transparent",
                      }}
                      _active={{
                        bg: "transparent",
                      }}
                      onClick={onClose}
                    >
                      Delete
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </ModalOverlay>
            </Modal>
          </FocusLock> */}
        </motion.nav>
      )}

      <Grid
        h="max-content"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        pt={"10px"}
        px="16px"
      >
        <GridItem
          border={`1px solid ${colorea}`}
          borderRadius="10px"
          alignItems="center"
        >
          <Flex
            py={supplier ? "15px" : ""}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Flex
              // boxSize={supplier ? "68px" : "full"}
              w={supplier ? "68px" : "160px"}
              h={supplier ? "68px" : "160px"}
              borderRadius="10px"
              bg={lightblue}
              alignItems="center"
              justify="center"
              border="1.6px solid #5669FF"
              mb={supplier ? "15px" : ""}
            >
              <Text
                color={white}
                fontWeight={font600}
                fontSize={supplier ? font24 : font56}
                textTransform="capitalize"
              >
                {details?.wing} {details?.houseNo}
              </Text>
            </Flex>
            {supplier && (
              <Flex ml="16px" direction="column">
                <Text textAlign="center" fontWeight={font500} fontSize={font14}>
                  {details?.name}
                </Text>
                <Flex justify={"center"}>
                  <IoMdCall color={color74} />

                  <Text
                    ml="1"
                    color="#747688"
                    fontWeight={font400}
                    fontFamily={roboto}
                    fontSize={font12}
                  >
                    +91 {details?.mobileNo}
                  </Text>
                </Flex>
              </Flex>
            )}
          </Flex>
        </GridItem>

        <GridItem
          border={`1px solid ${colorea}`}
          borderRadius="10px"
          alignItems="flex-start"
        >
          <Flex py="15px" px="18px" direction="column">
            <Flex mt="5px">
              <Text fontSize={font16} fontWeight={font700}>
                {details?.monthCount}
              </Text>
              <Image ml="8px" boxSize="17px" src={packet} />
            </Flex>
            <Text
              whiteSpace="nowrap"
              color={color74}
              fontSize={font14}
              fontWeight={font400}
            >
              This Month Delievered
            </Text>
          </Flex>
          <Divider border="1px solid #DDDDDD" />
          <Flex py="15px" px="18px" direction="column">
            <Flex mt="5px">
              <Text fontSize={font16} fontWeight={font700}>
                {details?.total}
              </Text>
              <Image ml="8px" boxSize="17px" src={packet} />
            </Flex>
            <Text
              whiteSpace="nowrap"
              color={color74}
              fontSize={font14}
              fontWeight={font400}
            >
              Total Delievered
            </Text>
          </Flex>
        </GridItem>
      </Grid>
      <Box mt="24px">
        <FullCalendar
          datesSet={handleDates}
          // defaultView="dayGridMonth"
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          eventContent={details ? renderEventContent : []}
          plugins={[dayGridPlugin, timeGridPlugin]}
          events={events}
        />
      </Box>
      <Flex
        justify={supplier ? "" : "space-between"}
        px="12px"
        mt="24px"
        pb="24px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Box
          pt="30px"
          px="20px"
          opacity={isPaid ? "0.8" : ""}
          color={isPaid ? grey : "black"}
        >
          <Text fontWeight={font400} fontSize={font12}>
            {currentDate?.view.title} Total
          </Text>
          <Flex
            color={isPaid ? grey : "black"}
            fontWeight={700}
            fontSize={font26}
            align="center"
            opacity={isPaid ? "0.8" : ""}
          >
            <BiRupee /> {details?.totalAmount || 0}
          </Flex>
        </Box>
        <Button
          mt="30px"
          borderRadius="8px"
          h="55px"
          background={isPaid ? "" : blue}
          fontWeight={font600}
          fontSize={isPaid ? "43px" : font16}
          fontFamily={poppins}
          color={isPaid ? grey : white}
          w="104px"
          mr="10px"
          opacity={isPaid ? "0.6" : ""}
          onClick={() => handlePayment(details?.id, new Date())}
        >
          {isLoading ? (
            <Spinner color={white} size="md" />
          ) : isPaid ? (
            "PAID"
          ) : (
            "PAY"
          )}
        </Button>
        {supplier && !isPaid && (
          <Button
            mt="30px"
            borderRadius="8px"
            h="55px"
            background={yellow}
            fontWeight={font600}
            fontSize={font16}
            fontFamily={poppins}
            color={white}
            w="104px"
            onClick={() => handleRemind(details?.id, currentDate?.view.title)}
          >
            {reminder ? "REMINDER SET" : "REMINDER"}
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default CustomerCard;
