import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      const user = authUser ? authUser : null; // authUser is when user logs in
      dispatch({
        type: "SET_USER",
        user,
      });
      // if (authUser) {
      //   // the user logged in...
      //   dispatch({
      //     type: "SET_USER",
      //     user: authUser,
      //   });
      // } else {
      //   // the user logged out
      //   dispatch({
      //     type: "SET_USER",
      //     user: null,
      //   });
      // }
    });
  }, []); // here if we give some value then useEffect will be triggered onchange of that value

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
