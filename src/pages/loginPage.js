import React from "react";
import { withRouter } from "react-router-dom";
import Login from "../components/login";

const LoginPage = props => {
  return <Login history={props.history}/>
};

export default withRouter(LoginPage);