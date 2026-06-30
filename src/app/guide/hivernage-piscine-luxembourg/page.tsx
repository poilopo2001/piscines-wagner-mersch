import type { Metadata } from 'next';
import { HeroPage, GuideContent, FaqAccordion, CtaDevis } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Hivernage piscine Luxembourg | Guide Wagner',
  description:
    'Saison courte, gelées, mise en hiver : hivernage actif ou passif. Étapes, calendrier (octobre–mars), remise en service au printemps. Guide Wagner pour piscines au Luxembourg.',
  alternates: { canonical: '/guide/hivernage-piscine-luxembourg' },
};

const FAQ = [
  {
    q: 'Combien coûte un hivernage par an ?',
    a: 'Entre 200 et 500 euros selon le bassin et le type d&rsquo;intervention (active ou passive, surveillance comprise ou non). Wagner propose des contrats annuels couvrant hivernage et remise en service.',
  },
  {
    q: 'Peut-on laisser l&rsquo;eau tourner toute l&rsquo;année ?',
    a: 'Oui, en hivernage actif. C&rsquo;est plus coûteux en électricité, mais ça épargne le matériel et permet une remise en baignade plus rapide au printemps.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="GUIDE · HIVERNAGE"
        headline="Hivernage de piscine au Luxembourg"
        subhead="Hivernage actif ou passif : lequel pour votre bassin ? Au Luxembourg, le gel arrive et la saison se ferme entre octobre et avril. Préparer le bassin, c&rsquo;est éviter les dégradations coûteuses au printemps."
        cta="Demander une prestation d&rsquo;hivernage"
        variant="saturated"
      />
      <GuideContent
        sections={[
          {
            title: 'Hivernage passif',
            body: 'Baisse du niveau d&rsquo;eau, vidange des canalisations, mise en place de la couverture d&rsquo;hiver, produits d&rsquo;hivernage. Adapté aux bassins peu utilisés hors saison.',
          },
          {
            title: 'Hivernage actif',
            body: 'La filtration tourne en cycles courts, l&rsquo;eau reste claire. Consommation électrique plus élevée, remise en service plus rapide au printemps.',
          },
          {
            title: 'Le calendrier luxembourgeois',
            body: 'Mise en hivernage : octobre à novembre. Surveillance hivernale : décembre à mars. Remise en service : avril à mai, avant la saison.',
          },
          {
            title: 'Le gel et vos équipements',
            body: 'Un bassin mal hiverné peut voir ses canalisations éclater au gel. Pompe, chauffage et électrolyse doivent être protégés, voire déposés.',
          },
        ]}
      />
      <FaqAccordion items={FAQ} />
      <CtaDevis headline="Demander une prestation d&rsquo;hivernage" cta="Demander un devis entretien" />
    </>
  );
}
