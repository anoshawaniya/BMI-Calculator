import './App.css';
import './index.css';
import React, { useState } from 'react';
 
function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [dietPlan, setDietPlan] = useState('');
 
  const calcBmi = (event) => {
    event.preventDefault();
 
    if (!weight || !height || Number(height) <= 0) {
      alert('Please enter a valid weight and height');
      return;
    }
 
    const heightMeters = Number(height) * 0.3048;
    const rawBmi = Number(weight) / (heightMeters * heightMeters);
    const roundedBmi = rawBmi.toFixed(1);
    setBmi(roundedBmi);
 
    if (rawBmi < 18.5) {
      setMessage('You are underweight');
      setStatus('underweight');
      setDietPlan('Diet plan: add nutrient-rich meals with extra protein, healthy fats, and frequent snacks.');
    } else if (rawBmi >= 18.5 && rawBmi < 25) {
      setMessage('You are a healthy weight');
      setStatus('healthy');
      setDietPlan('Diet plan: maintain balance with vegetables, lean protein, whole grains, and regular hydration.');
    } else {
      setMessage('You are overweight');
      setStatus('overweight');
      setDietPlan('Diet plan: focus on portion control, more vegetables, less refined sugar, and regular activity.');
    }
  };
 
  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
    setStatus('');
    setDietPlan('');
  };
 
  return (
    <div className="app">
      <div className="container">
        <div className="hero">
          <div>
            <p className="eyebrow">Health & Wellness</p>
            <h1>BMI Calculator</h1>
            <p className="hero-text">
              Enter your weight and height to get a quick BMI reading and see how you compare to healthy ranges.
            </p>
          </div>
          <div className="hero-badge">Fast · Simple · Friendly</div>
        </div>
 
        <form onSubmit={calcBmi} className="form-grid">
          <div className="field">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              id="weight"
              type="number"
              min="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 70"
            />
          </div>
 
          <div className="field">
            <label htmlFor="height">Height (ft)</label>
            <input
              id="height"
              type="number"
              min="0"
              step="0.1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 5.8"
            />
          </div>
 
          <div className="form-actions">
            <button className="btn" type="submit">
              Calculate BMI
            </button>
            <button className="btn btn-outline" type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
 
        {bmi && (
          <div className="result-card">
            <div className="result-heading">
              <p>Result</p>
              <span className={`status-pill ${status}`}>{message}</span>
            </div>
            <div className="bmi-value">{bmi}</div>
            <p className="result-detail">BMI value based on your current weight and height.</p>
            <p className="result-detail"><strong>Diet plan:</strong> {dietPlan}</p>
          </div>
        )}
 
        <div className="scale-grid">
          <div className="scale-card underweight">
            <h4>Underweight</h4>
            <p>&lt; 18.5</p>
          </div>
          <div className="scale-card healthy">
            <h4>Healthy</h4>
            <p>18.5 - 24.9</p>
          </div>
          <div className="scale-card overweight">
            <h4>Overweight</h4>
            <p>≥ 25</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default App;
