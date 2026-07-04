import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div id="contact" className="py-24 px-6 max-w-4xl mx-auto">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center backdrop-blur-md"
      >

        <p className="text-gray-300 mb-6">
          Let’s build something amazing together 🚀
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="mailto:marija.nikol09@gmail.com"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="px-6 py-3 border border-white/20 hover:border-white/50 rounded-xl transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="px-6 py-3 border border-white/20 hover:border-white/50 rounded-xl transition"
          >
            LinkedIn
          </a>

        </div>

      </motion.div>
    </div>
  );
}