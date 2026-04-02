// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React, { useState, useEffect } from 'react';
// import { GridBackground } from './components/GridBackground';
// import { Navbar } from './components/Navbar';
// import { Hero } from './components/Hero';
// import { About } from './components/About';
// import { Stats } from './components/Stats';
// import { Skills } from './components/Skills';
// import { Projects } from './components/Projects';
// import { Contact } from './components/Contact';
// import { Footer } from './components/Footer';

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans">
//       <GridBackground />
      
//       <Navbar 
//         scrolled={scrolled} 
//         isMenuOpen={isMenuOpen} 
//         setIsMenuOpen={setIsMenuOpen} 
//       />

//       <main className="relative z-10">
//         <Hero />
//         <About />
//         <Stats />
//         <Skills />
//         <Projects />
//         <Contact />
//       </main>

//       <Footer />
//     </div>
//   );
// }
export default function Home() {
  return <h1 style={{color: "white"}}>WORKING ✅</h1>;
}
