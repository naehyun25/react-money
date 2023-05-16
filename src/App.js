import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expense=[
    {id:"e1",title:"화장지",amount:9100, date:new Date(2023,6,9)},
    {id:"e2",title:"식대",amount:30000, date:new Date(2023,5,10)},
    {id:"e3",title:"보험료",amount:12000, date:new Date(2023,5,12)},
    {id:"e4",title:"통신비",amount:10000, date:new Date(2023,5,13)}
  ]
  return (
    <div className="App">
      <h1>가계부</h1>
      <NewExpense/>
      <Expenses expense={expense}/>
    </div>
  );
}

export default App;
