import type { Metadata } from 'next';
import { HeroPage, CommuneContext, FaqAccordion, CtaDevis } from '@/sections/shared';
import { ServicesBento } from '@/sections/services-bento';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Pisciniste à Differdange | Piscines Wagner Mersch',
  description:
    'Piscines à Differdange, Sanem, Pétange, Bascharage. Remblais miniers et argile du sud : étude de sol et drainage systématiques. Devis détaillé, prix annoncé et tenu.',
  alternates: { canonical: '/pisciniste-differdange' },
};

const FAQ = [
  {
    q: 'Le sous-sol de Differdange impose-t-il des précautions ?',
    a: 'Oui. Remblais miniers et argile : on demande parfois une étude de sol avant devis ferme. Elle dimensionne le drainage et la fondation, et évite les surprises à la fouille.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="PISCINISTE · DIFFERDANGE"
        headline="Pisciniste à Differdange"
        subhead="À Differdange et le sud-ouest, les remblais miniers et l&rsquo;argile compliquent le sous-sol. Une étude de sol conditionne parfois le devis ferme. Drainage périphérique et fondation soignée : le terrain décide, le devis suit."
        cta="Demander un devis détaillé"
      />
      <CommuneContext
        title="Construire à Differdange"
        points={[
          'Remblais miniers : étude de sol recommandée avant devis ferme',
          'Drainage périphérique du bassin systématique',
          'Margelles claires, utiles sous la chaleur estivale du sud',
          'Couverture : Sanem, Pétange, Bascharage',
        ]}
      />
      <ServicesBento />
      <RealisationsBento />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
