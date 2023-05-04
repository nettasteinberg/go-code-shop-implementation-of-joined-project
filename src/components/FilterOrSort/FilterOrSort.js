import "./FilterOrSort.css";

export const FilterOrSort = ({label, optionsArr}) => {
    return (
        <div className="collection-sort">
        <label>{`${label} by:`}</label>
        <select>
            {optionsArr.map((opt) => <option value={opt}>{opt}</option>)}
        </select>
      </div>
    )
}