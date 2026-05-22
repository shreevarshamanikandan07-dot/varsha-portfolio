import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI Appointment Booking Agent",
    description:
      "Built an AI-powered appointment booking agent using N8N and Google Gemini that helps patients schedule appointments with doctors efficiently.",
    tech: ["N8N", "Google Gemini", "AI Automation"],
  },

  {
    title: "Carbon Footprint Calculator",
    description:
      "Developed a carbon footprint calculator that helps users track and measure their carbon emissions using Java and DBMS.",
    tech: ["Java", "DBMS"],
  },

  {
    title: "Smart Municipal Complaint Categorization",
    description:
      "Built a smart system that automatically categorizes municipal complaints using machine learning models for faster and more efficient complaint management.",
    tech: ["ML Models", "Streamlit", "Flask", "Hugging Face"],
  },

  {
    title: "Portfolio Website",
    description:
      "Designed and developed a modern responsive portfolio website using React, Tailwind CSS, and Framer Motion with smooth animations and interactive UI effects.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

function Projects() {
  return (
    <section
  id="projects"
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
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-lg hover:border-sky-400 transition duration-300 shadow-lg hover:shadow-sky-500/20 hover:shadow-2xl"
            >

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-sky-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-slate-800 rounded-full text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">

                <button className="flex items-center gap-2 bg-sky-400 text-slate-900 px-5 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 hover:shadow-sky-400/40 hover:shadow-2xl">

                  <FaGithub />
                  GitHub

                </button>

                <button className="flex items-center gap-2 border border-sky-400 text-sky-400 px-5 py-3 rounded-full font-semibold hover:bg-sky-400 hover:text-slate-900 transition duration-300">

                  <FiExternalLink />
                  Live Demo

                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;