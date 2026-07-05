import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaEye, } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden mt-20"
    >
      {/* Background blur */}
      <div className="absolute top-[-150px] left-[-150px] w-[420px] h-[420px] bg-purple-600/25 rounded-full blur-3xl" />

      <div className="absolute bottom-[-180px] right-[-150px] w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-5">
            Full Stack Developer
          </p>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Maria
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Nikolovska
            </span>
          </h1>

          <div className="mt-8 text-2xl lg:text-3xl font-semibold h-12">

            <TypeAnimation
              sequence={[
                "React Developer",
                1500,
                "Laravel Developer",
                1500,
                "Vue Developer",
                1500,
                "Full Stack Engineer",
                1500,
              ]}
              wrapper="span"
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-gray-400 leading-8 max-w-xl">
            I develop modern, scalable and responsive web applications using
            Vue.js, PHP Laravel and React. Passionate about building intuitive user
            experiences, clean architecture and high-quality software.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold flex items-center gap-3 hover:scale-105 transition"
            >
              View Projects
              <FaArrowRight />
            </a>

      <div className="flex gap-4">

  <a
    href="/Marija_Nikolovska_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-7 py-4 rounded-xl border border-white/20 flex items-center gap-3"
  >
    View CV
    <FaEye />
  </a>

  <a
    href="/Marija_Nikolovska_CV.pdf"
    download
    className="px-7 py-4 rounded-xl border border-white/20 flex items-center gap-3"
  >
    Download CV
    <FaDownload />
  </a>

</div>

          </div>

          {/* Social */}

          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/Marija-Nikolovska09/marija-portfolio"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/marija-nikolovska-1920b0212/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition"
            >
              <FaLinkedin size={22} />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 shadow-2xl">

            <div className="flex justify-between">

              <span className="text-purple-400 font-semibold">
                CURRENT STACK
              </span>

              <span className="text-gray-500">
                2026
              </span>

            </div>

            <div className="mt-8 space-y-4">

              {[
                "PHP",
                "Laravel",
                "Vue.js",
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Bootstrap",
                "MySQL",
                "REST APIs",
              ].map((tech) => (

                <div
                  key={tech}
                  className="flex justify-between border-b border-white/5 pb-3"
                >
                  <span>{tech}</span>

                  <span className="text-green-400">
                    ✔
                  </span>

                </div>

              ))}

            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="bg-white/5 rounded-xl p-5 text-center">

                <h2 className="text-3xl font-bold text-purple-400">
                  4+
                </h2>

                <p className="text-gray-400 text-sm">
                  Years
                </p>

              </div>

              <div className="bg-white/5 rounded-xl p-5 text-center">

                <h2 className="text-3xl font-bold text-cyan-400">
                  10+
                </h2>

                <p className="text-gray-400 text-sm">
                  Projects
                </p>

              </div>

              <div className="bg-white/5 rounded-xl p-5 text-center">

                <h2 className="text-3xl font-bold text-green-400">
                  100%
                </h2>

                <p className="text-gray-400 text-sm">
                  Passion
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}