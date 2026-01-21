/**
 * Maykana ERP Design System
 * Card Styles Configuration
 * 
 * Cards, panels, and container components.
 */

export const cardStyles = {
  // Base card styles
  base: `
    bg-white
    border border-[#e2e2e2]
    rounded-xl
    transition-shadow duration-300
  `,

  // Padding variants
  padding: {
    none: '',
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6',
    xl: 'p-8',
  },

  // Interactive states
  interactive: {
    hoverable: 'hover:shadow-lg cursor-pointer',
    clickable: 'hover:shadow-lg cursor-pointer active:scale-[0.98]',
  },

  // Variants
  variants: {
    default: 'bg-white border-[#e2e2e2]',
    primary: 'bg-[#093738]/5 border-[#093738]/20',
    success: 'bg-[#2cc28d]/5 border-[#2cc28d]/20',
    warning: 'bg-[#f59e0b]/5 border-[#f59e0b]/20',
    error: 'bg-[#ff0000]/5 border-[#ff0000]/20',
    info: 'bg-[#41d1fe]/5 border-[#41d1fe]/20',
  },
} as const;

export const panelStyles = {
  base: `
    bg-white
    rounded-xl
    border border-[#e2e2e2]
  `,
} as const;

export const sectionStyles = {
  base: `
    bg-white
    rounded-xl
    border-2
    shadow-sm
    overflow-hidden
  `,

  header: `
    px-6 py-4
    border-b border-[#e2e2e2]
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    [direction:rtl]
  `,

  content: `
    p-6
  `,

  footer: `
    px-6 py-4
    border-t border-[#e2e2e2]
  `,
} as const;

// Pre-composed card classes
export const cardClasses = {
  // Standard card
  card: `bg-white border border-[#e2e2e2] rounded-xl p-5 transition-shadow duration-300`,
  
  // Interactive card (hoverable)
  cardHover: `bg-white border border-[#e2e2e2] rounded-xl p-5 hover:shadow-lg transition-all duration-300 cursor-pointer`,
  
  // Large card
  cardLg: `bg-white border border-[#e2e2e2] rounded-xl p-6 transition-shadow duration-300`,
  
  // Small card
  cardSm: `bg-white border border-[#e2e2e2] rounded-xl p-4 transition-shadow duration-300`,
  
  // Card without padding (for custom content)
  cardNoPadding: `bg-white border border-[#e2e2e2] rounded-xl overflow-hidden transition-shadow duration-300`,
  
  // Section header
  sectionHeader: `px-6 py-4 border-b border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]`,
  
  // Section content
  sectionContent: `p-6`,
  
  // Panel
  panel: `bg-white rounded-xl border border-[#e2e2e2]`,
} as const;

export type CardClass = keyof typeof cardClasses;
