import React, { useState } from "react";
import '../styles/general.css'

function EducationForm({
    schoolName, field, city, startDate, endDate, setSchoolName, setField, setCityName, setStartDate, setEndDate, handleSubmit 
}) {

    return (
        <form onSubmit={handleSubmit}>
            <legend><h2>Education</h2></legend>
            <div className="infos">
                <div>
                    <label htmlFor="schoolName">School Name</label>
                    <input
                        type="text"
                        id="schoolName"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="field">Field of study</label>
                    <input
                        type="text"
                        id="field"
                        value={field}
                        onChange={(e) => setField(e.target.value)}
                />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCityName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="date">Start Date</label>
                    <input
                        type="text"
                        id="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="date">End Date</label>
                    <input
                        type="text"
                        id="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div>
                    <div className='buttons'>
                        <button type="submit">Save</button>
                        <button>Edit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}


export default EducationForm;
