import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Order a bread circle with yummys on top!</h1>
      <img alt="pizza" src=" " />

      <Link to="./pizza">
        <button id="order-pizza">Order One Now :)</button>
      </Link>
    </>
  );
}
