import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import react router and wrap the App component in it
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
