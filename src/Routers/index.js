import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import AddAcc from "../Pages/AddAcc";
import AddCustomer from "../Pages/AddCustomer";
import AddSociety from "../Pages/AddSociety";
import BusinessDetails from "../Pages/BusinessDetails";
import CreateProfile from "../Pages/CreateProfile";
import Home from "../Pages/Home";
import HomeBefore1 from "../Pages/HomeBefore1";
import LogIn from "../Pages/LogIn";
import Profile from "../Pages/Profile";
import SelectBusiness from "../Pages/SelectBusiness";
import SelectLanguage from "../Pages/SelectLanguage";
import SplashScreen from "../Pages/SplashScreen";
import Success from "../Pages/Success";
import { endLoading, login } from "../redux/reducers/userSlice";
import Authservice from "../services/Authservice";

const Routers = () => {
  const { isLoading, isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    Authservice.checkAuth()
      .then((response) => {
        dispatch(login(response));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(endLoading());
      });
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box>
        <h1>Loading</h1>
      </Box>
    );
  }

  if (!isLoggedIn) {
    return (
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/success" component={Success} />
        <Redirect to="/login" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/selectLanguage" component={SelectLanguage} />
      <Route exact path="/selectBusiness" component={SelectBusiness} />
      <Route exact path="/businessDetails" component={BusinessDetails} />
      <Route exact path="/create-profile" component={CreateProfile} />
      <Route exact path="/addSocietyAcc" component={HomeBefore1} />
      <Route exact path="/addSociety" component={AddSociety} />
      <Route exact path="/addAcc" component={AddAcc} />
      <Route exact path="/addCustomer" component={AddCustomer} />
      <Route exact path="/profile" component={Profile} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routers;
