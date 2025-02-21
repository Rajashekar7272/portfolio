import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;