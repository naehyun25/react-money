import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ()=>{
    const [title, updateTitle]=useState(null);
    const titleChangeFn=(e)=>{
        console.log(e.target.value);
        updateTitle(e.target.value)
    }
    return(
        <div>
            <h1>e.target.value 값 ={title}</h1>
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                    {/* htmlFor -> label 의 For 속성 */}
                        <label>제목</label>
                        <input type="text" onChange={titleChangeFn}/>
                    </div>
                    <div className="new-expense__control">
                        <label>금액</label>
                        <input type="number" min="0" step="100"/>
                    </div>
                    <div className="new-expense__control">
                        <label>날짜</label>
                        <input type="date" min="1999-01-01" max="2030-12-31"/>
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