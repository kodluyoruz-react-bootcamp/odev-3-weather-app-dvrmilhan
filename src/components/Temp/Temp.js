import React from 'react'
import "./Temp.css"
const Temp = (props) => {
    return (
        <div className="Temp">
            <span className="min">{props.minTemp}&deg;C</span>
            <span className="max">{props.maxTemp}&deg;C</span>
        </div>
    )
}

export default Temp
