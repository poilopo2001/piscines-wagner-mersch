'use client';

import { cn } from '@/lib/cn';

const COMMUNES = [
  'Mersch',
  'Luxembourg-Ville',
  'Esch-sur-Alzette',
  'Differdange',
  'Ettelbruck',
  'Diekirch',
  'Strassen',
  'Hesperange',
  'Capellen',
  'Junglinster',
  'Mamer',
  'Kehlen',
  'Redange',
  'Wiltz',
  'Grevenmacher',
  'Remich',
  'Autre commune',
];

const ACCES = ['Accès facile', 'Accès étroit', 'Grutage à prévoir'];
const CRENEAUX = ['Printemps', 'Été', 'Automne', 'Pas fixé'];

export function StepCommune({
  formData,
  setField,
}: {
  formData: Record<string, string>;
  setField: (k: string, v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-heading font-semibold text-neutral-900 text-h3">
          Votre commune et l&rsquo;accès chantier
        </h2>
        <p className="font-body text-neutral-700 mt-1 max-w-[55ch]">
          Mersch est au centre du pays. On intervient dans tout le Grand-Duché. L&rsquo;accès
          au chantier conditionne le grutage (coque) et le terrassement.
        </p>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-body font-medium text-[0.875rem] text-neutral-700">
          Commune
        </span>
        <select
          value={formData.commune ?? ''}
          onChange={(e) => setField('commune', e.target.value)}
          className={inputClass}
        >
          <option value="">Sélectionner…</option>
          {COMMUNES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-body font-medium text-[0.875rem] text-neutral-700">
          Code postal
        </span>
        <input
          type="text"
          inputMode="numeric"
          value={formData.cp ?? ''}
          onChange={(e) => setField('cp', e.target.value)}
          placeholder="L-XXXX"
          className={inputClass}
        />
      </label>

      <div>
        <span className="font-body font-medium text-[0.875rem] text-neutral-700 block mb-2">
          Accès chantier
        </span>
        <div className="flex flex-wrap gap-2">
          {ACCES.map((a) => (
            <Chip
              key={a}
              label={a}
              selected={formData.acces === a}
              onClick={() => setField('acces', a)}
            />
          ))}
        </div>
      </div>

      <div>
        <span className="font-body font-medium text-[0.875rem] text-neutral-700 block mb-2">
          Créneau souhaité
        </span>
        <div className="flex flex-wrap gap-2">
          {CRENEAUX.map((c) => (
            <Chip
              key={c}
              label={c}
              selected={formData.creneau === c}
              onClick={() => setField('creneau', c)}
            />
          ))}
        </div>
      </div>
    </div>
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
