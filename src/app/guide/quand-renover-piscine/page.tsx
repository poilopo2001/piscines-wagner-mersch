import type { Metadata } from 'next';
import { HeroPage, GuideContent, FaqAccordion, CtaDevis } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Quand rénover sa piscine ? | Guide Luxembourg',
  description:
    'Liner décollé, margelles fissurées, fuite récurrente, filtration vieillissante. Quand rénover sa piscine au Luxembourg ? Signes, budget, saison idéale.',
  alternates: { canonical: '/guide/quand-renover-piscine' },
};

const FAQ = [
  {
    q: 'Quand planifier une rénovation au Luxembourg ?',
    a: 'Entre octobre et mars, hors saison. On profite de l&rsquo;hivernage pour intervenir, et la piscine est de nouveau opérationnelle au printemps.',
  },
  {
    q: 'Rénover ou reconstruire ?',
    a: 'Si la structure béton est saine, la rénovation suffit très souvent. Si elle est fissurée en profondeur, la reconstruction peut devenir plus économique à long terme.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="GUIDE · RÉNOVATION"
        headline="Quand rénover sa piscine au Luxembourg"
        subhead="Les signes qui ne trompent pas : plis dans le liner, margelles qui bougent, fuites récurrentes, filtration qui s&rsquo;essouffle. On commence toujours par le diagnostic, jamais par la démolition."
        cta="Demander un diagnostic rénovation"
        variant="saturated"
      />
      <GuideContent
        sections={[
          {
            title: 'Le liner a plus de 12 ans',
            body: 'Un liner devient poreux, se décolle aux angles, perd sa couleur. Au-delà de 12 à 15 ans, le remplacer avant la rupture.',
          },
          {
            title: 'Margelles fissurées ou qui bougent',
            body: 'Le gel luxembourgeois décolle les margelles mal scellées. Une reprise évite les infiltrations dans la structure.',
          },
          {
            title: 'Pertes d&rsquo;eau répétées',
            body: 'Une baisse anormale du niveau (au-delà de l&rsquo;évaporation) signale une fuite de structure ou de tuyauterie. À diagnostiquer avant rénovation.',
          },
          {
            title: 'Filtration sous-dimensionnée ou âgée',
            body: 'Une pompe qui tourne depuis 15 ans consomme plus et filtre moins. Le local technique est souvent la première rénovation rentable.',
          },
          {
            title: 'Mise en conformité sécurité',
            body: 'Un bassin antérieur à 2003 sans dispositif : on ajoute couverture, barrière ou alarme dans la même rénovation.',
          },
        ]}
      />
      <FaqAccordion items={FAQ} />
      <CtaDevis headline="Demander un diagnostic rénovation" cta="Demander un devis rénovation" />
    </>
  );
}
