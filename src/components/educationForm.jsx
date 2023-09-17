import React, { useState } from "react";
import '../styles/general.css'

function EducationForm() {
    const [schoolName, setSchoolName] = useState('');
    const [field, setField] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        console.log('School Name:', schoolName);
        console.log('Field of study:', field);
        console.log('Date of study:', dateOfStudy);
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend><h2>Education</h2></legend>
            <div className="infos">
                <div>
                    <label htmlFor="schoolName">School Name:</label>
                    <input
                        type="text"
                        id="schoolName"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="field">Field of study:</label>
                    <input
                        type="text"
                        id="field"
                        value={field}
                        onChange={(e) => setField(e.target.value)}
                />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={dateOfStudy}
                        onChange={(e) => setDateOfStudy(e.target.value)}
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
