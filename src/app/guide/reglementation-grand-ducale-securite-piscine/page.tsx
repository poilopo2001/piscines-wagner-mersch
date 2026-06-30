import type { Metadata } from 'next';
import { HeroPage, GuideContent, FaqAccordion, CtaDevis } from '@/sections/shared';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Règlement grand-ducal piscine 2003 | Guide Luxembourg',
  description:
    'Le règlement grand-ducal du 3 janvier 2003 impose au moins un dispositif de sécurité normalisé. Couverture, barrière, abri ou alarme : ce que la loi luxembourgeoise exige vraiment (et pourquoi la NF P90 française est un faux ami).',
  alternates: { canonical: '/guide/reglementation-grand-ducale-securite-piscine' },
};

const FAQ = [
  {
    q: 'Le règlement luxembourgeois est-il identique à la loi française R.128 ?',
    a: 'Non. Le Grand-Duché applique son propre règlement du 3 janvier 2003. La loi française R.128 et la norme NF P90 ne sont pas opposables au Luxembourg.',
  },
  {
    q: 'Quelles sanctions en cas de non-conformité ?',
    a: 'Le règlement prévoit des sanctions administratives. En cas d&rsquo;accident, la responsabilité civile et pénale du propriétaire est engagée.',
  },
  {
    q: 'L&rsquo;alarme immersion suffit-elle ?',
    a: 'Une alarme immersion est un dispositif accepté. Elle est idéalement complétée par une barrière pour les jeunes enfants, mais elle est légale seule.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="GUIDE · RÈGLEMENTATION"
        headline="Sécurité des piscines au Luxembourg : le règlement grand-ducal de 2003"
        subhead="Le règlement grand-ducal du 3 janvier 2003, expliqué clairement. Ce que la loi luxembourgeoise exige, ce qu&rsquo;elle n&rsquo;exige pas, et pourquoi la norme française NF P90 revient partout à tort."
        cta="Mettre mon bassin en conformité"
        variant="saturated"
      />
      <GuideContent
        sections={[
          {
            title: 'Le texte de référence',
            body: 'Règlement grand-ducal du 3 janvier 2003 relatif à la sécurité des piscines. Il encadre les piscines enterrées privatives à usage familial ou collectif.',
          },
          {
            title: 'Ce que dit le règlement',
            body: 'Au moins un dispositif normalisé de sécurité : couverture, barrière, abri fermé ou alarme. Le maître d&rsquo;ouvrage choisit ; l&rsquo;installateur certifie.',
          },
          {
            title: 'La confusion avec la norme NF P90 française',
            body: 'La norme française NF P90-306/307/308/309 revient souvent dans la documentation des piscinistes. Elle n&rsquo;est qu&rsquo;indicative au Luxembourg : seul le règlement grand-ducal est opposable.',
          },
          {
            title: 'Piscines concernées',
            body: 'Piscines privées enterrées à usage individuel ou collectif. Les bassins hors-sol de petite dimension et les piscines intérieures relèvent d&rsquo;autres règles.',
          },
          {
            title: 'Mise en conformité d&rsquo;un bassin ancien',
            body: 'Un bassin antérieur à 2003 doit être mis en conformité lors de travaux importants. Wagner installe le dispositif et délivre l&rsquo;attestation de conformité.',
          },
        ]}
      />
      <section className="bg-neutral-200 section-py">
        <div className="container-wagner max-w-[65ch]">
          <h2 className="font-heading font-semibold text-neutral-900 text-h3 mb-6">
            Les 4 dispositifs normalisés
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              'Couverture rigide ou à barres (normalisée)',
              'Barrière normalisée avec portillon auto-fermant',
              'Abri fermé conforme (dispositif combiné)',
              'Alarme immersion périmétrique',
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="font-body text-body-lg text-neutral-900">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FaqAccordion items={FAQ} />
      <CtaDevis headline="Mettre votre bassin en conformité" cta="Demander un devis sécurité" />
    </>
  );
}
