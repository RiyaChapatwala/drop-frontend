import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout";
import {
  API,
  blue,
  font12,
  font20,
  font22,
  font400,
  font600,
  poppins,
  white,
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
import axios from "axios";

const SelectLanguage = () => {
  const [checked, setChecked] = useState([1]);
  const [lang, setLang] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();
  const toast = useToast();

  const user = useSelector((state) => state.user.data.user);

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

  const razorpayInit = () => {
    return new Promise((resolve) => {

      const script  = document.createElement('script') ;
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () =>  {
        resolve(true);
      };
      script.onerror = () => { 
        resolve(false);
      }
      document.body.appendChild(script);
    })
  }


  const displayRazorpay = async (mode="TEST") => {
    const res = await razorpayInit();
    if (!res) {
      alert("Payment gateway error");
    }
    const getOrder = await axios.post(API+`/razorpay/order/${mode}`);
    console.log(getOrder.data);
    const order_id = getOrder.data.id
    const currency = getOrder.data.currency;
    const amount = getOrder.data.amount;
    var options = {
      "key": mode === 'LIVE' ? 'rzp_live_qInskNrf3A8yN4':"rzp_test_Od4oS0NwvGm74R", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      "name": "Water Payment",
      "description": "Thankyou for payment.",
      "image": "https://drop-pwa.netlify.app/static/media/logo.5c453c98743f253212174de36c14d90f.svg",
      order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert('razorpay_payment_id '+response.razorpay_payment_id);
          alert('razorpay_order_id '+response.razorpay_order_id);
          alert('razorpay_signature '+response.razorpay_signature)
      },
      "prefill": {
          "name": "High guy",
          "email": "water@service.com",
          "contact": "9999999999"
      },
      "notes": {
          "address": "High Water Office"
      },
      "theme": {
          "color": "#00FF00"
      }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open(); 
  }


  const handleSubmit = () => {
    const language = checked
      ?.filter((e) => e.isChecked === true)
      .map((i) => i.id)[0];
    if (language) {
      const data = {
        language: language,
      };
      AuthService.updateUser(data)
        .then((response) => {
          console.log("first");
          dispatch(updateUser(response));
          history.push("/selectBusiness", { from: "language" });
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: error,
            status: "error",
            duration: 3000,
          });
        });
    } else {
      toast({
        title: "Error",
        description: "Please Select Any Language",
        status: "error",
        duration: 3000,
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
      <Flex w="90%" mx="auto" onClick={() => handleSubmit()}>
        <ButtonComponent name="CONTINUE" />
      </Flex>
      <Flex mt="1" w="90%" mx="auto" onClick={() => displayRazorpay("TEST")}>
        <Button w="100%" h="50px" backgroundColor={'grey'} color={white}>Sample TEST Payment</Button>
      </Flex>
      <Flex mt="1" w="90%" mx="auto" onClick={() => displayRazorpay("LIVE")}>
        <Button w="100%" h="50px" backgroundColor={'red'} color={white}>Sample LIVE Payment</Button>
      </Flex>
    </Box>
  );
};

export default SelectLanguage;
