import type { Metadata } from 'next';
import { HeroPage, CommuneContext, FaqAccordion, CtaDevis, AreasGrid } from '@/sections/shared';
import { ServicesBento } from '@/sections/services-bento';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Pisciniste à Luxembourg-Ville | Piscines Wagner',
  description:
    'Chantiers Wagner à Luxembourg-Ville et faubourgs (Belair, Limpertsberg, Gasperich). Bassins compacts en milieu urbain, autorisation de bâtir stricte, délai court depuis Mersch.',
  alternates: { canonical: '/pisciniste-luxembourg-ville' },
};

const FAQ = [
  {
    q: 'Intervenez-vous sur la Ville et ses faubourgs ?',
    a: 'Oui. Hollerich, Belair, Limpertsberg, Gasperich, Cessange : le bassin urbain est couvert. Le départ depuis Mersch se fait en 25 minutes environ.',
  },
  {
    q: 'Quelles contraintes en zone urbaine dense ?',
    a: 'Emprise au sol, voisinage, accès chantier et grutage : l&rsquo;autorisation de bâtir est plus dure à obtenir qu&rsquo;en zone rurale. On prépare le dossier technique en conséquence, plans et notes descriptives à l&rsquo;appui.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="PISCINISTE · LUXEMBOURG-VILLE"
        headline="Pisciniste à Luxembourg-Ville"
        subhead="Bassins compacts en parcelle urbaine, accès chantier parfois étroits, autorisation de bâtir plus stricte qu&rsquo;ailleurs. On prépare le dossier, on gère le voisinage, on livre dans les délais communiqués."
        cta="Demander un devis détaillé"
      />
      <CommuneContext
        title="Construire un bassin à Luxembourg-Ville"
        points={[
          'Autorisation de bâtir plus stricte en milieu urbain (emprise, voisinage)',
          'Accès chantier et grutage souvent délicats en centre',
          'Référence Wagner : bassin intérieur à étanchéité renforcée',
          'Délai d&rsquo;intervention court depuis Mersch',
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
