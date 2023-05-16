import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

const ExpenseItem = (props)=>{
    let [title, setTitle] = useState(props.ex.title);
    const {date,amount} = props.ex;
    //생성자함수 : new Date();
    //toISOString
    console.log(title)
    const changeContent=()=>{
        title="wowwowwowwowwow"
        setTitle(title);
    }
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
            <button onClick={changeContent}>내용변경</button>
            {/* onClick={alert("hi")}
                {changeContent()} 
                {changeConten} 
                자바스크립트의 onClick과는 다르다=> jsx의 이벤트다.
                왜? 중괄호 바깥쪽이니까 그냥 jsx의 이벤트함수에 자바스크립트함수를 연결해놓은거니까 ()쓰면 그냥 호출해가 되는것 ()가 없으면 클릭이벤트시 호출이 된다.
            */}
        </Card>
    )
}
export default ExpenseItem;