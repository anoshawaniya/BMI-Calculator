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
  const [routinePlan, setRoutinePlan] = useState('');
 
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
      setDietPlan('Eat 3 balanced meals and 2–3 calorie-dense snacks daily. Include eggs, dairy, peanut butter, oats, chicken, rice, avocado, and fruit to build strength and support healthy weight gain.');
      setRoutinePlan('Start the day with a nourishing breakfast, keep your meals regular, add light stretching or a short walk, and include strength activity a few times each week so your body gets the energy and recovery it needs.');
    } else if (rawBmi >= 18.5 && rawBmi < 25) {
      setMessage('You are a healthy weight');
      setStatus('healthy');
      setDietPlan('Maintain balance with vegetables, lean protein, whole grains, healthy fats, and steady hydration. Aim for regular meals and limit excess sugar and fried foods.');
      setRoutinePlan('Keep a steady routine with balanced meals, daily movement, enough water, and a consistent sleep schedule to support long-term health and energy.');
    } else {
      setMessage('You are overweight');
      setStatus('overweight');
      setDietPlan('Focus on portion control, more vegetables, high-fiber foods, lean protein, and less refined sugar. Choose water, soups, and smaller servings to support gradual weight loss.');
      setRoutinePlan('Build a simple daily rhythm with regular meals, a brisk walk, moderate exercise several times a week, and a calm evening routine to support gradual, healthy progress.');
    }
  };
 
  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
    setStatus('');
    setDietPlan('');
    setRoutinePlan('');
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
            <p className="result-detail"><strong>Daily routine:</strong> {routinePlan}</p>
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
