import type { Metadata } from 'next';
import { HeroPage, LegalContent } from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Piscines Wagner',
  description:
    'Politique de confidentialité Piscines Wagner. Données collectées, finalité, base légale, durée, droits RGPD. Contact DPO, Mersch, Grand-Duché de Luxembourg.',
  alternates: { canonical: '/politique-confidentialite' },
};

export default function Page() {
  return (
    <>
      <HeroPage
        overline="POLITIQUE DE CONFIDENTIALITÉ"
        headline="Politique de confidentialité"
        subhead="Responsable du traitement, données collectées, finalité, base légale, durée de conservation, vos droits RGPD."
        variant="ivory"
      />
      <LegalContent
        blocks={[
          {
            title: 'Responsable du traitement',
            body: 'Piscines Wagner S.à r.l., Zone artisanale, route de Colmar-Berg, L-7518 Mersch. Contact : contact@piscines-wagner.lu.',
          },
          {
            title: 'Données collectées',
            body: 'Identité (nom), coordonnées (téléphone, email, commune), détails du projet de piscine transmis via les formulaires.',
          },
          {
            title: 'Finalité et base légale',
            body: 'Traitement des demandes de devis et de contact, suivi de chantier, obligation contractuelle et intérêt légitime commercial. Consentement explicite au formulaire.',
          },
          {
            title: 'Durée de conservation',
            body: 'Trois ans après dernier contact commercial, puis suppression ou archivage légal si facture émise.',
          },
          {
            title: 'Vos droits',
            body: 'Accès, rectification, effacement, opposition, limitation, portabilité. Requête à contact@piscines-wagner.lu. Recours auprès de la CNPD luxembourgeoise.',
          },
          {
            title: 'Sous-traitants',
            body: 'Hébergeur du site (Vercel), outils de formulaires, gestionnaire email. Contrats de sous-traitance conformes RGPD.',
          },
        ]}
      />
    </>
  );
}
