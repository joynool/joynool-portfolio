import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App ()
{
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
