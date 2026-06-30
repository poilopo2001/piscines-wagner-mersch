'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/motion/reveal';
import { cn } from '@/lib/cn';

type Realisation = {
  num: number;
  title: string;
  commune: string;
  type: string;
  span: string;
  image: string;
  alt: string;
};

const REALISATIONS: Realisation[] = [
  {
    num: 1,
    title: 'Bassin béton 10×4 avec abri plat',
    commune: 'KOPSTAL',
    type: 'BÉTON ARMÉ',
    span: 'md:col-span-4',
    image: '/images/realisation-beton.jpg',
    alt: 'Piscine en béton armé livrée à Kopstal avec abri plat',
  },
  {
    num: 2,
    title: 'Coque polyester 8×4 sur terrain en pente',
    commune: 'MAMER',
    type: 'COQUE',
    span: 'md:col-span-4',
    image: '/images/realisation-coque.jpg',
    alt: 'Piscine coque polyester posée sur terrain en pente à Mamer',
  },
  {
    num: 3,
    title: 'Piscine naturelle à lagunage',
    commune: 'HESPERANGE',
    type: 'NATURELLE',
    span: 'md:col-span-4',
    image: '/images/realisation-naturelle.jpg',
    alt: 'Piscine naturelle à lagunage filtrée par plantes à Hesperange',
  },
  {
    num: 4,
    title: 'Rénovation liner et margelles',
    commune: 'STRASSEN',
    type: 'RÉNOVATION',
    span: 'md:col-span-6',
    image: '/images/realisation-renovation.jpg',
    alt: 'Rénovation de liner et margelles de piscine à Strassen',
  },
  {
    num: 5,
    title: 'Abri haut et bassin couvert',
    commune: 'LUXEMBOURG-VILLE',
    type: 'ABRI',
    span: 'md:col-span-3',
    image: '/images/realisation-abri.jpg',
    alt: 'Abri de piscine haut installé sur un bassin à Luxembourg-Ville',
  },
  {
    num: 6,
    title: 'Hors-sol bois terrasse',
    commune: 'ETTELBRUCK',
    type: 'HORS-SOL',
    span: 'md:col-span-3',
    image: '/images/realisation-hors-sol.jpg',
    alt: 'Piscine hors-sol en bois avec terrasse à Ettelbruck',
  },
];

export function RealisationsBento() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="realisations-heading" className="bg-neutral-50 section-py">
      <div className="container-wagner">
        <Reveal>
          <header className="mb-14 max-w-[65ch]">
            <span
              className="font-body text-overline uppercase text-primary-700"
              style={{ letterSpacing: '0.12em' }}
            >
              RÉALISATIONS
            </span>
            <h2
              id="realisations-heading"
              className="mt-3 font-heading font-semibold text-neutral-900 text-h2"
            >
              240 bassins livrés, par commune et par type.
            </h2>
            <p className="mt-5 font-body text-body-lg text-neutral-700 max-w-[65ch] leading-[1.6]">
              Sélection de chantiers réels au Grand-Duché. Photos de chantier et bassins
              finis, pas de stock. Répartis par technique et par commune.
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {REALISATIONS.map((r) => (
            <motion.a
              key={r.num}
              href="/realisations"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={
                reduce
                  ? { duration: 0.25 }
                  : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
              }
              className={cn(
                'group relative block overflow-hidden rounded-lg min-h-[260px] md:min-h-[300px]',
                r.span,
              )}
            >
              <Image
                src={r.image}
                alt={r.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-center transition-transform duration-default ease-standard group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-900/45 group-hover:bg-primary-900/65 transition-colors duration-default ease-standard" />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px bg-accent-500/60"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-1">
                <span
                  className="font-body text-overline uppercase text-neutral-200/90"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {r.commune} · {r.type}
                </span>
                <h3 className="font-heading font-semibold text-neutral-50 text-h4 leading-[1.2]">
                  {r.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
