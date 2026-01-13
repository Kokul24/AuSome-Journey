import React, { createContext, useContext, useState, useEffect } from 'react';

const StarContext = createContext();

export const StarProvider = ({ children }) => {
    const [stars, setStars] = useState(() => {
        const saved = localStorage.getItem('ausome-stars');
        return saved ? parseInt(saved, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('ausome-stars', stars);
    }, [stars]);

    const addStar = () => {
        setStars(prev => prev + 1);
    };

    return (
        <StarContext.Provider value={{ stars, addStar }}>
            {children}
        </StarContext.Provider>
    );
};

export const useStars = () => useContext(StarContext);
