import React, { useState, useContext } from "react";
import classes from "./List.module.css";
import Menu from "./Menu/Menu";
import Amount from "./Amount/Amount";
import CartButton from "../Cart/CartButton";
// import MyContext from "../ContextProvider/MyContext";
import { AppContext } from "../../App";
const List = (props) => {
  const chooseMeals = useContext(AppContext);

  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "22.99",
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: "16.5",
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: "12.99",
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: "18.99",
    },
  ];

  const amtValHandler = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    console.log(event);
    const amtVal = document.getElementById(`${event.target.id}`).value;
    if (amtVal == "") {
      alert("Please set amount!");
    } else {
      const foodname = event.target.name;
      console.log(foodname);
      console.log(amtVal);

      const item = {};
      item[foodname] = amtVal;
      chooseMeals.push(item);

      console.log(chooseMeals);
      alert("Added to cart!");
      document.getElementById(`${event.target.id}`).value = "";
    }
    // const sum = Object.values(chooseMeals).reduce((accumulator, currentValue) => {
    //   return accumulator + currentValue;
    // }, 0);
  };

  return (
    <>
      <div className={classes.menuList}>
        {DUMMY_MEALS.map((meal) => {
          return (
            <div className={classes.menuDisplay}>
              <Menu
                id={meal.id}
                foodname={meal.name}
                description={meal.description}
                price={meal.price}
              />
              <div className={classes.btn_div}>
                <Amount id={meal.id} />
                <button
                  className={classes.custom_btn}
                  id={meal.id}
                  name={meal.name}
                  price={meal.price}
                  description={meal.description}
                  onClick={amtValHandler}
                >
                  +Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
