import { useContext, useEffect } from "react";
import "./LoadingSpinner.css";
import { MyContext } from "../../MyContext";

export const LoadingSpinner = () => {
    const {loading} = useContext(MyContext);
    useEffect(() => {
        const loadingSpinner = document.querySelector(".loader-container");
        loading ? loadingSpinner.style.display = "flex" : loadingSpinner.style.display = "none";
    }, [loading])
    return (
        <div className="loader-container">
            <p>Loading data, please wait</p>
      	    <div className="spinner"></div>
        </div>
    )
}

