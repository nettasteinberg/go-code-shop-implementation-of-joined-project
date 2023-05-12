import "./FilterOrSort.css";
import { useContext } from "react";
import { MyContext } from "../../MyContext";

export const FilterOrSort = ({label, optionsArr}) => {
    const { categories, setFilterByValue, setSortByValue } = useContext(MyContext);
    if (label === "Filter") {
        optionsArr = categories;
    }
    optionsArr = ["All Products", ...optionsArr];

    return (
        <div className="collection-sort">
        <label>{`${label} by:`}</label>
        <select className={label === "Filter" ? "filter" : "sort"} onChange={(e) => label === "Filter" ? setFilterByValue(e.target.value) : setSortByValue(e.target.value)}>
            {optionsArr.map((opt) => <option value={opt}>{opt}</option>)}
        </select>
      </div>
    )
}