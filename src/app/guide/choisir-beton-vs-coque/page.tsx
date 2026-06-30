import type { Metadata } from 'next';
import { HeroPage, ComparisonTable, GuideContent, FaqAccordion, CtaDevis } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Piscine béton ou coque ? | Guide Wagner Luxembourg',
  description:
    'Béton armé ou coque polyester : coût, délais, durée de vie, forme, adaptation au terrain. Comparatif Wagner pour décider au Luxembourg, sous-sol et climat inclus.',
  alternates: { canonical: '/guide/choisir-beton-vs-coque' },
};

const FAQ = [
  {
    q: 'La coque est-elle moins durable que le béton ?',
    a: 'Non, c&rsquo;est une question de nature de durée. Une coque polyester tient 20 à 30 ans ; un bassin béton peut dépasser 40 ans avec réfections d&rsquo;étanchéité. Les deux se rénovent.',
  },
  {
    q: 'Lequel chauffe mieux ?',
    a: 'Le résultat dépend surtout du local technique (pompe à chaleur, abri). Le béton accumule plus de fraîcheur la nuit ; la coque se réchauffe un peu plus vite au printemps.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="GUIDE · COMPARATIF"
        headline="Piscine béton ou coque : comparatif pour le Luxembourg"
        subhead="Cinq critères concrets pour décider, selon votre terrain, votre budget et votre usage. Sans favoritisme : les deux ont leur cas d&rsquo;usage. Le sous-sol luxembourgeois est inclus dans le choix."
        cta="Demander un devis détaillé"
        variant="saturated"
      />
      <ComparisonTable
        title="Comparatif béton vs coque"
        columns={['Critère', 'Béton armé', 'Coque polyester']}
        rows={[
          ['Forme', 'Libre, à la pièce', 'Catalogue de formes standards'],
          ['Délai de chantier', '6 à 10 semaines', 'Pose en 1 journée une fois le terrassement prêt'],
          ['Adaptation terrain en pente / rocheux', 'Très bonne', 'Possible, avec soutènement'],
          ['Garantie structure', '10 ans Wagner', 'Garantie constructeur + 10 ans étanchéité'],
          ['Budget', 'Supérieur', 'Inférieur en moyenne'],
          ['Rénovation ultérieure', 'Membrane armée ou liner', 'Rénovation coque possible'],
        ]}
      />
      <GuideContent
        sections={[
          {
            title: 'Quand préférer le béton',
            body: 'Terrain en pente, sol rocheux, forme très spécifique, profondeur inhabituelle, recherche de durabilité maximale, bassin à débordement.',
          },
          {
            title: 'Quand préférer la coque',
            body: 'Budget plus serré, délai court, terrain accessible, dimensions standards acceptées, usage familial sans complexité.',
          },
          {
            title: 'Le sous-sol luxembourgeois',
            body: 'Gutland argileux : drainage plus important pour les deux. Éislek rocheux : le béton est souvent plus simple à mettre en œuvre, la coque impose un terrassement soigné.',
          },
        ]}
      />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
