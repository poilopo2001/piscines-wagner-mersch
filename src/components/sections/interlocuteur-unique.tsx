'use client';

import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';

const CHEF_NOM = 'Marc Schaack';

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const steps = [
  {
    n: '01',
    titre: 'Devis détaillé',
    date: 'Jour 0',
    desc: 'Premier rendez-vous sur site. Devis post par post, prix annoncé.',
  },
  {
    n: '02',
    titre: 'Chantier suivi',
    date: 'Jour J',
    desc: 'Même chef de chantier. Journal de chantier hebdomadaire, photos incluses.',
  },
  {
    n: '03',
    titre: 'Mise en eau',
    date: 'Livraison',
    desc: 'Mise en eau par le même interlocuteur. Premier hivernage expliqué.',
  },
];

export function InterlocuteurUnique() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="interlocuteur-heading"
      className="bg-neutral-200 section-py"
    >
      <div className="container-wagner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bloc A — colonne gauche, cols 1→6 */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15% 0px' }}
            variants={{ visible: { transition: { staggerChildren: reduce ? 0 : 0.1 } } }}
          >
            <motion.header variants={itemVariant}>
              <span
                className="font-body text-overline uppercase text-primary-700"
                style={{ letterSpacing: '0.12em' }}
              >
                L&rsquo;INTERLOCUTEUR UNIQUE, PROUVÉ
              </span>
              <h2
                id="interlocuteur-heading"
                className="mt-3 font-heading font-bold text-neutral-900 text-h1"
              >
                Un nom,
                <br />
                <span className="text-primary-700">une photo,</span>
                <br />
                du devis à la mise en eau.
              </h2>
            </motion.header>

            <motion.p
              variants={itemVariant}
              className="font-body text-body-lg text-neutral-700 max-w-[55ch] leading-[1.6]"
            >
              Le même chef de chantier Wagner suit votre bassin du premier rendez-vous à
              la première baignade. Son nom et sa photo figurent sur le devis. Son numéro
              direct est sur le journal de chantier. Scholmas et Abrilux le disent. Wagner
              le prouve.
            </motion.p>

            <motion.ul variants={itemVariant} className="flex flex-col gap-3">
              {[
                'Devis détaillé, prix annoncé = prix facturé.',
                'Planning communiqué, planning tenu.',
                'Numéro direct du chef de chantier, pas d&rsquo;un standard.',
              ].map((t, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-body text-neutral-900"
                >
                  <Check className="w-5 h-5 text-primary-700 flex-shrink-0" strokeWidth={2.5} />
                  <span>{t}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Bloc B — carte chef de chantier, cols 7→10 */}
          <motion.div
            className="lg:col-span-4 lg:col-start-7"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={reduce ? { duration: 0.25 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <figure className="relative bg-neutral-50 border border-neutral-300 rounded-lg overflow-hidden">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/chef-chantier.jpg"
                  alt={`Marc Schaack, chef de chantier Piscines Wagner à Mersch`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-center"
                />
                <span
                  className="absolute bottom-3 left-4 font-body text-[11px] uppercase text-neutral-50/90"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {CHEF_NOM} — chef de chantier
                </span>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px bg-accent-500/50"
                />
              </div>
              <figcaption className="p-6 flex flex-col gap-2">
                <span
                  className="font-body text-overline uppercase text-primary-700"
                  style={{ letterSpacing: '0.12em' }}
                >
                  CHEF DE CHANTIER
                </span>
                <div className="font-heading font-semibold text-neutral-900 text-h4">
                  {CHEF_NOM}
                </div>
                <div className="font-body text-small text-neutral-700">
                  15 ans à Mersch · 240 bassins livrés
                </div>
                <a
                  href="tel:+352327122"
                  className="mt-2 font-body font-medium text-primary-700 hover:text-primary-800 underline-offset-4 hover:underline"
                >
                  +352 32 71 22 <span className="text-neutral-600">(direct)</span>
                </a>
              </figcaption>
            </figure>
          </motion.div>

          {/* Bloc C — Journal de chantier (timeline horizontale) */}
          <motion.ol
            className="lg:col-span-12 relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15% 0px' }}
            variants={{ visible: { transition: { staggerChildren: reduce ? 0 : 0.1 } } }}
          >
            <span
              aria-hidden="true"
              className="hidden md:block absolute top-7 left-0 right-0 h-px bg-accent-500/60"
            />
            {steps.map((etape) => (
              <motion.li
                key={etape.n}
                variants={itemVariant}
                className="relative flex flex-col gap-3 pt-14"
              >
                <span className="absolute top-0 left-0 flex items-center justify-center w-14 h-14 rounded-full bg-neutral-50 border border-accent-500">
                  <span
                    className="font-heading font-medium text-h5 text-accent-500 tnum"
                  >
                    {etape.n}
                  </span>
                </span>
                <span
                  className="font-body text-overline uppercase text-neutral-600"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {etape.date}
                </span>
                <h3 className="font-heading font-semibold text-neutral-900 text-h4">
                  {etape.titre}
                </h3>
                <p className="font-body text-neutral-700 leading-[1.6] max-w-[40ch]">
                  {etape.desc}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
