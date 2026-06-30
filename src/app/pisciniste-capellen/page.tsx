import type { Metadata } from 'next';
import { HeroPage, CommuneContext, FaqAccordion, CtaDevis } from '@/sections/shared';
import { ServicesBento } from '@/sections/services-bento';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Pisciniste à Capellen | Piscines Wagner Mersch',
  description:
    'Piscines à Capellen, Mamer, Kehlen, Steinfort. À 15 min de Mersch par l&rsquo;A7. Sol argileux du Gutland, bassins familiaux 8×4 et 10×4, abri plat fréquent. Devis détaillé.',
  alternates: { canonical: '/pisciniste-capellen' },
};

const FAQ = [
  {
    q: 'Capellen est-elle dans votre zone directe ?',
    a: 'Oui. C&rsquo;est l&rsquo;une des communes les plus proches de l&rsquo;atelier : 15 minutes par l&rsquo;A7. On y est souvent.',
  },
  {
    q: 'Un abri plat est-il pertinent à Capellen ?',
    a: 'Oui : il capte le soleil le jour, limite le refroidissement nocturne, et vaut comme dispositif de sécurité conforme au règlement grand-ducal de 2003. Trois usages pour une seule installation.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="PISCINISTE · CAPELLEN"
        headline="Pisciniste à Capellen"
        subhead="Capellen, 15 minutes par l&rsquo;A7 depuis l&rsquo;atelier — l&rsquo;une de nos zones les plus proches. Sol argileux du Gutland, bassins familiaux typiques (8×4, 10×4) avec abri plat pour allonger la saison."
        cta="Demander un devis détaillé"
      />
      <CommuneContext
        title="Construire à Capellen"
        points={[
          'Sol argileux du Gutland : drainage soigné au devis',
          'Bassins familiaux typiques : 8×4, 10×4',
          'Abri plat fréquent : saison élargie, sécurité incluse',
          'Couverture : Mamer, Kehlen, Steinfort',
        ]}
      />
      <ServicesBento />
      <RealisationsBento />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
