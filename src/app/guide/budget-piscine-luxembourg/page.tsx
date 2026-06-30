import type { Metadata } from 'next';
import { HeroPage, BudgetTable, GuideContent, FaqAccordion, CtaDevis } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Budget piscine au Luxembourg | Guide Wagner',
  description:
    'Piscine au Luxembourg, combien ça coûte ? Hors-sol, coque, béton armé, naturelle, abri, local technique. Fourchettes réelles par poste, autorisation de bâtir comprise.',
  alternates: { canonical: '/guide/budget-piscine-luxembourg' },
};

const FAQ = [
  {
    q: 'Pourquoi un devis détaillé plutôt qu&rsquo;une fourchette ?',
    a: 'Une fourchette flottante masque la vraie allocation du budget. Wagner fournit un devis post par post (terrassement, structure, étanchéité, margelles, local technique, abri). Le prix annoncé est le prix facturé.',
  },
  {
    q: 'Une TVA réduite s&rsquo;applique-t-elle aux piscines au Luxembourg ?',
    a: 'Selon la nature des travaux et la résidence, des taux réduits peuvent s&rsquo;appliquer sur certains postes (rénovation énergétique d&rsquo;un local technique, par exemple). On précise la TVA ligne par ligne au devis.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="GUIDE · BUDGET"
        headline="Budget piscine au Luxembourg : combien prévoir"
        subhead="Fourchettes réelles par type de bassin, postes de coût détaillés, autorisation de bâtir comprise. Pas de promesse vague : des chiffres vérifiables au devis, ligne par ligne."
        cta="Demander un devis détaillé"
        variant="saturated"
      />
      <BudgetTable
        rows={[
          { type: 'Hors-sol bois ou acier', min: '8 000 €', max: '20 000 €' },
          { type: 'Coque polyester (8×4)', min: '20 000 €', max: '35 000 €' },
          { type: 'Béton armé (8×4 à 10×4)', min: '35 000 €', max: '60 000 €' },
          { type: 'Piscine naturelle à lagunage', min: '45 000 €', max: '80 000 €' },
          { type: 'Abri plat', min: '6 000 €', max: '15 000 €' },
          { type: 'Abri mi-haut / haut', min: '12 000 €', max: '40 000 €' },
        ]}
      />
      <GuideContent
        sections={[
          {
            title: 'Les postes de coût',
            body: 'Terrassement ou déroctage, structure (béton ou coque), étanchéité, margelles, local technique (filtration, pompe à chaleur, électrolyse), abri, sécurité.',
          },
          {
            title: 'Le surcoût du sous-sol luxembourgeois',
            body: 'Sol rocheux (Éislek) : déroctage à ajouter. Sol argileux (Gutland) : drainage plus poussé. Une étude de sol est parfois nécessaire sur remblais.',
          },
          {
            title: 'L&rsquo;autorisation de bâtir',
            body: 'Frais de dossier communal, plans et notes descriptives. Wagner prépare le dossier technique et accompagne le dépôt.',
          },
          {
            title: 'Coût annuel d&rsquo;exploitation',
            body: 'Eau, électricité (pompe et chauffage), produits d&rsquo;entretien ou sel, hivernage. Comptez 800 à 2 000 euros par an selon la taille et la durée de saison.',
          },
        ]}
      />
      <FaqAccordion items={FAQ} />
      <CtaDevis />
    </>
  );
}
