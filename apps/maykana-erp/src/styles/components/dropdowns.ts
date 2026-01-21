/**
 * Maykana ERP Design System
 * Dropdown & Menu Styles Configuration
 * 
 * Dropdowns, context menus, and popover components.
 */

export const dropdownStyles = {
  // Dropdown container
  container: `
    absolute
    bg-white
    border border-[#e2e2e2]
    rounded-lg
    shadow-lg
    z-50
    min-w-[180px]
    py-1
    [direction:rtl]
  `,

  // Dropdown menu
  menu: `
    max-h-[300px]
    overflow-y-auto
  `,

  // Menu item
  item: `
    px-4 py-2
    text-sm
    text-[#0E0D24]
    cursor-pointer
    hover:bg-[#f8f8f8]
    transition-colors
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    flex items-center gap-2
  `,

  // Item states
  itemStates: {
    active: 'bg-[#093738]/5 text-[#093738]',
    disabled: 'opacity-50 cursor-not-allowed hover:bg-transparent',
    danger: 'text-[#ff0000] hover:bg-[#ff0000]/5',
  },

  // Divider
  divider: `
    h-px
    bg-[#e2e2e2]
    my-1
  `,

  // Header
  header: `
    px-4 py-2
    text-xs
    text-[#00000080]
    font-semibold
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
  `,
} as const;

export const contextMenuStyles = {
  // Context menu container
  container: `
    absolute
    bg-white
    border border-[#e2e2e2]
    rounded-lg
    shadow-xl
    z-50
    min-w-[200px]
    py-1
    [direction:rtl]
  `,

  // Context menu item
  item: `
    px-4 py-2
    text-sm
    text-[#0E0D24]
    cursor-pointer
    hover:bg-[#f8f8f8]
    transition-colors
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    flex items-center justify-between
    gap-3
  `,

  // Shortcut
  shortcut: `
    text-xs
    text-[#00000080]
  `,
} as const;

export const selectMenuStyles = {
  // Select menu container
  container: `
    absolute
    w-full
    bg-white
    border border-[#cfcfcf]
    rounded-lg
    shadow-lg
    mt-1
    max-h-[300px]
    overflow-y-auto
    z-50
    [direction:rtl]
  `,

  // Option
  option: `
    px-4 py-2
    text-sm
    text-[#0E0D24]
    cursor-pointer
    hover:bg-[#f8f8f8]
    transition-colors
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
  `,

  // Selected option
  optionSelected: `
    bg-[#093738]/5
    text-[#093738]
    font-medium
  `,

  // Option with checkbox
  optionWithCheckbox: `
    flex items-center gap-2
  `,
} as const;

export const popoverStyles = {
  // Popover container
  container: `
    absolute
    bg-white
    border border-[#e2e2e2]
    rounded-lg
    shadow-lg
    z-50
    [direction:rtl]
  `,

  // Popover with arrow
  arrow: `
    absolute
    w-3 h-3
    bg-white
    border-t border-r border-[#e2e2e2]
    transform rotate-45
  `,

  // Arrow positions
  arrowPositions: {
    top: '-top-1.5 left-1/2 -translate-x-1/2',
    bottom: '-bottom-1.5 left-1/2 -translate-x-1/2 rotate-180',
    left: '-left-1.5 top-1/2 -translate-y-1/2 -rotate-45',
    right: '-right-1.5 top-1/2 -translate-y-1/2 rotate-135',
  },

  // Content
  content: `
    p-4
  `,
} as const;

// Pre-composed dropdown classes
export const dropdownClasses = {
  // Dropdown container
  dropdown: `absolute bg-white border border-[#e2e2e2] rounded-lg shadow-lg z-50 min-w-[180px] py-1 [direction:rtl]`,
  
  // Dropdown menu
  menu: `max-h-[300px] overflow-y-auto`,
  
  // Menu item
  item: `px-4 py-2 text-sm text-[#0E0D24] cursor-pointer hover:bg-[#f8f8f8] transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-2`,
  
  // Active item
  itemActive: `px-4 py-2 text-sm cursor-pointer transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-2 bg-[#093738]/5 text-[#093738]`,
  
  // Disabled item
  itemDisabled: `px-4 py-2 text-sm text-[#0E0D24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-2 opacity-50 cursor-not-allowed`,
  
  // Danger item
  itemDanger: `px-4 py-2 text-sm cursor-pointer hover:bg-[#ff0000]/5 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-2 text-[#ff0000]`,
  
  // Divider
  divider: `h-px bg-[#e2e2e2] my-1`,
  
  // Header
  header: `px-4 py-2 text-xs text-[#00000080] font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`,
  
  // Context menu
  contextMenu: `absolute bg-white border border-[#e2e2e2] rounded-lg shadow-xl z-50 min-w-[200px] py-1 [direction:rtl]`,
  
  // Context menu item
  contextItem: `px-4 py-2 text-sm text-[#0E0D24] cursor-pointer hover:bg-[#f8f8f8] transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center justify-between gap-3`,
  
  // Shortcut
  shortcut: `text-xs text-[#00000080]`,
  
  // Select menu
  selectMenu: `absolute w-full bg-white border border-[#cfcfcf] rounded-lg shadow-lg mt-1 max-h-[300px] overflow-y-auto z-50 [direction:rtl]`,
  
  // Select option
  option: `px-4 py-2 text-sm text-[#0E0D24] cursor-pointer hover:bg-[#f8f8f8] transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`,
  
  // Selected option
  optionSelected: `px-4 py-2 text-sm cursor-pointer hover:bg-[#f8f8f8] transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] bg-[#093738]/5 text-[#093738] font-medium`,
  
  // Popover
  popover: `absolute bg-white border border-[#e2e2e2] rounded-lg shadow-lg z-50 [direction:rtl]`,
  
  // Popover content
  popoverContent: `p-4`,
} as const;

export type DropdownClass = keyof typeof dropdownClasses;
