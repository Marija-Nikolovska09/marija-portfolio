import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Cinema Booking Platform",
      desc: "3D cinema web app for movie booking and seat selection.",
      tech: "React • Laravel • MySQL",
    },
    {
      title: "Survey & Analytics System",
      desc: "B2B platform for creating and analyzing surveys.",
      tech: "Vue • PHP Laravel • APIs • MySQL",
    },
    {
      title: "Business Dashboard",
      desc: "Internal tool for managing enterprise data and reports.",
      tech: "Vue • Laravel • REST API • MySQL",
    },
  ];

  return (
    <div id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold text-white">
              {p.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {p.desc}
            </p>

            <p className="text-purple-400 text-sm mt-4">
              {p.tech}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
}