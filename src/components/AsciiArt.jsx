import React from 'react';

const AsciiArt = () => {
  // Simplified ASCII art for mobile screens                 
  const smallAsciiArt = `
    _____    _____
   /\\    \\  /\\    \\
  /::\\____\\/::\\____\\
 /:::/    /\\:::/    /
/:::/    /  \\::/    /
\\::/    /    \\/____/
 \\/____/            
`;

  return (
    <div className="relative w-full max-w-4xl mx-auto pt-20 mt-8 md:mt-0 z-30">
      <div className="flex flex-col items-center">
        {/* Title - centered at top for all screen sizes with futuristic font */}
        <h1 className="text-center text-4xl uppercase tracking-widest mb-8 font-futuristic font-bold text-shadow hover:text-neon-green transition-colors duration-300">
          Akshat Sharma
        </h1>
        
        {/* ASCII art for larger screens */}
        <pre className="text-green-400 text-xs leading-none whitespace-pre text-center transition-all duration-800 hover:scale-105 hover:tracking-wider hover:opacity-100 hover:shadow hover:shadow-green-400 opacity-90 hidden sm:block">
{`
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
          /:::/    /          \\:::\/:::/    /     
         /:::/    /            \\::::::/    /      
        /:::/    /              \\::::/    /       
        \\::/    /                \\::/    /        
         \\/____/                  \\/____/         
                                                  
`}
        </pre>
        
        {/* Simplified ASCII art for mobile screens */}
        <pre className="text-green-400 text-xs leading-none whitespace-pre text-center transition-all duration-800 hover:scale-105 hover:opacity-100 hover:shadow hover:shadow-green-400 opacity-90 sm:hidden">
          {smallAsciiArt}
        </pre>
        
        <div className="mt-4 text-lg opacity-80 lowercase tracking-widest">
          software engineer // digital poet
        </div>
      </div>
    </div>
  );
};

export default AsciiArt;