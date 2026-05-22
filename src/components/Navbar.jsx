function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-sky-400">
          Varsha
        </h1>

        <div className="flex gap-8 text-slate-300 font-medium">

          <a href="#about" className="hover:text-sky-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-sky-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-sky-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-sky-400 transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;