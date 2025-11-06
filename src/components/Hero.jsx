import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-neutral-950 dark:via-neutral-950/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-green-500" /> Available for freelance
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Building delightful web experiences
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            I’m a front‑end engineer crafting immersive, high‑performance interfaces with React, TypeScript, and WebGL. I love playful interactions that feel effortless.
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

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
