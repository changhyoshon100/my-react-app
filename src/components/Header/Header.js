import React, { useState } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import CartButton from "../Cart/CartButton";
const Header = (props) => {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.title}>
          <h2>ReactMeals</h2>
          <CartButton />
        </div>
      </div>
      <img src={mealsImage} className={classes.imgSize} />
    </div>
  );
};

export default Header;
