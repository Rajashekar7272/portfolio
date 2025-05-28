import AdditionalInfo from "./components/Additional";
import Certifications from "./components/Certificates";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <AdditionalInfo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
