import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-32 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-sky-400 uppercase tracking-widest text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Passionate About Building Intelligent Digital Solutions
          </h2>

          <p className="text-slate-400 leading-relaxed mb-6">
            I am an AI & ML student passionate about combining artificial
            intelligence and software development to create impactful digital
            experiences.
          </p>

          <p className="text-slate-400 leading-relaxed">
            I enjoy exploring modern technologies, solving challenging
            problems, and continuously improving my development skills while
            building real-world projects.
          </p>

        </motion.div>

        {/* Right Side Card */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 backdrop-blur-lg shadow-2xl"
        >

          <div className="space-y-6">

            <div>
              <h3 className="text-sky-400 text-lg font-semibold">
                Education
              </h3>

              <p className="text-slate-300 mt-2">
                M.Sc Artificial Intelligence & Machine Learning
              </p>

              <p className="text-slate-500 text-sm">
                Coimbatore Institute of Technology
              </p>
            </div>

            <div>
              <h3 className="text-sky-400 text-lg font-semibold">
                Interests
              </h3>

              <p className="text-slate-300 mt-2">
                Full Stack Development • AI/ML • Modern Web Design
              </p>
            </div>

            <div>
              <h3 className="text-sky-400 text-lg font-semibold">
                Current Goal
              </h3>

              <p className="text-slate-300 mt-2">
                Building impactful projects and growing as a software developer.
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;