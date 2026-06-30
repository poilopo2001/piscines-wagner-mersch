import type { Metadata } from 'next';
import { HeroPage, CommuneContext, FaqAccordion, CtaDevis, AreasGrid } from '@/sections/shared';
import { ServicesBento } from '@/sections/services-bento';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Pisciniste à Esch-sur-Alzette | Piscines Wagner',
  description:
    'Piscines au sud du pays : Esch, Differdange, Dudelange, Sanem. Argile du Gutland et remblais de friche imposent drainage et étude de sol. Devis post par post.',
  alternates: { canonical: '/pisciniste-esch-sur-alzette' },
};

const FAQ = [
  {
    q: 'Le sous-sol d&rsquo;Esch pose-t-il problème pour une piscine ?',
    a: 'Argile et remblais d&rsquo;anciennes friches : un drainage sérieux s&rsquo;impose, parfois une étude de sol. Le sud du pays, on connaît : on y intervient depuis 15 ans.',
  },
  {
    q: 'Vous descendez jusqu&rsquo;à Differdange et Dudelange ?',
    a: 'Oui, tout le Bassin minier et la commune de Sanem. Comptez 25 minutes depuis l&rsquo;atelier de Mersch.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="PISCINISTE · ESCH-SUR-ALZETTE"
        headline="Pisciniste à Esch-sur-Alzette"
        subhead="Au sud, l&rsquo;argile du Gutland et les remblais des friches industrielles compliquent le sous-sol. Drainage périphérique et étude de sol sont souvent le préalable. On connaît le terrain : on y travaille depuis 2009."
        cta="Demander un devis détaillé"
      />
      <CommuneContext
        title="Construire dans le Bassin minier"
        points={[
          'Argile et remblais de friche : étude de sol souvent nécessaire',
          'Drainage périphérique du bassin systématique',
          'Margelles claires, utiles sous la chaleur urbaine estivale',
          'Couverture : Esch, Differdange, Dudelange, Sanem',
        ]}
      />
      <ServicesBento />
      <RealisationsBento />
      <AreasGrid />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
