import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
            <User className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Me</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            I enjoy transforming complex ideas into intuitive, playful interfaces. My toolkit centers on React, TypeScript, Tailwind, and motion design. I prioritize accessibility, performance, and thoughtful details.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs">React</span>
            <span className="rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs">TypeScript</span>
            <span className="rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs">Tailwind</span>
            <span className="rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs">Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
