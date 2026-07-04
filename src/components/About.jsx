import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="py-24 px-6 max-w-5xl mx-auto">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
      >

        <p className="text-gray-300 leading-7">
          I am a Full Stack Developer with experience in building modern web applications
          using React, Laravel and Vue.js. I focus on clean code, performance and user experience.
        </p>

        <p className="text-gray-400 mt-4">
          I enjoy turning complex problems into simple, beautiful and intuitive solutions.
        </p>

      </motion.div>

    </div>
  );
}