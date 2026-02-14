import { useEffect } from 'react';

export const useQuoteRotation = (stage, setCurrentQuote, quotesLength) => {
  useEffect(() => {
    if (stage === 'love') {
      const interval = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotesLength);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [stage, setCurrentQuote, quotesLength]);
};

export const useHeartAnimation = (stage, setHearts) => {
  useEffect(() => {
    if (stage === 'love') {
      const heartInterval = setInterval(() => {
        const newHeart = {
          id: Date.now() + Math.random(),
          left: Math.random() * 100,
          duration: 3 + Math.random() * 2,
          delay: Math.random() * 2
        };
        setHearts(prev => [...prev.slice(-15), newHeart]);
      }, 300);
      return () => clearInterval(heartInterval);
    }
  }, [stage, setHearts]);
};