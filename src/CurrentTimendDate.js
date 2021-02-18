import React, { useState, useEffect } from 'react'

const DateTime = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <div className="timeContainer">
            <span className="time"><span className="countryName">🇳🇬 NG</span> Time : <span style={{ color: "black", backgroundColor: "grey" }}>{date.toLocaleTimeString()}</span> Date : <span style={{ color: "black", backgroundColor: "grey" }}>{date.toLocaleDateString()}</span></span>
            {/* <span className="date"> </span> */}

        </div>
    )
}

export default DateTime 