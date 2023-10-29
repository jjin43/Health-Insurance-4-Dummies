import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div>

      </div>
      <h1>Health Insurance Predictor</h1>
      <div className="card">
        <form action="http://localhost:5000/submit" method='POST' id='form1'>
          <label htmlFor='age'>Age:</label>
          <input type='number' name='age' id='age'/>

          <label htmlFor='sex'>Sex:</label>
          <select name="sex" id='sex' >
            <option value="1"> Male </option>
            <option value="0"> Female </option>
          </select>

          <label htmlFor='bmi'>BMI:</label>
          <input type='number' name='bmi' id='bmi'/>

          <label htmlFor='children'>Number of Children:</label>
          <input type='number' name='children' id='children'/>

          <label htmlFor='smoker'>Smoker:</label>
          <select name='smoker' id='smoker'>
            <option value="0"> No </option>
            <option value="1"> Yes </option>
          </select>

          <label htmlFor='region'>Region:</label>
          <select name='region' id='region'>
            <option value="1">  northwest  </option>
            <option value="2"> northeast </option>
            <option value="3"> sorthwest </option>
            <option value ="4"> southeast </option>
          </select>
          <div>
            <input type='submit' value="Calculate" form='form1'/>
          </div>
        </form>
      
      </div>

    </>
  )
}
export default App      


