import React, { useState, useContext, useEffect } from "react";
import classes from "./CartUI.module.css";
import CartButton from "./CartButton";
import Open from "../ContextProvider/MyContext";
// import List from "../List/List";
import { AppContext } from "../../App";
const CartUI = () => {
  const value = useContext(AppContext);
  console.log("I am Cart UI:", value);

  return (
    <div>
      {/* {cartIsShown && <Cart onClose={hideCartHandler} />} */}(
      <div className={classes.backdrop}>
        <div>{value}</div>
      </div>
      )
    </div>
  );
};

export default CartUI;
