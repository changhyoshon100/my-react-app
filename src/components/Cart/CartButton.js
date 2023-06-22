import React, { useEffect, useState, createContext, useContext } from "react";
import classes from "./CartButton.module.css";
import App from "../../App";
import MyContext from "../ContextProvider/MyContext";
import { chooseMeals } from "../List/List";

// export const Open = createContext();

const CartButton = (props) => {
  let value = true;
  const btnCart = document.getElementById("btnCart");
  console.log("btnCart", btnCart);
  const [stateOpen, setStateOpen] = useState(true);
  const allItems = () => {
    if (stateOpen === false) {
      setStateOpen(true);
    } else {
      setStateOpen(false);
    }

    console.log(stateOpen);
  };

  useEffect(() => {
    console.log(btnCart);

    if (btnCart) {
      btnCart.setAttribute("open_state", `${stateOpen}`);
    }

    console.log("open", value);
    console.log("hi");
  }, [stateOpen]);

  return (
    <div>
      <button
        className={classes.actions}
        onClick={allItems}
        value={value}
        id="btnCart"
      >
        Your Cart
      </button>
    </div>
  );
};

export default CartButton;
