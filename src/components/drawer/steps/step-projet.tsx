'use client';

import { BrickWall, Container, Sprout, Layers, RefreshCw, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/cn';

const OPTIONS = [
  { id: 'beton', label: 'Béton armé', icon: BrickWall },
  { id: 'coque', label: 'Coque polyester', icon: Container },
  { id: 'naturelle', label: 'Piscine naturelle', icon: Sprout },
  { id: 'hors-sol', label: 'Hors-sol', icon: Layers },
  { id: 'renovation', label: 'Rénovation', icon: RefreshCw },
  { id: 'indecis', label: 'Pas encore décidé', icon: HelpCircle },
];

export function StepProjet({
  value,
  onChange,
}: {
  value?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-heading font-semibold text-neutral-900 text-h3">
        Votre bassin, quel type ?
      </h2>
      <p className="font-body text-neutral-700 max-w-[55ch]">
        On construit, on rénove, on entretient. Choisissez ce qui correspond à votre
        projet. Si vous hésitez, dites-le : on vous oriente.
      </p>
      <div className="grid grid-cols-2 gap-3 mt-2">
        {OPTIONS.map((opt) => {
          const selected = value === opt.id;
          const Icon = opt.icon;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              aria-pressed={selected}
              className={cn(
                'flex flex-col gap-2 p-4 border rounded-lg text-left transition-colors duration-default min-h-[88px]',
                selected
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-neutral-300 bg-neutral-100 hover:border-neutral-400',
              )}
            >
              <Icon
                className={cn('w-6 h-6', selected ? 'text-primary-700' : 'text-neutral-700')}
                strokeWidth={1.75}
              />
              <span className="font-body font-medium text-neutral-900 text-small">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
