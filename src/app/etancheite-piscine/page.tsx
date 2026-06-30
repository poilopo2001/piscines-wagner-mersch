import type { Metadata } from 'next';
import { HeroPage, ServiceDetail, ServiceVisual, ProcessSteps, FaqAccordion, CtaDevis } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Étanchéité piscine Luxembourg | Piscines Wagner Mersch',
  description:
    'Membrane armée PVC, liner 75/100, revêtement polyester renforcé. Diagnostic de fuite par colorimétrie et caméra thermique. Garantie 10 ans par écrit. Pose Wagner à Mersch et dans tout le Grand-Duché.',
  alternates: { canonical: '/etancheite-piscine' },
};

const FAQ = [
  {
    q: 'Combien de temps dure un liner de piscine ?',
    a: 'De 10 à 15 ans selon l&rsquo;entretien et l&rsquo;exposition au soleil. Une membrane armée tient 20 ans et davantage. Au-delà, la rénovation s&rsquo;impose.',
  },
  {
    q: 'Comment détecter une fuite ?',
    a: 'Colorimétrie, test de niveau, caméra thermique, inspection sous-marine. Le diagnostic fait souvent la moitié du travail. On ne remplace pas une étanchéité sur simple hypothèse.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="ÉTANCHÉITÉ"
        headline="Étanchéité de piscines au Luxembourg"
        subhead="Membrane armée PVC, liner 75/100, revêtement polyester renforcé. Diagnostic de fuite, remplacement de liner, pose de membrane : chaque intervention se termine par une garantie 10 ans écrite."
        cta="Demander un devis détaillé"
      />
      <ServiceVisual
        src="/images/piscine-interieure.jpg"
        alt="Bassin intérieur avec étanchéité renforcée par membrane armée"
        overline="ÉTANCHÉITÉ RENFORCÉE"
        caption="Bassin intérieur livré à Luxembourg-Ville. Étanchéité renforcée par membrane armée PVC soudée, garantie 10 ans par écrit."
      />
      <ServiceDetail
        description="Membrane armée et revêtement liner/renforcé, garantie 10 ans."
        features={[
          'Membrane armée PVC soudée (Alkor, Renol)',
          'Liner 75/100 soudé sur place',
          'Revêtement polyester renforcé (rénovation coque)',
          'Diagnostic de fuite par colorimétrie et caméra',
          'Reprise de radier et de parements',
          'Garantie 10 ans par écrit',
        ]}
      />
      <ProcessSteps
        title="Une réfection d&rsquo;étanchéité"
        steps={[
          'Diagnostic de fuite',
          'Vidange et préparation du support',
          'Reprise béton si nécessaire',
          'Pose membrane armée ou liner',
          'Étanchéité testée avant remplissage',
          'Remise en eau',
        ]}
        variant="saturated"
      />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
