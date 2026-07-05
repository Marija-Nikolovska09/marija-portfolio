import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `cursor-pointer transition ${
      active === id ? "text-purple-400" : "text-gray-300"
    } hover:text-purple-400`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          Maria<span className="text-purple-400">.dev</span>
        </h1>

        <nav className="flex gap-6 text-sm">

          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#experience" className={linkClass("experience")}>Experience</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>

        </nav>

      </div>
    </header>
  );
}