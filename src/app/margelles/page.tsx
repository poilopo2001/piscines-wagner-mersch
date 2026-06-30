import type { Metadata } from 'next';
import { HeroPage, ServiceDetail, FaqAccordion, CtaDevis } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Margelles piscine Luxembourg | Pierre, cérame | Wagner',
  description:
    'Pierre naturelle (granit, travertin, pierre bleue), grès cérame R11/R12, bois composite ou exotique. Pose scellée ou collée. Chantiers Wagner à Mersch et dans tout le Grand-Duché.',
  alternates: { canonical: '/margelles' },
};

const FAQ = [
  {
    q: 'Quel matériau résiste au gel luxembourgeois ?',
    a: 'Pierre bleue, granit et grès cérame haute densité passent les cycles gel-dégel sans dommage. Le travertin demande un traitement. Le bois composite est stable mais se patine dans le temps.',
  },
  {
    q: 'Peut-on changer les margelles sans retoucher le bassin ?',
    a: 'Oui, si la structure sous-jacente est saine. On dépose les margelles existantes, on prépare le support, on repose. Un diagnostic préalable évite les surprises.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="MARGELLES"
        headline="Margelles de piscine au Luxembourg"
        subhead="Pierre naturelle, grès cérame R11/R12, bois composite ou exotique : la matière est choisie pour résister au gel luxembourgeois. Pose scellée ou collée selon la technique du bassin et la nature du support."
        cta="Demander un devis détaillé"
      />
      <ServiceDetail
        description="Pierre naturelle, grès cérame, bois composite, pose scellée."
        features={[
          'Pierre naturelle (granit, travertin, pierre bleue)',
          'Grès cérame antidérapant R11/R12',
          'Bois composite (lames antidérapantes)',
          'Bois exotique (ipé, cumaru)',
          'Pose scellée ou collée selon support',
          'Copes et angles découpés à la pièce',
        ]}
      />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
