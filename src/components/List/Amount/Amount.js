import React, { useState } from "react";
import classes from "./Amount.module.css";
const Amount = (props) => {
  const [numberValue, setNumberValue] = useState("");
  const valueHandler = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setNumberValue(value);
    console.log(numberValue);
  };

  return (
    <div className={classes.deploy}>
      <div>
        <label>Amount</label>
        <input
          type="number"
          max="5"
          min="0"
          onChange={valueHandler}
          id={props.id}
          required
        />
      </div>
    </div>
  );
};

export default Amount;
