import "./ExpenseDate.css";
const ExpenseDate=(props)=>{
    console.log(props)
    const year = props.date.getFullYear(); 
    const month = props.date.getMonth().toString().padStart(2,"0");
    const day = props.date.toLocaleString("ko-kr",{day:"2-digit"})
    return(
        <div className="expense-date">
            <div className="expense-date__year">{year}년</div>
            <div className="expense-date__month">{month == 0? "12":month}월</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
};
export default ExpenseDate;
//자리수 맞춰서 표시하는 메소드
// String.padstart(3,"0")
// String.padend(3,"0")
// type of 자료형 확인