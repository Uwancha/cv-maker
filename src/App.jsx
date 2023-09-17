import GeneralInfoForm from './components/genralInfoForm'
import EducationForm from './components/educationForm'
import ExperienceForm from './components/experienceForm'
import GeneralInfo from './components/generalInfo'
import './App.css'
import Experience from './components/experience'
import Education from './components/education'

function App() {

  return (
    <div className='main'>
      <div className='forms'>
        <GeneralInfoForm />
        <EducationForm />
        <ExperienceForm />
      </div>
      <div className='output'>
        <div>
        <GeneralInfo />
        </div>
        <div>
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  )
}

export default App
