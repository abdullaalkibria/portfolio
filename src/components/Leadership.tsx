import { LEADERSHIP } from '../data'

export function Leadership() {
  return (
    <section id="leadership" className="py-12 sm:py-16 border-t border-slate-200/70 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div><h2 className="text-2xl font-bold">Leadership & Activities</h2></div>
        <div className="md:col-span-2">
          <ul className="space-y-3">
            {LEADERSHIP.map((item, i) => (
              <li key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
