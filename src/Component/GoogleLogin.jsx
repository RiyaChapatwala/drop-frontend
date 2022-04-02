import { Image, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import {
  GoogleLogin,

  // GoogleLoginProps,
  GoogleLogout,
} from "react-google-login";
import { useHistory } from "react-router-dom";
import google from "../Images/google.svg";
import AuthService from "../services/Authservice";

const LoginWithGoogle = ({ isSignInOpen }) => {
  const clientId =
    "661632003808-79f001npmpkot4mgo1v2jvi15ugj0m8q.apps.googleusercontent.com";
  // "1010656984318-0cv60c25k8ud2qk9ggp59msssfobomte.apps.googleusercontent.com";

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  //   const dispatch = useDispatch();
  const history = useHistory();

  const onLoginSuccess = (res) => {
    AuthService.signInWithGoogle(res.getAuthResponse().id_token)
      .then((response) => {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access_token}`;

        // if (path.trim().length > 0) {
        //   dispatch(login(response));

        //   history.push(path);
        // } else if (!response.user.firstName || !response.user.lastName) {
        history.push("/selectLanguage");
        // } else {
        //   dispatch(login(response));
        //   history.push("/home");
        // }
        console.log(response, "loginwithoogle");
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
            <Image
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              src={google}
              alt=""
            />
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
          render={() => <Spinner />}
        ></GoogleLogout>
      ) : null}
    </div>
  );
};
export default LoginWithGoogle;
