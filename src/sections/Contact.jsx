import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-32 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-sky-400 uppercase tracking-widest text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Connect
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I’m always open to discussing new opportunities, collaborations,
            and innovative projects in AI, machine learning, and software
            development.
          </p>

        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-900/60 border border-slate-800 rounded-3xl p-10 backdrop-blur-lg shadow-2xl"
        >

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">

            {/* Email */}
            <a
              href="mailto:shreevarshamanikandan.07@gmail.com"
              className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition duration-300"
            >
              <FaEnvelope size={24} />
              Email
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shreevarsha-manikandan-a15baa32a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition duration-300"
            >
              <FaLinkedin size={24} />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/shreevarshamanikandan07-dot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition duration-300"
            >
              <FaGithub size={24} />
              GitHub
            </a>

          </div>

          {/* Resume Button */}
         <a
  href="/resume.pdf"
  download
  className="inline-block bg-sky-400 text-slate-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 hover:shadow-sky-400/40 hover:shadow-2xl"
>
  Download Resume
</a>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;