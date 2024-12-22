// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/nav/nav';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import ConstructionService from './components/services/constructionService';
import PaintingService from './components/services/paintingService';
import TilingService from './components/services/tilingService';
import CeilingService from './components/services/ceilingService';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/construction" element={<ConstructionService />} />
            <Route path="/services/painting" element={<PaintingService />} />
            <Route path="/services/tiling" element={<TilingService />} />
            <Route path="/services/ceiling" element={<CeilingService />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
};

export default App;