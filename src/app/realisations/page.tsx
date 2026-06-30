import type { Metadata } from 'next';
import { HeroPage, StatsBar, CtaDevis } from '@/sections/shared';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Réalisations piscines | Wagner Mersch, Luxembourg',
  description:
    'Bassins béton armé, coques polyester, naturelles à lagunage, rénovations : chantiers réels Wagner à Kopstal, Mamer, Hesperange, Ettelbruck, Strassen, Luxembourg-Ville.',
  alternates: { canonical: '/realisations' },
};

export default function Page() {
  return (
    <>
      <HeroPage
        overline="RÉALISATIONS"
        headline="Réalisations de piscines au Grand-Duché"
        subhead="240 bassins livrés depuis 2009. Sélection de chantiers réels, classés par technique et par commune. Photos de chantier et de bassins finis, pas de stock."
        variant="saturated"
      />
      <RealisationsBento />
      <StatsBar variant="sapin" />
      <CtaDevis />
    </>
  );
}
