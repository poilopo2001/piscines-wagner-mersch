'use client';

import { useDevis } from '@/drawer/devis-provider';
import { ArrowRight } from 'lucide-react';

export function DevisLauncher() {
  const { openDevis } = useDevis();
  return (
    <section className="bg-neutral-50 section-py">
      <div className="container-wagner max-w-[640px]">
        <header className="mb-8">
          <span
            className="font-body text-overline uppercase text-primary-700"
            style={{ letterSpacing: '0.12em' }}
          >
            VOTRE PROJET DE PISCINE
          </span>
          <h2 className="mt-3 font-heading font-semibold text-neutral-900 text-h2">
            Quatre étapes, un devis ferme.
          </h2>
          <p className="mt-4 font-body text-body-lg text-neutral-700">
            Type de bassin, dimensions, commune, coordonnées. À la fin, Marc Schaack vous
            rappelle directement. Pas de standard, pas de robots. Réponse sous 2 jours ouvrés.
          </p>
        </header>
        <ol className="flex flex-col gap-3 mb-8">
          {[
            'Type de projet (béton, coque, naturelle, hors-sol, rénovation, indécis)',
            'Dimensions & terrain (longueur, largeur, profondeur, sol)',
            'Commune & accès (16 communes prioritaires, accès chantier)',
            'Coordonnées (nom, téléphone, email, message)',
          ].map((s, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-4 bg-neutral-100 border border-neutral-300 rounded-lg"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 border border-primary-500 shrink-0">
                <span className="font-heading font-medium text-[0.875rem] text-primary-700 tnum">
                  {i + 1}
                </span>
              </span>
              <span className="font-body text-body text-neutral-900">{s}</span>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={openDevis}
          className="bg-primary-500 hover:bg-primary-600 text-neutral-50 rounded-full px-7 py-4 font-body font-medium text-body transition-colors duration-default ease-standard min-h-[52px] inline-flex items-center gap-2"
        >
          Demander mon devis détaillé <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
