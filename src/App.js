import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import ProjectsDetails from './pages/ProjectsDetails';

function App ()
{
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/project/:id" element={<ProjectsDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
