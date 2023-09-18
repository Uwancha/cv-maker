import React from "react";
import '../styles/general.css'

function ExperienceForm({company, position, description, fromDate, untilDate, setCompanyName, setPosition, setDescription, setFromDate, setUntilDate, handleSubmit}) {
    
    return (
        <form onSubmit={handleSubmit}>
            <legend><h2>Experience</h2></legend>
            <div className="infos">
                <div>
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="position">Position</label>
                    <input
                        type="text"
                        id="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="textarea"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="dates" id="date">
                    <div>
                        <label htmlFor="from">From</label>
                        <input
                            type="text"
                            id="from"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="until">Until</label>
                        <input
                            type="text"
                            id="until"
                            value={untilDate}
                            onChange={(e) => setUntilDate(e.target.value)}
                        />
                    </div>
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

export default ExperienceForm;