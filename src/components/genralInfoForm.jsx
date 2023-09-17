import React from 'react';
import '../styles/general.css'

const GeneralInfoForm = () => {
  
  return (
    <div>
        <form >
            <legend><h2>Personal Details</h2></legend>
            <div className='infos'>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                    />
                </div>
                <div>
                    <label htmlFor="addres">Addres:</label>
                    <input
                        type="text"
                        id="addres"
                    />
                </div>
                <div>
                    <div className='buttons'>
                        <button type="submit">Save</button>
                        <button className='edit'>Edit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  );
};

export default GeneralInfoForm;