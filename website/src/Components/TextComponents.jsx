import React from "react";

import "./TextComponents.css";

export function Title(props){
    const text = props.text;
    return(
        <div className="TitleContainer">
            <h2>{text}</h2>
        </div>
    )
}