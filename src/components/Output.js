import React from "react";

const Output = (props) => {
  return (
    <div>
      <p>(... and I'm the output component!)</p>
      <p>
        {props.outputData[0].name} has eaten {props.outputData[0].iceCreams} ice
        creams.
      </p>
      <p>
        {props.outputData[1].name} has eaten {props.outputData[1].iceCreams} ice
        creams.
      </p>
      <p>
        {props.outputData[2].name} has eaten {props.outputData[2].iceCreams} ice
        creams.
      </p>
      <button>Reset</button>
    </div>
  );
};

export default Output;
