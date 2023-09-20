import React from "react";
import '../styles/general.css'

function Education({field, schoolName, city, startDate, endDate}) {
    return (
        <div >
            <h3 className="header">Education</h3>
            <div className="education">
                <div>
                    <p>{field}</p>
                    <h4>{schoolName}</h4>
                </div>
                <div>{city}</div>
                <div>
                    <p>{startDate}</p>
                    <p>-</p>
                    <p>{endDate}</p>
                </div>
            </div>
        </div>
    )
}

export default Education;