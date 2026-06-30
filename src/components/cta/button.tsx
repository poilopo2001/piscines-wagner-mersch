import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'ghost' | 'link' | 'on-sapin';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
};

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'inline-flex items-center justify-center bg-primary-500 text-neutral-50 hover:bg-primary-600 rounded-full px-7 py-3.5 font-body font-medium text-body transition-colors duration-default ease-standard min-h-[44px] hover:-translate-y-px',
  ghost:
    'inline-flex items-center justify-center bg-transparent text-primary-700 border border-primary-500 hover:bg-neutral-100 rounded-full px-7 py-3.5 font-body font-medium text-body transition-colors duration-default ease-standard min-h-[44px]',
  link:
    'inline-flex items-center justify-center bg-transparent text-primary-700 hover:text-primary-800 underline underline-offset-4 px-1 py-2 font-body font-medium text-body transition-colors duration-default',
  'on-sapin':
    'inline-flex items-center justify-center bg-transparent text-neutral-50 border border-neutral-50/40 hover:bg-neutral-50/10 rounded-full px-7 py-3.5 font-body font-medium text-body transition-colors duration-default ease-standard min-h-[44px]',
};

export function Button({ children, href, onClick, variant = 'primary', className, type = 'button', ariaLabel }: ButtonProps) {
  const classes = cn(buttonVariants[variant], className);

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
