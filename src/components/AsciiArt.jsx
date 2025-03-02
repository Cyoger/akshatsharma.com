import React from 'react';

const AsciiArt = () => {
  const largeAsciiArt = `
          _____                    _____          
         /\\    \\                  /\\    \\         
        /::\\    \\                /::\\    \\        
       /::::\\    \\              /::::\\    \\       
      /::::::\\    \\            /::::::\\    \\      
     /:::/\\:::\\    \\          /:::/\\:::\\    \\     
    /:::/__\\:::\\    \\        /:::/__\\:::\\    \\    
   /::::\\   \\:::\\    \\       \\:::\\   \\:::\\    \\   
  /::::::\\   \\:::\\    \\    ___\\:::\\   \\:::\\    \\  
 /:::/\\:::\\   \\:::\\    \\  /\\   \\:::\\   \\:::\\    \\ 
/:::/  \\:::\\   \\:::\\____\\/::\\   \\:::\\   \\:::\\____\\
\\::/    \\:::\\  /:::/    /\\:::\\   \\:::\\   \\::/    /
 \\/____/ \\:::\\/:::/    /  \\:::\\   \\:::\\   \\/____/ 
          \\::::::/    /    \\:::\\   \\:::\\    \\     
           \\::::/    /      \\:::\\   \\:::\\____\\    
           /:::/    /        \\:::\\  /:::/    /    
          /:::/    /          \\:::\\/::/    /     
         /:::/    /            \\::::::/    /      
        /:::/    /              \\::::/    /       
        \\::/    /                \\::/    /        
         \\/____/                  \\/____/         
                                                  
`;

  return (
    <div className="relative w-full max-w-4xl mx-auto pt-20 mt-8 md:mt-0 z-30">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-4xl uppercase tracking-widest mb-8 font-futuristic font-bold text-shadow hover:text-neon-green transition-colors duration-300">
          Akshat Sharma
        </h1>
        
        <div className="ascii-container w-full overflow-x-hidden no-scrollbar">
          <pre className="text-green-400 leading-none whitespace-pre text-center transition-all duration-800 hover:scale-105 hover:tracking-wider hover:opacity-100 hover:shadow hover:shadow-green-400 opacity-90">
            {largeAsciiArt}
          </pre>
        </div>
        
        <div className="mt-4 text-lg opacity-80 lowercase tracking-widest">
          software engineer // digital poet
        </div>
      </div>
    </div>
  );
};

export default AsciiArt;