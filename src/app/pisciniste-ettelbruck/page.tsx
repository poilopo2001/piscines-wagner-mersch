import type { Metadata } from 'next';
import { HeroPage, CommuneContext, FaqAccordion, CtaDevis, AreasGrid } from '@/sections/shared';
import { ServicesBento } from '@/sections/services-bento';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Pisciniste à Ettelbruck | Piscines Wagner Mersch',
  description:
    'Piscines dans le nord : Ettelbruck, Diekirch, Wiltz. Sous-sol rocheux de l&rsquo;Éislek (ardoise, quartzite), déroctage fréquent, climat plus frais. Devis détaillé, prix annoncé et tenu.',
  alternates: { canonical: '/pisciniste-ettelbruck' },
};

const FAQ = [
  {
    q: 'Que se passe-t-il si la fouille tombe sur la roche ?',
    a: 'On mine le rocher : c&rsquo;est ce qu&rsquo;on appelle le déroctage. L&rsquo;opération est prévue au devis quand l&rsquo;étude de sol ou la nature de l&rsquo;Éislek le laisse prévoir. Pas de surprise sur la facture.',
  },
  {
    q: 'Vous montez jusqu&rsquo;à Diekirch et Wiltz ?',
    a: 'Oui. Ettelbruck est notre relais naturel pour tout le nord du Grand-Duché. Diekirch, Wiltz, Vianden inclus.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="PISCINISTE · ETTELBRUCK · ÉISLEK"
        headline="Pisciniste à Ettelbruck"
        subhead="Au nord, l&rsquo;Éislek rocheux (ardoise, quartzite) oblige parfois à miner le rocher. Le climat est plus frais, la saison plus courte : pompe à chaleur et abri prennent ici tout leur sens."
        cta="Demander un devis détaillé"
      />
      <CommuneContext
        title="Construire dans l&rsquo;Éislek"
        points={[
          'Sous-sol rocheux (ardoise, quartzite) : déroctage fréquent',
          'Climat plus frais : pompe à chaleur fortement conseillée',
          'Saison plus courte que dans le sud — planning calé en amont',
          'Couverture : Diekirch, Wiltz, Vianden, Clervaux',
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
