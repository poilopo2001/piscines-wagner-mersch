import type { Metadata } from 'next';
import {
  HeroPage,
  UspStrip,
  ProcessSteps,
  FaqAccordion,
} from '@/sections/shared';
import { DevisLauncher } from './devis-launcher';

export const metadata: Metadata = {
  title: 'Devis détaillé piscine | Piscines Wagner Mersch',
  description:
    'Devis post par post (terrassement, structure, étanchéité, margelles, local technique, abri), prix annoncé et tenu. Béton, coque, rénovation, abri au Luxembourg.',
  alternates: { canonical: '/devis' },
};

const FAQ = [
  {
    q: 'Le devis est-il payant ?',
    a: 'Non. Le devis détaillé est gratuit. On se déplace au premier rendez-vous sur site pour établir un document post par post précis.',
  },
  {
    q: 'Sous quel délai recevrai-je mon devis ?',
    a: 'Cinq à dix jours ouvrés après le rendez-vous sur site, selon la complexité du projet. Le document est ferme, détaillé post par post.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="DEVIS DÉTAILLÉ"
        headline="Demander un devis détaillé"
        subhead="Un devis détaillé, pas une fourchette. Post par post : terrassement, structure, étanchéité, margelles, local technique, abri. Prix annoncé et tenu, planning communiqué."
        cta="Ouvrir le formulaire de devis"
      />
      <UspStrip
        items={[
          'Prix annoncé = prix facturé',
          'Planning communiqué = planning tenu',
          'Même chef de chantier du premier rendez-vous à la mise en eau',
          'Bassin béton armé garanti 10 ans par écrit',
        ]}
      />
      <DevisLauncher />
      <ProcessSteps
        title="Ce qui se passe après l&rsquo;envoi"
        steps={[
          'Réponse sous 2 jours ouvrés',
          'Premier rendez-vous sur site, gratuit',
          'Devis détaillé post par post',
          'Acceptation, planning communiqué',
          'Dépôt de l&rsquo;autorisation de bâtir',
          'Démarrage du chantier',
        ]}
        variant="saturated"
      />
      <FaqAccordion items={FAQ} />
    </>
  );
}
