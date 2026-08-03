import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const featuredProjects = [
  {
    title: "Homio",
    subtitle: "Airbnb-inspired Long-Term Rental Platform",
    description:
      "A full-stack rental marketplace focused on long-term rentals. The platform includes property listings, landlord and tenant roles, search functionality, user profiles, favorites, reviews, messaging and a responsive modern interface.",
    tech: ["Vue.js", "Laravel", "MySQL", "REST API"],
    live: "https://YOUR-HOMIO.vercel.app",
    github: "https://github.com/YOUR_USERNAME/homio",
  },
  {
    title: "AI Resume Reviewer",
    subtitle: "AI-powered Resume Analysis Platform",
    description:
      "An AI-powered application that analyzes resumes, extracts candidate information, evaluates skills, provides feedback and helps users improve their resumes using modern AI technologies.",
    tech: [
      "React",
      "JavaScript",
      "AI",
      "OpenAI API",
      "PDF.js",
      "Tailwind CSS",
    ],
    live: "https://ai-resume-reviewer-ten-steel.vercel.app/",
    github: "https://github.com/Marija-Nikolovska09/ai-resume-reviewer",
  },
];
const projects = [
  {
    title: "Cinema Booking Platform",
    description:
      "Web application for online movie reservations and seat selection.",
    tech: ["React", "Laravel", "MySQL", "Tailwind"],
    live: "https://www.3dkinobitola.com/",
  },
  {
    title: "Survey & Analytics Platform",
    description:
      "B2B survey platform for data collection, reporting and analytics.",
    tech: ["Vue", "Laravel", "REST API", "MySQL", "Bootstrap"],
  },
 
  {
    title: "Sample Management System",
    description:
      "Internal web application that replaces Excel-based workflows with document uploads, table-based data management, and data enrichment for project managers.",
    tech: ["Vue", "Laravel", "MySQL"],
  },

];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-3 text-center">
          Portfolio
        </p>

        <h2 className="text-5xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-center mt-5">
          Some of the projects I've worked on professionally and personally.
        </p>
      </motion.div>

      {/* FEATURED PROJECT */}

     <div className="space-y-12 mt-16">

{featuredProjects.map((project) => (

<motion.div
  key={project.title}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
>

<div className="grid lg:grid-cols-2">

{/* LEFT */}

<div className="p-10 lg:p-14">

<span className="text-purple-400 uppercase text-sm tracking-[4px]">
Featured Project
</span>


<h3 className="text-4xl font-bold mt-3">
{project.title}
</h3>


<p className="text-cyan-400 mt-2">
{project.subtitle}
</p>


<p className="text-gray-300 mt-8 leading-8">
{project.description}
</p>


<div className="flex flex-wrap gap-3 mt-8">

{project.tech.map((item)=>(
<span
key={item}
className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/20 text-sm"
>
{item}
</span>
))}

</div>


<div className="flex gap-4 mt-10">


<a
href={project.live}
target="_blank"
rel="noreferrer"
className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold flex items-center gap-3 hover:scale-105 transition"
>
Live Demo
<FaExternalLinkAlt/>
</a>


<a
href={project.github}
target="_blank"
rel="noreferrer"
className="px-6 py-3 rounded-xl border border-white/15 hover:border-purple-500 transition flex items-center gap-3"
>
GitHub
<FaGithub/>
</a>


</div>


</div>


{/* RIGHT */}

<div className="relative flex items-center justify-center p-10">


<div className="w-full h-[340px] rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-cyan-500/10 flex items-center justify-center">


<div className="text-center">

<h2 className="text-5xl font-black">
{project.title === "Homio" ? "HOMIO" : "AI"}
</h2>


<p className="text-gray-400 mt-4">
Live Preview
</p>


<div className="mt-8 flex gap-3 justify-center flex-wrap">

{project.tech.map((item)=>(
<span
key={item}
className="px-3 py-1 rounded-full bg-white/10 text-sm"
>
{item}
</span>
))}

</div>


</div>


</div>


</div>


</div>

</motion.div>

))}

</div>

      {/* OTHER PROJECTS */}

    <div className="grid md:grid-cols-3 gap-6 mt-12">
  {projects.map((project) => (
    <motion.div
      key={project.title}
      whileHover={{ y: -8 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex flex-col"
    >
      <h3 className="text-2xl font-bold">
        {project.title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full bg-white/10 text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-3 font-semibold hover:scale-105 transition"
        >
          Live Demo
          <FaExternalLinkAlt />
        </a>
      )}
    </motion.div>
  ))}
</div>

    </section>
  );
}