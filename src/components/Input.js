import React from "react";
import InputForm from "./InputForm";

const Input = () => {
  const saveEnteredDataHandler = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log(enteredData);
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
