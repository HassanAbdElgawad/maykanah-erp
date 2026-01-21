/**
 * Maykana ERP Design System
 * Input Styles Configuration
 * 
 * Text inputs, textareas, selects, and other form controls.
 */

export const inputStyles = {
  // Base input styles
  base: `
    w-full
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    text-sm
    bg-white
    border border-[#cfcfcf]
    rounded-lg
    transition-colors duration-200
    focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]
    disabled:bg-gray-100 disabled:cursor-not-allowed
    [direction:rtl]
  `,

  // Size variants
  sizes: {
    sm: 'h-8 px-2 text-xs',
    md: 'h-10 px-3 text-sm',      // Standard size
    lg: 'h-[43px] px-3 text-base',
  },

  // State modifiers
  states: {
    error: 'border-[#ff0000] focus:ring-[#ff0000] focus:border-[#ff0000]',
    success: 'border-[#2cc28d] focus:ring-[#2cc28d] focus:border-[#2cc28d]',
    disabled: 'bg-gray-100 cursor-not-allowed opacity-50',
    readOnly: 'bg-gray-50 cursor-default',
  },

  // Background variants
  backgrounds: {
    white: 'bg-white',
    light: 'bg-[#f8f8f8]',
  },
} as const;

export const textareaStyles = {
  base: `
    w-full
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    text-sm
    bg-white
    border border-[#cfcfcf]
    rounded-lg
    px-3 py-2
    min-h-[100px]
    resize-y
    transition-colors duration-200
    focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]
    disabled:bg-gray-100 disabled:cursor-not-allowed
    [direction:rtl]
  `,
} as const;

export const selectStyles = {
  base: `
    w-full
    h-10
    px-3
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    text-sm
    bg-white
    border border-[#cfcfcf]
    rounded-lg
    transition-colors duration-200
    focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]
    disabled:bg-gray-100 disabled:cursor-not-allowed
    [direction:rtl]
    cursor-pointer
  `,
} as const;

export const checkboxStyles = {
  base: `
    w-5 h-5
    rounded
    border-gray-300
    text-[#0c4749]
    focus:ring-[#0c4749]
    cursor-pointer
  `,
} as const;

export const radioStyles = {
  base: `
    w-5 h-5
    border-gray-300
    text-[#0c4749]
    focus:ring-[#0c4749]
    cursor-pointer
  `,
} as const;

export const switchStyles = {
  base: `
    relative
    inline-flex
    h-6 w-11
    items-center
    rounded-full
    transition-colors
    focus:outline-none focus:ring-2 focus:ring-[#0c4749] focus:ring-offset-2
    cursor-pointer
  `,
  checked: 'bg-[#0c4749]',
  unchecked: 'bg-gray-200',
  thumb: `
    inline-block
    h-4 w-4
    transform
    rounded-full
    bg-white
    transition-transform
  `,
} as const;

// Pre-composed input classes
export const inputClasses = {
  // Standard input
  input: `w-full h-10 px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]`,
  
  // Large input
  inputLg: `w-full h-[43px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]`,
  
  // Search input (with light background)
  inputSearch: `w-full h-[43px] px-3 pr-10 bg-[#f8f8f8] border border-[#e2e2e2] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]`,
  
  // Textarea
  textarea: `w-full min-h-[100px] px-3 py-2 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] resize-y focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]`,
  
  // Select
  select: `w-full h-10 px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749]`,
  
  // Checkbox
  checkbox: `w-5 h-5 rounded border-gray-300 text-[#0c4749] focus:ring-[#0c4749] cursor-pointer`,
  
  // Radio
  radio: `w-5 h-5 border-gray-300 text-[#0c4749] focus:ring-[#0c4749] cursor-pointer`,

  // Input with error
  inputError: `w-full h-10 px-3 bg-white border border-[#ff0000] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] focus:outline-none focus:ring-1 focus:ring-[#ff0000] focus:border-[#ff0000]`,

  // Disabled input
  inputDisabled: `w-full h-10 px-3 bg-gray-100 border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] cursor-not-allowed opacity-50`,
} as const;

export const labelClasses = {
  // Standard label
  label: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium text-black block mb-2 [direction:rtl]`,
  
  // Label with required asterisk
  labelRequired: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium text-black block mb-2 [direction:rtl]`,
  
  // Small label
  labelSm: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs font-medium text-gray-600 block mb-1 [direction:rtl]`,
  
  // Required asterisk span
  required: `text-red-600 mr-1`,
} as const;

export type InputClass = keyof typeof inputClasses;
export type LabelClass = keyof typeof labelClasses;
