import { useMemo, useState } from 'react'
import type { Project } from '../data'
import { PROJECTS } from '../data'

const TAGS: Array<Project['tag'] | 'all'> = ['all', 'IoT', 'Robotics', 'Research']

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:-translate-y-0.5 hover:shadow-soft transition" data-tag={p.tag}>
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-100/50">{p.tag}</span>
      </div>
      <p className="mt-2 text-slate-700 dark:text-slate-300">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {(p.links || []).map((l, i) => (
          <a key={i} className="text-sm px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800" href={l.href} target="_blank" rel="noopener">{l.label}</a>
        ))}
      </div>
    </article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<typeof TAGS[number]>('all')
  const filtered = useMemo(() => PROJECTS.filter(p => filter === 'all' ? true : p.tag === filter), [filter])

  return (
    <section id="projects" className="py-12 sm:py-16 border-t border-slate-200/70 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="flex items-center gap-2 text-sm">
            {TAGS.map(t => (
              <button key={t} onClick={()=>setFilter(t)} className={`rounded-lg px-3 py-2 border border-slate-300 dark:border-slate-700 ${filter===t ? 'bg-brand-600 text-white' : ''}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  )
}
