'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { DevisDrawer } from './devis-drawer';

type DevisCtx = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openDevis: () => void;
};

const DevisContext = createContext<DevisCtx | null>(null);

export function DevisProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openDevis = () => setOpen(true);

  return (
    <DevisContext.Provider value={{ open, setOpen, openDevis }}>
      {children}
      <DevisDrawer open={open} onOpenChange={setOpen} />
    </DevisContext.Provider>
  );
}

export function useDevis() {
  const ctx = useContext(DevisContext);
  if (!ctx) {
    // Safe fallback si pas de provider (SSR, tests)
    return { open: false, setOpen: () => {}, openDevis: () => {} };
  }
  return ctx;
}
