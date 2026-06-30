import type { Metadata } from 'next';
import { HeroPage, ServiceDetail, FaqAccordion, CtaDevis } from '@/sections/shared';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sécurité piscine Luxembourg | Règlement grand-ducal',
  description:
    'Couverture à barres, barrière, abri fermé ou alarme immersion : au moins un dispositif normalisé. Installation et certification conformes au règlement grand-ducal du 3 janvier 2003. Pose Wagner à Mersch et dans tout le Grand-Duché.',
  alternates: { canonical: '/securite-piscine' },
};

const FAQ = [
  {
    q: 'Le règlement luxembourgeois est-il le même que la loi française ?',
    a: 'Non. Le Grand-Duché applique son propre règlement grand-ducal du 3 janvier 2003. Citer la norme française NF P90 est une confusion fréquente : elle n&rsquo;est pas opposable au Luxembourg. On installe et on certifie selon le texte local.',
  },
  {
    q: 'Quel dispositif choisir ?',
    a: 'Selon l&rsquo;usage, la présence d&rsquo;enfants et le budget. La couverture à barres est la plus contraignante à manipuler mais sécurise totalement. La barrière isole le bassin. L&rsquo;alarme est un complément utile. On vous oriente en fonction du bassin et de la parcelle.',
  },
  {
    q: 'Wagner installe-t-il la sécurité sur un bassin existant ?',
    a: 'Oui. On met en conformité les bassins antérieurs à 2003 et ceux dont le dispositif est défaillant. L&rsquo;attestation est délivrée à la fin du chantier.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="SÉCURITÉ · RÈGLEMENT GRAND-DUCAL 2003"
        headline="Sécurité des piscines au Luxembourg : règlement grand-ducal"
        subhead="Couverture à barres, barrière, abri fermé ou alarme immersion : au moins un dispositif normalisé. Règlement grand-ducal du 3 janvier 2003. On installe, on certifie, on explique le texte clairement."
        cta="Demander un devis détaillé"
      />
      <section className="bg-neutral-50 section-py">
        <div className="container-wagner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span
                className="font-body text-overline uppercase text-primary-700"
                style={{ letterSpacing: '0.12em' }}
              >
                CE QUE DIT LE RÈGLEMENT
              </span>
              <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
                Le règlement grand-ducal de 2003, expliqué simplement.
              </h2>
            </div>
            <ul className="lg:col-span-7 flex flex-col gap-4">
              {[
                'Au moins un dispositif de sécurité normalisé',
                'Concerne les piscines enterrées privées à usage familial ou collectif',
                'Contrôle et certification du dispositif installé',
                'Différent de la norme française NF P90 (citation fréquente, mais hors-sujet au Luxembourg)',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-neutral-100 border border-neutral-300 rounded-lg">
                  <Check className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-body text-body-lg text-neutral-900">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ServiceDetail
        description="Couvertures, alarmes, barrières conformes au règlement grand-ducal."
        features={[
          'Couverture rigide ou à barres (normalisée)',
          'Couverture filet pour hivernage',
          'Barrière normalisée avec portillon auto-fermant',
          'Alarme immersion périmétrique',
          'Abri fermé conforme (dispositif combiné)',
          'Mise en conformité sur bassin existant',
        ]}
      />
      <FaqAccordion items={FAQ} />
      <CtaDevis headline="Mettre votre bassin en conformité" cta="Demander un devis sécurité" />
    </>
  );
}
