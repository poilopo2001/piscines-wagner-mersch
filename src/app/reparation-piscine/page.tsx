import type { Metadata } from 'next';
import { HeroPage, ServiceDetail, FaqAccordion, CtaDevis, ContactMethods } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Réparation piscine au Luxembourg | Piscines Wagner',
  description:
    'Recherche de fuite (colorimétrie, caméra thermique), pompes, filtration, électrolyse au sel, pompe à chaleur. Équipe en interne, contrats annuels. Intervention Wagner dans tout le Grand-Duché.',
  alternates: { canonical: '/reparation-piscine' },
};

const FAQ = [
  {
    q: 'Proposez-vous des contrats d&rsquo;entretien ?',
    a: 'Oui, contrats annuels pour particuliers, hôtels et copropriétés. Visites planifiées à l&rsquo;avance, interventions prioritaires en cas de panne. Pas de fermeture de bassin pendant la saison.',
  },
  {
    q: 'Intervenez-vous en urgence ?',
    a: 'Pour les clients sous contrat, oui. Pour les autres, on planifie sous quelques jours, selon la zone et la saison.',
  },
];

export default function Page() {
  return (
    <>
      <HeroPage
        overline="RÉPARATION"
        headline="Réparation de piscines au Luxembourg"
        subhead="Recherche de fuite, pompes, filtration, électrolyse au sel, pompe à chaleur. Équipe en interne, intervention dans le Grand-Duché, contrats d&rsquo;entretien annuels. Pas de sous-traitance cachée."
        cta="Demander une intervention"
      />
      <ServiceDetail
        description="Diagnostic et réparation fuites, pompes, filtration."
        features={[
          'Recherche de fuite (colorimétrie, caméra thermique)',
          'Remplacement de pompe et de multivannes',
          'Réparation ou remplacement de filtration',
          'Reprise de skimmers et de buses',
          'Dépannage électrolyse au sel et pompe à chaleur',
          'Contrat d&rsquo;entretien annuel possible',
        ]}
      />
      <FaqAccordion items={FAQ} />
      <ContactMethods />
      <CtaDevis headline="Parler au pisciniste, pas à un standard" cta="Demander une intervention" />
    </>
  );
}
