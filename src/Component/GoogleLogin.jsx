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

const LoginWithGoogle = ({ isSignInOpen }) => {
  const clientId =
    "61587048400-3r92vd57fdvh3sbo09svfj9ehefsapbp.apps.googleusercontent.com";
  // "1010656984318-0cv60c25k8ud2qk9ggp59msssfobomte.apps.googleusercontent.com";

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const onLoginSuccess = (res) => {
    AuthService.signInWithGoogle(res.getAuthResponse().id_token)
      .then((response) => {
        dispatch(login(response));
        console.log("response.data ", response);
        if (!response.user.language) {
          history.push("/selectLanguage");
        } else {
          history.push("/selectBusiness");
        }
        // axios.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${response.data.access_token}`;
      })
      .catch((error) => console.log(error, "login"));
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onFailureSuccess = (res) => {
    console.log("Login failed", res);
  };

  const onLogoutSuccess = () => {
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <Flex
              justify="center"
              mt="4"
              w="92%"
              mx="auto"
              cursor="pointer"
              py={["3", "3"]}
              alignItems="center"
              background="white"
              borderRadius="8px"
              boxShadow="0px 16px 60px rgba(37, 37, 28, 0.15)"
              onClick={renderProps.onClick}
            >
              <Image disabled={renderProps.disabled} src={google} alt="" />
              <Text
                fontSize={font13}
                ml="10px"
                fontWeight={font600}
                color="black"
              >
                SIGN IN WITH GOOGLE
              </Text>
            </Flex>
          )}
          className="loginGoogle"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          onLogoutSuccess={onLogoutSuccess}
          render={() => (
            <Flex
              justify="center"
              mt="4"
              w="92%"
              mx="auto"
              cursor="pointer"
              py={["3", "3"]}
              alignItems="center"
              background="white"
              borderRadius="8px"
              boxShadow="0px 16px 60px rgba(37, 37, 28, 0.15)"
            >
              <Spinner />
              <Text
                fontSize={font13}
                ml="10px"
                fontWeight={font600}
                color="black"
              >
                SIGN IN WITH GOOGLE
              </Text>
            </Flex>
          )}
        ></GoogleLogout>
      ) : null}
    </div>
  );
};
export default LoginWithGoogle;
