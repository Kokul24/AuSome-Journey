import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Station from './components/Station';
import JobActivity from './components/JobActivity';
import Quiz from './components/Quiz';
import ScenarioSolver from './components/ScenarioSolver';
import Navigation from './components/Navigation'; // Import new Navigation
import { StarProvider } from './context/StarContext';
import './StarAnimation.css';

function App() {
  return (
    <StarProvider>
      <Router>
        {/* Navigation Bar contains links and star counter */}
        <Navigation />

        <div className="pt-4"> {/* Add padding top to avoid content hiding behind sticky nav if needed, though nav is sticky rel */}
          <Routes>
            <Route path="/" element={<Station />} />
            <Route path="/job/:id" element={<JobActivity />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/scenario" element={<ScenarioSolver />} />
          </Routes>
        </div>
      </Router>
    </StarProvider>
  );
}

export default App;
