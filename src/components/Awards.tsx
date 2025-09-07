import { AWARDS } from '../data'

export function Awards() {
  return (
    <section id="awards" className="py-12 sm:py-16 border-t border-slate-200/70 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div><h2 className="text-2xl font-bold">Awards</h2></div>
        <div className="md:col-span-2">
          <ul className="space-y-3">
            {AWARDS.map((a, i) => (
              <li key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex items-start gap-4">
                <div className='text-brand-600 dark:text-brand-400 mt-1'>🏆</div>
                <div>
                  <div className='font-semibold'>{a.title}</div>
                  <div className='text-sm text-slate-600 dark:text-slate-400'>{a.org}</div>
                  <div className='text-xs text-slate-500 mt-1'>{a.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
