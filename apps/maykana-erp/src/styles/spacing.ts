/**
 * Maykana ERP Design System
 * Spacing Configuration
 * 
 * Consistent spacing system for margins, paddings, and gaps.
 */

export const spacing = {
  // Base spacing unit (4px)
  unit: 4,

  // Spacing scale (in pixels)
  scale: {
    0: '0px',
    1: '4px',      // 0.25rem
    2: '8px',      // 0.5rem
    3: '12px',     // 0.75rem
    4: '16px',     // 1rem
    5: '20px',     // 1.25rem
    6: '24px',     // 1.5rem
    7: '28px',     // 1.75rem
    8: '32px',     // 2rem
    9: '36px',     // 2.25rem
    10: '40px',    // 2.5rem
    12: '48px',    // 3rem
    14: '56px',    // 3.5rem
    16: '64px',    // 4rem
    20: '80px',    // 5rem
    24: '96px',    // 6rem
  },

  // Common component spacing
  component: {
    // Padding
    buttonPadding: {
      sm: '6px 12px',      // Small button
      md: '9px 18px',      // Medium button (default)
      lg: '12px 24px',     // Large button
    },
    inputPadding: {
      sm: '6px 12px',
      md: '9px 12px',
      lg: '12px 16px',
    },
    cardPadding: {
      sm: '12px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
    modalPadding: '24px',
    sectionPadding: '24px 0',

    // Gaps
    gap: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '32px',
    },
  },
} as const;

// Tailwind class helpers
export const spacingClasses = {
  // Padding
  p1: 'p-1',
  p2: 'p-2',
  p3: 'p-3',
  p4: 'p-4',
  p5: 'p-5',
  p6: 'p-6',
  p8: 'p-8',

  // Margin
  m1: 'm-1',
  m2: 'm-2',
  m3: 'm-3',
  m4: 'm-4',
  m6: 'm-6',
  m8: 'm-8',

  // Gap
  gap2: 'gap-2',
  gap3: 'gap-3',
  gap4: 'gap-4',
  gap6: 'gap-6',

  // Common patterns
  buttonPadding: 'px-[18px] py-[9px]',   // Standard button
  inputPadding: 'px-3 py-2',              // Standard input
  cardPadding: 'p-4',                     // Standard card
  modalPadding: 'p-6',                    // Standard modal
} as const;

export type SpacingClass = keyof typeof spacingClasses;
