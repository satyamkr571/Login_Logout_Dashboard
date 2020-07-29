import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  setTimeout(() => {
    localStorage.setItem("authkey", JSON.stringify(false));
  }, 36000000);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (JSON.parse(localStorage.getItem("authkey")) === true) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/"} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
