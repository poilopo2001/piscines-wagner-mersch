import type { Metadata } from 'next';
import { HeroPage, ServiceDetail, ServiceVisual, FaqAccordion, CtaDevis } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Local technique piscine Luxembourg | Piscines Wagner',
  description:
    'Filtration à sable ou cartouche, pompe à chaleur, électrolyse au sel, traitement UV, domotique Hayward/Pentair/Zodiac. Dimensionné au volume du bassin. Conception et installation Wagner à Mersch.',
  alternates: { canonical: '/local-technique' },
};

const FAQ = [
  {
    q: 'Un local technique dédié est-il obligatoire ?',
    a: 'Non, mais recommandé. Un local ventilé et hors gel protège le matériel et facilite l&rsquo;entretien. Sur petit bassin, un bloc compact hors-sol fait l&rsquo;affaire.',
  },
  {
    q: 'Électrolyse au sel ou chlore ?',
    a: 'Le sel est moins agressif pour la peau et l&rsquo;eau, plus stable dans le temps. Investissement supérieur au départ, confort supérieur ensuite. À vous de trancher selon l&rsquo;usage.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="LOCAL TECHNIQUE"
        headline="Local technique de piscine au Luxembourg"
        subhead="Filtration, pompe à chaleur, électrolyse au sel, domotique : on dimensionne chaque composant au volume réel du bassin. C&rsquo;est ce qui évite la surconsommation, l&rsquo;eau verte et les pannes prématurées."
        cta="Demander un devis détaillé"
      />
      <ServiceVisual
        src="/images/atelier.jpg"
        alt="Local technique de piscine avec filtration, pompe à chaleur et électrolyse au sel"
        overline="LOCAL TECHNIQUE WAGNER"
        caption="Local technique monté à l&rsquo;atelier Wagner, Mersch. Filtration, pompe à chaleur et électrolyse au sel dimensionnées au volume du bassin."
      />
      <ServiceDetail
        description="Filtration, pompe à chaleur, électrolyse au sel, domotique."
        features={[
          'Filtration à sable ou à cartouche (dimensionnée au volume)',
          'Pompe à chaleur air/eau pour allonger la saison',
          'Électrolyse au sel comme alternative au chlore',
          'Traitement UV ou oxygène actif',
          'Domotique piscine wireless (Hayward, Pentair, Zodiac)',
          'Local hors-sol ou enterré, ventilation correcte',
        ]}
      />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
