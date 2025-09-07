import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#awards', label: 'Awards' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('kb_theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    const enableDark = saved === 'dark' || (!saved && prefers)
    setDark(enableDark)
    document.documentElement.classList.toggle('dark', enableDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('kb_theme', next ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-lg sm:text-xl font-semibold tracking-tight">Abdulla <span className="text-brand-600 dark:text-brand-400">Al‑Kibria</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map(l => <a key={l.href} href={l.href} className="hover:text-brand-600">{l.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href={`${import.meta.env.BASE_URL}CV_Abdulla_Al_Kibria.pdf`} target="_blank" className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 shadow-soft" rel="noopener">Resume</a>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-xl px-3 py-2 text-sm font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
              {dark ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
            </button>
            <button onClick={() => setOpen(v=>!v)} className="md:hidden rounded-xl p-2 border border-slate-300 dark:border-slate-700" aria-label="Open menu">
              {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
            </button>
          </div>
        </div>
        {open && (
          <nav className="md:hidden pb-4 space-y-2 text-sm">
            {links.map(l => <a key={l.href} href={l.href} className="block hover:text-brand-600" onClick={()=>setOpen(false)}>{l.label}</a>)}
          </nav>
        )}
      </div>
    </header>
  )
}
