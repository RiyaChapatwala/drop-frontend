import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../Component/Layout";
import {
  blue,
  font12,
  font13,
  font20,
  font22,
  font400,
  font600,
  poppins,
} from "../Constant";
import { FaCheckCircle } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonComponent from "../Component/ButtonComponent";
import "../App.css";
import water from "../Images/water.svg";
import milk from "../Images/mil.svg";
import saree from "../Images/saree.svg";
import { useHistory } from "react-router-dom";

const SelectBusiness = () => {
  const [checked, setChecked] = useState();
  const history = useHistory();

  const data = [
    { id: 1, img: water, name: "WATER" },
    { id: 2, img: milk, name: "MILK" },
    { id: 3, img: saree, name: "SAREE" },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Box w="100%">
      <Layout />
      <Flex direction="column" justify="center" alignItems="center" mt="12">
        <Text
          fontFamily={poppins}
          lineHeight="33px"
          textAlign="center"
          fontSize={font22}
          fontWeight={font600}
          color={blue}
        >
          Select Business
        </Text>
        <Text
          fontFamily={poppins}
          textAlign="center"
          fontSize={font12}
          fontWeight={font400}
          color={blue}
          mb="40px"
        >
          Select and Continue
        </Text>
      </Flex>

      <Carousel
        swipeable={true}
        draggable={true}
        autoPlay={false}
        responsive={responsive}
        // ssr={true}
        infinite={true}
        beforeChange={() => this.setState({ isMoving: true })}
        afterChange={() => this.setState({ isMoving: false })}
        keyBoardControl={true}
        // transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={responsive.deviceType}
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((item) => (
          <Flex
            mb="7"
            position="relative"
            height="117px"
            width="95px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
            border="1px solid #B7BDCB"
            as="label"
            cursor="pointer"
            backgroundColor={
              checked?.findIndex(
                (e) => e.id === item.id && e.isChecked === true
              ) === -1 || checked === undefined
                ? "white"
                : `${blue}`
            }
            color={
              checked?.findIndex(
                (e) => e.id === item.id && e.isChecked === true
              ) === -1 || checked === undefined
                ? "black"
                : "white"
            }
          >
            {checked &&
            checked?.findIndex(
              (e) => e.id === item.id && e.isChecked === true
            ) !== -1 ? (
              <FaCheckCircle
                size={20}
                style={{
                  position: "absolute",
                  top: " 5%",
                  left: "70%",
                }}
              />
            ) : (
              <span />
            )}
            <input
              style={{ display: "none" }}
              type="checkbox"
              name="event"
              onChange={(e) => {
                let temp;
                if (checked) {
                  temp = [...checked];
                  const i = temp.findIndex((t) => t.id === item.id);
                  if (i === -1) {
                    temp = [
                      ...checked,
                      { id: item.id, isChecked: e.target.checked },
                    ];
                  } else {
                    temp[i] = { ...checked[i], isChecked: e.target.checked };
                  }
                } else {
                  temp = [{ id: item.id, isChecked: e.target.checked }];
                }

                setChecked(temp);
              }}
            />
            <Image boxSize={"26px"} src={item.img} />

            <Text
              fontSize={font13}
              fontWeight={font600}
              textTransform="capitalize"
              mt={checked ? "3" : ""}
              fontFamily={poppins}
              textAlign={"center"}
            >
              {item.name}
            </Text>
          </Flex>
        ))}
      </Carousel>
      <Flex
        w="90%"
        mx="auto"
        onClick={() => history.pushState("/businessDetails")}
      >
        <ButtonComponent name="CONTINUE" />
      </Flex>
    </Box>
  );
};

export default SelectBusiness;
