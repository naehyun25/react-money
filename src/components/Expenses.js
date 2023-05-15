import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses=(props)=>{
    return(
        <div className='expenses'>
            <ExpenseItem ex={props.expense[0]}/>
            <ExpenseItem ex={props.expense[1]}/>
            <ExpenseItem ex={props.expense[2]}/>
            <ExpenseItem ex={props.expense[3]}/>
        </div>
    )
};
export default Expenses;
