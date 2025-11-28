import { useState, useEffect } from 'react';

const BootLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFading(true);
          setTimeout(onComplete, 1000); 
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 100); 

    return () => clearInterval(interval);
  }, [onComplete]);

  const totalBoxes = 20;
  const filledBoxes = Math.floor((progress / 100) * totalBoxes);

  return (
    // 1. OUTER DIV: Always Black, No Fade
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center font-mono text-white p-4">
      
      {/* 2. INNER DIV: Handles the Fade Out */}
      <div className={`w-full flex flex-col items-center transition-opacity duration-1000 ease-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          
          <div className="w-full max-w-md mb-8 text-sm">
            <p className="mt-4">LOADING DEVELOPER PORTFOLIO...</p>
          </div>

          <div className="w-full max-w-md border-2 border-white p-1">
            <div className="flex gap-1 h-8">
              {Array.from({ length: totalBoxes }).map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-full transition-colors duration-75 ${
                    index < filledBoxes ? 'bg-white' : 'bg-transparent'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <p className="mt-2 text-right w-full max-w-md">{Math.min(progress, 100)}%</p>

      </div>
    </div>
  );
};

export default BootLoader;