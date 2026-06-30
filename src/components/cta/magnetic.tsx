'use client';

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { buttonVariants, type ButtonVariant } from './button';

type MagneticCTAProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  amplitude?: number;
  className?: string;
  ariaLabel?: string;
};

export function MagneticCTA({
  children,
  href,
  onClick,
  variant = 'primary',
  amplitude = 8,
  className,
  ariaLabel,
}: MagneticCTAProps) {
  const reduce = useReducedMotion();
  const isCoarse =
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  const disabled = !!reduce || !!isCoarse;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-amplitude, Math.min(amplitude, dx * 0.3)));
    y.set(Math.max(-amplitude, Math.min(amplitude, dy * 0.3)));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const classes = cn(buttonVariants[variant], className);

  return (
    <motion.div
      style={{ x: disabled ? 0 : springX, y: disabled ? 0 : springY }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
}
