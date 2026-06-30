'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 grid-flow-row-dense auto-rows-[minmax(200px,auto)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

type BentoGridItemProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  featured?: boolean;
};

export function BentoGridItem({ children, className, href, featured }: BentoGridItemProps) {
  const reduce = useReducedMotion();
  const baseCard = cn(
    'group relative flex flex-col gap-3 p-6 md:p-7',
    featured
      ? 'bg-primary-900 text-neutral-50'
      : 'bg-neutral-100 text-neutral-900 border border-neutral-300 rounded-lg hover:border-neutral-400 hover:shadow-md',
    'transition-[transform,box-shadow,border-color] duration-default ease-standard',
    !reduce && 'hover:-translate-y-1',
    className,
  );

  const content = <>{children}</>;

  if (href) {
    return (
      <motion.a
        href={href}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={
          reduce
            ? { duration: 0.25 }
            : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
        className={baseCard}
      >
        {!featured && (
          <span
            aria-hidden="true"
            className="absolute left-0 top-6 bottom-6 w-0.5 bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-default"
          />
        )}
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={
        reduce ? { duration: 0.25 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }
      className={baseCard}
    >
      {content}
    </motion.div>
  );
}
