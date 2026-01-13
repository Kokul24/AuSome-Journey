import { useState, useCallback } from 'react';

export const useTTS = () => {
    const speak = useCallback((text) => {
        if (!('speechSynthesis' in window)) return;

        // Cancel current speech to avoid overlap/queueing
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        // Use a friendly, slightly slower rate for children
        utterance.rate = 0.9;
        utterance.pitch = 1.1;

        // Try to find a pleasant voice if available (optional optimization)
        // const voices = window.speechSynthesis.getVoices();
        // const preferredVoice = voices.find(v => v.name.includes('Female')) || voices[0];
        // if (preferredVoice) utterance.voice = preferredVoice;

        window.speechSynthesis.speak(utterance);
    }, []);

    const cancel = useCallback(() => {
        window.speechSynthesis.cancel();
    }, []);

    return { speak, cancel };
};
