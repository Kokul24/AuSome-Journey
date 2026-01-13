import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jobs } from '../jobsData';
import { TrainFront, Sparkles } from 'lucide-react';
import { useTTS } from '../hooks/useTTS';
import { motion } from 'framer-motion';

const Station = () => {
    const navigate = useNavigate();
    const { speak } = useTTS();

    // Stagger animation for carriages
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const carriageVariants = {
        hidden: (index) => ({
            opacity: 0,
            y: index % 2 === 0 ? -100 : 100,
            x: index % 3 === 0 ? -50 : index % 3 === 1 ? 50 : 0,
            scale: 0.8
        }),
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 0.8
            }
        }
    };

    const engineVariants = {
        hidden: { x: -200, opacity: 0, rotate: -10 },
        visible: {
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 80,
                duration: 1
            }
        }
    };

    const titleVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                delay: 1.5
            }
        },
        hover: {
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
        },
        tap: { scale: 0.95 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 overflow-hidden relative">
            {/* Fancy Guess Who Button - Top Left */}
            <button
                onClick={() => navigate('/quiz')}
                onMouseEnter={() => speak("Play Guess Who?")}
                className="fixed top-6 left-6 z-50 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-extrabold text-lg rounded-full shadow-[0_8px_0_rgb(139,0,139)] active:shadow-none active:translate-y-2 transition-all border-4 border-white overflow-hidden group hover:scale-110"
            >
                {/* Sparkle effects */}
                <motion.div
                    className="absolute top-0 left-0"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <Sparkles className="text-yellow-300" size={16} />
                </motion.div>
                <motion.div
                    className="absolute bottom-0 right-0"
                    animate={{
                        rotate: -360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <Sparkles className="text-yellow-300" size={16} />
                </motion.div>

                {/* Shimmer effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                        x: [-200, 200],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />

                <span className="relative z-10 flex items-center gap-2">
                    🎮 Guess Who?
                </span>
            </button>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 text-6xl opacity-30"
                >
                    ☁️
                </motion.div>
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-40 right-20 text-7xl opacity-30"
                >
                    ☁️
                </motion.div>
                <motion.div
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-40 left-1/4 text-5xl opacity-30"
                >
                    ☁️
                </motion.div>
            </div>

            <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-12 drop-shadow-2xl cursor-pointer z-10"
                onMouseEnter={() => speak("Ausome Journey Station")}
                whileHover={{ scale: 1.05 }}
            >
                🚂 Ausome Journey Station
            </motion.h1>

            {/* Train Track */}
            <div className="w-full overflow-x-auto pb-10 hide-scrollbar relative">
                {/* Railway Track */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 opacity-50"></div>
                <div className="absolute bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 opacity-40"></div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-end space-x-3 px-10 min-w-max pb-8"
                >
                    {/* Engine */}
                    <motion.div
                        variants={engineVariants}
                        className="flex flex-col items-center"
                    >
                        <motion.div
                            className="relative w-36 h-32 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-t-[3rem] rounded-b-2xl flex items-center justify-center shadow-2xl border-4 border-gray-800 z-10"
                            whileHover={{ scale: 1.05, y: -5 }}
                            onMouseEnter={() => speak("All Aboard!")}
                        >
                            <TrainFront size={70} color="white" className="drop-shadow-lg" />
                            {/* Smokestack */}
                            <motion.div
                                className="absolute -top-12 right-3 w-10 h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-xl shadow-lg"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                {/* Smoke puffs */}
                                <motion.div
                                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl"
                                    animate={{
                                        y: [-10, -40],
                                        opacity: [0.7, 0],
                                        scale: [0.5, 1.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    💨
                                </motion.div>
                            </motion.div>
                            {/* Headlight */}
                            <motion.div
                                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-300 rounded-full shadow-lg"
                                animate={{
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                            />
                        </motion.div>
                        <div className="flex space-x-3 mt-[-12px]">
                            <motion.div
                                className="w-12 h-12 bg-gray-900 rounded-full border-4 border-gray-400 shadow-lg"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="w-12 h-12 bg-gray-900 rounded-full border-4 border-gray-400 shadow-lg"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>

                    {/* Carriages */}
                    {jobs.map((job, index) => (
                        <React.Fragment key={job.id}>
                            {/* Curved Connector */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.5 + index * 0.15, duration: 0.3 }}
                                className="relative self-center mb-10"
                            >
                                <svg width="40" height="20" viewBox="0 0 40 20" className="drop-shadow">
                                    <path
                                        d="M 0 10 Q 10 0, 20 10 T 40 10"
                                        stroke="#1f2937"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </motion.div>

                            {/* Carriage as Destination */}
                            <motion.div
                                custom={index}
                                variants={carriageVariants}
                                onClick={() => navigate(`/job/${job.id}`)}
                                onMouseEnter={() => speak(job.title)}
                                className="group relative cursor-pointer"
                                whileHover={{ y: -10, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Destination Sign */}
                                <motion.div
                                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg border-2 border-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                    initial={{ y: 10 }}
                                    whileHover={{ y: 0 }}
                                >
                                    <div className="text-xs font-bold text-gray-500">DESTINATION</div>
                                    <div className="text-sm font-extrabold text-gray-800">{job.title}</div>
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                                </motion.div>

                                <div
                                    className={`relative w-44 h-36 rounded-[2rem] flex flex-col items-center justify-center shadow-2xl border-4 border-white z-10 overflow-hidden
                                    ${index % 4 === 0 ? 'bg-gradient-to-br from-pink-200 to-pink-300' :
                                            index % 4 === 1 ? 'bg-gradient-to-br from-green-200 to-green-300' :
                                                index % 4 === 2 ? 'bg-gradient-to-br from-blue-200 to-blue-300' :
                                                    'bg-gradient-to-br from-yellow-200 to-yellow-300'}`}
                                >
                                    {/* Shine effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"
                                        animate={{
                                            x: [-100, 200],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatDelay: 2
                                        }}
                                    />

                                    <motion.span
                                        className="text-6xl mb-2 filter drop-shadow-lg z-10"
                                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                    >
                                        {job.icon}
                                    </motion.span>
                                    <span className="font-bold text-gray-800 text-xl z-10">{job.title}</span>

                                    {/* Window details */}
                                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/50 rounded-lg border-2 border-white"></div>
                                    <div className="absolute top-3 left-3 w-8 h-8 bg-white/50 rounded-lg border-2 border-white"></div>
                                </div>

                                {/* Wheels */}
                                <div className="flex justify-between px-6 mt-[-16px]">
                                    <motion.div
                                        className="w-10 h-10 bg-gray-900 rounded-full border-4 border-gray-400 shadow-lg"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.div
                                        className="w-10 h-10 bg-gray-900 rounded-full border-4 border-gray-400 shadow-lg"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            </motion.div>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Station;

