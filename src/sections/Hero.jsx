import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      
      <div className="max-w-5xl mx-auto text-center">

        {/* Small Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sky-400 mb-4 tracking-widest uppercase text-sm"
        >
          Welcome To My Portfolio
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
        >
          Hi, I'm{" "}
          <span className="text-sky-400">
            Varsha
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-2xl md:text-4xl font-semibold text-slate-300 mt-6"
>

  <TypeAnimation
    sequence={[
      "AI & ML Engineer",
      2000,
      "Software Developer",
      2000,
      "Frontend Developer",
      2000,
    ]}
    speed={50}
    repeat={Infinity}
  />

</motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-slate-400 mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about building intelligent solutions, modern web
          applications, and impactful digital experiences through AI and
          software development.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          
          <button className="bg-sky-400 text-slate-900 px-8 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 hover:shadow-sky-400/40 hover:shadow-2xl">
            View Projects
          </button>

          <button className="border border-sky-400 text-sky-400 px-8 py-3 rounded-full font-semibold hover:bg-sky-400 hover:text-slate-900 transition duration-300">
            Contact Me
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;