import type { Metadata } from 'next';
import {
  HeroPage,
  CommuneContext,
  FaqAccordion,
  CtaDevis,
  AreasGrid,
  Testimonials,
} from '@/sections/shared';
import { ServicesBento } from '@/sections/services-bento';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Pisciniste à Mersch | Piscines Wagner (siège social)',
  description:
    'Atelier et siège Wagner depuis 2009, route de Colmar-Berg. Construction béton armé, rénovation et entretien dans le canton de Mersch. Un seul interlocuteur, du devis à la mise en eau.',
  alternates: { canonical: '/pisciniste-mersch' },
};

const FAQ = [
  {
    q: 'Le siège de Wagner est-il bien à Mersch ?',
    a: 'Oui, zone artisanale, route de Colmar-Berg, depuis 2009. On y reçoit sur rendez-vous. Le canton et tout le Grand-Duché sont couverts depuis cet atelier.',
  },
  {
    q: 'Des chantiers récents dans Mersch même ?',
    a: 'Plusieurs. Le canton est notre terrain quotidien : Mersch centre, Kopstal, Mamer, Kehlen. Le sous-sol du Gutland central impose un drainage soigné, qu&rsquo;on intègre dès le devis.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="PISCINISTE · MERSCH · SIÈGE SOCIAL"
        headline="Pisciniste à Mersch — Piscines Wagner"
        subhead="Siège et atelier Wagner, zone artisanale, route de Colmar-Berg, L-7518 Mersch. Ici, on prépare les chantiers du canton depuis 2009. Le centre géographique du pays, à 25 minutes de la majorité des communes."
        cta="Demander un devis détaillé"
        variant="saturated"
      />
      <CommuneContext
        title="Construire un bassin dans le canton de Mersch"
        points={[
          'Sous-sol du Gutland central : marnes et argiles, drainage systématique',
          'Centre géographique du pays — 25 min de la majorité des communes',
          'Saison courte (mai à septembre) : planning serré, abri fréquent',
          'Chantiers récents Wagner : Kopstal, Mamer, Kehlen, Mersch centre',
        ]}
      />
      <ServicesBento />
      <RealisationsBento />
      <Testimonials limit={2} />
      <AreasGrid />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
