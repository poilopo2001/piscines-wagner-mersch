import type { Metadata } from 'next';
import {
  HeroPage,
  UspStrip,
  ServiceDetail,
  ServiceVisual,
  ProcessSteps,
  StatsBar,
  FaqAccordion,
  CtaDevis,
} from '@/sections/shared';
import { RealisationsBento } from '@/sections/realisations-bento';
import { Testimonials } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Piscine béton armé au Luxembourg | Piscines Wagner',
  description:
    'Bassin béton armé projeté, structure garantie 10 ans par écrit. Radier et parois coulés d&rsquo;un seul tenant. Chantiers Wagner à Mersch et dans tout le Grand-Duché, Gutland argileux comme Éislek rocheux.',
  alternates: { canonical: '/construction-piscine-beton' },
};

const FAQ = [
  {
    q: 'Quelle profondeur pour un bassin béton armé ?',
    a: 'Elle est libre. On conseille 1,50 m pour une baignade familiale, davantage si plongeon prévu. La profondeur finale est ajustée au sous-sol et à l&rsquo;usage déclaré.',
  },
  {
    q: 'Combien de temps dure un chantier béton ?',
    a: 'Six à dix semaines entre terrassement et mise en eau, hors délai d&rsquo;instruction de l&rsquo;autorisation de bâtir. Le planning ferme figure au devis, et il est tenu.',
  },
  {
    q: 'Béton ou coque : comment choisir ?',
    a: 'Le béton autorise toute forme, toute profondeur, et s&rsquo;adapte aux terrains difficiles (rocheux, en pente). La coque se pose en une journée mais impose des dimensions standards. Notre comparatif détaillé est sur le guide béton vs coque.',
  },
  {
    q: 'Faut-il une autorisation de bâtir pour une piscine béton au Luxembourg ?',
    a: 'Oui. Le dépôt se fait via guichet.public.lu. Wagner prépare le dossier technique (plans, notes descriptives) et accompagne la démarche auprès de la commune.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="CONSTRUCTION · BÉTON ARMÉ"
        headline="Construction de piscines béton armé au Luxembourg"
        subhead="Béton projeté armé, finition au choix (liner, membrane armée, carrelage mosaïque). Forme et profondeur libres, sur terrain en pente ou sol rocheux y compris. Radier et parois coulés d&rsquo;un seul tenant, structure garantie 10 ans par écrit."
        cta="Demander un devis détaillé"
      />
      <UspStrip />
      <ServiceVisual
        src="/images/realisation-beton.jpg"
        alt="Piscine en béton armé achevée sur un chantier Wagner au Luxembourg"
        overline="CHANTIER BÉTON ARMÉ"
        caption="Bassin béton armé livré à Kopstal. Radier et parois coulés en monolithe, abri plat intégré en fin de chantier."
      />
      <ServiceDetail
        description="Bassin béton projeté armé, structure monolithe, finition au choix."
        features={[
          'Béton projeté armé (procédé tyrolien ou voie sèche)',
          'Radier et parois coulés d&rsquo;un seul tenant, sans joint',
          'Forme libre : rectangle, haricot, débordement',
          'Profondeur adaptée au sous-sol (Gutland argileux, Éislek rocheux)',
          'Déroctage pris en charge si le rocher l&rsquo;exige',
          'Finition : liner, membrane armée, carrelage mosaïque',
        ]}
      />
      <ProcessSteps
        title="Le chantier d&rsquo;un bassin béton armé"
        steps={[
          'Terrassement ou déroctage selon le sous-sol',
          'Fondations et radier béton coulé',
          'Parois en béton projeté armé',
          'Étanchéité : membrane armée ou liner',
          'Margelles, local technique, équipements',
          'Mise en eau et réglage filtration',
        ]}
        variant="saturated"
      />
      <StatsBar
        stats={[
          { value: '10 ans', label: 'garantie structure' },
          { value: '10 ans', label: 'garantie étanchéité' },
          { value: '240', label: 'bassins livrés' },
          { value: '15', label: 'ans à Mersch' },
        ]}
        variant="sapin"
      />
      <RealisationsBento />
      <Testimonials limit={2} />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
