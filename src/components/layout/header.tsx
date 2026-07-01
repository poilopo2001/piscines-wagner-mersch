'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
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

const TEL = '+352327122';
const TEL_HUMAN = '+352 32 71 22';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const { openDevis } = useDevis();
  const reduce = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 120], [76, 62]);
  const logoScale = useTransform(scrollY, [0, 120], [1, 0.94]);
  const overlayOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  const activeHref =
    NAV.find(
      (n) => pathname === n.href || (n.href !== '/' && pathname?.startsWith(n.href)),
    )?.href ?? null;
  const displayed = hovered ?? activeHref;

  // Menu open: body scroll lock + Escape + focus trap
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const panel = menuRef.current;
    const focusables = panel
      ? Array.from(
          panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
        )
      : [];
    focusables[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        return;
      }
      if (e.key !== 'Tab' || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        style={{ height: reduce ? 76 : height }}
        className="sticky top-0 z-header"
      >
        {/* Glass overlay — morphs in on scroll */}
        <motion.div
          aria-hidden
          style={{ opacity: reduce ? 1 : overlayOpacity }}
          className="absolute inset-0 bg-neutral-50/85 backdrop-blur-xl border-b border-neutral-300/70 shadow-header"
        />
        {/* Laiton hairline */}
        <motion.div
          aria-hidden
          style={{ opacity: reduce ? 0.7 : overlayOpacity }}
          className="absolute inset-x-0 bottom-0 h-px bg-accent-500/60"
        />

        <nav
          aria-label="Navigation principale"
          className="container-wagner relative h-full flex items-center justify-between gap-4"
        >
          {/* Logo */}
          <motion.div
            style={{ scale: reduce ? 1 : logoScale }}
            className="origin-left"
          >
            <Link
              href="/"
              className="flex flex-col leading-none"
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
          </motion.div>

          {/* Desktop nav — sliding underline (layoutId) */}
          <div
            className="hidden lg:flex items-center gap-7"
            onMouseLeave={() => setHovered(null)}
          >
            {NAV.map((item) => {
              const isDisplayed = displayed === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHovered(item.href)}
                  onFocus={() => setHovered(item.href)}
                  className={cn(
                    'relative font-body font-medium text-body py-2 transition-colors duration-default',
                    isDisplayed
                      ? 'text-primary-700'
                      : 'text-neutral-700 hover:text-primary-700',
                  )}
                >
                  {item.label}
                  {isDisplayed && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-1 right-1 -bottom-0.5 h-[2px] bg-primary-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + burger */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:inline-block">
              <MagneticCTA
                onClick={openDevis}
                variant="primary"
                amplitude={6}
                ariaLabel="Demander un devis détaillé"
                className="px-5 py-2.5 text-[0.9375rem]"
              >
                Devis
              </MagneticCTA>
            </div>
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
      </motion.header>

      {/* Mobile menu — clip-path circle + stagger, fond sapin profond */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigation mobile"
            className="fixed inset-0 z-dropdown bg-primary-950 text-neutral-50 flex flex-col lg:hidden"
            initial={reduce ? { opacity: 0 } : { clipPath: 'circle(0% at 100% 0%)' }}
            animate={reduce ? { opacity: 1 } : { clipPath: 'circle(150% at 100% 0%)' }}
            exit={reduce ? { opacity: 0 } : { clipPath: 'circle(0% at 100% 0%)' }}
            transition={reduce ? { duration: 0.2 } : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-wagner h-[76px] flex items-center justify-between border-b border-primary-800">
              <span className="font-heading font-semibold text-[20px] text-neutral-50">
                Piscines Wagner
              </span>
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md hover:bg-primary-900 transition-colors text-neutral-50 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav
              aria-label="Navigation mobile"
              className="container-wagner flex-1 flex flex-col py-6 overflow-y-auto"
            >
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.12 } },
                }}
                className="flex flex-col"
              >
                {NAV.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                    className="border-b border-primary-800/70"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-4 font-heading font-semibold text-h4 text-neutral-50 hover:text-accent-300 transition-colors flex items-center justify-between"
                    >
                      {item.label}
                      <span aria-hidden className="text-accent-400/70 text-small">
                        →
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-col gap-3"
              >
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openDevis();
                  }}
                  className="w-full bg-accent-500 hover:bg-accent-600 text-neutral-950 rounded-full px-6 py-4 font-body font-semibold text-body transition-colors min-h-[52px]"
                >
                  Demander un devis détaillé
                </button>
                <a
                  href={`tel:${TEL}`}
                  className="text-center font-body font-medium text-neutral-50 underline underline-offset-4 py-2"
                >
                  Appeler · {TEL_HUMAN}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Barre fixe bas (mobile) — Appeler + Devis, toujours visibles sans ouvrir le menu */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-header bg-neutral-50/95 backdrop-blur-md border-t border-neutral-300 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_24px_rgba(15,42,29,0.08)]">
        <div className="grid grid-cols-2 h-[60px]">
          <a
            href={`tel:${TEL}`}
            className="flex items-center justify-center gap-2 font-body font-semibold text-neutral-900 min-h-[44px]"
          >
            <Phone className="w-4 h-4 text-primary-600" aria-hidden />
            Appeler
          </a>
          <button
            type="button"
            onClick={openDevis}
            className="border-l border-neutral-300 bg-primary-500 hover:bg-primary-600 text-neutral-50 font-body font-semibold min-h-[44px]"
          >
            Devis détaillé
          </button>
        </div>
      </div>
    </>
  );
}
