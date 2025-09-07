import { EDUCATION } from '../data'

export function Education() {
  return (
    <section id="about" className="py-12 sm:py-16 border-t border-slate-200/70 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div><h2 className="text-2xl font-bold">Education</h2></div>
        <div className="md:col-span-2 space-y-6">
          {EDUCATION.map((ed, i) => (
            <article key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
              <h3 className="text-lg font-semibold">{ed.degree}</h3>
              <p className="text-slate-600 dark:text-slate-300">{ed.org}</p>
              <p className="text-sm text-slate-500 mt-1">{ed.period}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
