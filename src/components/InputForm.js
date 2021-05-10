import React, { useState } from "react";
import "./InputForm.css";

const [enteredName, setEnteredName] = useState("");
const [enteredNumber, setEnteredNumber] = useState("0");

const nameChangeHandler = (event) => {
  console.log(event.target.value);
  setEnteredName(event.target.value);
};

const numberChangeHandler = (ereignis) => {
  console.log(ereignis.target.value);
  setEnteredNumber(ereignis.target.value);
};

const InputForm = () => {
  return (
    <form className="form">
      {/* <p>Check if applies:</p>
      <input type="checkbox" id="ice-yes-no" />
      <label htmlFor="ice-yes-no">I like ice creams.</label>
      <br />
      <input type="checkbox" />
      <label htmlFor="ice-everyday">
        I eat ice creams everyday. At least one.
      </label>
      <br /> 
      <p>Fill out:</p> <br />*/}
      <label htmlFor="name">What's your name? </label>
      <input type="text" id="name" onChange={nameChangeHandler} />
      <br />
      <label htmlFor="ice-cream-number">
        How many ice-cream did you eat yesterday?{" "}
      </label>
      <input
        type="number"
        id="ice-cream-number"
        onChange={numberChangeHandler}
      />{" "}
      <br />
      <input type="submit" />
    </form>
  );
};

export default InputForm;
