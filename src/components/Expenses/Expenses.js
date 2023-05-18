import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses=({expense})=>{
    const [filterdYear, setFilterdYear] = useState('2020');
    const changeYearFn=(year)=>{
        setFilterdYear(year);
    }
    const filterFn = expense.filter((item)=>{
        console.log(item.date)
        return item.date.getFullYear().toString() === filterdYear;
    })
        

    return(
        <Card className='expenses'>
            <ExpensesFilter onChangeYear={changeYearFn} selected={filterdYear}/>
            {filterFn.map((item)=>{
                return <ExpenseItem date={item.date} title={item.title} amount={item.amount}></ExpenseItem>
            })}
        </Card>
    )
};
export default Expenses;
