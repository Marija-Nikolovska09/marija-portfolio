import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >

        <h1 className="text-5xl md:text-6xl font-bold">
          Marija Nikolovska
        </h1>

        <h2 className="text-xl md:text-2xl text-purple-400 mt-3">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Building modern web applications with React, Laravel and Vue.js.
          Focused on performance, clean design and user experience.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition hover:scale-105 active:scale-95 transition">
            View Projects
          </button>

          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition hover:scale-105 active:scale-95 transition">
            Contact Me
          </button>
        </div>

      </motion.div>

    </div>
  );
}