import React from "react";
import classes from "./Announcement.module.css";
const Announcement = () => {
  const title = "Delicious Food, Delivered To You";
  const phrase1 =
    "Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.";
  const phrase2 =
    "All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!";
  return (
    <div className={classes.announce}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.phrase}>{phrase1}</p>
      <p className={classes.phrase}>{phrase2}</p>
    </div>
  );
};

export default Announcement;
