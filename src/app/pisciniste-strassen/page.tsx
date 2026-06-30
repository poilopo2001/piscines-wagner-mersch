import type { Metadata } from 'next';
import { HeroPage, CommuneContext, Testimonials, FaqAccordion, CtaDevis } from '@/sections/shared';
import { ServicesBento } from '@/sections/services-bento';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Pisciniste à Strassen | Piscines Wagner Mersch',
  description:
    'Piscines compactes et rénovations à Strassen, Bertrange, Walferdange. Parcelles étroites, voisinage proche, mises en conformité sécurité. Référence : rénovation Mme Kremer (bassin des années 90).',
  alternates: { canonical: '/pisciniste-strassen' },
};

const FAQ = [
  {
    q: 'Avez-vous déjà livré à Strassen ?',
    a: 'Plusieurs fois. La référence la plus parlante est la rénovation du bassin des années 90 de Mme Kremer : liner remplacé, margelles reposées, sécurité mise à niveau. Le bassin est reparti comme neuf.',
  },
  {
    q: 'Parcelle étroite : quel bassin conseiller ?',
    a: 'Le béton armé, parce qu&rsquo;on adapte la forme à la parcelle. La coque impose des dimensions standards qui laissent parfois de côté des mètres carrés utiles.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="PISCINISTE · STRASSEN"
        headline="Pisciniste à Strassen"
        subhead="Parcelles résidentielles souvent étroites, voisinage proche, bassins compacts soignés. Rénovation fréquente sur les bassins des années 90 et 2000. La référence Mme Kremer a été livrée ici."
        cta="Demander un devis détaillé"
      />
      <CommuneContext
        title="Construire à Strassen"
        points={[
          'Parcelles étroites : bassins compacts en béton armé',
          'Voisinage proche : conformité sécurité 2003 indispensable',
          'Rénovation courante sur les bassins des années 90–2000',
          'Couverture : Bertrange, Hesperange, Walferdange',
        ]}
      />
      <ServicesBento />
      <RealisationsBento />
      <Testimonials limit={2} />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
