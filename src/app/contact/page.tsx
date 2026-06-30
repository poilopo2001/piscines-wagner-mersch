import type { Metadata } from 'next';
import {
  HeroPage,
  ContactMethods,
  ContactForm,
  AreasGrid,
} from '@/sections/shared';

export const metadata: Metadata = {
  title: 'Contact Piscines Wagner | Mersch, Luxembourg',
  description:
    'Piscines Wagner, Zone artisanale, route de Colmar-Berg, L-7518 Mersch. Tél. +352 32 71 22. Lun-Ven 8h-18h, sam. sur rendez-vous. Réponse de pisciniste, pas de standard.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return (
    <>
      <HeroPage
        overline="CONTACT"
        headline="Contacter Piscines Wagner à Mersch"
        subhead="Zone artisanale, route de Colmar-Berg, L-7518 Mersch. Lun–Ven 8h00–18h00, samedi sur rendez-vous. Vous tombez sur un pisciniste, pas sur un standard."
        cta="Demander un devis détaillé"
      />
      <ContactMethods />
      <ContactForm />
      <AreasGrid />
    </>
  );
}
