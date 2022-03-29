import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import BusinessDetails from "../Pages/BusinessDetails";
import LogIn from "../Pages/LogIn";
import SelectBusiness from "../Pages/SelectBusiness";
import SelectLanguage from "../Pages/SelectLanguage";
import SplashScreen from "../Pages/SplashScreen";
import Success from "../Pages/Success";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={SplashScreen} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/success" component={Success} />
      <Route exact path="/selectLanguage" component={SelectLanguage} />
      <Route exact path="/selectBusiness" component={SelectBusiness} />
      <Route exact path="/businessDetails" component={BusinessDetails} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routers;
