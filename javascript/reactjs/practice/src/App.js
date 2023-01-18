import React from "react";
import Title from "./components/Title";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import Welcome from "./components/Welcome";

function App() {
  const expenses=[
    {id:'e1',title:'Car insurance',amount:45.31,date:new Date(2022,12,15)},
    {id:'e2',title:'House insurance',amount:345.31,date:new Date(2022,11,15)},
  ]
  return (
    <div className="App">
      <Welcome/>
      <Title title={'todos'}/>
      <NewExpense/>
      
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
    </div>
  );
}

export default App;
