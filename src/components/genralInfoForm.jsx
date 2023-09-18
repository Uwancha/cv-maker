import React, { useState } from 'react';
import '../styles/general.css'

const GeneralInfoForm = ({firstName, lastName, email, phone, addres, setFirstName, setLastName, setEmail, setPhone, setAddres, hanleSubmit}) => {
    
  
  return (
    <div>
        <form onSubmit={hanleSubmit}>
            <legend><h2>Personal Details</h2></legend>
            <div className='infos'>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="addres">Addres</label>
                    <input
                        type="text"
                        id="addres"
                        value={addres}
                        onChange={(e) => setAddres(e.target.value)}
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