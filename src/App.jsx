import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    
    <div className="relative overflow-hidden">
      <AnimatedCursor
  innerSize={8}
  outerSize={35}
  color="56, 189, 248"
  outerAlpha={0.2}
  innerScale={0.7}
  outerScale={2}
  clickables={[
    "a",
    "button",
    ".link"
  ]}
/>

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-sky-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-400 opacity-20 blur-3xl rounded-full"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;