import React, { useState } from 'react';
import QuestionStage from './QuestionStage';
import LoveStage from './LoveStage';
import { loveQuotes } from '../data/quotes';
import { useQuoteRotation, useHeartAnimation } from '../hooks/useValentineAnimations';

export default function ValentineApp() {
  const [stage, setStage] = useState('question');
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [hearts, setHearts] = useState([]);

  useQuoteRotation(stage, setCurrentQuote, loveQuotes.length);
  useHeartAnimation(stage, setHearts);

  const moveNoButton = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;
    
    setNoButtonPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
    
    setYesButtonSize(prev => Math.min(prev + 0.15, 2.5));
  };

  const handleYes = () => {
    setStage('love');
  };

  if (stage === 'love') {
    return <LoveStage currentQuote={currentQuote} hearts={hearts} />;
  }

  return (
    <QuestionStage
      yesButtonSize={yesButtonSize}
      noButtonPosition={noButtonPosition}
      handleYes={handleYes}
      moveNoButton={moveNoButton}
    />
  );
}