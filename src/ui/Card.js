import "./Card.css";
//반복되는 디자인 ui 만들기(데이터전달 : props.children + ui => composition)
const Card = (props) => {
    const classes=`card ${props.className}`;
    console.log("card",props) // className 도 props로 들어온다.
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
};
export default Card; 