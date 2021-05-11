import React from "react";

const Output = (props) => {
  const deleteItem = () => {};
  return (
    <div>
      <p>(... and I'm the output component!)</p>
      {props.outputData.map((element) => (
        <div className="item">
          <p>
            {element.name} has eaten {element.iceCreams} ice creams!
          </p>
          <button onClick={deleteItem}></button>
        </div>
      ))}

      <button>Reset</button>
    </div>
  );
};

export default Output;
