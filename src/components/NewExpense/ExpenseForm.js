import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props)=>{
    //useState 다중으로 사용하기
    const [inputTitle, setInputTitle] = useState('')
    const [inputNum, setInputNum] = useState('')
    const [inputDate, setInputDate] = useState('')
    const titleChangeFn=(e)=>{
        setInputTitle(e.target.value);
    }
    const numChangeFn=(e)=>{
        setInputNum(e.target.value);
    }
    const dateChangeFn=(e)=>{
        setInputDate(e.target.value);
    }
    const submitFn=(e)=>{
        e.preventDefault();
        const expenseData={title:inputTitle,num:inputNum,date:inputDate};
        props.onSaveExpense(expenseData)
        setInputTitle('')
        setInputNum('')
        setInputDate('')
    }
    return(
        <div>
            <h1>지출내역입력</h1>
            <form onSubmit={submitFn}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                    {/* htmlFor -> label 의 For 속성 */}
                        <label>제목</label>
                        <input type="text" onChange={titleChangeFn} value={inputTitle}/>
                    </div>
                    <div className="new-expense__control">
                        <label>금액</label>
                        <input type="number" min="0" step="100" onChange={numChangeFn} value={inputNum}/>
                    </div>
                    <div className="new-expense__control">
                        <label>날짜</label>
                        <input type="date" min="1999-01-01" max="2030-12-31" onChange={dateChangeFn} value={inputDate}/>
                    </div>
                </div>
                <div className="new-expense__action">
                    <button type="submit">등록하기</button>
                </div>
            </form>
        </div>
    )
};

export default ExpenseForm;