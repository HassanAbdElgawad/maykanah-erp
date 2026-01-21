/**
 * Maykana ERP Design System
 * Button Styles Configuration
 * 
 * All button variants and sizes used across the application.
 */

export const buttonStyles = {
  // Base button styles
  base: `
    inline-flex items-center justify-center gap-2
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    font-medium
    rounded-lg
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    [direction:rtl]
  `,

  // Size variants
  sizes: {
    sm: 'h-8 px-3 text-[11px]',                   // Extra small buttons - 11px
    md: 'h-[43px] px-[18px] py-[9px] text-xs',    // Standard size - 12px
    lg: 'h-10 px-6 text-sm',                      // Large buttons - 13px
    icon: 'h-9 w-9',
  },

  // Color variants
  variants: {
    // Primary button (main CTA)
    primary: `
      bg-[#093738] text-white
      hover:bg-[#0a4849]
      focus:ring-[#0c4749]
      shadow-[0px_4px_4px_#0000001a]
    `,

    // Secondary button (less emphasis)
    secondary: `
      bg-[#f8f8f8] text-[#093738]
      border border-[#e2e2e2]
      hover:bg-gray-100
      focus:ring-[#093738]
    `,

    // Success button
    success: `
      bg-[#2cc28d] text-white
      hover:bg-[#07b664]
      focus:ring-[#2cc28d]
    `,

    // Error/Danger button
    danger: `
      bg-[#ff0000] text-white
      hover:bg-[#ef4444]
      focus:ring-[#ff0000]
    `,

    // Warning button
    warning: `
      bg-[#f59e0b] text-white
      hover:bg-[#d97706]
      focus:ring-[#f59e0b]
    `,

    // Info button
    info: `
      bg-[#41d1fe] text-white
      hover:bg-[#0ea5e9]
      focus:ring-[#41d1fe]
    `,

    // Purple button (special actions)
    purple: `
      bg-[#8b5cf6] text-white
      hover:bg-[#7c3aed]
      focus:ring-[#8b5cf6]
    `,

    // Ghost button (transparent)
    ghost: `
      bg-transparent text-[#093738]
      hover:bg-[#f8f8f8]
      focus:ring-[#093738]
    `,

    // Outline button
    outline: `
      bg-transparent text-[#093738]
      border border-[#093738]
      hover:bg-[#093738] hover:text-white
      focus:ring-[#093738]
    `,

    // Link button
    link: `
      bg-transparent text-[#41d1fe]
      hover:text-[#0ea5e9] hover:underline
      focus:ring-[#41d1fe]
      shadow-none
    `,
  },

  // State modifiers
  states: {
    loading: 'relative pointer-events-none',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
  },
} as const;

// Pre-composed button classes for common patterns
export const buttonClasses = {
  // Primary buttons
  primary: `${buttonStyles.base} bg-[#093738] hover:bg-[#0a4849] text-white h-[43px] px-[18px] py-[9px] text-xs shadow-[0px_4px_4px_#0000001a] rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]`,
  
  primarySm: `${buttonStyles.base} bg-[#093738] hover:bg-[#0a4849] text-white h-8 px-3 text-[11px] rounded-lg`,
  
  primaryLg: `${buttonStyles.base} bg-[#093738] hover:bg-[#0a4849] text-white h-10 px-6 text-sm rounded-lg`,

  // Secondary buttons
  secondary: `${buttonStyles.base} bg-[#f8f8f8] hover:bg-gray-100 text-[#093738] border border-[#e2e2e2] h-[43px] px-[18px] py-[9px] text-xs rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]`,

  // Icon buttons
  icon: `${buttonStyles.base} h-9 w-9 p-0`,
  iconSm: `${buttonStyles.base} h-8 w-8 p-0`,
  iconLg: `${buttonStyles.base} h-10 w-10 p-0`,

  // Success
  success: `${buttonStyles.base} bg-[#2cc28d] hover:bg-[#07b664] text-white h-[43px] px-[18px] py-[9px] text-xs rounded-lg`,

  // Danger
  danger: `${buttonStyles.base} bg-[#ff0000] hover:bg-[#ef4444] text-white h-[43px] px-[18px] py-[9px] text-xs rounded-lg`,

  // Ghost
  ghost: `${buttonStyles.base} bg-transparent hover:bg-[#f8f8f8] text-[#093738] h-[43px] px-[18px] py-[9px] text-xs`,

  // Outline
  outline: `${buttonStyles.base} bg-transparent hover:bg-[#093738] hover:text-white text-[#093738] border border-[#093738] h-[43px] px-[18px] py-[9px] text-xs rounded-lg`,
} as const;

export type ButtonClass = keyof typeof buttonClasses;
