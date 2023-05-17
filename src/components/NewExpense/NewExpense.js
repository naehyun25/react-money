import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
//import ExpenseForm from "./ExpenseFormStatus";

const NewExpense = (props)=>{
    console.log("프롭",props)
    const saveExpenseFn=(data)=>{
        const expenseData={...data,id:Math.random().toString()}
        props.onAddExpense(expenseData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseFn}/>
        </div>
    )
};

export default NewExpense;