import React from "react";
import "./App.css";
import { MainInput } from "./containers/MainInput";
import { Switch, Route } from "react-router-dom";
import { Login } from "./containers/Login";
export var App = () => (
  <Switch>
    <Route path="/auth" component={Login} />
    <Route component={MainInput} />
  </Switch>
);
