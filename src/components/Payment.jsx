import React, { useState } from "react";
import "./PaymentStyling.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    // handle submit on click to pay
  };
  const handleChange = (e) => {
    // handle changes on card details change in the CardElement
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link style={{ textDecoration: "none" }} to="/checkout">
            {basket?.length} items
          </Link>
          )
        </h1>
        {/* Delivery Address  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address" style={{ marginLeft: "10px" }}>
            <p>{user?.email}</p>
            <p>React Sector, LA</p>
            <p>Facebook React Office, CA</p>
          </div>
        </div>

        {/* Review Items  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment method */}
        <div className="payment__section">
          <h3>Payment Method</h3>
          <div className="payment__details">
            {/* Stripe functionality here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
