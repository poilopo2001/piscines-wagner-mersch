'use client';

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Check, ChevronDown, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/motion/reveal';
import { useDevis } from '@/drawer/devis-provider';
import { cn } from '@/lib/cn';

/* ============ STATS BAR ============ */

type StatItem = { value: string; label: string };

const DEFAULT_STATS: StatItem[] = [
  { value: '15', label: 'ans à Mersch' },
  { value: '240', label: 'bassins livrés' },
  { value: '10', label: 'ans garantie structure' },
  { value: '94%', label: 'recommandation' },
];

export function StatsBar({
  stats = DEFAULT_STATS,
  variant = 'sapin',
}: {
  stats?: StatItem[];
  variant?: 'sapin' | 'ivory';
}) {
  return (
    <section
      className={cn(
        'section-py-tight',
        variant === 'sapin' ? 'bg-primary-900 text-neutral-50' : 'bg-neutral-200 text-neutral-900',
      )}
    >
      <div className="container-wagner">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex flex-col">
                <span
                  className={cn(
                    'font-heading font-medium text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-[-0.02em] tnum',
                    variant === 'sapin' ? 'text-neutral-50' : 'text-primary-700',
                  )}
                >
                  {s.value}
                </span>
                <span
                  className={cn(
                    'mt-2 font-body text-overline uppercase',
                    variant === 'sapin' ? 'text-neutral-200/80' : 'text-neutral-600',
                  )}
                  style={{ letterSpacing: '0.12em' }}
                >
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ USP STRIP ============ */

export function UspStrip({
  items = [
    'Un seul interlocuteur, du devis à la mise en eau',
    'Prix annoncé = prix facturé',
    'Planning communiqué = planning tenu',
    'Sous-traitants locaux, équipe en interne',
  ],
}: {
  items?: string[];
}) {
  return (
    <section className="bg-neutral-100 border-y border-neutral-300 section-py-tight">
      <div className="container-wagner">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 0.06}>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" strokeWidth={2.5} />
                <span className="font-body text-neutral-900 text-[0.9375rem] leading-[1.5]">
                  {t}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============ PROCESS STEPS ============ */

export function ProcessSteps({
  title,
  steps,
  variant = 'ivory',
}: {
  title?: string;
  steps: string[];
  variant?: 'ivory' | 'saturated';
}) {
  return (
    <section
      className={cn(
        'section-py',
        variant === 'saturated' ? 'bg-neutral-200' : 'bg-neutral-50',
      )}
    >
      <div className="container-wagner">
        {title && (
          <Reveal>
            <header className="mb-12 max-w-[65ch]">
              <span
                className="font-body text-overline uppercase text-primary-700"
                style={{ letterSpacing: '0.12em' }}
              >
                PROCESSUS
              </span>
              <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
                {title}
              </h2>
            </header>
          </Reveal>
        )}
        <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <Reveal as="li" key={i} delay={Math.min(i, 5) * 0.08}>
              <div className="flex flex-col gap-2 pt-14 relative">
                <span className="absolute top-0 left-0 flex items-center justify-center w-11 h-11 rounded-full bg-neutral-50 border border-accent-500">
                  <span className="font-heading font-medium text-[1.125rem] text-accent-500 tnum">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>
                <span className="font-body text-body text-neutral-900 font-medium">
                  {step}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */

type Testimonial = { auteur: string; ville: string; note: number; texte: string };

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    auteur: 'Familles Schmit',
    ville: 'Mersch',
    note: 5,
    texte: 'Interlocuteur unique du début à la fin, devis tenu au centime près. Mise en eau dans les délais annoncés.',
  },
  {
    auteur: 'Hôtel Beissel',
    ville: 'Colmar-Berg',
    note: 5,
    texte: 'Bassin hôtelier entretenu chaque semaine. Réactifs sur les réparations, jamais une fermeture.',
  },
  {
    auteur: 'Mme Kremer',
    ville: 'Strassen',
    note: 5,
    texte: 'Rénovation complète d&rsquo;un bassin des années 90. On dirait une piscine neuve.',
  },
  {
    auteur: 'Marc D.',
    ville: 'Kopstal',
    note: 5,
    texte: 'Bassin béton 10×4, abri plat intégré en fin de chantier. Planning tenu, photos hebdomadaires. Rien à redire.',
  },
  {
    auteur: 'Résidence du Parc',
    ville: 'Luxembourg-Ville',
    note: 5,
    texte: 'Bassin intérieur collectif, étanchéité renforcée par membrane armée. Aucune fuite depuis trois hivers.',
  },
];

export function Testimonials({
  items = DEFAULT_TESTIMONIALS,
  limit = 3,
}: {
  items?: Testimonial[];
  limit?: number;
}) {
  const list = items.slice(0, limit);
  return (
    <section className="bg-primary-900 text-neutral-50 section-py">
      <div className="container-wagner">
        <Reveal>
          <header className="mb-12 max-w-[65ch]">
            <span
              className="font-body text-overline uppercase text-accent-300"
              style={{ letterSpacing: '0.12em' }}
            >
              AVIS CLIENTS — 94% RECOMMANDATION
            </span>
            <h2 className="mt-3 font-heading font-semibold text-neutral-50 text-h2">
              Ce que disent les clients, dans leur ton d&rsquo;origine.
            </h2>
          </header>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="bg-primary-800/50 border border-primary-700 rounded-lg p-6 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-1" aria-label={`Note ${t.note} sur 5`}>
                  {Array.from({ length: t.note }).map((_, k) => (
                    <span key={k} className="text-accent-300" aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="font-body text-[0.9375rem] text-neutral-50 leading-[1.6] flex-1">
                  « {t.texte} »
                </blockquote>
                <figcaption className="flex flex-col">
                  <span className="font-heading font-semibold text-neutral-50">{t.auteur}</span>
                  <span className="font-body text-[11px] uppercase text-neutral-200/70" style={{ letterSpacing: '0.1em' }}>
                    {t.ville}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ AREAS GRID ============ */

const DEFAULT_AREAS = [
  'Mersch',
  'Luxembourg-Ville',
  'Esch-sur-Alzette',
  'Ettelbruck',
  'Strassen',
  'Capellen',
  'Differdange',
  'Hesperange',
];

export function AreasGrid({
  communes = DEFAULT_AREAS,
  limit = 8,
  title = 'Intervention dans tout le Grand-Duché',
}: {
  communes?: string[];
  limit?: number;
  title?: string;
}) {
  const list = communes.slice(0, limit);
  return (
    <section className="bg-neutral-200 section-py">
      <div className="container-wagner">
        <Reveal>
          <header className="mb-10 max-w-[65ch]">
            <span
              className="font-body text-overline uppercase text-primary-700"
              style={{ letterSpacing: '0.12em' }}
            >
              ZONES D&rsquo;INTERVENTION
            </span>
            <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
              {title}
            </h2>
            <p className="mt-4 font-body text-body-lg text-neutral-700 max-w-[65ch]">
              Mersch est au centre géographique du pays. À 25 min de la majorité des communes
              du Grand-Duché.
            </p>
          </header>
        </Reveal>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {list.map((c, i) => {
            const slug = c.toLowerCase()
              .replace(/[éè]/g, 'e')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            return (
              <Reveal as="li" key={c} delay={Math.min(i, 5) * 0.05}>
                <Link
                  href={`/pisciniste-${slug}`}
                  className="flex items-center gap-2 p-4 bg-neutral-100 border border-neutral-300 rounded-lg hover:border-primary-500 hover:bg-neutral-50 transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-primary-700 shrink-0" />
                  <span className="font-body text-[0.9375rem] text-neutral-900 group-hover:text-primary-700">
                    {c}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ============ LOCAL ANCRAGE ============ */

export function LocalAncrage({
  title = 'Le sous-sol luxembourgeois, on le connaît',
  points = [
    'Gutland argileux au sud et au centre',
    'Éislek rocheux au nord, déroctage si besoin',
    'Terrains en pente maîtrisés',
    'Saison courte (mai à septembre) : planning serré',
  ],
}: {
  title?: string;
  points?: string[];
}) {
  return (
    <section className="bg-neutral-200 section-py">
      <div className="container-wagner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-6">
            <header>
              <span
                className="font-body text-overline uppercase text-primary-700"
                style={{ letterSpacing: '0.12em' }}
              >
                ANCRAGE LUXEMBOURG
              </span>
              <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
                {title}
              </h2>
            </header>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.15}>
            <ul className="flex flex-col gap-4">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-50 border border-primary-500 shrink-0 mt-0.5">
                    <span className="font-heading font-medium text-[0.75rem] text-primary-700 tnum">
                      {i + 1}
                    </span>
                  </span>
                  <span className="font-body text-body-lg text-neutral-900">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ CTA DEVIS ============ */

export function CtaDevis({
  headline = 'Un devis détaillé, pas une fourchette',
  subhead = 'Post par post : terrassement, structure, étanchéité, margelles, local technique, abri. Prix annoncé et tenu, planning communiqué.',
  cta = 'Demander un devis détaillé',
}: {
  headline?: string;
  subhead?: string;
  cta?: string;
}) {
  const { openDevis } = useDevis();
  return (
    <section className="bg-neutral-50 section-py">
      <div className="container-wagner">
        <Reveal>
          <div className="relative bg-primary-900 text-neutral-50 rounded-lg p-8 md:p-14 overflow-hidden min-h-[320px] flex items-center">
            <Image
              src="/images/cta-pool.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Overlay sapin pour contraste AA du texte ivoire */}
            <div aria-hidden="true" className="absolute inset-0 bg-primary-900/75" />
            <div
              aria-hidden="true"
              className="absolute left-0 top-8 bottom-8 w-0.5 bg-accent-500/60"
            />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 w-full">
              <div className="max-w-[55ch]">
                <span
                  className="font-body text-overline uppercase text-accent-300 block mb-2"
                  style={{ letterSpacing: '0.12em' }}
                >
                  DEVIS DÉTAILLÉ
                </span>
                <h2 className="font-heading font-semibold text-neutral-50 text-h3">{headline}</h2>
                <p className="mt-3 font-body text-[1.0625rem] text-neutral-200 leading-[1.6]">
                  {subhead}
                </p>
              </div>
              <button
                type="button"
                onClick={openDevis}
                className="bg-accent-500 hover:bg-accent-600 text-neutral-50 rounded-full px-7 py-4 font-body font-medium text-body transition-colors duration-default ease-standard min-h-[52px] inline-flex items-center gap-2 shrink-0"
              >
                {cta} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ FAQ ACCORDION ============ */

type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section className="bg-neutral-50 section-py">
      <div className="container-wagner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <header>
              <span
                className="font-body text-overline uppercase text-primary-700"
                style={{ letterSpacing: '0.12em' }}
              >
                QUESTIONS FRÉQUENTES
              </span>
              <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
                Vos questions, nos réponses factuelles.
              </h2>
            </header>
          </Reveal>
          <div className="lg:col-span-8">
            <ul className="flex flex-col gap-2">
              {items.map((item, i) => {
                const isOpen = openIdx === i;
                return (
                  <li key={i} className="border border-neutral-300 rounded-lg overflow-hidden bg-neutral-100">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-neutral-50 transition-colors"
                    >
                      <span className="font-heading font-semibold text-neutral-900 text-h5">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          'w-5 h-5 text-primary-700 shrink-0 transition-transform duration-default',
                          isOpen && 'rotate-180',
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 font-body text-body text-neutral-700 leading-[1.65] max-w-[65ch]">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ HERO VARIANTS (service / commune / guide / etc.) ============ */

export function HeroPage({
  overline,
  headline,
  subhead,
  cta = 'Demander un devis détaillé',
  variant = 'ivory',
}: {
  overline: string;
  headline: string;
  subhead: string;
  cta?: string;
  variant?: 'ivory' | 'sapin' | 'saturated';
}) {
  const { openDevis } = useDevis();
  return (
    <section
      className={cn(
        'relative pt-32 pb-20 lg:pt-44 lg:pb-24',
        variant === 'sapin' ? 'bg-primary-900 text-neutral-50' : variant === 'saturated' ? 'bg-neutral-200' : 'bg-neutral-50',
      )}
    >
      <div className="container-wagner">
        <div className="max-w-[55ch]">
          <Reveal>
            <span
              className={cn(
                'font-body text-overline uppercase block mb-3',
                variant === 'sapin' ? 'text-accent-300' : 'text-primary-700',
              )}
              style={{ letterSpacing: '0.12em' }}
            >
              {overline}
            </span>
            <span className="block h-px w-12 bg-accent-500 mb-6" aria-hidden="true" />
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className={cn(
                'font-heading font-bold text-h1 leading-[1.0] tracking-[-0.03em]',
                variant === 'sapin' ? 'text-neutral-50' : 'text-neutral-900',
              )}
            >
              {headline}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className={cn(
                'mt-6 font-body text-body-lg leading-[1.6] max-w-[55ch]',
                variant === 'sapin' ? 'text-neutral-200' : 'text-neutral-700',
              )}
            >
              {subhead}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={openDevis}
                className={cn(
                  'rounded-full px-7 py-3.5 font-body font-medium text-body transition-colors duration-default ease-standard min-h-[44px] inline-flex items-center justify-center gap-2',
                  variant === 'sapin'
                    ? 'bg-accent-500 hover:bg-accent-600 text-neutral-50'
                    : 'bg-primary-500 hover:bg-primary-600 text-neutral-50',
                )}
              >
                {cta}
              </button>
              <a
                href="tel:+352327122"
                className={cn(
                  'rounded-full px-7 py-3.5 font-body font-medium text-body transition-colors duration-default inline-flex items-center justify-center gap-2 min-h-[44px] border',
                  variant === 'sapin'
                    ? 'border-neutral-50/40 text-neutral-50 hover:bg-neutral-50/10'
                    : 'border-primary-500 text-primary-700 hover:bg-neutral-100',
                )}
              >
                <Phone className="w-4 h-4" /> +352 32 71 22
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ SERVICE DETAIL ============ */

export function ServiceDetail({
  description,
  features,
}: {
  description: string;
  features: string[];
}) {
  return (
    <section className="bg-neutral-50 section-py">
      <div className="container-wagner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <header>
              <span
                className="font-body text-overline uppercase text-primary-700"
                style={{ letterSpacing: '0.12em' }}
              >
                DÉTAIL TECHNIQUE
              </span>
              <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
                {description}
              </h2>
            </header>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.15}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-neutral-100 border border-neutral-300 rounded-lg">
                  <Check className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-body text-[0.9375rem] text-neutral-900 leading-[1.5]">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ SERVICE VISUAL (image pleine largeur) ============ */

export function ServiceVisual({
  src,
  alt,
  overline,
  caption,
  variant = 'ivory',
}: {
  src: string;
  alt: string;
  overline?: string;
  caption?: string;
  variant?: 'ivory' | 'sapin';
}) {
  return (
    <section
      className={cn(
        'section-py',
        variant === 'sapin' ? 'bg-primary-900 text-neutral-50' : 'bg-neutral-200',
      )}
    >
      <div className="container-wagner">
        <Reveal>
          <figure className="relative overflow-hidden rounded-lg">
            <div className="relative w-full h-[clamp(280px,42vw,520px)]">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover object-center"
              />
              {variant === 'sapin' && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-primary-900/40 pointer-events-none"
                />
              )}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px bg-accent-500/55 pointer-events-none"
              />
            </div>
            {(overline || caption) && (
              <figcaption
                className={cn(
                  'flex flex-col gap-2 px-6 py-5',
                  variant === 'sapin'
                    ? 'bg-primary-900'
                    : 'bg-neutral-50 border border-t-0 border-neutral-300 rounded-b-lg',
                )}
              >
                {overline && (
                  <span
                    className="font-body text-overline uppercase text-primary-700"
                    style={{ letterSpacing: '0.12em' }}
                  >
                    {overline}
                  </span>
                )}
                {caption && (
                  <p
                    className={cn(
                      'font-body text-body leading-[1.6] max-w-[65ch]',
                      variant === 'sapin' ? 'text-neutral-200' : 'text-neutral-700',
                    )}
                  >
                    {caption}
                  </p>
                )}
              </figcaption>
            )}
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ COMPARISON TABLE ============ */

export function ComparisonTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: string[][];
}) {
  return (
    <section className="bg-neutral-50 section-py">
      <div className="container-wagner">
        <Reveal>
          <header className="mb-10 max-w-[65ch]">
            <span
              className="font-body text-overline uppercase text-primary-700"
              style={{ letterSpacing: '0.12em' }}
            >
              COMPARATIF
            </span>
            <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">{title}</h2>
          </header>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-x-auto border border-neutral-300 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-900 text-neutral-50">
                  {columns.map((c, i) => (
                    <th
                      key={i}
                      className="text-left p-4 font-heading font-semibold text-h6 last:text-left"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-neutral-100' : 'bg-neutral-50'}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={cn(
                          'p-4 font-body text-[0.9375rem] border-t border-neutral-300',
                          j === 0 ? 'font-medium text-neutral-900' : 'text-neutral-700',
                        )}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ BUDGET TABLE ============ */

export function BudgetTable({
  rows,
}: {
  rows: { type: string; min: string; max: string }[];
}) {
  return (
    <section className="bg-neutral-50 section-py">
      <div className="container-wagner">
        <Reveal>
          <header className="mb-10 max-w-[65ch]">
            <span
              className="font-body text-overline uppercase text-primary-700"
              style={{ letterSpacing: '0.12em' }}
            >
              BUDGET
            </span>
            <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
              Fourchettes indicatives (à valider au devis)
            </h2>
          </header>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-x-auto border border-neutral-300 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-900 text-neutral-50">
                  <th className="text-left p-4 font-heading font-semibold text-h6">Type</th>
                  <th className="text-left p-4 font-heading font-semibold text-h6">Minimum</th>
                  <th className="text-left p-4 font-heading font-semibold text-h6">Maximum</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-neutral-100' : 'bg-neutral-50'}>
                    <td className="p-4 font-body font-medium text-neutral-900 border-t border-neutral-300">
                      {r.type}
                    </td>
                    <td className="p-4 font-body text-primary-700 tnum border-t border-neutral-300">{r.min}</td>
                    <td className="p-4 font-body text-neutral-700 tnum border-t border-neutral-300">{r.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ GUIDE CONTENT ============ */

export function GuideContent({
  sections,
}: {
  sections: { title: string; body: string }[];
}) {
  return (
    <section className="bg-neutral-50 section-py">
      <div className="container-wagner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <span
              className="font-body text-overline uppercase text-primary-700"
              style={{ letterSpacing: '0.12em' }}
            >
              GUIDE
            </span>
            <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
              Le détail, point par point.
            </h2>
          </Reveal>
          <div className="lg:col-span-8 flex flex-col gap-8">
            {sections.map((s, i) => (
              <Reveal key={i} delay={Math.min(i, 4) * 0.08}>
                <article className="border-l-2 border-primary-500 pl-6">
                  <h3 className="font-heading font-semibold text-neutral-900 text-h4 mb-3">
                    {s.title}
                  </h3>
                  <p className="font-body text-body text-neutral-700 leading-[1.65] max-w-[65ch]">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ LEGAL CONTENT ============ */

export function LegalContent({ blocks }: { blocks: { title: string; body: string }[] }) {
  return (
    <section className="bg-neutral-50 section-py">
      <div className="container-wagner max-w-[80ch]">
        <div className="flex flex-col gap-8">
          {blocks.map((b, i) => (
            <Reveal key={i}>
              <article>
                <h2 className="font-heading font-semibold text-neutral-900 text-h3 mb-3">
                  {b.title}
                </h2>
                <p className="font-body text-body text-neutral-700 leading-[1.65]">{b.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ COMMUNE CONTEXT ============ */

export function CommuneContext({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <section className="bg-neutral-200 section-py">
      <div className="container-wagner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <header>
              <span
                className="font-body text-overline uppercase text-primary-700"
                style={{ letterSpacing: '0.12em' }}
              >
                CONSTRUIRE LOCALEMENT
              </span>
              <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">{title}</h2>
            </header>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.15}>
            <ul className="flex flex-col gap-4">
              {points.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 bg-neutral-100 border border-neutral-300 rounded-lg"
                >
                  <Check className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-body text-body-lg text-neutral-900">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ CONTACT METHODS + FORM ============ */

export function ContactMethods() {
  const items = [
    { icon: Phone, label: 'Téléphone', value: '+352 32 71 22', href: 'tel:+352327122' },
    { icon: Mail, label: 'Email', value: 'contact@piscines-wagner.lu', href: 'mailto:contact@piscines-wagner.lu' },
    { icon: MapPin, label: 'Adresse', value: 'Zone artisanale, route de Colmar-Berg, L-7518 Mersch' },
    { icon: Clock, label: 'Horaires', value: 'Lun–Ven : 8h00–18h00 · Sam : sur rendez-vous' },
  ];
  return (
    <section className="bg-neutral-50 section-py">
      <div className="container-wagner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            const content = (
              <div className="flex items-start gap-4 p-6 bg-neutral-100 border border-neutral-300 rounded-lg h-full hover:border-primary-500 transition-colors">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary-50 border border-primary-500 shrink-0">
                  <Icon className="w-5 h-5 text-primary-700" />
                </span>
                <div className="flex flex-col gap-1">
                  <span
                    className="font-body text-[11px] uppercase text-neutral-600"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {it.label}
                  </span>
                  <span className="font-body font-medium text-neutral-900 text-body">{it.value}</span>
                </div>
              </div>
            );
            return (
              <Reveal key={i} delay={i * 0.05}>
                {it.href ? (
                  <a href={it.href} className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  const { openDevis } = useDevis();
  return (
    <section className="bg-neutral-200 section-py">
      <div className="container-wagner">
        <div className="max-w-[640px]">
          <Reveal>
            <header className="mb-8">
              <span
                className="font-body text-overline uppercase text-primary-700"
                style={{ letterSpacing: '0.12em' }}
              >
                RENDEZ-VOUS
              </span>
              <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
                Demander un rendez-vous
              </h2>
              <p className="mt-4 font-body text-body-lg text-neutral-700">
                Premier rendez-vous gratuit sur site. Devis détaillé sous 5 à 10 jours ouvrés.
                Le formulaire complet (projet, dimensions, commune) ouvre directement le devis
                détaillé.
              </p>
            </header>
            <button
              type="button"
              onClick={openDevis}
              className="bg-primary-500 hover:bg-primary-600 text-neutral-50 rounded-full px-7 py-4 font-body font-medium text-body transition-colors duration-default ease-standard min-h-[52px] inline-flex items-center gap-2"
            >
              Ouvrir le devis détaillé <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
