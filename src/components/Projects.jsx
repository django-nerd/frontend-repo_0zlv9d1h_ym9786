import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A WebGL-powered hero with Spline 3D model integration, buttery animations, and accessibility in mind.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description:
      'Data-dense dashboard with charts, filters, multi-tenant auth, and dark mode.',
    tags: ['React', 'Tailwind', 'Charts'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1551281044-8f8c9b35d39e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Design System Toolkit',
    description:
      'Reusable components, tokens, and documentation for scalable product UIs.',
    tags: ['Storybook', 'TypeScript', 'Radix'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-indigo-50/60 dark:via-indigo-900/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">A curation of projects focused on craft, utility, and performance.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-500">Let’s collaborate →</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur hover:shadow-xl hover:-translate-y-0.5 transition will-change-transform"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={p.cover} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-black/5 dark:bg-white/10 px-2.5 py-1 text-xs text-neutral-700 dark:text-neutral-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
