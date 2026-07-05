import { motion } from "framer-motion";

const highlights = [
  { title: "4+ Years", desc: "Experience in full stack development" },
  { title: "Frontend", desc: "Vue, React, Bootstrap, Tailwind, UI systems" },
  { title: "Backend", desc: "PHP Laravel, APIs, MySQL" },
  { title: "APIs", desc: "REST integrations & system design" },
  { title: "Clean Code", desc: "Scalable and maintainable architecture" },
  { title: "Problem Solving", desc: "Efficient and practical solutions" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">

      {/* TITLE */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-purple-400 uppercase tracking-[5px] text-sm">
          About Me
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Who I Am
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-7">
          I’m a Full Stack Web Developer focused on building modern, scalable and
          user-friendly web applications. I enjoy turning complex problems into
          simple, clean and efficient solutions.
        </p>
      </motion.div>

      {/* GRID */}

      <div className="grid md:grid-cols-3 gap-6 mt-16">

        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7"
          >

            <h3 className="text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

      {/* EXTRA INFO BAR */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-8 text-center"
      >

        <h3 className="text-xl font-semibold">
          Currently building
        </h3>

        <p className="text-gray-400 mt-2">
          Homio — Airbnb-style rental platform for short & long-term stays
        </p>

      </motion.div>

    </section>
  );
}