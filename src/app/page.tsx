import type { Metadata } from 'next';
import { HeroSapin } from '@/sections/hero-sapin';
import { ServicesBento } from '@/sections/services-bento';
import { InterlocuteurUnique } from '@/sections/interlocuteur-unique';
import { RealisationsBento } from '@/sections/realisations-bento';
import {
  UspStrip,
  LocalAncrage,
  ProcessSteps,
  AreasGrid,
  FaqAccordion,
  CtaDevis,
} from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Pisciniste à Mersch | Construction, rénovation, entretien',
  description:
    'Pisciniste à Mersch depuis 2009. Béton armé, coque, rénovation, abris, sécurité. 240 bassins au Grand-Duché. Un interlocuteur du devis à la mise en eau.',
  alternates: { canonical: '/' },
};

const HOME_FAQ = [
  {
    q: 'Quels types de piscines Wagner construit-il ?',
    a: 'Bassin béton armé projeté, coque polyester monobloc, hors-sol bois et acier, piscine naturelle à lagunage. On ne fait que les piscines : pas de sanitaire, pas de chauffage, pas de clim. C&rsquo;est notre métier, rien d&rsquo;autre.',
  },
  {
    q: 'Quel est le délai entre le devis et la mise en eau ?',
    a: 'La coque se pose en une journée, le béton armé prend plusieurs semaines. On annonce un planning ferme au devis et on le tient. La saison de baignade luxembourgeoise est courte : on la planifie.',
  },
  {
    q: 'Wagner intervient-il en dehors de Mersch ?',
    a: 'Oui, dans tout le Grand-Duché. Mersch est au centre géographique du pays, à 25 minutes de route de la majorité des communes. La liste détaillée figure sur la page Contacts.',
  },
  {
    q: 'Quelles garanties sur la structure et l&rsquo;étanchéité ?',
    a: 'Bassin béton armé garanti 10 ans. Étanchéité garantie 10 ans. Par écrit, post par post, sur le devis signé.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q.replace(/&rsquo;/g, "'"),
    acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/&rsquo;/g, "'") },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSapin />
      <UspStrip />
      <ServicesBento />
      <InterlocuteurUnique />
      <LocalAncrage />
      <ProcessSteps
        title="Six étapes, un même pisciniste, du premier rendez-vous à la première baignade"
        steps={[
          'Rendez-vous sur site avec le chef de chantier',
          'Devis détaillé post par post, prix annoncé',
          'Dossier d&rsquo;autorisation de bâtir (guichet.public.lu)',
          'Terrassement, déroctage si nécessaire',
          'Structure béton ou pose de coque, étanchéité, margelles',
          'Mise en eau par le même interlocuteur',
        ]}
        variant="saturated"
      />
      <RealisationsBento />
      <AreasGrid />
      <FaqAccordion items={HOME_FAQ.map((f) => ({ q: f.q, a: f.a }))} />
      <CtaDevis />
    </>
  );
}
