import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import AddAcc from "../Pages/AddAcc";
import AddCustomer from "../Pages/AddCustomer";
import AddSociety from "../Pages/AddSociety";
import BusinessDetails from "../Pages/BusinessDetails";
import CreateProfile from "../Pages/CreateProfile";
import Home from "../Pages/Home";
import HomeBefore1 from "../Pages/HomeBefore1";
import LogIn from "../Pages/LogIn";
import TermsAndConditions from "../Pages/TermsAndConditions";
import Pricing from "../Pages/Pricing";
import Profile from "../Pages/Profile";
import SelectBusiness from "../Pages/SelectBusiness";
import SelectLanguage from "../Pages/SelectLanguage";
import SplashScreen from "../Pages/SplashScreen";
import Success from "../Pages/Success";
import { endLoading, login } from "../redux/reducers/userSlice";
import Authservice from "../services/Authservice";
import RefundPolicy from "../Pages/RefundPolicy";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import SLA from "../Pages/SLA";

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
        {/* <Route exact path="/" component={SplashScreen} /> */}
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/aboutus" component={AboutUs} />

        <Route exact path="/pricing" component={Pricing} />
        <Route
          exact
          path="/termsAndConditions"
          component={TermsAndConditions}
        />
        <Route exact path="/refundPolicy" component={RefundPolicy} />
        <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
        <Route exact path="/sla" component={SLA} />

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
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/addCustomer" component={AddCustomer} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/termsAndConditions" component={TermsAndConditions} />
      <Route exact path="/refundPolicy" component={RefundPolicy} />
      <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
      <Route exact path="/sla" component={SLA} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routers;
