import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { loveQuotes } from '../data/quotes';

const LoveStage = ({ currentQuote, hearts }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-red-200 flex items-center justify-center p-4 overflow-hidden relative">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-red-500 pointer-events-none"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${Math.random() * 20 + 20}px`,
            animation: `floatUp ${heart.duration}s ease-in forwards`,
            animationDelay: `${heart.delay}s`,
            opacity: 0
          }}
        >
          ❤️
        </div>
      ))}

      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 quote-enter relative z-10">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="w-20 h-20 text-red-500 fill-red-500 pulse-animation" />
            <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
          For My Dearest SHAPPU 💕
        </h1>
        
        <div key={currentQuote} className="quote-enter mb-8">
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-4 leading-relaxed">
            {loveQuotes[currentQuote].text}
          </p>
          <p className="text-lg md:text-xl text-gray-600 text-center italic">
            {loveQuotes[currentQuote].subtext}
          </p>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {loveQuotes.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentQuote ? 'w-8 bg-pink-500' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-xl text-gray-700 font-medium">
            You mean the world to me, Bachhhuuuu ❤️
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Happy Valentine's Day Mumma 😘🌹
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveStage;