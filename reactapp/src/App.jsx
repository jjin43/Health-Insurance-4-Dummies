import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>Health Insurance Predictor</h1>
        <div className="card">
          <form action="http://localhost:5000/submit" method='POST' id='form1'>
            <label htmlFor='age'>Age:</label>
            <input type='number' name='age' id='ageX' required/>

            <label htmlFor='sex'>Sex:</label>
            <select name="sex" id='sexX' required>
              <option value="1"> Male </option>
              <option value="0"> Female </option>
            </select>

            <label htmlFor='bmi'>BMI:</label>
            <input type='number' name='bmi' id='bmiX' required />

            <label htmlFor='children'>Number of Children:</label>
            <input type='number' name='children' id='childrenX' required/>

            <label htmlFor='smoker'>Smoker:</label>
            <select name='smoker' id='smokerX' required>
              <option value="0"> No </option>
              <option value="1"> Yes </option>
            </select>

            <label htmlFor='region'>Region:</label>
            <select name='region' id='regionX' required>
              <option value="1">  northwest  </option>
              <option value="2"> northeast </option>
              <option value="3"> southwest </option>
              <option value ="4"> southeast </option>
            </select>
            <div>
              <input type='submit' id='calcButton' value="Calculate" form='form1'/>
            </div>
          </form>
        
        </div>
    </>
  )
}
export default App      


