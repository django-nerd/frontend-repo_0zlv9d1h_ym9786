import { useState } from 'react';
import { Rocket, Github, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <Rocket className="h-5 w-5 text-indigo-600" />
            <span className="text-sm sm:text-base">My Portfolio</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#projects" className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors">Projects</a>
            <a href="#about" className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors">Contact</a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:bg-black/[.03] dark:hover:bg-white/5 transition"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-9 items-center gap-2 rounded-full bg-indigo-600 px-4 text-white text-sm font-medium hover:bg-indigo-500 transition"
              >
                <Mail className="h-4 w-4" /> Get in touch
              </a>
            </div>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 pt-2 space-y-2">
            <a onClick={() => setOpen(false)} href="#projects" className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5">Projects</a>
            <a onClick={() => setOpen(false)} href="#about" className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5">About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
