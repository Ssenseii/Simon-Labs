import React from "react";

const Confirmation = (props) => {
  return (
    <div className={`confirmation ${props.visibility}`}>
      <h1 className={props.color}>Message {props.confirm}</h1>
    </div>
  );
};

export default Confirmation;
