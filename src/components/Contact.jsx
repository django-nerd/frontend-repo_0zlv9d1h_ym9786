import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 sm:p-8"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">Let’s build something great</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                I’m open to freelance opportunities and collaborations. Drop a message and I’ll get back to you.
              </p>
            </div>
          </div>

          <form className="mt-6 grid grid-cols-1 gap-4">
            <input className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
            <input type="email" className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email address" />
            <textarea rows="4" className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can I help?" />
            <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-white text-sm font-semibold hover:bg-indigo-500 transition">
              <Send className="h-4 w-4" /> Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
