import './App.css';
import NavBar from './sections/NavBar/NavBar';
import Hero from './sections/Hero/Hero'; 
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Hero />} />

        {/* Projects Page */}
        <Route path="/projects" element={<Projects />} />

        {/* Skills Page */}
        <Route path="/skills" element={<Skills />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
