import { SKILLS } from '../data'

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 border-t border-slate-200/70 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div><h2 className="text-2xl font-bold">Skills</h2></div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([title, arr]) => (
            <section key={title} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
              <h3 className="font-semibold mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {arr.map(s => <span key={s} className='text-sm px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700'>{s}</span>)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
