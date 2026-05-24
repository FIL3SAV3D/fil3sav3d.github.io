import React from "react";

import "./TextComponents.css";

export function Title(props){
    const text = props.text;
    return(
        <div className="TitleContainer">
            <h1>{text}</h1>
        </div>
    )
}

export default Title;