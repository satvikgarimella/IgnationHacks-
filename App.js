import React, { useState } from 'react';
import './App.css'; // Import your CSS
import ProfitPathLogo from './ProfitPath-.png'; // Import the logo

function App() {
  // Create state to hold the sales input values
  const [salesValues, setSalesValues] = useState(Array(6).fill(''));

  // Handle input changes
  const handleInputChange = (index, value) => {
    // Validate the value to be a positive number greater than 0
    if (value === '' || (parseFloat(value) > 0 && /^[0-9]*\.?[0-9]*$/.test(value))) {
      const updatedValues = [...salesValues];
      updatedValues[index] = value;
      setSalesValues(updatedValues);
    }
  };

  return (
    <div className="App">
      {/* Logo Section */}
      <img src={ProfitPathLogo} alt="ProfitPath Logo" className="logo" />

      {/* Heading */}
      <h1>Sales Forecasting</h1>
      
      {/* Form Section */}
      <form>
        {Array.from({ length: 6 }, (_, i) => (
          <div className="input-container" key={i}>
            <label htmlFor={`sales-month-${i + 1}`}>Sales in month {i + 1}</label>
            <div className="input-group">
              <span className="dollar-sign">$</span>
              <input 
                type="text" 
                id={`sales-month-${i + 1}`} 
                value={salesValues[i]} 
                placeholder={`Enter sales in month ${i + 1}`} 
                onChange={(e) => handleInputChange(i, e.target.value)}
              />
            </div>
          </div>
        ))}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
