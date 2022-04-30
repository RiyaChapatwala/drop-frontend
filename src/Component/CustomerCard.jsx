import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid/main.css";
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/timegrid/main.css";
import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
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
  lightblue,
  poppins,
  roboto,
  white,
  yellow,
} from "../Constant";
import packet from "../Images/packet.svg";
import water from "../Images/water.svg";

const CustomerCard = ({ supplier, details }) => {
  const [currentDate, setCurrentDate] = useState();

  const handleDates = (rangeInfo) => {
    setCurrentDate(rangeInfo);
  };

  const qty = [];
  details?.delivered.forEach((ele) => qty.push(ele.quantity));
  let events = [];

  const renderEventContent = (eventInfo) => {
    let data = [];
    qty.forEach((element) => {
      data.push(
        Array(element)
          .fill(element)
          .map((item, id) => {
            console.log(element, "element");
            return (
              <Flex key={id}>
                <Image boxSize={"10px"} src={water} />
              </Flex>
            );
          })
      );
      console.log(data, "data 1");
    });
    return data;
  };

  details?.delivered.forEach((element) => {
    events.push({
      title: element.quantity,
      start: element.createdAt.split("T")[0],
    });
  });

  // const events = [
  //   { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
  //   {
  //     title: "Long Event",
  //     start: getDate("YEAR-MONTH-07"),
  //     end: getDate("YEAR-MONTH-10"),
  //   },
  //   {
  //     groupId: "999",
  //     title: "Repeating Event",
  //     start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
  //   },
  //   {
  //     groupId: "999",
  //     title: "Repeating Event",
  //     start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
  //   },
  //   {
  //     title: "Conference",
  //     start: "YEAR-MONTH-17",
  //     end: getDate("YEAR-MONTH-19"),
  //   },
  //   {
  //     title: "Meeting",
  //     start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
  //     end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
  //   },
  //   { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
  //   { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
  //   { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
  //   { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
  //   { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
  // ];

  // function getDate(dayString) {
  //   const today = new Date();
  //   const year = today.getFullYear().toString();
  //   let month = (today.getMonth() + 1).toString();

  //   if (month.length === 1) {
  //     month = "0" + month;
  //   }

  //   return dayString.replace("YEAR", year).replace("MONTH", month);
  // }

  return (
    <Box fontFamily={roboto}>
      <Grid
        h="max-content"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        pt="46px"
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
                  {details.name}
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
                    +91 {details.mobileNo}
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
                {details.total}
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
          eventContent={renderEventContent}
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
