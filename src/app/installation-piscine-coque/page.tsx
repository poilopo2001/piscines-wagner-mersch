import type { Metadata } from 'next';
import Link from 'next/link';
import {
  HeroPage,
  ServiceDetail,
  ServiceVisual,
  ProcessSteps,
  FaqAccordion,
  CtaDevis,
} from '@/sections/shared';
import { RealisationsBento } from '@/sections/realisations-bento';
import { Testimonials } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Piscine coque polyester au Luxembourg | Piscines Wagner',
  description:
    'Coque polyester monobloc posée en une journée, étanchéité garantie 10 ans. Mise en eau le jour de la pose. Chantiers Wagner à Mersch et dans tout le Grand-Duché, accès chantier et grutage étudiés en amont.',
  alternates: { canonical: '/installation-piscine-coque' },
};

const FAQ = [
  {
    q: 'Une coque s&rsquo;adapte-t-elle à un terrain en pente ?',
    a: 'Oui, à condition de bien terrasser et de prévoir un soutènement. Sur sol rocheux ou fort dénivelé, on vérifie la faisabilité au premier rendez-vous. Pas après.',
  },
  {
    q: 'Combien de temps dure une coque polyester ?',
    a: 'Vingt à trente ans, posée et entretenue correctement. En rénovation, le gel-coat peut être poncé et régénéré : on repart pour une dizaine d&rsquo;années sans changer la coque.',
  },
  {
    q: 'La forme d&rsquo;une coque est-elle vraiment libre ?',
    a: 'Moins qu&rsquo;un bassin béton. On choisit dans un catalogue de formes et dimensions standards. Pour une forme très spécifique, le béton armé reste la bonne réponse.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="INSTALLATION · COQUE POLYESTER"
        headline="Installation de piscines coque polyester au Luxembourg"
        subhead="Coque monobloc en polyester renforcé, gel-coat teinté dans la masse. Une fois le terrassement prêt, la pose et la mise en eau tiennent dans la journée. Étanchéité garantie 10 ans par écrit."
        cta="Demander un devis détaillé"
      />
      <ServiceVisual
        src="/images/realisation-coque.jpg"
        alt="Piscine coque polyester livrée et grutée sur un chantier Wagner"
        overline="POSE COQUE POLYESTER"
        caption="Coque polyester livrée et grutée à Mamer. Mise en eau le jour de la pose, étanchéité garantie 10 ans."
      />
      <ServiceDetail
        description="Coque polyester monobloc posée en une journée, finition gel-coat."
        features={[
          'Coque monobloc en polyester renforcé',
          'Gel-coat teinté dans la masse',
          'Modèles rectangulaires, carrés, formes libres du catalogue',
          'Pose en une journée une fois le terrassement prêt',
          'Local technique raccordé le jour de la mise en eau',
          'Étanchéité garantie 10 ans',
        ]}
      />
      <ProcessSteps
        title="Une coque posée en cinq étapes"
        steps={[
          'Repérage, accès chantier et terrassement',
          'Mise à niveau du fond de fouille',
          'Livraison et grutage de la coque',
          'Raccordement au local technique, remplissage',
          'Mise en eau et réglages de filtration',
        ]}
        variant="saturated"
      />
      <section className="bg-neutral-50 section-py">
        <div className="container-wagner">
          <Link
            href="/guide/choisir-beton-vs-coque"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-body font-medium underline-offset-4 underline"
          >
            Coque ou béton : voir le comparatif détaillé →
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
