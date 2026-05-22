import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-4xl">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sky-400 uppercase tracking-widest text-sm mb-6"
        >
          Welcome To My Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
        >
          Hi, I'm Varsha
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl md:text-4xl font-semibold text-slate-300 mt-6"
        >
          AI & ML Engineer | Software Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-slate-400 mt-8 text-lg leading-relaxed"
        >
          Passionate about building intelligent digital experiences
          using AI, machine learning, and modern web technologies.
        </motion.p>

      </div>

    </section>
  );
}

export default Hero;