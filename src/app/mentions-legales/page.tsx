import type { Metadata } from 'next';
import { HeroPage, LegalContent } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Mentions légales | Piscines Wagner',
  description:
    'Mentions légales Piscines Wagner S.à r.l., Mersch. RC B 98765, TVA LU 12345678. Éditeur, hébergeur, propriété intellectuelle, données personnelles.',
  alternates: { canonical: '/mentions-legales' },
};

export default function Page() {
  return (
    <>
      <HeroPage
        overline="MENTIONS LÉGALES"
        headline="Mentions légales"
        subhead="Piscines Wagner S.à r.l. — éditeur, hébergeur, propriété intellectuelle, données personnelles et médiation."
        variant="ivory"
      />
      <LegalContent
        blocks={[
          {
            title: 'Éditeur',
            body: 'Piscines Wagner S.à r.l., siège social Zone artisanale, route de Colmar-Berg, L-7518 Mersch, Grand-Duché de Luxembourg. RC Luxembourg B 98765, TVA LU 12345678. Tél. +352 32 71 22.',
          },
          {
            title: 'Hébergement',
            body: 'Site hébergé par Vercel Inc. Ce site est déployé par Leadgen.lu (démo).',
          },
          {
            title: 'Propriété intellectuelle',
            body: 'L&rsquo;ensemble des contenus (textes, photos, plans) est la propriété de Piscines Wagner S.à r.l. Toute reproduction sans autorisation écrite est interdite.',
          },
          {
            title: 'Données personnelles',
            body: 'Voir la politique de confidentialité. Les données collectées via les formulaires servent au traitement des demandes de devis et de contact.',
          },
          {
            title: 'Médiation',
            body: 'En cas de litige, le consommateur peut recourir à la procédure de médiation luxembourgeoise (LU Mediation).',
          },
        ]}
      />
    </>
  );
}
