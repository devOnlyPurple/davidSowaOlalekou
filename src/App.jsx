import { useState, useEffect } from 'react';  // <- ajouter useEffect ici
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import '../public/assets/css/plugins.css';
import '../public/assets/css/style.css';


import { getProjects } from "../repositories/api_repository";

function App() {
  const [count, setCount] = useState(0);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog/details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        {/* Tu pourras ajouter d’autres routes ici */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
