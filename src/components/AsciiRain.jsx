import React, { useEffect, useState } from 'react';

const AsciiRain = () => {
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    const characters = ['|', '/', '—', '\\', '|', '.', ':', ';'];
    const newRaindrops = [];
    
    for (let i = 0; i < 120; i++) {
      newRaindrops.push({
        id: i,
        char: characters[Math.floor(Math.random() * characters.length)],
        x: Math.random() * 100, 
        y: Math.random() * 100, 
        speed: Math.random() * 10 + 5,
        delay: Math.random() * 5
      });
    }
    
    setRaindrops(newRaindrops);
    
    const interval = setInterval(() => {
      setRaindrops(prev => {

        const filtered = prev.filter(() => Math.random() > 0.05);
        
        while (filtered.length < 120) {
          filtered.push({
            id: Math.random().toString(36).substr(2, 9),
            char: characters[Math.floor(Math.random() * characters.length)],
            x: Math.random() * 100,
            y: -10,
            speed: Math.random() * 10 + 5,
            delay: 0
          });
        }
        
        return filtered;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-green-400 opacity-50 font-mono"
          style={{
            left: `${drop.x}%`,
            top: `${drop.y}%`,
            animation: `falling ${drop.speed}s linear infinite ${drop.delay}s`,
            fontSize: '14px',
          }}
        >
          {drop.char}
        </div>
      ))}
    </div>
  );
};

export default AsciiRain;