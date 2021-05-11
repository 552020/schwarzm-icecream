import React from "react";

const OutputItem = (props) => {
  const deleteItem = () => {};
  return (
    <div>
      <p>
        {props.userName} has eaten {props.userIceCreams} ice creams!
      </p>
      <button onClick={deleteItem}>Delete Item</button>
    </div>
  );
};

export default OutputItem;
