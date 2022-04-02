import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout";
import {
  blue,
  font12,
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
import { useHistory } from "react-router-dom";
import Userservice from "../services/Userservice";
import AuthService from "../services/Authservice";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/reducers/userSlice";

const SelectLanguage = () => {
  const [checked, setChecked] = useState([1]);
  const [lang, setLang] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data.user);
  console.log(user, "user");

  useEffect(() => {
    if (user.language) {
      setChecked([{ id: user.language.id, isChecked: true }]);
    }
  }, [user]);

  useEffect(() => {
    Userservice.getLanguage()
      .then((response) => {
        setLang(response.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  const handleSubmit = () => {
    const language = checked
      ?.filter((e) => e.isChecked === true)
      .map((i) => i.id)[0];
    if (language) {
      AuthService.updateUser(language)
        .then((response) => {
          dispatch(updateUser(response));
          history.push("/selectBusiness", { from: "language" });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

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
          Select Language
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
        {lang?.map((item) => (
          <Flex
            key={item.id}
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
                setChecked([{ id: item.id, isChecked: true }]);
              }}
            />
            <Text
              fontSize={font20}
              fontWeight={font400}
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
        onClick={() => {
          handleSubmit();
          history.push("/selectBusiness");
        }}
      >
        <ButtonComponent name="CONTINUE" />
      </Flex>
    </Box>
  );
};

export default SelectLanguage;
