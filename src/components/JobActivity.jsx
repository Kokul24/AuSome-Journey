import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobs } from '../jobsData';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, X } from 'lucide-react';
import '../StarAnimation.css';
import { useTTS } from '../hooks/useTTS';
import { useStars } from '../context/StarContext';

const JobActivity = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = jobs.find(j => j.id === id);
    const { speak } = useTTS();
    const { addStar } = useStars();

    const [currentStep, setCurrentStep] = useState(0);
    const [showStar, setShowStar] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [completedSteps, setCompletedSteps] = useState([]);

    // Read step instructions automatically when they change
    useEffect(() => {
        if (job) {
            speak(job.steps[currentStep]);
        }
    }, [currentStep, job, speak]);

    if (!job) return <div className="text-center mt-20 text-2xl">Job not found? 🚂</div>;

    const handleStepClick = () => {
        if (completedSteps.includes(currentStep)) return;

        // Mark current step as done
        setCompletedSteps(prev => [...prev, currentStep]);

        // Speak encouragement
        speak("Great job!");

        // Check if this was the last step
        if (currentStep >= job.steps.length - 1) {
            // Finished!
            setTimeout(() => {
                setShowStar(true);
                addStar(); // Increment global star count
                speak("You did it! Here is a star!");
                setTimeout(() => {
                    setShowStar(false);
                    setShowVideo(true);
                }, 2000);
            }, 500);
        } else {
            // Move to next step
            setTimeout(() => {
                setCurrentStep(prev => prev + 1);
            }, 1000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center p-6">
            <button
                onClick={() => navigate('/')}
                className="self-start mb-6 flex items-center gap-2 text-xl font-bold text-gray-600 hover:text-gray-900 bg-white px-4 py-2 rounded-full shadow-md"
            >
                <ArrowLeft /> Go Back
            </button>

            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl">

                {/* Header */}
                <div
                    className="flex items-center gap-4 mb-10 animate-bounce-slow cursor-pointer"
                    onMouseEnter={() => speak(job.title)}
                >
                    <span className="text-8xl">{job.icon}</span>
                    <h1 className="text-5xl font-bold text-gray-800">{job.title}</h1>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-300 rounded-full h-6 mb-12 overflow-hidden shadow-inner">
                    <div
                        className="bg-green-400 h-6 transition-all duration-500 ease-out"
                        style={{ width: `${((currentStep) / job.steps.length) * 100}%` }}
                    ></div>
                </div>

                {/* Active Step Card */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    key={currentStep}
                    className="bg-white rounded-3xl p-10 shadow-2xl border-b-8 border-r-8 border-indigo-200 cursor-pointer w-full text-center hover:scale-105 transition-transform"
                    onClick={handleStepClick}
                    onMouseEnter={() => speak(job.steps[currentStep])}
                >
                    <h2 className="text-4xl font-bold text-gray-700 mb-6">
                        Step {currentStep + 1}:
                    </h2>
                    <p className="text-5xl font-extrabold text-[#4A90E2] mb-8">
                        {job.steps[currentStep]}
                    </p>

                    <div className="flex justify-center text-gray-400">
                        <span className="animate-pulse">Click to complete 👆</span>
                    </div>
                </motion.div>

                {/* Steps History */}
                <div className="mt-10 flex gap-2 flex-wrap justify-center opacity-60">
                    {job.steps.map((step, idx) => (
                        <div key={idx} className={`w-4 h-4 rounded-full ${idx < currentStep ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    ))}
                </div>
            </div>

            {/* Flying Star Animation */}
            <AnimatePresence>
                {showStar && (
                    <motion.div
                        className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0, y: 300, rotate: 0 }}
                            animate={{ scale: 5, y: -500, rotate: 360, x: 400 }} // Fly to top right
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="text-yellow-400 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]"
                        >
                            <Star size={100} fill="currentColor" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Modal */}
            {showVideo && (
                <div className="modal-overlay">
                    <div className="modal-content relative">
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 shadow-lg"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-3xl font-bold mb-4 text-green-600">Great Job, {job.title}!</h2>
                        <iframe
                            src={job.videoUrl}
                            title={job.title}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                        <button
                            className="close-btn w-full mt-4 bg-indigo-500 hover:bg-indigo-600"
                            onClick={() => navigate('/')}
                        >
                            Back to Station 🚂
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobActivity;
