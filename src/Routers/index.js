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
import CustomerDetails from "../Pages/CustomerDetails";
import Customer_home from "../Pages/Customer_home";
import Home from "../Pages/Home";
import HomeBefore1 from "../Pages/HomeBefore1";
import LogIn from "../Pages/LogIn";
import TermsAndConditions from "../Pages/TermsAndConditions";
import Profile from "../Pages/Profile";
import Pricings from "../Pages/Pricing";
import SelectBusiness from "../Pages/SelectBusiness";
import SelectLanguage from "../Pages/SelectLanguage";
import Success from "../Pages/Success";
import { endLoading, login, logout } from "../redux/reducers/userSlice";
import Authservice from "../services/Authservice";
import RefundPolicy from "../Pages/RefundPolicy";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import SLA from "../Pages/SLA";

const Routers = () => {
  const { isLoading, isLoggedIn, data } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    Authservice.checkAuth()
      .then((response) => {
        dispatch(login(response));
      })
      .catch((err) => {
        dispatch(logout());
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
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/aboutus" component={AboutUs} />

        <Route exact path="/pricing" component={Pricings} />
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
  } else if (data.user.role && data.user.role.name === "supplier") {
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
        {/* add this for only customer */}
        <Route exact path="/customer-home" component={Customer_home} />
        <Route exact path="/customer-deatils" component={CustomerDetails} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route exact path="/customer-home" component={Customer_home} />
        <Route exact path="/customer-deatils" component={CustomerDetails} />

        <Redirect to="/" />
      </Switch>
    );
  }
};

export default Routers;
