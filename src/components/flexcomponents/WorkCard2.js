import React from 'react'
import "./WorkCard2Styles.css"

function WorkCard2({ imgsrc, title, view, source, text, color, viewtxt }) {
    return (
        <div className='card' style={{background:color}}>
            <img src={imgsrc} />
            <div className='text'>
                <h2>{title}</h2>
                <h3>{text}</h3>
            </div>
            <div className='buttonbox'>
                <a href={view} className="btn">{viewtxt}</a>
                <a href={source} className="btn">Source</a>
            </div>
        </div>
    )
}

export default WorkCard2