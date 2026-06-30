import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroPage, ServiceDetail, ServiceVisual, FaqAccordion, CtaDevis } from '@/sections/shared';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Abri piscine haut, mi-haut, plat Luxembourg | Wagner',
  description:
    'Abri plat, mi-haut et haut en aluminium thermolaqué. Effet de serre, sécurité, allongement de saison : 4 à 8 semaines de baignade en plus au Luxembourg. Pose Wagner à Mersch et dans tout le Grand-Duché.',
  alternates: { canonical: '/abri-piscine' },
};

const FAQ = [
  {
    q: 'Un abri plat suffit-il pour gagner des semaines de baignade ?',
    a: 'Oui. L&rsquo;abri plat crée un effet de serre le jour et limite le refroidissement nocturne. Au Luxembourg, on gagne en général 4 à 6 semaines par saison.',
  },
  {
    q: 'Un abri nécessite-t-il une autorisation au Luxembourg ?',
    a: 'Au-delà d&rsquo;une certaine hauteur et emprise, oui. L&rsquo;abri haut est soumis à autorisation de bâtir ; l&rsquo;abri plat, souvent non. On vérifie au cas par cas, commune par commune.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="ABRI PISCINE"
        headline="Abri de piscine haut, mi-haut et plat au Luxembourg"
        subhead="Aluminium thermolaqué, polycarbonate ou verre sécurit. Trois gains en un : effet de serre, dispositif de sécurité conforme au règlement grand-ducal de 2003, et 4 à 8 semaines de baignade en plus par saison."
        cta="Demander un devis détaillé"
      />
      <ServiceVisual
        src="/images/realisation-abri.jpg"
        alt="Abri de piscine haut installé sur un bassin au Luxembourg"
        overline="ABRI DE PISCINE"
        caption="Abri haut livré à Luxembourg-Ville. Quatre à huit semaines de baignade supplémentaires par saison."
      />
      <ServiceDetail
        description="Abri haut, mi-haut et plat, normes luxembourgeoises."
        features={[
          'Abri plat (couverture au ras des margelles)',
          'Abri mi-haut (1 à 1,5 m)',
          'Abri haut (debout, terrasse couverte possible)',
          'Structure aluminium thermolaqué',
          'Polycarbonate ou verre sécurit',
          'Ouverture manuelle, semi-motorisée ou télécommandée',
        ]}
      />
      <section className="bg-neutral-200 section-py">
        <div className="container-wagner max-w-[65ch]">
          <span
            className="font-body text-overline uppercase text-primary-700"
            style={{ letterSpacing: '0.12em' }}
          >
            RÉGLEMENTATION
          </span>
          <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h3">
            L&rsquo;abri comme dispositif de sécurité
          </h2>
          <p className="mt-4 font-body text-body-lg text-neutral-700">
            Un abri fermé conforme fait partie des dispositifs acceptés par le règlement
            grand-ducal du 3 janvier 2003. Il compte donc comme sécurité, en plus de son rôle thermique.
          </p>
          <Link
            href="/guide/reglementation-grand-ducale-securite-piscine"
            className="mt-4 inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-body font-medium underline-offset-4 underline"
          >
            Lire le guide règlementation →
          </Link>
        </div>
      </section>
      <RealisationsBento />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
