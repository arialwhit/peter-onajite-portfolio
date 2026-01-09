
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer: React.FC = () => (
  <footer className="py-12 border-t border-white/5 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-2xl font-bold font-['Space_Grotesk']">Coach Peter</div>
        <p className="text-slate-500 max-w-sm">Crafting premium digital products with precision and creativity.</p>
        <div className="flex space-x-8 text-slate-400">
           <a href="#" className="hover:text-teal-400 transition-colors">Github</a>
           <a href="#" className="hover:text-teal-400 transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-teal-400 transition-colors">Twitter</a>
        </div>
        <div className="text-slate-600 text-xs pt-4">
          &copy; {new Date().getFullYear()} Coach Peter Onajite. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-teal-500/30 selection:text-teal-200">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
