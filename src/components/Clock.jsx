import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: false 
  });

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 bg-black/30 p-2 rounded backdrop-blur-sm hidden sm:block">
      <div className="text-green-400 font-mono text-lg tracking-wider">
        {formattedTime}
      </div>
    </div>
  );
};

export default Clock;