import React from "react";
import "./OutputItem.css";

const OutputItem = (props) => {
  const deleteItem = () => {};
  return (
    <div className="item">
      <p>
        {props.userName} has eaten {props.userIceCreams} ice creams!
      </p>
      <button className="btn" onClick={deleteItem}>
        Delete {props.userName}
      </button>
    </div>
  );
};

export default OutputItem;
