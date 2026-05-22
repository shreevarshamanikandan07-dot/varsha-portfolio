import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-md border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-sky-400">
          Varsha
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <li className="hover:text-sky-400 transition duration-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-sky-400 transition duration-300 cursor-pointer">
            Skills
          </li>

          <li className="hover:text-sky-400 transition duration-300 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-sky-400 transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;