import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses=(props)=>{
    return(
        <Card className='expenses'>
            <ExpenseItem ex={props.expense[0]}/>
            <ExpenseItem ex={props.expense[1]}/>
            <ExpenseItem ex={props.expense[2]}/>
            <ExpenseItem ex={props.expense[3]}/>
        </Card>
    )
};
export default Expenses;
