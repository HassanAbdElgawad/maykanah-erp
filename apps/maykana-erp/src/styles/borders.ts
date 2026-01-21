/**
 * Maykana ERP Design System
 * Border & Radius Configuration
 * 
 * Border widths, styles, and border radius values.
 */

export const borders = {
  // Border Widths
  width: {
    none: '0',
    thin: '1px',
    medium: '2px',
    thick: '3px',
  },

  // Border Radius
  radius: {
    none: '0',
    sm: '4px',
    md: '8px',      // rounded-lg
    lg: '12px',     // rounded-xl
    xl: '14px',
    '2xl': '16px',
    full: '9999px', // rounded-full (circles)
  },

  // Common border styles
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },
} as const;

// Tailwind class helpers
export const borderClasses = {
  // Border Radius
  rounded: 'rounded-lg',         // 8px - Most common
  roundedXl: 'rounded-xl',       // 12px - Cards, modals
  roundedFull: 'rounded-full',   // Pills, avatars
  roundedSm: 'rounded',          // 4px - Small elements

  // Borders with colors
  border: 'border border-[#e2e2e2]',
  borderInput: 'border border-[#cfcfcf]',
  borderPrimary: 'border border-[#093738]',
  borderSuccess: 'border border-[#2cc28d]',
  borderError: 'border border-[#ff0000]',
  borderInfo: 'border border-[#41d1fe]',

  // Border widths
  border1: 'border',
  border2: 'border-2',
  border3: 'border-[3px]',

  // Common combinations
  card: 'border border-[#e2e2e2] rounded-xl',
  input: 'border border-[#cfcfcf] rounded-lg',
  button: 'rounded-lg',
  modal: 'rounded-xl',
} as const;

export type BorderClass = keyof typeof borderClasses;
