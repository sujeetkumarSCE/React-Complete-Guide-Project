import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      location: 'India',
      date: new Date(2024, 1, 12),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      location: 'SriLanka',
      date: new Date(2024, 2, 12),
    },
    {
      id: 'e3',
      title: 'Maruti Car',
      amount: 5000,
      location: 'United States',
      date: new Date(2023, 2, 28),
    },
    {
      id: 'e4',
      title: 'Car Insurance',
      amount: 294.67,
      location: 'WestIndies',
      date: new Date(2022, 12, 28),
    },
    {
      id: 'e5',
      title: 'New Desk',
      amount: 150,
      location: 'Japan',
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <div>
      <h2>Lets get started!</h2>
      <ExpenseItem 
       title={expenses[0].title}
       amount={expenses[0].amount}
       location={expenses[0].location}
       date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      location={expenses[1].location}
      date={expenses[1].date} 
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      location={expenses[2].location}
      date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      location={expenses[3].location}
      date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[4].title}
      amount={expenses[4].amount}
      location={expenses[4].location}
      date={expenses[4].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
