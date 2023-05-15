import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

const ExpenseItem = (props)=>{
    const {date,title,amount} = props.ex;
    //생성자함수 : new Date();
    //toISOString
    return(
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
            {/* css 표기방법 -> BEM : block elements modifier  : 대분류 -  소분류 __*/}
        </Card>
    )
}
export default ExpenseItem;