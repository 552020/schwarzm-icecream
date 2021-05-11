import React from "react";
import InputForm from "./InputForm";
import "../App.css";

const Input = (props) => {
  const saveEnteredDataHandler = (iceCreamData) => {
    const data = {
      ...iceCreamData,
      id: Math.random().toString(),
    };

    props.onAddInput(data);
  };

  return (
    <div>
      {/* <p>(I'm the main input component ...)</p> */}
      <h2>Fill out! 📝</h2>
      <InputForm onSaveData={saveEnteredDataHandler} />
    </div>
  );
};

export default Input;
