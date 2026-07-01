'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useDevis } from '@/drawer/devis-provider';
import { MagneticCTA } from '@/cta/magnetic';
import { Reveal, Stagger } from '@/motion/reveal';

const PRIMARY_LINKS = [
  { label: 'Construction', href: '/construction-piscine' },
  { label: 'Coque polyester', href: '/installation-piscine-coque' },
  { label: 'Piscine naturelle', href: '/installation-piscine-naturelle' },
  { label: 'Abri piscine', href: '/abri-piscine' },
  { label: 'Rénovation', href: '/renovation-piscine' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

const SERVICES_LINKS = [
  { label: 'Construction béton armé', href: '/construction-piscine-beton' },
  { label: 'Hors-sol bois & acier', href: '/construction-piscine-hors-sol' },
  { label: 'Sécurité (règlt 2003)', href: '/securite-piscine' },
  { label: 'Étanchéité', href: '/etancheite-piscine' },
  { label: 'Réparation', href: '/reparation-piscine' },
  { label: 'Margelles', href: '/margelles' },
  { label: 'Local technique', href: '/local-technique' },
  { label: 'Devis détaillé', href: '/devis' },
];

const ZONES = [
  { label: 'Pisciniste Mersch', href: '/pisciniste-mersch' },
  { label: 'Pisciniste Luxembourg-Ville', href: '/pisciniste-luxembourg-ville' },
  { label: 'Pisciniste Esch-sur-Alzette', href: '/pisciniste-esch-sur-alzette' },
  { label: 'Pisciniste Ettelbruck', href: '/pisciniste-ettelbruck' },
  { label: 'Pisciniste Strassen', href: '/pisciniste-strassen' },
  { label: 'Pisciniste Capellen', href: '/pisciniste-capellen' },
  { label: 'Pisciniste Differdange', href: '/pisciniste-differdange' },
  { label: 'Pisciniste Hesperange', href: '/pisciniste-hesperange' },
];

const TRUST = [
  { value: '240', label: 'bassins livrés' },
  { value: '2009', label: 'atelier à Mersch' },
  { value: '10 ans', label: 'garantie béton' },
  { value: '94 %', label: 'recommandation' },
];

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Piscines+Wagner+route+de+Colmar-Berg+Mersch';

export function Footer() {
  const { openDevis } = useDevis();
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Pied de page Piscines Wagner"
      className="bg-primary-900 text-neutral-50 border-t border-primary-700"
    >
      {/* Bande CTA monumentale + preuves */}
      <Reveal as="section" className="border-b border-primary-700">
        <div className="container-wagner py-14 lg:py-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="max-w-[60ch]">
            <span
              className="font-body text-overline uppercase text-accent-300 block mb-3"
              style={{ letterSpacing: '0.12em' }}
            >
              UN DEVIS DÉTAILLÉ, PAS UNE FOURCHETTE
            </span>
            <h2 className="font-heading font-semibold text-neutral-50 text-[clamp(1.875rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em]">
              Parlez au pisciniste, pas à un standard.
            </h2>
            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {TRUST.map((t) => (
                <li key={t.label} className="flex items-baseline gap-1.5">
                  <span className="font-heading font-semibold text-accent-300 text-h6 tnum">
                    {t.value}
                  </span>
                  <span className="font-body text-small text-neutral-200/80">
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <MagneticCTA
              onClick={openDevis}
              variant="primary"
              amplitude={10}
              ariaLabel="Demander un devis détaillé"
              className="bg-accent-500 hover:bg-accent-600 text-neutral-950 px-7 py-4"
            >
              Demander un devis
            </MagneticCTA>
            <MagneticCTA
              href="tel:+352327122"
              variant="on-sapin"
              ariaLabel="Appeler Piscines Wagner"
              className="px-7 py-4"
            >
              +352 32 71 22
            </MagneticCTA>
          </div>
        </div>
      </Reveal>

      {/* Corps footer — fade-up stagger */}
      <Stagger className="container-wagner py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Bloc marque */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="font-heading font-semibold text-neutral-50 text-h5">
              Piscines Wagner
            </span>
            <span
              className="font-body text-[11px] uppercase text-neutral-200/70 block mt-1"
              style={{ letterSpacing: '0.1em' }}
            >
              PISCINISTE · MERSCH
            </span>
          </div>
          <p className="font-body text-[0.875rem] text-neutral-200 max-w-[30ch] leading-[1.6]">
            Du devis à la mise en eau, le même interlocuteur.
          </p>
          <p className="font-heading text-[1.125rem] text-accent-300 italic">Moien.</p>
        </div>

        <FooterCol title="Navigation" links={PRIMARY_LINKS} />
        <FooterCol title="Services" links={SERVICES_LINKS} />

        {/* Bloc contact NAP */}
        <nav aria-label="Coordonnées Piscines Wagner" className="flex flex-col gap-3">
          <h3
            className="font-body text-overline uppercase text-neutral-200"
            style={{ letterSpacing: '0.12em' }}
          >
            CONTACT
          </h3>
          <address className="not-italic flex flex-col gap-3 font-body text-[0.9375rem] text-neutral-50">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2 hover:text-accent-300 transition-colors"
            >
              <MapPin className="w-4 h-4 mt-0.5 text-accent-300 shrink-0" aria-hidden />
              <span>
                Zone artisanale, route de Colmar-Berg
                <br />
                L-7518 Mersch
                <br />
                Grand-Duché de Luxembourg
              </span>
            </a>
            <a
              href="tel:+352327122"
              className="flex items-center gap-2 hover:text-accent-300 transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-accent-300 shrink-0" aria-hidden />
              +352 32 71 22
            </a>
            <a
              href="mailto:contact@piscines-wagner.lu"
              className="flex items-center gap-2 hover:text-accent-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-accent-300 shrink-0" aria-hidden />
              contact@piscines-wagner.lu
            </a>
            <span className="flex items-start gap-2 text-neutral-200">
              <Clock className="w-4 h-4 mt-0.5 text-accent-300 shrink-0" aria-hidden />
              <span>
                Lun–Ven : 8h00–18h00
                <br />
                Sam : sur rendez-vous
              </span>
            </span>
          </address>
        </nav>
      </Stagger>

      {/* Zones d'intervention (SEO local) */}
      <Reveal as="section" className="border-t border-primary-700">
        <div className="container-wagner py-8">
          <span
            className="font-body text-[11px] uppercase text-neutral-200/70 block mb-3"
            style={{ letterSpacing: '0.12em' }}
          >
            ZONES D&rsquo;INTERVENTION
          </span>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {ZONES.map((z) => (
              <li key={z.href}>
                <FooterLink href={z.href} label={z.label} className="text-[0.875rem]" />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Bottom bar */}
      <div className="bg-primary-950">
        <div className="container-wagner h-12 flex flex-col sm:flex-row items-center justify-between gap-2 py-2">
          <p className="font-body text-[0.8125rem] text-neutral-200/70 text-center sm:text-left">
            &copy; {year} Piscines Wagner S.à r.l. · RC B 98765 · TVA LU 12345678
          </p>
          <p className="font-body text-[0.8125rem] text-neutral-200/70 text-center sm:text-right">
            Réalisé par Leadgen.lu — démo
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={`Liens ${title}`} className="flex flex-col gap-3">
      <h3
        className="font-body text-overline uppercase text-neutral-200"
        style={{ letterSpacing: '0.12em' }}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <FooterLink href={l.href} label={l.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterLink({
  href,
  label,
  className = '',
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-block font-body text-[0.9375rem] text-neutral-200 hover:text-neutral-50 transition-colors duration-default py-0.5 ${className}`}
    >
      {label}
      <span
        aria-hidden
        className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-accent-400 transition-transform duration-default ease-standard group-hover:scale-x-100"
      />
    </Link>
  );
}
