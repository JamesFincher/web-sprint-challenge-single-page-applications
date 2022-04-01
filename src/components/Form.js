import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import formSchema from "../formSchema";

export default function Form(props) {
  const { order, setOrder } = props;
  const [errors, setErrors] = useState({
    name: "",
  });
  const [isDisabled, setIsDisabled] = useState("true");

  const [orderItem, setOrderItem] = useState({
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    mushroom: false,
    greenPepper: false,
    onion: false,
    notes: "",
  });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));

    if (type === "checkbox") {
      setOrderItem({ ...orderItem, [name]: checked });
    } else {
      setOrderItem({ ...orderItem, [name]: value });
    }
  };

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(orderItem).then((valid) => setIsDisabled(!valid));
  }, [orderItem]);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/orders", orderItem)
      .then((res) => {
        console.log(res);
        setOrderItem({
          name: "",
          size: "",
          pepperoni: false,
          sausage: false,
          mushroom: false,
          greenPepper: false,
          onion: false,
          notes: "",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="errors">
        {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.tos}</div>
      </div>

      <form onSubmit={handleSubmit} id="pizza-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            id="name-input"
            value={orderItem.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Size:
          <select
            name="size"
            id="size-dropdown"
            value={orderItem.size}
            onChange={handleChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>
          Toppings:
          <div>
            <input
              type="checkbox"
              name="pepperoni"
              id="pepperoni-input"
              value={orderItem.pepperoni}
              onChange={handleChange}
            />
            <label htmlFor="pepperoni-input">Pepperoni</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="sausage"
              id="sausage-input"
              value={orderItem.sausage}
              onChange={handleChange}
            />
            <label htmlFor="sausage-input">Sausage</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="mushroom"
              id="mushroom-input"
              value={orderItem.mushroom}
              onChange={handleChange}
            />
            <label htmlFor="mushroom-input">Mushroom</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="greenPepper"
              id="greenPepper-input"
              value={orderItem.greenPepper}
              onChange={handleChange}
            />
            <label htmlFor="greenPepper-input">Green Pepper</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="onion"
              id="onion-input"
              value={orderItem.onion}
              onChange={handleChange}
            />
            <label htmlFor="onion-input">Onion</label>
          </div>
        </label>
        <label>
          Special Instructions:
          <input
            type="text"
            name="notes"
            id="special-text"
            value={orderItem.notes}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={isDisabled} id="order-button">
          Add to Order
        </button>
      </form>
    </>
  );
}
