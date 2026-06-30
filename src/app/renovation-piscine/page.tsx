import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroPage, ServiceDetail, ServiceVisual, Testimonials, FaqAccordion, CtaDevis } from '@/sections/shared';
import { RealisationsBento } from '@/sections/realisations-bento';

export const metadata: Metadata = {
  title: 'Rénovation piscine au Luxembourg | Piscines Wagner',
  description:
    'Diagnostic, liner, margelles, local technique, mise en conformité sécurité 2003. Rénovation complète, devis post par post. Chantiers Wagner à Mersch et dans tout le Grand-Duché.',
  alternates: { canonical: '/renovation-piscine' },
};

const FAQ = [
  {
    q: 'Une piscine des années 90 peut-elle être rénovée ?',
    a: 'Oui, c&rsquo;est même notre cas le plus courant. Liner, margelles, filtration, sécurité : on remet le bassin à niveau technique et réglementaire. La rénovation Mme Kremer à Strassen porte exactement sur ce type de chantier.',
  },
  {
    q: 'Combien coûte une rénovation ?',
    a: 'De quelques milliers d&rsquo;euros (liner seul) à un budget proche du neuf (structure + margelles + local technique). Le devis est détaillé post par post : pas de fourchette vague.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="RÉNOVATION"
        headline="Rénovation et remise à neuf de piscines au Luxembourg"
        subhead="Diagnostic, plan de rénovation, devis détaillé post par post. Liner, margelles, local technique, mise en conformité sécurité 2003. Un seul interlocuteur, du diagnostic à la remise en eau."
        cta="Demander un devis détaillé"
      />
      <ServiceVisual
        src="/images/realisation-renovation.jpg"
        alt="Piscine rénovée avec liner neuf et margelles repostées"
        overline="RÉNOVATION COMPLÈTE"
        caption="Rénovation liner et margelles à Strassen. Bassin des années 90 remis à neuf, mise en conformité sécurité 2003 incluse."
      />
      <ServiceDetail
        description="Remise à neuf complète : liner, margelles, local technique."
        features={[
          'Remplacement de liner ou de membrane armée',
          'Reprise de margelles (pierre naturelle, cérame, bois)',
          'Rénovation du local technique (filtration, pompe, chauffage)',
          'Mise en conformité sécurité (règlement grand-ducal 2003)',
          'Reprise de structure béton en cas de fissure',
          'Mise à niveau électrolyse au sel',
        ]}
      />
      <section className="bg-neutral-50 section-py">
        <div className="container-wagner">
          <Link
            href="/guide/quand-renover-piscine"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-body font-medium underline-offset-4 underline"
          >
            Quand faut-il rénover ? Lire le guide →
          </Link>
        </div>
      </section>
      <RealisationsBento />
      <Testimonials limit={2} />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
