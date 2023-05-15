import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

const ExpenseItem = (props)=>{
    const {date,title,amount} = props.ex;
    //생성자함수 : new Date();
    //toISOString
    return(
        <Card className="expense-item">
            {/* Card 컴포넌트는 div 가 아니어서 현재 className 적용이되지않는걸 확인할 수 있다. */}
            {/* 그래서 css 도 props 로 처리한다.=>Card 파일 확인 */}
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