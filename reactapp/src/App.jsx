import { useState } from 'react'
import './App.css'
import Particles from 'react'

function App() {

  return (
    <>
    <div class="title-container">    
      <h1 className="Title">Health Insurance 4 Dummies</h1>
      <img src="src\assets\open-book-doodle.png" alt='health icon' class='header-icon'></img>
    </div>
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

        <label htmlFor='region'>US-Region:</label>
        <select name='region' id='regionX' required>
          <option value="1">  Northwest  </option>
          <option value="2"> Northeast </option>
          <option value="3"> Southwest </option>
          <option value ="4"> Southeast </option>
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


