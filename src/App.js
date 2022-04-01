import React, { useState } from "react";

//import components
import Form from "./components/Form";
import Home from "./components/Home";

// import react router dom and its elements
import { Route, Switch, Link, useParams } from "react-router-dom";

const App = () => {
  const [order, setOrder] = useState([]);

  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order</Link>
      </nav>
      <Switch>
        <Route path="/pizza">
          <Form order={order} setOrder={setOrder} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
