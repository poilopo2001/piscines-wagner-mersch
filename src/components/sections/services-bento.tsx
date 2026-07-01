'use client';

import Image from 'next/image';
import {
  BrickWall,
  Container,
  Sprout,
  Layers,
  Home,
  ShieldCheck,
  Droplets,
  RefreshCw,
  Wrench,
  LayoutGrid,
  Settings,
  Compass,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { BentoGrid, BentoGridItem } from '@/ui/bento-grid';
import { GraphicBlock } from '@/ui/graphic-block';
import { Reveal } from '@/motion/reveal';

type Service = {
  num: number;
  title: string;
  line: string;
  href: string;
  icon: LucideIcon;
  span: string;
  featured?: boolean;
  variant?: 'chantier' | 'naturelle';
  image?: string;
};

const SERVICES: Service[] = [
  {
    num: 1,
    title: 'Construction béton armé',
    line: 'Béton projeté armé, structure garantie 10 ans par écrit. Forme libre, même en pente ou sur rocher.',
    href: '/construction-piscine-beton',
    icon: BrickWall,
    span: 'md:col-span-2 md:row-span-2',
    featured: true,
    variant: 'chantier',
    image: '/images/service-beton.jpg',
  },
  {
    num: 2,
    title: 'Coque polyester',
    line: 'Coque monobloc posée en une journée. Étanchéité garantie 10 ans.',
    href: '/installation-piscine-coque',
    icon: Container,
    span: 'md:col-span-2',
  },
  {
    num: 3,
    title: 'Piscine naturelle',
    line: 'Filtration par lagunage, sans chlore ni sel. Équilibre biologique en 4 à 6 semaines.',
    href: '/installation-piscine-naturelle',
    icon: Sprout,
    span: 'md:row-span-2',
    featured: true,
    variant: 'naturelle',
    image: '/images/service-naturelle.jpg',
  },
  {
    num: 4,
    title: 'Hors-sol bois & acier',
    line: 'Structure bois ou acier, semi-enterrée. Pose sur dalle, sans terrassement lourd.',
    href: '/construction-piscine-hors-sol',
    icon: Layers,
    span: '',
  },
  {
    num: 5,
    title: 'Abri piscine',
    line: 'Plat, mi-haut ou haut. 4 à 8 semaines de baignade en plus au Luxembourg.',
    href: '/abri-piscine',
    icon: Home,
    span: 'md:col-span-2',
  },
  {
    num: 6,
    title: 'Sécurité (règlt 2003)',
    line: 'Conformité règlement grand-ducal 2003. On installe, on certifie, on explique.',
    href: '/securite-piscine',
    icon: ShieldCheck,
    span: '',
  },
  {
    num: 7,
    title: 'Étanchéité',
    line: 'Membrane armée, liner, diagnostic fuite. Garantie 10 ans par écrit.',
    href: '/etancheite-piscine',
    icon: Droplets,
    span: 'md:col-span-2',
  },
  {
    num: 8,
    title: 'Rénovation',
    line: 'Liner, margelles, local technique. Remise à neuf complète, devis post par post.',
    href: '/renovation-piscine',
    icon: RefreshCw,
    span: 'md:col-span-2 md:row-span-2',
    featured: true,
    variant: 'chantier',
    image: '/images/service-renovation.jpg',
  },
  {
    num: 9,
    title: 'Réparation',
    line: 'Pompe, filtration, fuite. Équipe en interne, pas de sous-traitance cachée.',
    href: '/reparation-piscine',
    icon: Wrench,
    span: '',
  },
  {
    num: 10,
    title: 'Margelles',
    line: 'Pierre naturelle, grès cérame R11/R12, bois composite. Pose scellée.',
    href: '/margelles',
    icon: LayoutGrid,
    span: '',
  },
  {
    num: 11,
    title: 'Local technique',
    line: 'Filtration, pompe à chaleur, électrolyse sel, domotique. Dimensionné au volume.',
    href: '/local-technique',
    icon: Settings,
    span: 'md:col-span-2',
  },
  {
    num: 12,
    title: 'Construction globale',
    line: 'Conception, autorisation, terrassement, mise en eau. Un seul interlocuteur.',
    href: '/construction-piscine',
    icon: Compass,
    span: 'md:col-span-2',
  },
];

export function ServicesBento() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-neutral-50 section-py"
    >
      <div className="container-wagner">
        <Reveal>
          <header className="mb-14 max-w-[65ch]">
            <span
              className="font-body text-overline uppercase text-primary-700"
              style={{ letterSpacing: '0.12em' }}
            >
              NOTRE MÉTIER
            </span>
            <h2
              id="services-heading"
              className="mt-3 font-heading font-semibold text-neutral-900 text-h2"
            >
              On construit, on rénove, on entretient. Rien d&rsquo;autre.
            </h2>
            <p className="mt-5 font-body text-body-lg text-neutral-700 max-w-[65ch] leading-[1.6]">
              Pas de sanitaire, pas de chauffage, pas de clim. Douze services, un seul
              métier : le bassin. Le même interlocuteur du devis à la mise en eau.
            </p>
          </header>
        </Reveal>

        <BentoGrid>
          {SERVICES.map((svc) => (
            <BentoGridItem
              key={svc.num}
              href={svc.href}
              featured={svc.featured}
              className={svc.span}
            >
              {svc.featured ? (
                <>
                  <div className="absolute inset-0 -z-10">
                    {svc.image ? (
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-center transition-transform duration-default ease-standard group-hover:scale-105"
                      />
                    ) : (
                      <GraphicBlock
                        variant={svc.variant ?? 'chantier'}
                        className="w-full h-full"
                        rounded={false}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/35 to-transparent transition-colors duration-default" />
                  </div>
                  <div className="relative z-10 flex flex-col gap-3 h-full justify-end">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-50/15 border border-neutral-50/20">
                      <svc.icon className="w-6 h-6 text-neutral-50" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-heading font-semibold text-neutral-50 text-h4">
                      {svc.title}
                    </h3>
                    <p className="font-body text-small text-neutral-200 max-w-[40ch] leading-[1.5]">
                      {svc.line}
                    </p>
                    <span className="mt-2 font-body font-medium text-[0.875rem] text-neutral-50 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Voir le service <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-200">
                    <svc.icon className="w-5 h-5 text-primary-700" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-heading font-semibold text-neutral-900 text-h4 mt-1">
                    {svc.title}
                  </h3>
                  <p className="font-body text-[0.9375rem] text-neutral-700 leading-[1.5]">
                    {svc.line}
                  </p>
                  <span className="mt-auto pt-2 font-body font-medium text-[0.875rem] text-primary-700 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Voir le service <ArrowRight className="w-4 h-4" />
                  </span>
                </>
              )}
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
