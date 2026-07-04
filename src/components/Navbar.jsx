import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      
      <div className="backdrop-blur-md bg-black/30 border-b border-white/10">
        
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-white font-bold text-xl">
            Marija<span className="text-purple-500">.dev</span>
          </h1>

          {/* Links */}
          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-gray-300">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        )}

      </div>
    </nav>
  );
}