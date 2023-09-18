import React from "react";
import '../styles/general.css'

function GeneralInfo({fullName, email, phone, address}) {
    return (
        <div className="details">
            <h2>{fullName}</h2>
            <div>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
            </div>
        </div>
    )
}

export default GeneralInfo;