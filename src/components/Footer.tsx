export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 border-t border-slate-200/70 dark:border-slate-800 text-center text-sm text-slate-500">
      © {year} Abdulla Al‑Kibria — Built with React, Tailwind & Vite
    </footer>
  )
}
