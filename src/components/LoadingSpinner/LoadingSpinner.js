import "./LoadingSpinner.css";
import React from "react";

export const LoadingSpinner = () => {
    return (
        <div className="loader-container">
            <p>Loading data, please wait</p>
      	    <div className="spinner"></div>
        </div>
    )
}