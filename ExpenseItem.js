import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
