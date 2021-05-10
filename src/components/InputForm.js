import React from "react";
import "./InputForm.css";

const InputForm = () => {
  return (
    <form className="form">
      <p>Check if applies:</p>
      <input type="checkbox" id="ice-yes-no" />
      <label htmlFor="ice-yes-no">I like ice creams.</label>
      <br />
      <input type="checkbox" />
      <label htmlFor="ice-everyday">
        I eat ice creams everyday. At least one.
      </label>
      <br />
      <p>Fill out:</p> <br />
      <label hrmlFor="name">What's your name? </label>
      <input type="text" id="name" />
      <br />
      <label htmlFor="ice-cream-number">
        How many ice-cream did you eat yesterday?{" "}
      </label>
      <input type="text" id="ice-cream-number" /> <br />
      <input type="submit" />
    </form>
  );
};

export default InputForm;
