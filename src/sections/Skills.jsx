import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiMysql,
  SiFlask,
  SiStreamlit,
} from "react-icons/si";

const skills = [
  {
    name: "Python",
    icon: <FaPython size={40} />,
  },
  {
    name: "Java",
    icon: <FaJava size={40} />,
  },
  {
    name: "React",
    icon: <FaReact size={40} />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={40} />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={40} />,
  },
  {
    name: "Flask",
    icon: <SiFlask size={40} />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={40} />,
  },
  {
    name: "Streamlit",
    icon: <SiStreamlit size={40} />,
  },
];

function Skills() {
  return (
    <section
  id="skills"
  className="min-h-screen py-24 px-6 flex items-center"
>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-sky-400 uppercase tracking-widest text-sm mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I Work With
          </h2>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 backdrop-blur-lg hover:border-sky-400 transition duration-300 shadow-lg hover:shadow-sky-500/20 hover:shadow-2xl"
            >

              <div className="text-sky-400">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;