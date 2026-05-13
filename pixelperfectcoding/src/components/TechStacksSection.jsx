import { FaReact, FaNodeJs, FaGithub, FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiVite, SiWebpack } from 'react-icons/si'


const iconMap = {
  react: FaReact,
  nextjs: SiNextdotjs,
  javascript: FaJs,
  typescript: SiTypescript,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  nodejs: FaNodeJs,
  github: FaGithub,
  html: FaHtml5,
  css: FaCss3Alt,
  vite: SiVite,
  webpack: SiWebpack,
}

function TechStacksSection({ stacks }) {
  return (
    <section id="stacks" className="container-shell py-10">
      <div className="glass-card p-8 md:p-10">
        <h2 className="section-heading">Technology Stacks</h2>
        <p className="mt-5 max-w-3xl text-slate-300">
          Using industry-standard tools and frameworks for faster development, better performance, and seamless user experiences.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stacks.map((stack) => {
            const Icon = iconMap[stack.iconKey]

            return (
              <li
                key={stack.name}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
              >
                {Icon ? <Icon className="h-5 w-5 text-accent" /> : null}
                <span>{stack.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default TechStacksSection

