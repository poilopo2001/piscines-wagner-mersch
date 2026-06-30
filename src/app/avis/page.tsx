import type { Metadata } from 'next';
import { HeroPage, StatsBar, CtaDevis } from '@/sections/shared';
import { Reveal } from '@/motion/reveal';

export const metadata: Metadata = {
  title: 'Avis clients Piscines Wagner | Mersch, Luxembourg',
  description:
    'Taux de recommandation 94 %. Avis nommés de Mersch, Colmar-Berg et Strassen. Particuliers, hôtellerie, rénovation : le ton d&rsquo;origine, sans retoches.',
  alternates: { canonical: '/avis' },
};

const AVIS = [
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
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="AVIS CLIENTS"
        headline="Avis clients de Piscines Wagner"
        subhead="Taux de recommandation de 94 %, sur 240 bassins livrés. Avis nommés (auteur + commune), conservés dans leur ton d&rsquo;origine. Pas de prose lisse, pas de slogan recyclé."
        variant="saturated"
      />
      <StatsBar
        stats={[
          { value: '94%', label: 'recommandation' },
          { value: '92%', label: 'particuliers' },
          { value: '5/5', label: 'note moyenne' },
          { value: '240', label: 'bassins livrés' },
        ]}
        variant="sapin"
      />
      <section className="bg-neutral-50 section-py">
        <div className="container-wagner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AVIS.map((a, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="p-6 bg-neutral-100 border border-neutral-300 rounded-lg flex flex-col gap-4 h-full">
                  <div className="flex items-center gap-1" aria-label={`Note ${a.note} sur 5`}>
                    {Array.from({ length: a.note }).map((_, k) => (
                      <span key={k} className="text-accent-500" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <blockquote className="font-body text-body-lg text-neutral-900 leading-[1.6] flex-1">
                    « {a.texte} »
                  </blockquote>
                  <figcaption className="flex flex-col">
                    <span className="font-heading font-semibold text-neutral-900">{a.auteur}</span>
                    <span
                      className="font-body text-[11px] uppercase text-neutral-600"
                      style={{ letterSpacing: '0.1em' }}
                    >
                      {a.ville}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaDevis />
    </>
  );
}
