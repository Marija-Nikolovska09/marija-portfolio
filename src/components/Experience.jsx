import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Experience
      </h2>

      <div className="space-y-10 border-l border-white/10 pl-6">

        {/* Sample Solutions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -left-[33px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

          <h3 className="text-xl font-semibold">
            Full Stack Developer — Sample Solutions
          </h3>

          <p className="text-gray-400 text-sm">
            Jan 2024 – Present • Laravel • Vue.js • MySQL • REST APIs
          </p>

          <p className="text-gray-300 mt-2">
            Developing and maintaining B2B web applications, survey platforms,
            REST APIs, and scalable backend solutions while improving
            performance and user experience.
          </p>
        </motion.div>

        {/* IWConnect */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -left-[33px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

          <h3 className="text-xl font-semibold">
            Web Developer — IWConnect
          </h3>

          <p className="text-gray-400 text-sm">
            Sep 2022 – Jan 2024 • Laravel • React • MySQL
          </p>

          <p className="text-gray-300 mt-2">
            Built and maintained web applications, including the 3D Kino Bitola
            cinema booking platform with online reservations, API integrations,
            and responsive UI.
          </p>
        </motion.div>

        {/* Internship */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -left-[33px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

          <h3 className="text-xl font-semibold">
            Project (IT) Manager Intern — TGN Solutions
          </h3>

          <p className="text-gray-400 text-sm">
            Jun 2022 – Jul 2022
          </p>

          <p className="text-gray-300 mt-2">
            Assisted in coordinating software development tasks and supporting
            IT project planning.
          </p>
        </motion.div>

        {/* Personal Project */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -left-[33px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

          <h3 className="text-xl font-semibold">
            Personal Project — Homio
          </h3>

          <p className="text-gray-400 text-sm">
            Vue • Laravel • MySQL • In Development
          </p>

          <p className="text-gray-300 mt-2">
            Building an Airbnb-inspired full-stack long term rental platform featuring
            property listings, bookings, authentication, and a responsive user
            experience.
          </p>
        </motion.div>

      </div>
    </div>
  );
}