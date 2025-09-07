import { motion } from 'framer-motion'
import { PROFILE } from '../data'

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20 grid md:grid-cols-[auto,1fr] items-center gap-10">
        <div className="shrink-0">
          <img src={`${import.meta.env.BASE_URL}me.jpeg`} alt={PROFILE.name} className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-brand-100 dark:ring-brand-900 shadow-soft" />
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold leading-tight">Hi, I'm <span className="text-brand-600 dark:text-brand-400">{PROFILE.shortName}</span>.</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl">Final‑year CSE student at Dhaka University of Engineering & Technology (DUET). I build practical <strong>IoT/Robotics</strong> systems and explore <strong>Machine Learning</strong>.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={`${import.meta.env.BASE_URL}CV_Abdulla_Al_Kibria.pdf`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-soft">View Resume</a>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold">Email</a>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold">LinkedIn</a>
            <a href={PROFILE.links.github} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
