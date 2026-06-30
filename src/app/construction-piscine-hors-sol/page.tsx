import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroPage, ServiceDetail, ServiceVisual, FaqAccordion, CtaDevis } from '@/sections/shared';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Piscine hors-sol bois et acier Luxembourg | Piscines Wagner',
  description:
    'Hors-sol bois (mélèze, pin du Nord) ou acier galvanisé, solutions semi-enterrées comprises. Pose sur dalle, sans terrassement lourd. Chantiers Wagner à Mersch et dans tout le Grand-Duché.',
  alternates: { canonical: '/construction-piscine-hors-sol' },
};

const FAQ = [
  {
    q: 'Une piscine hors-sol nécessite-t-elle une autorisation au Luxembourg ?',
    a: 'Pour les structures semi-enterrées ou de grand volume, oui. Pour une hors-sol posée sur dalle, souvent non. On vérifie ensemble au premier rendez-vous, via guichet.public.lu.',
  },
  {
    q: 'Quelle différence entre hors-sol et semi-enterré ?',
    a: 'Le hors-sol pose sur une dalle sans fouille profonde. Le semi-enterré est partiellement creusé : meilleure intégration au terrain, accès à l&rsquo;eau plus aisé.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="CONSTRUCTION · HORS-SOL"
        headline="Piscines hors-sol bois et acier au Luxembourg"
        subhead="Une solution rapide et réversible pour les jardins luxembourgeois. Pose sur dalle, structure bois (mélèze, pin du Nord) ou acier galvanisé. Version semi-enterrée quand l&rsquo;intégration paysagère compte."
        cta="Demander un devis détaillé"
      />
      <ServiceVisual
        src="/images/realisation-hors-sol.jpg"
        alt="Piscine hors-sol en bois avec terrasse installée au Luxembourg"
        overline="HORS-SOL BOIS & ACIER"
        caption="Hors-sol bois et terrasse à Ettelbruck. Pose sur dalle, sans terrassement lourd, adapté à un jardin luxembourgeois."
      />
      <ServiceDetail
        description="Hors-sol bois et acier, solutions semi-enterrées."
        features={[
          'Structure bois traité (mélèze, pin du Nord)',
          'Structure acier galvanisé',
          'Semi-enterrée pour intégration paysagère',
          'Margelles bois ou composite',
          'Liner ou membrane armée',
          'Local technique compact associé',
        ]}
      />
      <section className="bg-neutral-50 section-py">
        <div className="container-wagner">
          <Link
            href="/guide/budget-piscine-luxembourg"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-body font-medium underline-offset-4 underline"
          >
            Hors-sol ou enterré ? Voir le guide budget →
          </Link>
        </div>
      </section>
      <RealisationsBento />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
