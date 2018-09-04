import React, { Component } from "react";
import "./App.css";
import { MainInput } from "./containers/MainInput";
import { Switch, Route } from "react-router-dom";
import { Login } from "./containers/Login";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/auth" component={Login} />
        <Route component={MainInput} />
      </Switch>
    );
  }
}

export default App;
