import type { Metadata } from 'next';
import {
  HeroPage,
  ServiceDetail,
  ServiceVisual,
  ProcessSteps,
  FaqAccordion,
  CtaDevis,
} from '@/sections/shared';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Piscine naturelle à lagunage Luxembourg | Piscines Wagner',
  description:
    'Bassin de baignade filtré par lagunage, sans chlore ni sel. Zone de baignade distincte de la zone de régénération végétalisée. Réalisation Wagner à Hesperange et dans le Grand-Duché.',
  alternates: { canonical: '/installation-piscine-naturelle' },
};

const FAQ = [
  {
    q: 'L&rsquo;eau d&rsquo;une piscine naturelle est-elle claire ?',
    a: 'Oui, une fois l&rsquo;équilibre biologique installé (4 à 6 semaines). La filtration végétale maintient une eau translucide, sans chlore ni sel. Une légère teinte naturelle subsiste selon les plantes choisies.',
  },
  {
    q: 'Faut-il vidanger une piscine naturelle ?',
    a: 'Non, l&rsquo;eau se renouvelle et s&rsquo;auto-épure. On gère un hivernage naturel et un curage des plantes à l&rsquo;automne. Le reste du temps, le bassin tourne seul.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="INSTALLATION · PISCINE NATURELLE"
        headline="Piscines naturelles à lagunage au Luxembourg"
        subhead="Zone de baignade d&rsquo;un côté, zone de régénération végétalisée de l&rsquo;autre. Épuration biologique, eau claire, intégration paysagère au jardin. Aucun produit chimique, aucun chlore, aucun sel."
        cta="Demander un devis détaillé"
      />
      <ServiceVisual
        src="/images/realisation-naturelle.jpg"
        alt="Piscine naturelle à lagunage avec zone de plantes filtrantes"
        overline="BASSIN NATUREL À LAGUNAGE"
        caption="Bassin naturel livré à Hesperange. Zone de baignade et lagunage végétalisé, eau claire sans chlore ni sel."
      />
      <ServiceDetail
        description="Bassin de baignade filtré par lagunage, sans chlore."
        features={[
          'Zone de baignade séparée de la zone de régénération',
          'Filtration par plantes (roseaux, iris, menthe aquatique)',
          'Membrane étanche EPDM ou bassin béton',
          'Aucun produit chimique',
          'Faune et flore locales compatibles',
          'Adapté au climat luxembourgeois (saison courte, hivernage naturel)',
        ]}
      />
      <ProcessSteps
        title="Concevoir un bassin naturel"
        steps={[
          'Étude du terrain, de l&rsquo;ensoleillement et de la surface disponible',
          'Dimensionnement zone baignade / zone lagunage',
          'Terrassement et étanchéité',
          'Plantation et mise en eau',
          'Équilibre biologique : 4 à 6 semaines',
        ]}
        variant="saturated"
      />
      <RealisationsBento />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
