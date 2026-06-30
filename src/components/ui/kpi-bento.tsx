'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

type Kpi = { value: string; label: string };

type KpiBentoProps = {
  items?: Kpi[];
  className?: string;
};

const DEFAULT_KPI: Kpi[] = [
  { value: '240', label: 'PISCINES LIVRÉES' },
  { value: '15', label: 'ANS À MERSCH' },
  { value: '10', label: 'ANS GARANTIE' },
  { value: '94', label: '% RECOMMANDATION' },
];

const cellVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function KpiBento({ items = DEFAULT_KPI, className }: KpiBentoProps) {
  const reduce = useReducedMotion();
  return (
    <motion.ul
      className={`grid grid-cols-2 grid-rows-2 gap-0 ${className ?? ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-15% 0px' }}
      variants={{ visible: { transition: { staggerChildren: reduce ? 0 : 0.08 } } }}
      aria-label="Chiffres clés Piscines Wagner"
    >
      {items.map((kpi, i) => (
        <motion.li
          key={kpi.label}
          variants={cellVariant}
          className="p-6 border-b border-r border-primary-700 [&:nth-child(2n)]:border-r-0 [&:nth-child(n+3)]:border-b-0"
        >
          <div
            className="font-heading font-medium text-[clamp(2rem,3vw,2.75rem)] leading-none tracking-[-0.02em] text-neutral-50 tnum"
          >
            {kpi.value}
          </div>
          <div
            className="mt-2 font-body text-[11px] uppercase text-neutral-200/75"
            style={{ letterSpacing: '0.1em' }}
          >
            {kpi.label}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
