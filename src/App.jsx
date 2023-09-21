import GeneralInfoForm from './components/genralInfoForm'
import EducationForm from './components/educationForm'
import ExperienceForm from './components/experienceForm'
import GeneralInfo from './components/generalInfo'
import './App.css'
import Experience from './components/experience'
import Education from './components/education'
import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addres, setAddres] = useState('');


  const [schoolName, setSchoolName] = useState('');
  const [field, setField] = useState('');
  const [city, setCityName] = useState('')
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [company, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('')
  const [fromDate, setFromDate] = useState('');
  const [untilDate, setUntilDate] = useState('');



  function handleSubmit(e) {
    e.preventDefault()
  }

  const fullName = firstName + ' ' + lastName;

  return (
    <div className='main'>
      <div className='forms'>
        <GeneralInfoForm firstName={firstName} lastName={lastName} email={email} phone={phone} addres={addres} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPhone={setPhone} setAddres={setAddres} hanleSubmit={handleSubmit}/>
        <EducationForm  schoolName={schoolName} field={field} city={city} startDate={startDate} endDate={endDate} setSchoolName={setSchoolName} setField={setField} setCityName={setCityName} setStartDate={setStartDate} setEndDate={setEndDate} handleSubmit={handleSubmit}/>
        <ExperienceForm company={company} position={position} description={description} fromDate={fromDate} untilDate={untilDate} setCompanyName={setCompanyName} setPosition={setPosition} setDescription={setDescription} setFromDate={setFromDate} setUntilDate={setUntilDate} handleSubmit={handleSubmit}/>
      </div>
      <div className='output'>
        <div>
        <GeneralInfo fullName={fullName} email={email} phone={phone} address={addres}/>
        </div>
        <div className='content'>
          <Experience company={company} position={position} description={description} fromDate={fromDate} untilDate={untilDate}/>
          <Education schoolName={schoolName} field={field} city={city} startDate={startDate} endDate={endDate}/>
        </div>
      </div>
    </div>
  )
}

export default App
