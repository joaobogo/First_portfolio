import React from "react";
import "./TitleStyles.css"

function Title(props) {
    return (
        <div className="title" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="titlecontainer">
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
            </div>
        </div>
    )
}

export default Title