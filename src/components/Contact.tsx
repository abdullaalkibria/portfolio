import { PROFILE } from '../data'

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 border-t border-slate-200/70 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div><h2 className="text-2xl font-bold">Get in touch</h2></div>
        <div className="md:col-span-2 space-y-4">
          <p>Email: <a className="text-brand-600 hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a> · Phone: {PROFILE.phone}</p>
          <div className="flex flex-wrap gap-3">
            <a href={PROFILE.links.linkedin} target="_blank" rel="noopener" className="rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">LinkedIn</a>
            <a href={PROFILE.links.github} target="_blank" rel="noopener" className="rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">GitHub</a>
            <a href={`${import.meta.env.BASE_URL}CV_Abdulla_Al_Kibria.pdf`} target="_blank" rel="noopener" className="rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}
