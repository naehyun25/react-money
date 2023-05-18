import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ()=>{
    //useState 다중으로 사용하기
    const [userInput, setUserInput] = useState({
        inputTitle:'',
        inputNum:'',/*  input type="number"여도 값은 string 으로 들어온다. */
        inputDate:''
});
    const titleChangeFn=(e)=>{
        //setUserInput({...userInput,inputTitle:e.target.value})
        //setUserInput에 바로 값을 넣는게 아니라 함수를통한 매개변수로 보낸다.
        //return 문으로 함수값을 밖으로 보내주고 변경된값+변경된값으로 만들어준다.
        //상태관리가 각자 되는게 아니라 전체적으로 상태관리가 되는것
        //즉, useState사용해서 관리하는 상태의 값은 공유가 되야하는데 방법은 setState 업데이트값을 콜백함수로 전달한다.(단순히 값으로 setState한테 전달하면 공유가 안됨)
        //**실문에서 많이쓴다!!!!!! */
        setUserInput((prev)=>{
            console.log("Title" , userInput);
            return({...prev,inputTitle:e.target.value});
        })
    }
    const numChangeFn=(e)=>{
        setUserInput((prev)=>{
            console.log("Number" , userInput);
            return({...prev,inputNum:e.target.value});
        })
    }
    const dateChangeFn=(e)=>{
        setUserInput((prev)=>{
            console.log("Date" , userInput);
            return({...prev,inputDate:e.target.value});
        })
    }
    const submitFn=(e)=>{
        setUserInput((prev) => {
            e.preventDefault();
            console.log(userInput)
            setUserInput()
            //return({...prev,inputDate:'',inputNum:'',inputTitle:''})
        })
    }
    return(
        <div>
            <h1>지출내역입력</h1>
            <form onSubmit={submitFn}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                    {/* htmlFor -> label 의 For 속성 */}
                        <label>제목</label>
                        <input type="text" onChange={titleChangeFn}/>
                    </div>
                    <div className="new-expense__control">
                        <label>금액</label>
                        <input type="number" min="0" step="100" onChange={numChangeFn}/>
                    </div>
                    <div className="new-expense__control">
                        <label>날짜</label>
                        <input type="date" min="1999-01-01" max="2030-12-31" onChange={dateChangeFn}/>
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