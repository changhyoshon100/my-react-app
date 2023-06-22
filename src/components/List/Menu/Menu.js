import React, { useState } from "react";
import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.menuWrap}>
      <div className={classes.foodName}>
        <h4 id="foodname">{props.foodname}</h4>
      </div>
      <div className={classes.desc}>{props.description}</div>
      <div className={classes.price}>${props.price}</div>
    </div>
  );
};

export default Menu;
