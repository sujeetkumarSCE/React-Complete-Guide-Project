import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      location: "India",
      date: new Date(2024, 1, 12),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      location: "SriLanka",
      date: new Date(2024, 2, 12),
    },
    {
      id: "e3",
      title: "Maruti Car",
      amount: 5000,
      location: "United States",
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 294.67,
      location: "WestIndies",
      date: new Date(2022, 12, 28),
    },
  ]);

  const addExpenseHandler = (expense) => {
    // Update expenses state with the new expense
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
        
    </div>
    
  );
};

export default App; 