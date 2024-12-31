import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State untuk tema gelap/terang

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Fungsi untuk toggle tema
  };

  return (
    <Router>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleDarkMode} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero isDarkMode={isDarkMode} />
            <About isDarkMode={isDarkMode} />
            <Services isDarkMode={isDarkMode} />
            <Portfolio isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
          </>
        } />
        <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
        <Route path="/services" element={<Services isDarkMode={isDarkMode} />} />
        <Route path="/portfolio" element={<Portfolio isDarkMode={isDarkMode} />} />
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} />
    </Router>
  );
};

export default App;