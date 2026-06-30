'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/cn';

const PROFONDEURS = ['1.20 m', '1.50 m', '1.80 m', 'Variable'];
const SOLS = ['Argile', 'Roche', 'Remblai', 'Inconnu'];

export function StepDimension({
  formData,
  setField,
}: {
  formData: Record<string, string>;
  setField: (k: string, v: string) => void;
}) {
  // Récapitulatif dimension : dérive pilotée par les champs
  const dimension = `${formData.longueur || '?'}×${formData.largeur || '?'}m · ${
    formData.profondeur || '?'
  } · ${formData.terrain || '?'} · ${formData.sol || '?'}`;

  useEffect(() => {
    setField('dimension', dimension);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.longueur, formData.largeur, formData.profondeur, formData.terrain, formData.sol]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-heading font-semibold text-neutral-900 text-h3">
          Votre bassin, quelle taille ?
        </h2>
        <p className="font-body text-neutral-700 mt-1 max-w-[55ch]">
          Longueur, largeur, profondeur. Le sous-sol luxembourgeois (Gutland argileux,
          Éislek rocheux) influence le dimensionnement.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Longueur (m)">
          <input
            type="number"
            min="3"
            max="25"
            inputMode="decimal"
            value={formData.longueur ?? ''}
            onChange={(e) => setField('longueur', e.target.value)}
            placeholder="8"
            className={inputClass}
          />
        </Field>
        <Field label="Largeur (m)">
          <input
            type="number"
            min="2"
            max="12"
            inputMode="decimal"
            value={formData.largeur ?? ''}
            onChange={(e) => setField('largeur', e.target.value)}
            placeholder="4"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Profondeur souhaitée">
        <div className="flex flex-wrap gap-2">
          {PROFONDEURS.map((p) => (
            <Chip
              key={p}
              label={p}
              selected={formData.profondeur === p}
              onClick={() => setField('profondeur', p)}
            />
          ))}
        </div>
      </Field>

      <Field label="Terrain">
        <div className="flex gap-2">
          {['Plat', 'En pente'].map((t) => (
            <Chip
              key={t}
              label={t}
              selected={formData.terrain === t}
              onClick={() => setField('terrain', t)}
            />
          ))}
        </div>
      </Field>

      <Field label="Sol connu">
        <div className="flex flex-wrap gap-2">
          {SOLS.map((s) => (
            <Chip
              key={s}
              label={s}
              selected={formData.sol === s}
              onClick={() => setField('sol', s)}
            />
          ))}
        </div>
      </Field>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-body font-medium text-[0.875rem] text-neutral-700">{label}</span>
      {children}
    </label>
  );
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        'px-4 py-2 rounded-full border font-body text-small transition-colors duration-default min-h-[44px]',
        selected
          ? 'border-primary-500 bg-primary-50 text-primary-700'
          : 'border-neutral-300 bg-neutral-100 text-neutral-700 hover:border-neutral-400',
      )}
    >
      {label}
    </button>
  );
}

const inputClass =
  'w-full bg-neutral-50 border border-neutral-300 rounded-[4px] px-4 py-3 font-body text-body text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus-visible:[box-shadow:0_0_0_2px_var(--neutral-50),0_0_0_4px_var(--primary-500)] outline-none transition-colors';
