import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Home';
import About from './sections/About';
// import Services from './sections/Services';
// import Contact from './sections/Contact';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-16"> {/* pt-16 to account for the fixed navbar height */}
        <Hero />
        <About />
        {/* <Services />
        <Contact /> */}
      </main>
    </div>
  );
};

export default App;
