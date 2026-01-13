import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Station from './components/Station';
import JobActivity from './components/JobActivity';
import Quiz from './components/Quiz';
import { StarProvider, useStars } from './context/StarContext';
import { Star } from 'lucide-react';
import './StarAnimation.css';

const StarCounter = () => {
  const { stars } = useStars();
  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border-4 border-yellow-400 rounded-full px-6 py-2 shadow-lg flex items-center gap-3 animate-pulse-slow">
      <Star className="text-yellow-400 fill-yellow-400 drop-shadow-md" size={32} />
      <span className="text-3xl font-extrabold text-yellow-600 font-mono">{stars}</span>
    </div>
  );
};

function App() {
  return (
    <StarProvider>
      <Router>
        <StarCounter />
        <Routes>
          <Route path="/" element={<Station />} />
          <Route path="/job/:id" element={<JobActivity />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </StarProvider>
  );
}

export default App;
