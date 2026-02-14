import React from 'react';
import { Heart } from 'lucide-react';

const QuestionStage = ({ yesButtonSize, noButtonPosition, handleYes, moveNoButton }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-red-200 to-purple-300 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            💝
          </div>
        ))}
      </div>

      <div className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 relative z-10">
        <div className="flex justify-center mb-6">
          <Heart className="w-24 h-24 text-red-500 fill-red-500 heartbeat-animation" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
          Hey SHAPPU! 💕
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-800 text-center mb-8 font-semibold">
          Do you love me? 💖
        </p>
        
        <div className="flex flex-col gap-4 items-center relative" style={{ minHeight: '120px' }}>
          <button
            onClick={handleYes}
            className="px-12 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative z-20"
            style={{
              transform: `scale(${yesButtonSize})`,
              transition: 'transform 0.3s ease'
            }}
          >
            YES! ❤️
          </button>
          
          <button
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="px-8 py-3 bg-gray-300 text-gray-700 rounded-full font-bold text-lg shadow-md transition-all duration-200 cursor-pointer"
            style={{
              position: noButtonPosition.x === 0 ? 'relative' : 'fixed',
              left: noButtonPosition.x === 0 ? 'auto' : `${noButtonPosition.x}px`,
              top: noButtonPosition.x === 0 ? 'auto' : `${noButtonPosition.y}px`,
              zIndex: 10
            }}
          >
            No 😢
          </button>
        </div>
        
        <p className="text-sm text-gray-500 text-center mt-8 italic">
          Choose wisely... 💝
        </p>
      </div>
    </div>
  );
};

export default QuestionStage;