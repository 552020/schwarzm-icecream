import React from "react";
import OutputItem from "./OutputItem";

const Output = (props) => {
  // const deleteItem = () => {};
  return (
    <div>
      {/* <p>(... and I'm the output component!)</p> */}
      {props.outputData.map((element) => (
        <div className="item">
          <OutputItem
            userKey={element.key}
            userName={element.name}
            userIceCreams={element.iceCreams}
          />
        </div>
      ))}
      <br />
      <button className="btn">Reset</button>
    </div>
  );
};

export default Output;
