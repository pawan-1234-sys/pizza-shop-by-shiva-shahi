import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
const Checkout = ({subTotal}) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <>
    {loading && <Loader />}
    {error && <Error error="something went wrong" />}
    {success && <Success success="order placed success" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51LzNMBSJ11VvYvu7V9TnKs5SITfuocnNV16mDKBwUucjdR6WmdUIOuVJjv5nzNbNW0haiVhvHJ00DcAPyKh6nKLl00QDbFXITd"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
      </>
  );
};

export default Checkout;