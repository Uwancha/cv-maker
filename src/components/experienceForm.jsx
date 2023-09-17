import React, {useState} from "react";
import '../styles/general.css'

function ExperienceForm() {
    const [company, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [role, setRole] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateUntil, setDateUntil] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        console.log('Company Name:', company);
        console.log('Position:', position);
        console.log('Main Responsibility:', role);
        console.log("From:", dateFrom);
        console.log("Until:", dateFrom);
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend><h2>Experience</h2></legend>
            <div className="infos">
                <div>
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        id="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                />
                </div>
                <div>
                    <label htmlFor="role">Main Responsibilty:</label>
                    <input
                        type="text"
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>
                <div className="dates" id="date">
                    <div>
                        <label htmlFor="from">From</label>
                        <input
                            type="text"
                            id="from"
                            value={dateFrom}
                            onChange={(e) => setDateFrom(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="until">Until</label>
                        <input
                            type="text"
                            id="until"
                            value={dateUntil}
                            onChange={(e) => setDateUntil(e.target.value)}
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