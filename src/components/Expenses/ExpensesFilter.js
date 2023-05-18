import "./ExpensesFilter.css";

const ExpensesFilter=(props)=>{
    const selectYearFn=(e)=>{
        props.onChangeYear(e.target.value)
    }

    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>연도별</label>
                <select onChange={selectYearFn} value={props.selected}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>
    )
};
export default ExpensesFilter;