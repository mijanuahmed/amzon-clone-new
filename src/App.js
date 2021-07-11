import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {
  GlobalContext,
  GlobalProvider,
  initialState,
  useStateValue,
} from "./components/Context/GlobalState";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useContext } from "react";
import { useEffect } from "react";
import { auth } from "./Firebase/Firebase";
import AppReducer from "./components/Context/AppReducer";

function App() {
  const { user } = useContext(GlobalContext);
  console.log(user);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
