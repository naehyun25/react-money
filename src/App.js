import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Accordion from "./components/Accordian";
import { useState } from "react";
const INIT_DATA=[
  {id:"e1",title:"화장지",amount:9100, date:new Date(2022,6,9)},
  {id:"e2",title:"식대",amount:30000, date:new Date(2021,5,10)},
  {id:"e3",title:"보험료",amount:12000, date:new Date(2020,5,12)},
  {id:"e4",title:"통신비",amount:10000, date:new Date(2023,5,13)}
]
function App() {
  const [expenseList, setExpenseList] = useState(INIT_DATA);
  const addExpenseFn=(data)=>{
    setExpenseList(()=>{

    });
    }
  return (
    <div className="App">
      <Accordion/>
      <h1>가계부</h1>
      <NewExpense onAddExpense={addExpenseFn}/>
      <Expenses expense={expenseList}/>
    </div>
  );
}

export default App;
