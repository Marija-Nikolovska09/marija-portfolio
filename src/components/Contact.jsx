import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-4xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >

        <p className="text-purple-400 uppercase tracking-[5px] text-sm">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 mt-6">
          I’m open to work opportunities and freelance projects.
        </p>

      </motion.div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">

        {/* Email */}
        <a
          href="mailto:marija.nikol09@gmail.com"
          className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition backdrop-blur-xl"
        >
          <FaEnvelope className="mx-auto text-3xl text-purple-400" />
          <p className="mt-4 font-semibold">Email Me</p>
          <p className="text-gray-400 text-sm mt-2">Direct contact</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Marija-Nikolovska09/marija-portfolio"
          target="_blank"
          className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition backdrop-blur-xl"
        >
          <FaGithub className="mx-auto text-3xl text-white" />
          <p className="mt-4 font-semibold">GitHub</p>
          <p className="text-gray-400 text-sm mt-2">My projects</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/marija-nikolovska-1920b0212/"
          target="_blank"
          className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition backdrop-blur-xl"
        >
          <FaLinkedin className="mx-auto text-3xl text-cyan-400" />
          <p className="mt-4 font-semibold">LinkedIn</p>
          <p className="text-gray-400 text-sm mt-2">Professional profile</p>
        </a>

      </div>

      {/* FOOTER */}

      <p className="text-center text-gray-500 mt-20 text-sm">
        Built with React • Tailwind • Framer Motion
      </p>

    </section>
  );
}