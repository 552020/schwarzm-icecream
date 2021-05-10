import React from "react";
import InputForm from "./InputForm";

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
      <p>(I'm the Input component ...)</p>
      <p>Please fill out:</p>
      <InputForm onSaveData={saveEnteredDataHandler} />
    </div>
  );
};

export default Input;
