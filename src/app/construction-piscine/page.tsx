import type { Metadata } from 'next';
import {
  HeroPage,
  ServiceVisual,
  ProcessSteps,
  LocalAncrage,
  StatsBar,
  Testimonials,
  FaqAccordion,
  CtaDevis,
} from '@/sections/shared';
import { BentoGrid, BentoGridItem } from '@/ui/bento-grid';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction de piscine au Luxembourg | Piscines Wagner',
  description:
    'Conception globale, du terrassement à la mise en eau. Béton armé, coque, hors-sol ou naturelle : la technique adaptée à votre terrain. Chantiers Wagner à Mersch et dans tout le Grand-Duché depuis 2009.',
  alternates: { canonical: '/construction-piscine' },
};

const FAQ = [
  {
    q: 'Quel budget prévoir pour une piscine au Luxembourg ?',
    a: 'La fourchette dépend du type (hors-sol, coque, béton, naturelle), de la taille et des finitions. Notre guide budget publie des fourchettes réelles par famille de bassin, hors promesses vagues.',
  },
  {
    q: 'Wagner prend-il en charge l&rsquo;autorisation de bâtir ?',
    a: 'Oui. On prépare le dossier technique (plans, notes descriptives) et on accompagne le dépôt sur guichet.public.lu. Les délais d&rsquo;instruction de la commune sont intégrés au planning communiqué.',
  },
];

const TYPES = [
  { title: 'Béton armé', desc: 'Forme libre, garantie 10 ans par écrit', link: '/construction-piscine-beton' },
  { title: 'Coque polyester', desc: 'Posée et mise en eau en une journée', link: '/installation-piscine-coque' },
  { title: 'Hors-sol bois / acier', desc: 'Pose sur dalle, sans terrassement lourd', link: '/construction-piscine-hors-sol' },
  { title: 'Naturelle à lagunage', desc: 'Sans chlore ni sel, filtration végétale', link: '/installation-piscine-naturelle' },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="CONSTRUCTION · CONCEPTION GLOBALE"
        headline="Construction de piscines au Luxembourg"
        subhead="Devis, autorisation, terrassement, structure, étanchéité, margelles, mise en eau : Wagner gère toute la chaîne. La technique est choisie selon le terrain et l&rsquo;usage, et le même chef de chantier vous suit du premier rendez-vous à la première baignade."
        cta="Demander un devis détaillé"
      />
      <ServiceVisual
        src="/images/chantier.jpg"
        alt="Chantier Wagner en cours, terrassement et structure béton de piscine"
        overline="CHANTIER EN COURS"
        caption="Chantier Wagner au Grand-Duché. Terrassement, structure béton et futur bassin familial suivis par un seul chef de chantier."
      />
      <section className="bg-neutral-50 section-py">
        <div className="container-wagner">
          <header className="mb-12 max-w-[65ch]">
            <span
              className="font-body text-overline uppercase text-primary-700"
              style={{ letterSpacing: '0.12em' }}
            >
              QUATRE FAMILLES DE BASSINS
            </span>
            <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
              On choisit la technique adaptée au terrain.
            </h2>
          </header>
          <BentoGrid>
            {TYPES.map((t) => (
              <BentoGridItem key={t.title} href={t.link} className="md:col-span-2">
                <h3 className="font-heading font-semibold text-neutral-900 text-h4">{t.title}</h3>
                <p className="font-body text-[0.9375rem] text-neutral-700">{t.desc}</p>
                <span className="mt-auto pt-2 font-body font-medium text-[0.875rem] text-primary-700 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Voir le service <ArrowRight className="w-4 h-4" />
                </span>
              </BentoGridItem>
            ))}
          </BentoGrid>
        </div>
      </section>
      <ProcessSteps
        title="Le déroulé d&rsquo;un chantier Wagner"
        steps={[
          'Premier rendez-vous sur site avec le chef de chantier',
          'Devis détaillé post par post, prix annoncé',
          'Dépôt du dossier d&rsquo;autorisation de bâtir',
          'Terrassement ou déroctage selon le sous-sol',
          'Structure, étanchéité, margelles, local technique',
          'Mise en eau par le même pisciniste',
        ]}
        variant="saturated"
      />
      <LocalAncrage
        title="Construire au Luxembourg"
        points={[
          'Sous-sol : Gutland argileux au sud/centre, Éislek rocheux au nord',
          'Saison courte (mai à septembre) : planning serré',
          'Autorisation de bâtir déposée via guichet.public.lu',
          'Sous-traitants locaux connus, équipe en interne',
        ]}
      />
      <StatsBar variant="sapin" />
      <Testimonials limit={2} />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
