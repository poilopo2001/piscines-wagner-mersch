'use client';

import { cn } from '@/lib/cn';
import type { LucideIcon } from 'lucide-react';
import { Droplets, Waves } from 'lucide-react';

type Variant = 'sapin-deep' | 'sapin-water' | 'ivory-grain' | 'chantier' | 'naturelle';

type GraphicBlockProps = {
  variant?: Variant;
  icon?: LucideIcon;
  label?: string;
  className?: string;
  rounded?: boolean;
};

export function GraphicBlock({
  variant = 'sapin-water',
  icon: Icon,
  label,
  className,
  rounded = true,
}: GraphicBlockProps) {
  const variants: Record<Variant, string> = {
    'sapin-deep':
      'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950',
    'sapin-water':
      'bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950',
    'ivory-grain':
      'bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300',
    chantier:
      'bg-gradient-to-br from-primary-800 via-primary-900 to-neutral-900',
    naturelle:
      'bg-gradient-to-br from-primary-600 via-primary-800 to-primary-950',
  };

  return (
    <div
      role="img"
      aria-label={label ?? 'Visuel Piscines Wagner'}
      className={cn(
        'relative overflow-hidden',
        rounded && 'rounded-lg',
        variants[variant],
        className,
      )}
    >
      {/* Texture grain via SVG pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Lignes décoratives (filet laiton rare) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-accent-500/40"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-8 w-32 h-32 rounded-full border border-neutral-50/5"
      />
      {/* Motif aquatique sobre */}
      <Waves
        aria-hidden="true"
        className="absolute bottom-4 left-4 w-10 h-10 text-neutral-50/15"
        strokeWidth={1.5}
      />
      {/* Icône centrale optionnelle */}
      {Icon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="w-12 h-12 md:w-16 md:h-16 text-neutral-50/80"
            strokeWidth={1.25}
            aria-hidden="true"
          />
        </div>
      )}
      {label && (
        <div className="absolute bottom-3 left-4 right-4">
          <span
            className="font-body text-[11px] uppercase text-neutral-50/80 block"
            style={{ letterSpacing: '0.12em' }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export { Droplets };
