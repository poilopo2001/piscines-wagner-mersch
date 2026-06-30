'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { KpiBento } from '@/ui/kpi-bento';

export function HeroSapinBand() {
  const reduce = useReducedMotion();

  return (
    <motion.aside
      aria-label="Réalisation Piscines Wagner et chiffres clés"
      className="relative bg-primary-900 text-neutral-50 px-[clamp(1.5rem,3vw,48px)] py-12 min-h-[400px] lg:min-h-[min(90vh,900px)] overflow-hidden flex flex-col"
      initial={reduce ? { opacity: 0 } : { opacity: 0, x: 40 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
      transition={reduce ? { duration: 0.25 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      {/* Photo chantier — le moment screenshotable, pleine couverture */}
      <div className="relative h-[40%] min-h-[260px] mb-8 flex-1 overflow-hidden rounded-md">
        <Image
          src="/images/hero-pool.jpg"
          alt="Piscine achevée sur un chantier Wagner au Grand-Duché de Luxembourg"
          fill
          priority
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover object-center"
        />
        {/* Voile sapin pour lisibilité sur la bande primary-900 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-900/10 to-transparent pointer-events-none"
        />
        {/* Filet laiton signature */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-accent-500/50 pointer-events-none"
        />
        <div className="absolute bottom-3 left-4 right-4">
          <span
            className="font-body text-[11px] uppercase text-neutral-50/85 block"
            style={{ letterSpacing: '0.12em' }}
          >
            Chantier Wagner — structure béton, bassin mis en eau
          </span>
        </div>
      </div>

      {/* Bento KPI 2×2 (60% bas) */}
      <KpiBento />
    </motion.aside>
  );
}
