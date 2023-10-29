import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state variables for form fields
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [bmi, setBmi] = useState('');
  const [children, setChildren] = useState('');
  const [smoker, setSmoker] = useState('');
  const [region, setRegion] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the server here
    console.log({ age, sex, bmi, children, smoker, region });
    // You can replace the console.log with an AJAX call to your server
  };

  return (
    <>
      <head>
        <title>Health Insurance Predictor</title>
      </head>
      <h1>Health Insurance Predictor</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label htmlFor='age'>Age:</label>
          <input type='number' value={age} onChange={(e) => setAge(e.target.value)} name='age' id='age' />

          <label htmlFor='sex'>Sex:</label>
          <select value={sex} onChange={(e) => setSex(e.target.value)} name="sex" id='sex'>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>

          <label htmlFor='bmi'>BMI:</label>
          <input type='number' value={bmi} onChange={(e) => setBmi(e.target.value)} name='bmi' id='bmi' />

          <label htmlFor='children'>Number of Children:</label>
          <input type='number' value={children} onChange={(e) => setChildren(e.target.value)} name='children' id='children' />

          <label htmlFor='smoker'>Smoker:</label>
          <select value={smoker} onChange={(e) => setSmoker(e.target.value)} name='smoker' id='smoker'>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>

          <label htmlFor='region'>Region:</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)} name='region' id='region'>
            <option value="1">northwest</option>
            <option value="2">northeast</option>
            <option value="3">southwest</option>
            <option value="4">southeast</option>
          </select>
          <div>
            <input type='submit' value="Calculate" />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
