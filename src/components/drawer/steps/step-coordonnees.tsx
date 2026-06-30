'use client';

export function StepCoordonnees({
  formData,
  setField,
}: {
  formData: Record<string, string>;
  setField: (k: string, v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="font-heading font-semibold text-neutral-900 text-h3">
          Vos coordonnées
        </h2>
        <p className="font-body text-neutral-700 mt-1 max-w-[55ch]">
          Marc Schaack, chef de chantier, vous rappelle directement. Pas de standard, pas de
          robot. Réponse sous 2 jours ouvrés.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Field label="Nom" required>
          <input
            type="text"
            required
            value={formData.nom ?? ''}
            onChange={(e) => setField('nom', e.target.value)}
            placeholder="Nom"
            className={inputClass}
          />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Téléphone" required>
            <input
              type="tel"
              required
              value={formData.telephone ?? ''}
              onChange={(e) => setField('telephone', e.target.value)}
              placeholder="+352 …"
              className={inputClass}
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              required
              value={formData.email ?? ''}
              onChange={(e) => setField('email', e.target.value)}
              placeholder="vous@email.lu"
              className={inputClass}
            />
          </Field>
        </div>
        <Field label="Message (optionnel)">
          <textarea
            rows={4}
            value={formData.message ?? ''}
            onChange={(e) => setField('message', e.target.value)}
            placeholder="Précisions sur le projet, délai, contraintes…"
            className={`${inputClass} resize-none`}
          />
        </Field>
      </div>

      <label className="flex items-start gap-3 font-body text-small text-neutral-700">
        <input
          type="checkbox"
          required
          checked={formData.consent === 'yes'}
          onChange={(e) => setField('consent', e.target.checked ? 'yes' : '')}
          className="mt-1 w-4 h-4 accent-primary-500"
        />
        <span>
          J&rsquo;accepte que Piscines Wagner me recontacte pour ce projet. Devis gratuit,
          réponse sous 2 jours ouvrés.
        </span>
      </label>

      <p className="font-body text-[0.8125rem] text-neutral-600 italic">
        Devis gratuit. Réponse sous 2 jours ouvrés.
      </p>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-body font-medium text-[0.875rem] text-neutral-700">
        {label}
        {required && <span className="text-primary-700"> *</span>}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  'w-full bg-neutral-50 border border-neutral-300 rounded-[4px] px-4 py-3 font-body text-body text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus-visible:[box-shadow:0_0_0_2px_var(--neutral-50),0_0_0_4px_var(--primary-500)] outline-none transition-colors';
