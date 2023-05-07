import "./FilterOrSort.css";

export const FilterOrSort = ({label, optionsArr, setFilterByValue, setSortByValue}) => {
    optionsArr = ["None", ...optionsArr];
    
    const setFilterValue = (e) => {
        setFilterByValue(e.target.value);
    }

    const setSortValue = (e) => {
        setSortByValue(e.target.value);
    }
    
    return (
        <div className="collection-sort">
        <label>{`${label} by:`}</label>
        <select className={label === "Filter" ? "filter" : "sort"} onChange={label === "Filter" ? setFilterValue : setSortValue}>
            {optionsArr.map((opt) => <option value={opt}>{opt}</option>)}
        </select>
      </div>
    )
}