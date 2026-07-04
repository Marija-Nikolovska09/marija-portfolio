import {
  FaReact,
  FaLaravel,
  FaVuejs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiJavascript, SiPhp } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <FaVuejs />, name: "Vue" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <div id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition"
          >
            <div className="text-3xl text-purple-400 flex justify-center">
              {skill.icon}
            </div>
            <p className="mt-2 text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
