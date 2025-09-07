import { EXPERIENCE } from '../data'

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 border-t border-slate-200/70 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div><h2 className="text-2xl font-bold">Experience</h2></div>
        <div className="md:col-span-2 space-y-6">
          {EXPERIENCE.map((e, i) => (
            <article key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-soft transition-shadow">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">{e.role} · <span className="text-brand-600 dark:text-brand-400">{e.org}</span></h3>
                <span className="text-sm text-slate-500">{e.period}</span>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700 dark:text-slate-300">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
