import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="center-container">
      <form>
        <h1>Registration Form</h1>

        <label>
          Name:
          <input type="text" placeholder="Enter Your Name" required />
        </label>

        <label>
          Phone Number:
         
          <input
            type="tel"
            placeholder= " Enter Your Phone Number"
            pattern="\d{10}"
            maxLength="10"
            required
          />
        </label>

        <label>
          Email:
          <input type="email" placeholder="Enter Your Email" required />
        </label>

        <label>
          Date of Birth:
          <input type="date" required />
        </label>

        <button type="submit" onClick={onsubmit}>sumbit</button>
      </form>
    </div>
  );
}

export default App
