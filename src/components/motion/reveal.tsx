'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import React from 'react';

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const wordContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const word: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

type RevealProps = {
  children: ReactNode;
  as?: 'div' | 'section' | 'article' | 'li' | 'header' | 'figure';
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, as = 'div', delay = 0, y = 24, className }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={
        reduce
          ? { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
          : { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }
      }
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  stagger?: number;
  cap?: number;
  className?: string;
};

export function Stagger({ children, stagger = 0.08, cap = 6, className }: StaggerProps) {
  const reduce = useReducedMotion();
  const childrenArr = React.Children.toArray(children);
  const visible = {
    transition: { staggerChildren: reduce ? 0 : stagger },
  };

  const overCapVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: cap * stagger },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-15% 0px' }}
      variants={visible}
    >
      {childrenArr.map((child, i) => (
        <motion.div key={i} variants={i >= cap ? overCapVariant : itemVariant}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
