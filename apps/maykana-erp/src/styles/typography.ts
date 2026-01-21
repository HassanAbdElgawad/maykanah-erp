/**
 * Maykana ERP Design System
 * Typography Configuration
 * 
 * This file defines all typography settings used across the application.
 * All font sizes, weights, and families are centralized here.
 */

export const typography = {
  // Font Families
  fontFamily: {
    primary: "'IBM Plex Sans Arabic', Helvetica, sans-serif",
    secondary: "'Graphik Arabic', sans-serif",
    english: "'Plus Jakarta Sans', sans-serif",
  },

  // Font Sizes (in pixels)
  fontSize: {
    xs: '12px',      // Extra Small - Labels, captions
    sm: '13px',      // Small - Secondary text
    base: '14px',    // Base - Body text, inputs
    md: '15px',      // Medium - Important body text
    lg: '16px',      // Large - Subheadings
    xl: '18px',      // Extra Large - Section titles
    '2xl': '20px',   // 2X Large - Page subtitles
    '3xl': '22px',   // 3X Large - Card titles
    '4xl': '24px',   // 4X Large - Section headers
    '5xl': '28px',   // 5X Large - Page titles
    '6xl': '32px',   // 6X Large - Main headers
  },

  // Font Weights
  fontWeight: {
    light: 300,      // Light text
    normal: 400,     // Regular body text
    medium: 500,     // Medium emphasis
    semibold: 600,   // Subheadings, labels
    bold: 700,       // Headlines, important text
  },

  // Line Heights
  lineHeight: {
    tight: '1.2',    // Tight spacing for headers
    normal: '1.5',   // Normal spacing for body
    relaxed: '1.75', // Relaxed spacing for paragraphs
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.02em',
    tight: '-0.01em',
    normal: '0',
    wide: '0.01em',
    wider: '0.02em',
  },
} as const;

// Tailwind Class Presets for Common Typography Patterns
export const typographyClasses = {
  // Headings
  h1: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[32px] font-bold text-[#0b4041] leading-tight`,
  h2: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[28px] font-bold text-[#0b4041] leading-tight`,
  h3: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[24px] font-semibold text-black leading-tight`,
  h4: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[20px] font-semibold text-black leading-tight`,
  h5: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[18px] font-semibold text-black leading-normal`,
  h6: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[16px] font-semibold text-black leading-normal`,

  // Body Text
  bodyLarge: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base font-normal text-[#0e0d24] leading-normal`,
  body: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-normal text-black leading-normal`,
  bodySmall: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs font-normal text-gray-700 leading-normal`,

  // Labels
  label: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium text-black`,
  labelSmall: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs font-medium text-gray-600`,

  // Secondary Text
  secondary: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-normal text-[#00000080]`,
  caption: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs font-normal text-[#00000099]`,

  // Input Text
  input: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-normal`,
  inputPlaceholder: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-normal text-[#99a09e]`,

  // Button Text
  button: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium`,
  buttonLarge: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base font-medium`,

  // Table Text
  tableHeader: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-bold text-black`,
  tableCell: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-normal text-[#0e0d24]`,

  // Status/Badge Text
  badge: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs font-medium`,
  badgeSmall: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[10px] font-medium`,
} as const;

// Export type for TypeScript autocomplete
export type TypographyClass = keyof typeof typographyClasses;
