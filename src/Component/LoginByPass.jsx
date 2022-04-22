import { Flex, Image, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  GoogleLogin,

  // GoogleLoginProps,
  GoogleLogout,
} from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { font13, font600 } from "../Constant";
import google from "../Images/google.svg";
import { login } from "../redux/reducers/userSlice";
import AuthService from "../services/Authservice";

const LoginBypass = ({ isSignInOpen }) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const onLoginSuccess = (res) => {
    AuthService.defaultLoginBypass()
      .then((response) => {
        dispatch(login(response));
        history.push("/");
        // axios.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${response.data.access_token}`;

        console.log(response, "loginwithoogle");
      })
      .catch((error) => console.log(error, "login"));
     };


  return (
    <Flex
    justify="center"
    mt="4"
    w="92%"
    mx="auto"
    py={["3", "3"]}
    alignItems="center"
    background="white"
    borderRadius="8px"
    boxShadow="0px 16px 60px rgba(37, 37, 28, 0.15)"
    onClick={onLoginSuccess}
  >

    <Text
     fontSize={font13} ml="10px" fontWeight={font600} color="black">
      SIGNIN BYPASS
    </Text>
  </Flex>
  );
};
export default LoginBypass;
