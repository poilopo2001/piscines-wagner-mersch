'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useDevis } from '@/drawer/devis-provider';
import { MagneticCTA } from '@/cta/magnetic';

const NAV = [
  { label: 'Construction', href: '/construction-piscine' },
  { label: 'Coque', href: '/installation-piscine-coque' },
  { label: 'Naturelle', href: '/installation-piscine-naturelle' },
  { label: 'Abri', href: '/abri-piscine' },
  { label: 'Rénovation', href: '/renovation-piscine' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openDevis } = useDevis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-header transition-all duration-moderate ease-standard',
          scrolled
            ? 'h-16 bg-neutral-50/92 backdrop-blur-md shadow-header border-b border-neutral-300'
            : 'h-18 bg-neutral-50/92 backdrop-blur-md border-b border-neutral-300',
        )}
        style={{ height: scrolled ? 64 : 72 }}
      >
        <nav
          aria-label="Navigation principale"
          className="container-wagner h-full flex items-center justify-between gap-4"
        >
          {/* Logo gauche */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Piscines Wagner — accueil"
          >
            <span className="font-heading font-semibold text-neutral-900 text-[20px] tracking-tight">
              Piscines Wagner
            </span>
            <span
              className="font-body text-[11px] uppercase text-neutral-600 mt-0.5"
              style={{ letterSpacing: '0.1em' }}
            >
              PISCINISTE · MERSCH
            </span>
          </Link>

          {/* Navigation desktop centre */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative font-body font-medium text-body text-neutral-700 hover:text-primary-700 transition-colors py-2',
                    active && 'text-primary-700',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute left-0 -bottom-0.5 h-0.5 bg-primary-500 transition-all duration-default',
                      active ? 'w-full' : 'w-0 group-hover:w-full',
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA droite + burger */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openDevis}
              className="hidden sm:inline-flex bg-primary-500 hover:bg-primary-600 text-neutral-50 rounded-full px-5 py-2.5 font-body font-medium text-[0.9375rem] transition-colors duration-default ease-standard min-h-[44px]"
            >
              Devis
            </button>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-neutral-100 transition-colors text-neutral-900 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile plein écran */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-dropdown bg-neutral-50 flex flex-col lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigation mobile"
        >
          <div className="container-wagner h-[72px] flex items-center justify-between border-b border-neutral-300">
            <span className="font-heading font-semibold text-neutral-900 text-[20px]">
              Piscines Wagner
            </span>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-md hover:bg-neutral-100 transition-colors text-neutral-900 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav
            aria-label="Navigation mobile"
            className="container-wagner flex-1 flex flex-col py-6 overflow-y-auto"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-neutral-300">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 font-heading font-semibold text-neutral-900 text-h4 hover:text-primary-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openDevis();
              }}
              className="mt-8 w-full bg-primary-500 hover:bg-primary-600 text-neutral-50 rounded-full px-6 py-4 font-body font-medium text-body transition-colors min-h-[52px]"
            >
              Demander un devis détaillé
            </button>
            <a
              href="tel:+352327122"
              className="mt-3 text-center font-body font-medium text-primary-700 underline-offset-4 underline py-2"
            >
              +352 32 71 22
            </a>
          </nav>
        </div>
      )}

      {/* Sticky CTA mobile (FAB-like, hors drawer) */}
      <button
        type="button"
        onClick={openDevis}
        className="md:hidden fixed bottom-6 right-6 z-header bg-primary-500 hover:bg-primary-600 text-neutral-50 rounded-full px-6 py-3.5 font-body font-medium text-body shadow-lg transition-colors min-h-[52px]"
        aria-label="Demander un devis détaillé"
      >
        Devis détaillé
      </button>
    </>
  );
}

// silence unused import warning for MagneticCTA (kept for future use)
void MagneticCTA;
