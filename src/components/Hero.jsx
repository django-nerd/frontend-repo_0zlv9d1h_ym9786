import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-neutral-950 dark:via-neutral-950/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Open to opportunities
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Crafting interactive, high‑end web experiences
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            Front‑end engineer specializing in React, TypeScript, and motion. I blend aesthetics with performance to build products people love to use.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-white text-sm font-semibold shadow-sm hover:bg-indigo-500 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-5 py-3 text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="lg:col-span-5 grid grid-cols-2 gap-3 self-start"
        >
          {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Spline', 'Accessibility'].map((s) => (
            <motion.li key={s} variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-4 py-3 text-sm">
              {s}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
