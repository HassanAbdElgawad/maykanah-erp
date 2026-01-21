/**
 * Maykana ERP Design System
 * Table Styles Configuration
 * 
 * Tables, data grids, and tabular data components.
 */

export const tableStyles = {
  // Table container
  container: `
    w-full
    overflow-x-auto
    rounded-xl
    border border-[#e2e2e2]
    bg-white
  `,

  // Table element
  table: `
    w-full
    border-collapse
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    [direction:rtl]
  `,

  // Table header
  thead: `
    bg-[#f7f7f9]
    border-b border-[#e2e2e2]
  `,

  // Header cell
  th: `
    px-4 py-3
    text-right
    text-sm
    font-semibold
    text-[#0E0D24]
    whitespace-nowrap
  `,

  // Table body
  tbody: `
    divide-y divide-[#e2e2e2]
  `,

  // Body row
  tr: `
    hover:bg-[#f8f8f8]
    transition-colors
  `,

  // Body cell
  td: `
    px-4 py-3
    text-sm
    text-[#0E0D24]
    [direction:rtl]
  `,

  // Row states
  rowStates: {
    default: 'hover:bg-[#f8f8f8]',
    selected: 'bg-[#093738]/5',
    clickable: 'hover:bg-[#f8f8f8] cursor-pointer',
    disabled: 'opacity-50 cursor-not-allowed',
  },

  // Cell variants
  cellVariants: {
    numeric: 'text-left font-mono',
    actions: 'text-center',
    status: 'text-center',
  },

  // Empty state
  empty: `
    py-12
    text-center
    text-[#00000080]
    text-sm
  `,
} as const;

export const dataGridStyles = {
  // Toolbar
  toolbar: `
    px-5 py-4
    border-b border-[#e2e2e2]
    flex items-center justify-between
    gap-4
    [direction:rtl]
  `,

  // Search bar
  search: `
    flex-1
    max-w-md
  `,

  // Actions
  actions: `
    flex items-center gap-2
  `,

  // Pagination
  pagination: `
    px-5 py-3
    border-t border-[#e2e2e2]
    flex items-center justify-between
    [direction:rtl]
  `,

  // Page info
  pageInfo: `
    text-sm
    text-[#00000080]
  `,

  // Page controls
  pageControls: `
    flex items-center gap-2
  `,
} as const;

// Pre-composed table classes
export const tableClasses = {
  // Table container
  container: `w-full overflow-x-auto rounded-xl border border-[#e2e2e2] bg-white`,
  
  // Table element
  table: `w-full border-collapse [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]`,
  
  // Table header
  thead: `bg-[#f7f7f9] border-b border-[#e2e2e2]`,
  
  // Header cell
  th: `px-4 py-3 text-right text-sm font-semibold text-[#0E0D24] whitespace-nowrap`,
  
  // Header cell (sortable)
  thSortable: `px-4 py-3 text-right text-sm font-semibold text-[#0E0D24] whitespace-nowrap cursor-pointer hover:bg-[#efefef] transition-colors`,
  
  // Table body
  tbody: `divide-y divide-[#e2e2e2]`,
  
  // Body row
  tr: `hover:bg-[#f8f8f8] transition-colors`,
  
  // Body row (clickable)
  trClickable: `hover:bg-[#f8f8f8] transition-colors cursor-pointer`,
  
  // Body row (selected)
  trSelected: `bg-[#093738]/5 hover:bg-[#093738]/10`,
  
  // Body cell
  td: `px-4 py-3 text-sm text-[#0E0D24] [direction:rtl]`,
  
  // Cell (numeric)
  tdNumeric: `px-4 py-3 text-sm text-[#0E0D24] text-left font-mono`,
  
  // Cell (actions)
  tdActions: `px-4 py-3 text-sm text-center`,
  
  // Empty state
  empty: `py-12 text-center text-[#00000080] text-sm`,
  
  // Toolbar
  toolbar: `px-5 py-4 border-b border-[#e2e2e2] flex items-center justify-between gap-4 [direction:rtl]`,
  
  // Pagination
  pagination: `px-5 py-3 border-t border-[#e2e2e2] flex items-center justify-between [direction:rtl]`,
  
  // Page info
  pageInfo: `text-sm text-[#00000080]`,
  
  // Page controls
  pageControls: `flex items-center gap-2`,
} as const;

export type TableClass = keyof typeof tableClasses;
