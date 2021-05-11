import React, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const [enteredNumber, setEnteredNumber] = useState("");

  const nameChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredName(event.target.value);
  };

  const numberChangeHandler = (ereignis) => {
    // console.log(ereignis.target.value);
    setEnteredNumber(ereignis.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);

    const iceCreamData = {
      // iceCreamData is definded here
      name: enteredName,
      iceCreams: enteredNumber,
    };

    props.onSaveData(iceCreamData); // onSaveData is a prop of InputForm defined in the component in Input.js

    setEnteredName("");
    setEnteredNumber("");
  };
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      {/* <p>Check if applies:</p>
      <input type="checkbox" id="ice-yes-no" />
      <label htmlFor="ice-yes-no">I like ice creams.</label>
      <br />
      <input type="checkbox" />
      <label htmlFor="ice-everyday">
        I eat ice creams everyday. At least one.
      </label>
      <br /> 
      <p>Fill out:</p> <br />  */}
      <label htmlFor="name">What's your name? </label>
      <input
        type="text"
        id="name"
        onChange={nameChangeHandler}
        value={enteredName}
      />
      <br />
      <br />
      <label htmlFor="ice-cream-number">
        How many ice creams did you eat yesterday?{" "}
      </label>
      <input
        type="number"
        id="ice-cream-number"
        onChange={numberChangeHandler}
        value={enteredNumber}
      />{" "}
      <br />
      <br />
      <div className="btn-wrapper">
        <button type="submit" className="btn">
          <p>Send!🛸</p>
        </button>
      </div>
    </form>
  );
};

export default InputForm;

// ** Regarding the commented-out checkboxes **
// The idea is to add two preliminary chechboxes. If the user don't check them they can't submit the form or better would be a yes/no button
