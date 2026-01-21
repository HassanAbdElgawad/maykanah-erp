/**
 * Maykana ERP Design System
 * Color Palette Configuration
 * 
 * All colors used in the application are defined here.
 * This ensures consistency and makes it easy to update the theme.
 */

export const colors = {
  // Primary Colors (Main brand colors)
  primary: {
    50: '#E8F7F9',
    100: '#D1EFF3',
    200: '#A3DFE7',
    300: '#75CFDB',
    400: '#47BFCF',
    500: '#093738',   // Main primary color
    600: '#0A3B3D',   // Primary hover
    700: '#0c4749',   // Primary pressed
    800: '#0d5556',   // Primary dark
    900: '#073031',   // Primary darker
  },

  // Success Colors (Green shades)
  success: {
    50: '#E7FAF0',
    100: '#D0F5E1',
    200: '#A1EBC3',
    300: '#72E1A5',
    400: '#43D787',
    500: '#2CC28D',   // Main success
    600: '#07B664',   // Success medium
    700: '#10B981',   // Success dark
    800: '#059669',
    900: '#047857',
  },

  // Error Colors (Red shades)
  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#FF0000',   // Main error
    600: '#EF4444',   // Error medium
    700: '#DC2626',
    800: '#B91C1C',
    900: '#991B1B',
  },

  // Warning Colors (Orange/Yellow shades)
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',   // Main warning
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },

  // Info Colors (Blue/Cyan shades)
  info: {
    50: '#E8F7FF',
    100: '#D1EFFF',
    200: '#A3DFFF',
    300: '#75CFFF',
    400: '#47BFFF',
    500: '#41D1FE',   // Main info
    600: '#40D2FE',   // Info medium
    700: '#0EA5E9',
    800: '#0284C7',
    900: '#0C4A6E',
  },

  // Purple Colors (Used for special actions)
  purple: {
    50: '#FAF5FF',
    100: '#F3E8FF',
    200: '#E9D5FF',
    300: '#D8B4FE',
    400: '#C084FC',
    500: '#8B5CF6',   // Main purple
    600: '#7C3AED',   // Purple hover
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
  },

  // Neutral Colors (Grays)
  gray: {
    50: '#F7F7F9',    // Page background
    100: '#F8F8F8',   // Light background
    150: '#F0F4F7',   // Lighter background
    200: '#E2E2E2',   // Border color
    300: '#CFCFCF',   // Input border
    400: '#99A09E',   // Placeholder text
    500: '#6B7280',
    600: '#555555',   // Dark gray
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Text Colors
  text: {
    primary: '#0E0D24',    // Main text color
    secondary: '#00000080', // Secondary text (50% opacity)
    tertiary: '#00000099',  // Tertiary text (60% opacity)
    black: '#000000',
    white: '#FFFFFF',
    muted: '#6B7280',
  },

  // Background Colors
  background: {
    page: '#F7F7F9',
    light: '#F8F8F8',
    lighter: '#F0F4F7',
    white: '#FFFFFF',
    dark: '#093738',
    darker: '#073031',
  },

  // Border Colors
  border: {
    light: '#E2E2E2',
    medium: '#CFCFCF',
    dark: '#999999',
  },

  // Status Colors (for badges, tags)
  status: {
    active: '#2CC28D',
    inactive: '#092E32',
    pending: '#F59E0B',
    approved: '#07B664',
    rejected: '#FF0000',
    draft: '#6B7280',
  },

  // Semantic Colors (alternative names for common uses)
  semantic: {
    link: '#41D1FE',
    linkHover: '#0EA5E9',
    focus: '#0c4749',
    disabled: '#E5E7EB',
    divider: '#E2E2E2',
  },
} as const;

// Tailwind class helpers for quick color usage
export const colorClasses = {
  // Primary
  bgPrimary: 'bg-[#093738]',
  bgPrimaryHover: 'hover:bg-[#0a4849]',
  textPrimary: 'text-[#093738]',
  borderPrimary: 'border-[#093738]',

  // Success
  bgSuccess: 'bg-[#2cc28d]',
  textSuccess: 'text-[#2cc28d]',
  borderSuccess: 'border-[#2cc28d]',

  // Error
  bgError: 'bg-[#ff0000]',
  textError: 'text-[#ff0000]',
  borderError: 'border-[#ff0000]',

  // Warning
  bgWarning: 'bg-[#f59e0b]',
  textWarning: 'text-[#f59e0b]',
  borderWarning: 'border-[#f59e0b]',

  // Info
  bgInfo: 'bg-[#41d1fe]',
  textInfo: 'text-[#41d1fe]',
  borderInfo: 'border-[#41d1fe]',

  // Backgrounds
  bgPage: 'bg-[#f7f7f9]',
  bgLight: 'bg-[#f8f8f8]',
  bgWhite: 'bg-white',

  // Borders
  borderLight: 'border-[#e2e2e2]',
  borderMedium: 'border-[#cfcfcf]',

  // Text
  textMain: 'text-[#0e0d24]',
  textSecondary: 'text-[#00000080]',
  textMuted: 'text-[#00000099]',
} as const;

export type ColorClass = keyof typeof colorClasses;
