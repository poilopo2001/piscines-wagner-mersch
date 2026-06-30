import type { Metadata } from 'next';
import { HeroPage, StatsBar, ServiceVisual, Testimonials, CtaDevis } from '@/sections/shared';
import { Reveal } from '@/motion/reveal';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À propos de Piscines Wagner | Pisciniste à Mersch',
  description:
    'Atelier Wagner à Mersch depuis 2009 : 240 bassins livrés dans le Grand-Duché, structure et étanchéité garanties 10 ans par écrit. Équipe en interne, sous-traitants locaux.',
  alternates: { canonical: '/a-propos' },
};

const VALUES = [
  {
    title: 'Transparence',
    body: 'Devis détaillé, prix annoncé, planning communiqué. Par écrit.',
  },
  {
    title: 'Ancrage Luxembourg',
    body: 'Sous-sol Gutland et Éislek, règlement grand-ducal de 2003, saison courte.',
  },
  {
    title: 'Un métier',
    body: 'On ne fait que les piscines. Pas de sanitaire, pas de chauffage, pas de clim.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="À PROPOS"
        headline="Piscines Wagner, pisciniste à Mersch depuis 2009"
        subhead="15 ans d&rsquo;atelier, 240 bassins livrés, garantie 10 ans par écrit. Un seul métier (les piscines), un seul interlocuteur par chantier, du devis à la mise en eau."
        variant="saturated"
      />
      <ServiceVisual
        src="/images/atelier.jpg"
        alt="Atelier Piscines Wagner à Mersch, stock de liner, margelles et matériel de chantier"
        overline="ATELIER MERSCH"
        caption="Atelier Wagner, route de Colmar-Berg. Stock liner, margelles, matériel de chantier. Équipe en interne, sous-traitants locaux connus."
      />
      <section className="bg-neutral-50 section-py">
        <div className="container-wagner max-w-[80ch]">
          <Reveal>
            <span
              className="font-body text-overline uppercase text-primary-700"
              style={{ letterSpacing: '0.12em' }}
            >
              MANIFESTE
            </span>
            <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
              On construit, on rénove, on entretient. C&rsquo;est notre métier, rien d&rsquo;autre.
            </h2>
            <p className="mt-6 font-body text-body-lg text-neutral-700 leading-[1.65]">
              Depuis 2009, l&rsquo;atelier Wagner construit, rénove et entretient des piscines
              dans tout le Grand-Duché de Luxembourg, depuis Mersch. Un seul interlocuteur suit
              chaque chantier, du premier rendez-vous à la mise en eau. Le prix annoncé est le
              prix facturé. Le planning communiqué est le planning tenu. Bassin béton armé
              garanti 10 ans, étanchéité garantie 10 ans. Tout est par écrit.
            </p>
          </Reveal>
        </div>
      </section>
      <StatsBar variant="sapin" />
      <section className="bg-neutral-200 section-py">
        <div className="container-wagner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-5">
              <span
                className="font-body text-overline uppercase text-primary-700"
                style={{ letterSpacing: '0.12em' }}
              >
                ÉQUIPE
              </span>
              <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
                Équipe en interne, sous-traitants locaux.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.15}>
              <ul className="flex flex-col gap-4">
                {[
                  'Équipe Wagner en interne sur toute la phase chantier',
                  'Sous-traitants locaux connus (terrassement, électricité, maçonnerie)',
                  'Un chef de chantier attitré du devis à la mise en eau : Marc Schaack',
                  'Pas de sous-traitance cachée, pas d&rsquo;intérim enroulé',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-neutral-100 border border-neutral-300 rounded-lg">
                    <Check className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="font-body text-body-lg text-neutral-900">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-neutral-50 section-py">
        <div className="container-wagner">
          <header className="mb-12 max-w-[65ch]">
            <span
              className="font-body text-overline uppercase text-primary-700"
              style={{ letterSpacing: '0.12em' }}
            >
              VALEURS
            </span>
            <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
              Trois principes, tenus depuis 2009.
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="p-6 bg-neutral-100 border border-neutral-300 rounded-lg h-full flex flex-col gap-3">
                  <h3 className="font-heading font-semibold text-neutral-900 text-h4">{v.title}</h3>
                  <p className="font-body text-body text-neutral-700 leading-[1.6]">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Testimonials limit={3} />
      <CtaDevis />
    </>
  );
}
