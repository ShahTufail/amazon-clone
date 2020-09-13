import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51HQxDzFMpmB0fnPInisn2rl5sO5nI1VxsrttzUiZXqauGm6TbBBHtQGg0NKD3wC72X5Ocj1i3E9DM2LDd8Wuj0JA00zRoWgE3V"
);

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
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
