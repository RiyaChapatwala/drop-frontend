import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../Component/Layout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  font12,
  font14,
  font400,
  font600,
  font700,
  lightblue,
  roboto,
} from "../Constant";
import spparow from "../Images/sparrow.svg";
import dodo from "../Images/dodo.svg";
import goldfinch from "../Images/goldfinch.svg";
import owl from "../Images/owl.svg";
import "../App.css";
import drop from "../Images/drop.svg";

const AboutUs = () => {
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

  const data = [
    { id: 1, image: spparow },
    { id: 2, image: dodo },
    { id: 3, image: goldfinch },
    { id: 4, image: owl },
  ];

  return (
    <Box fontFamily={roboto} w="100%">
      <Layout card={false} />
      <Flex direction="column" px="18px" py="2">
        <Text fontWeight={font700} fontSize={font14}>
          About Us
        </Text>
        <Text fontWeight={font400} fontSize={font12} color="#747688" mt="1.5">
          Get to know our motto for this company
        </Text>
        <Text
          fontWeight={font400}
          fontSize={font12}
          lineHeight="18px"
          mt="14px"
        >
          A word "Team" is not enough to define us, we are family of different
          species of birds, each one of us have unique capabilities. Our
          professionals work with love, and passion for every detail, and for
          creating the community of satisfied customers. The combination of a
          proactive approach and the above technical skills allow us to
          cooperate/work with leading companies in multiple regions.
        </Text>
        <Text mt="50px" fontWeight={font700} fontSize={font14}>
          Meet Our Birds
        </Text>
        <Text fontWeight={font400} fontSize={font12} color="#747688" mt="1.5">
          Get to know the team, They solve real problems in reality.
        </Text>
        <Carousel
          swipeable={true}
          draggable={true}
          autoPlay={false}
          responsive={responsive}
          // ssr={true}
          infinite={false}
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
            <Image
              key={item.id}
              mb="72px"
              width="95px"
              mt="14px"
              pr="2.5"
              src={item.image}
            />
          ))}
        </Carousel>
        <Flex direction="column" justify="center">
          <Image w="38%" mx="auto" boxSize={"57px"} src={drop} />
          <Text
            fontFamily={roboto}
            fontSize={font12}
            fontWeight={font400}
            color="#001833"
            textAlign="center"
            mt="12px"
          >
            drop by{" "}
            <Link
              fontWeight={font600}
              to="https://drop-pwa.netlify.app"
              color={lightblue}
            >
              ZOGNEST.
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AboutUs;
