import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid/main.css";
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/timegrid/main.css";
import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import {
  bg1,
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
  lightblue,
  poppins,
  roboto,
  white,
  yellow,
} from "../Constant";
import packet from "../Images/packet.svg";
import water from "../Images/water.svg";
import edit from "../Images/edit.svg";
import work from "../Images/Work.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CustomerCard = ({ supplier, details }) => {
  const history = useHistory();
  const [currentDate, setCurrentDate] = useState();
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleDates = (rangeInfo) => {
    setCurrentDate(rangeInfo);
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
    <Box onClick={() => setOpen(false)} w="100%" fontFamily={roboto}>
      {!open && (
        <Flex
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          cursor="pointer"
          justify={"flex-end"}
          px="16px"
        >
          <BsThreeDots size={"22px"} />
        </Flex>
      )}
      {open && (
        <motion.nav animate={open ? "open" : "closed"} variants={variants}>
          <Flex
            w="250px"
            h="45px"
            bg={white}
            px="20px"
            boxShadow=" 0px 4px 4px rgba(165, 165, 165, 0.1)"
            py="12px"
            onClick={() => history.push("/addCustomer", { from: "edit" })}
            cursor="pointer"
          >
            <Image src={edit} boxSize="22px" />
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
            onClick={onOpen}
          >
            <Image boxSize="22px" src={work} />
            <Text
              ml="16px"
              fontSize={font14}
              fontWeight={font400}
              fontFamily={roboto}
            >
              Delete User
            </Text>
          </Flex>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            // onClose={() => setOpenDelete(false)}
          >
            <AlertDialogOverlay>
              <AlertDialogContent
                mt="20%"
                w={["100%", "100%", "50%", "40%", "30%"]}
              >
                <AlertDialogHeader
                  textAlign={"center"}
                  fontSize="lg"
                  fontWeight="bold"
                  color="red"
                  pb="0"
                >
                  Remove Customer
                </AlertDialogHeader>

                <AlertDialogBody pb="4">
                  Are you sure you want to remove this user?
                </AlertDialogBody>

                <AlertDialogFooter
                  p={0}
                  w="100%"
                  justifyContent={"space-between"}
                >
                  <Button
                    textAlign={"center"}
                    w="50%"
                    h="44px"
                    border={`1px solid ${bg1}`}
                    color={blue}
                    ref={cancelRef}
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
                    _focus={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    onClick={onClose}
                  >
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </motion.nav>
      )}

      <Grid
        h="max-content"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        pt={"30px"}
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
                <Text fontWeight={font500} fontSize={font14}>
                  {details?.name}
                </Text>
                <Flex>
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
        <Box pt="30px" px="20px">
          <Text fontWeight={font400} fontSize={font12}>
            {currentDate?.view.title} Total
          </Text>
          <Flex fontWeight={700} fontSize={font26} align="center">
            <BiRupee /> 460
          </Flex>
        </Box>
        <Button
          mt="30px"
          borderRadius="8px"
          h="55px"
          background={blue}
          fontWeight={font600}
          fontSize={font16}
          fontFamily={poppins}
          color={white}
          w="104px"
          mr="10px"
        >
          {supplier ? "PAID" : "PAY"}
        </Button>
        {supplier && (
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
          >
            {" "}
            REMIND
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default CustomerCard;
