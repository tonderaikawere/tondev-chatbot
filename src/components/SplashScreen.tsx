
import { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  
  const codeLines = [
    "// Initializing Tondev AI Mentors...",
    "import { AIPersonality } from './mentors';",
    "const mentors = loadAIMentors();",
    "// Connecting to knowledge base...",
    "await database.connect();",
    "// Loading expert algorithms...",
    "for (let mentor of mentors) {",
    "  mentor.activate();",
    "}",
    "// Ready to assist with coding!",
    "console.log('🚀 AI Mentors Online');",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % codeLines.length);
    }, 400);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 h-screen max-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center z-50">
      <div className="w-full h-full max-h-screen flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
        <div className="text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4">
          
          {/* Logo Animation */}
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-2 sm:mb-3 animate-pulse shadow-2xl">
              <span className="text-base sm:text-lg md:text-2xl lg:text-3xl">🤖</span>
            </div>
            <div className="w-16 sm:w-24 md:w-32 lg:w-40 h-0.5 bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Brand Name */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent leading-tight px-2">
            Tondev AI Mentors
          </h1>
          
          <p className="text-blue-200 text-xs sm:text-sm md:text-base px-2 leading-tight">
            Advanced AI-powered software development mentorship
          </p>
          
          {/* Code Animation */}
          <div className="bg-gray-900/50 backdrop-blur rounded-lg p-2 sm:p-3 md:p-4 font-mono text-left w-full max-w-[260px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto border border-blue-500/30 overflow-hidden">
            <div className="flex items-center mb-1 sm:mb-2">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full mr-1"></div>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-yellow-500 rounded-full mr-1"></div>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-0.5 sm:space-y-1 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className={`text-[9px] sm:text-[10px] md:text-xs transition-all duration-300 break-words leading-tight ${
                    index === currentLine 
                      ? 'text-yellow-400 transform scale-105' 
                      : index < currentLine 
                      ? 'text-green-400' 
                      : 'text-gray-500'
                  }`}
                >
                  {line}
                  {index === currentLine && (
                    <span className="animate-pulse text-yellow-400 ml-1">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Loading Bar */}
          <div className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] mx-auto">
            <div className="w-full bg-blue-800/50 rounded-full h-1 sm:h-1.5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-pulse"></div>
            </div>
            <p className="text-blue-300 text-[9px] sm:text-[10px] md:text-xs mt-1 sm:mt-2 leading-tight">
              Loading AI mentors...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
