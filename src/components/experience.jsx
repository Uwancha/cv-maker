import React from "react";
import '../styles/general.css'

function Experience({company, position, fromDate, untilDate, description}) {
    return (
        <div>
            <h3>Professional Experience</h3>
            <div className="experinces">
                <div>
                    <h4>{company}</h4>
                    <p>{position}</p>
                </div>
                <div>
                    <p>{fromDate}</p>
                    <p>-</p>
                    <p>{untilDate}</p>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;