'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { StepProjet } from './steps/step-projet';
import { StepDimension } from './steps/step-dimension';
import { StepCommune } from './steps/step-commune';
import { StepCoordonnees } from './steps/step-coordonnees';

type DevisDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const STEPS = [
  { id: 'projet', titre: 'Type de projet' },
  { id: 'dimension', titre: 'Dimensions & terrain' },
  { id: 'commune', titre: 'Commune & accès' },
  { id: 'coordonnees', titre: 'Vos coordonnées' },
];

export function DevisDrawer({ open, onOpenChange }: DevisDrawerProps) {
  const reduce = useReducedMotion();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const total = STEPS.length;
  const progress = ((currentStep + 1) / total) * 100;

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setCurrentStep(0);
        setSubmitted(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const setField = (k: string, v: string) =>
    setFormData((prev) => ({ ...prev, [k]: v }));

  const next = () => {
    if (currentStep < total - 1) setCurrentStep(currentStep + 1);
    else setSubmitted(true);
  };
  const prev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            className="fixed inset-0 z-overlay bg-primary-950/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </Dialog.Overlay>
        <Dialog.Content
          asChild
          aria-describedby={undefined}
        >
          <motion.div
            className="fixed z-modal inset-y-0 right-0 w-full lg:w-[clamp(480px,40vw,640px)] bg-neutral-50 shadow-xl flex flex-col max-lg:bottom-0 max-lg:top-auto max-lg:h-[90vh] max-lg:rounded-t-2xl lg:rounded-l-none"
            initial={reduce ? { opacity: 0 } : { x: '100%' }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: '100%' }}
            transition={
              reduce
                ? { duration: 0.25 }
                : { duration: 0.4, ease: [0.2, 0, 0, 1] }
            }
          >
            {/* Header sticky */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-300 shrink-0">
              <Dialog.Title className="font-heading font-semibold text-neutral-900 text-h5">
                {submitted
                  ? 'Demande envoyée'
                  : `Devis détaillé — Étape ${currentStep + 1}/${total}`}
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  aria-label="Fermer"
                  className="p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-700 hover:text-neutral-900 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:[box-shadow:0_0_0_2px_var(--neutral-50),0_0_0_4px_var(--primary-500)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>

            {/* Progress + overline (caché si submitted) */}
            {!submitted && (
              <div className="px-6 pt-4 shrink-0">
                <span
                  className="font-body text-overline uppercase text-primary-700 block mb-2"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {STEPS[currentStep].titre}
                </span>
                <div className="h-0.5 w-full bg-neutral-300 overflow-hidden">
                  <motion.div
                    className="h-full bg-accent-500"
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
                  />
                </div>
              </div>
            )}

            {/* Contenu step */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <SuccessScreen key="success" formData={formData} />
                ) : (
                  <motion.div
                    key={currentStep}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {currentStep === 0 && (
                      <StepProjet
                        value={formData.projet}
                        onChange={(v) => setField('projet', v)}
                      />
                    )}
                    {currentStep === 1 && (
                      <StepDimension formData={formData} setField={setField} />
                    )}
                    {currentStep === 2 && (
                      <StepCommune formData={formData} setField={setField} />
                    )}
                    {currentStep === 3 && (
                      <StepCoordonnees formData={formData} setField={setField} />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Preuves + footer sticky (caché si submitted) */}
            {!submitted && (
              <div className="border-t border-neutral-300 shrink-0">
                <div className="px-6 py-3 flex items-center gap-4 sm:gap-6 bg-neutral-100">
                  <ProofItem value="94%" label="RECOMMANDATION" />
                  <span className="h-8 w-px bg-neutral-300" />
                  <ProofItem value="240" label="BASSINS LIVRÉS" />
                  <span className="h-8 w-px bg-neutral-300" />
                  <ProofItem value="10 ans" label="GARANTIE" />
                </div>
                <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-neutral-300">
                  <button
                    onClick={prev}
                    disabled={currentStep === 0}
                    className="inline-flex items-center gap-1.5 font-body font-medium text-neutral-700 hover:text-primary-700 disabled:opacity-40 disabled:cursor-not-allowed px-2 py-2 min-h-[44px]"
                  >
                    <ArrowLeft className="w-4 h-4" /> Retour
                  </button>
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-neutral-50 rounded-full px-6 py-3 font-body font-medium text-body transition-colors duration-default ease-standard min-h-[44px]"
                  >
                    {currentStep < total - 1 ? 'Continuer' : 'Demander mon devis détaillé'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ProofItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-heading font-medium text-[1.1rem] sm:text-[1.25rem] text-primary-700 tnum">
        {value}
      </span>
      <span
        className="font-body text-[10px] sm:text-[11px] uppercase text-neutral-600"
        style={{ letterSpacing: '0.1em' }}
      >
        {label}
      </span>
    </div>
  );
}

function SuccessScreen({ formData }: { formData: Record<string, string> }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 shrink-0">
          <Check className="w-6 h-6 text-primary-700" strokeWidth={2.5} />
        </span>
        <div>
          <h2 className="font-heading font-semibold text-neutral-900 text-h4">
            Merci{formData.nom ? ` ${formData.nom}` : ''}, demande reçue.
          </h2>
          <p className="font-body text-small text-neutral-700">
            Réponse sous 2 jours ouvrés. Premier rendez-vous gratuit sur site.
          </p>
        </div>
      </div>
      <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-5 flex flex-col gap-2">
        <h3 className="font-heading font-semibold text-neutral-900 text-h5">Récapitulatif</h3>
        <dl className="grid grid-cols-1 gap-1.5 font-body text-small text-neutral-900">
          <RecapRow label="Projet" value={formData.projet} />
          <RecapRow label="Dimensions" value={formData.dimension} />
          <RecapRow label="Commune" value={formData.commune} />
          <RecapRow label="Téléphone" value={formData.telephone} />
          <RecapRow label="Email" value={formData.email} />
        </dl>
      </div>
      <p className="font-body text-small text-neutral-600">
        Marc Schaack, chef de chantier, vous rappelle directement. Pas de standard, pas de robot.
      </p>
    </div>
  );
}

function RecapRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-neutral-600">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  );
}
