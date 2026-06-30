import type { Metadata } from 'next';
import { HeroPage, CommuneContext, FaqAccordion, CtaDevis } from '@/sections/shared';
import { ServicesBento } from '@/sections/services-bento';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Pisciniste à Hesperange | Piscines Wagner Mersch',
  description:
    'Piscines et bassins naturels à Hesperange, Contern, Roeser, Frisange. Grands terrains végétalisés où le lagunage s&rsquo;intègre bien. Référence Wagner : bassin naturel livré à Hesperange.',
  alternates: { canonical: '/pisciniste-hesperange' },
};

const FAQ = [
  {
    q: 'Une piscine naturelle fonctionne-t-elle à Hesperange ?',
    a: 'Oui. On en a livré une ici même : bassin à lagunage, zone de baignade distincte de la zone de régénération. L&rsquo;ensoleillement et la surface disponible dans la commune conviennent bien au dispositif.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="PISCINISTE · HESPERANGE"
        headline="Pisciniste à Hesperange"
        subhead="Hesperange, ce sont de grands terrains végétalisés où le lagunage trouve toute sa place. Référence Wagner : un bassin naturel livré dans la commune. Le béton armé classique y est également courant."
        cta="Demander un devis détaillé"
      />
      <CommuneContext
        title="Construire à Hesperange"
        points={[
          'Grands terrains végétalisés : le lagunage s&rsquo;y intègre naturellement',
          'Bassins naturels et bassins béton classiques couverts',
          'Proximité Luxembourg-Ville et Howald',
          'Couverture : Contern, Frisange, Roeser',
        ]}
      />
      <ServicesBento />
      <RealisationsBento />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
