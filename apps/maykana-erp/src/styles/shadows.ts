/**
 * Maykana ERP Design System
 * Shadows Configuration
 * 
 * Box shadow styles for depth and elevation.
 */

export const shadows = {
  // Shadow levels
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

  // Component-specific shadows
  button: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  card: '0 1px 3px rgba(0, 0, 0, 0.06)',
  cardHover: '0 10px 25px rgba(0, 0, 0, 0.1)',
  modal: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  dropdown: '0 10px 25px rgba(0, 0, 0, 0.1)',
  input: '0 1px 2px rgba(0, 0, 0, 0.05)',
  inputFocus: '0 0 0 3px rgba(12, 71, 73, 0.1)',
} as const;

// Tailwind class helpers
export const shadowClasses = {
  // Standard shadows
  shadowSm: 'shadow-sm',
  shadow: 'shadow',
  shadowMd: 'shadow-md',
  shadowLg: 'shadow-lg',
  shadowXl: 'shadow-xl',
  shadow2xl: 'shadow-2xl',

  // Component shadows
  shadowButton: 'shadow-[0px_4px_4px_#0000001a]',
  shadowCard: 'shadow-[0_1px_3px_rgba(0,0,0,0.06)]',
  shadowCardHover: 'hover:shadow-lg',
  shadowModal: 'shadow-2xl',
  shadowDropdown: 'shadow-lg',

  // No shadow
  shadowNone: 'shadow-none',
} as const;

export type ShadowClass = keyof typeof shadowClasses;
