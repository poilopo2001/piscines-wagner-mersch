'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { MagneticCTA } from '@/cta/magnetic';

const wordContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const wordVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function HeroTypography() {
  const reduce = useReducedMotion();

  const h1Part1 = ['Un', 'seul', 'interlocuteur,'];
  const h1Part2 = ['du', 'devis', 'à', 'la', 'mise', 'en', 'eau.'];

  return (
    <div className="flex flex-col gap-8">
      {/* Overline + filet laiton */}
      <motion.div
        className="flex flex-col gap-3"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? { duration: 0.25 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="font-body text-overline uppercase text-primary-700"
          style={{ letterSpacing: '0.12em' }}
        >
          PISCINISTE · MERSCH · DEPUIS 2009
        </span>
        <span className="block h-px w-12 bg-accent-500" aria-hidden="true" />
      </motion.div>

      {/* H1 géant — stagger mot par mot */}
      <motion.h1
        className="font-heading font-bold text-neutral-900 text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-[-0.035em]"
        variants={wordContainer}
        initial="hidden"
        animate="visible"
        aria-label="Un seul interlocuteur, du devis à la mise en eau."
      >
        <span className="block">
          {h1Part1.map((w, i) => (
            <motion.span
              key={`p1-${i}`}
              variants={wordVariant}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
        </span>
        <span className="block">
          {h1Part2.map((w, i) => (
            <motion.span
              key={`p2-${i}`}
              variants={wordVariant}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      {/* Sous-titre Geist body-lg */}
      <motion.p
        className="font-body text-body-lg text-neutral-700 max-w-[55ch] leading-[1.6]"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={
          reduce
            ? { duration: 0.25, delay: 0.3 }
            : { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
        }
      >
        Piscines Wagner, atelier à Mersch depuis 2009. Béton armé, coque,
        naturelle, rénovation, sécurité : on construit, on rénove, on entretient
        dans le Grand-Duché. Le prix qu&rsquo;on annonce est le prix qu&rsquo;on
        facture. Le planning communiqué est le planning tenu.
      </motion.p>

      {/* Bloc CTA */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <MagneticCTA variant="primary" href="#devis" ariaLabel="Demander un devis détaillé">
          Demander un devis détaillé
        </MagneticCTA>
        <MagneticCTA variant="ghost" href="/realisations" ariaLabel="Voir les réalisations à Mersch">
          Voir les réalisations à Mersch
        </MagneticCTA>
      </motion.div>
    </div>
  );
}
