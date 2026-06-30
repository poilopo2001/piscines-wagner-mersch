'use client';

import { motion, useReducedMotion } from 'framer-motion';

const DEFAULT_ITEMS = [
  'CONSTRUCTION BÉTON ARMÉ',
  'COQUE POLYESTER',
  'PISCINE NATURELLE',
  'ABRI HAUT / MI-HAUT / PLAT',
  'RÉNOVATION',
  'SÉCURITÉ',
  'ÉTANCHÉITÉ',
  'MARGELLES',
  'LOCAL TECHNIQUE',
  'HORS-SOL',
];

type MarqueeProps = {
  items?: string[];
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
};

export function Marquee({
  items = DEFAULT_ITEMS,
  direction = 'left',
  speed = 40,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];

  if (reduce) {
    return (
      <div
        className={`h-16 bg-neutral-200 border-t border-neutral-300 flex items-center justify-center overflow-hidden px-6 ${className ?? ''}`}
      >
        <span
          className="font-body text-[13px] uppercase text-primary-700 truncate"
          style={{ letterSpacing: '0.15em' }}
        >
          {items.join(' · ')}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`group h-16 bg-neutral-200 border-t border-neutral-300 overflow-hidden flex items-center ${className ?? ''}`}
      aria-label="Liste des services Wagner"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        style={{ animationPlayState: 'running' }}
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = 'paused';
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = 'running';
          }
        }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-body text-[13px] uppercase text-primary-700 mx-6 flex items-center"
            style={{ letterSpacing: '0.15em' }}
          >
            {item}
            <span className="text-accent-500 ml-12" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
