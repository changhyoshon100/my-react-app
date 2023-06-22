import "./App.css";
import List from "./components/List/List";
import CartUI from "./components/Cart/CartUI";
import React, { useState, createContext, useEffect, useContext } from "react";
import MyContext from "./components/ContextProvider/MyContext";
import Header from "./components/Header/Header";
import { Open, CartButton } from "./components/Cart/CartButton";
import Announcement from "./components/Announcement/Announcement";
export const AppContext = createContext();
// // useEffect(() => {
// //   setSlideImg(`./img/profile_pic${count}.jpg`);
// // }, [count]);
function App(props) {
  const value = useContext(MyContext);
  // const btnCart2 = document.getElementById("btnCart");
  const btnState = document.getElementById("btnCart");
  console.log(btnState);
  const chooseMeals = [];
  console.log(value);
  // const openState = document.querySelector("open_state");
  // console.log(openState);

  return (
    <AppContext.Provider value={chooseMeals}>
      {btnState && <CartUI />}
      <Header />
      <Announcement />
      <List />
    </AppContext.Provider>
  );
}

export default App;
