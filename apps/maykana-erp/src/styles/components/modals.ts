/**
 * Maykana ERP Design System
 * Modal & Dialog Styles Configuration
 * 
 * Modals, dialogs, and overlay components.
 */

export const modalStyles = {
  // Overlay/Backdrop
  overlay: `
    fixed inset-0
    bg-black/50
    z-50
    flex items-center justify-center
    animate-fadeIn
  `,

  // Modal container
  container: `
    bg-white
    rounded-xl
    shadow-2xl
    max-h-[90vh]
    overflow-hidden
    flex flex-col
    [direction:rtl]
  `,

  // Size variants
  sizes: {
    sm: 'w-[400px]',
    md: 'w-[600px]',
    lg: 'w-[800px]',
    xl: 'w-[1000px]',
    full: 'w-[95vw] h-[95vh]',
  },

  // Header
  header: `
    px-6 py-4
    border-b border-[#e2e2e2]
    flex items-center justify-between
    flex-shrink-0
  `,

  // Title
  title: `
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    text-xl
    font-semibold
    text-[#0E0D24]
  `,

  // Close button
  closeButton: `
    w-8 h-8
    flex items-center justify-center
    rounded-lg
    hover:bg-[#f8f8f8]
    transition-colors
    cursor-pointer
  `,

  // Body/Content
  body: `
    px-6 py-5
    overflow-y-auto
    flex-1
  `,

  // Footer
  footer: `
    px-6 py-4
    border-t border-[#e2e2e2]
    flex items-center gap-3
    justify-end
    flex-shrink-0
    [direction:rtl]
  `,
} as const;

export const drawerStyles = {
  // Overlay
  overlay: `
    fixed inset-0
    bg-black/50
    z-50
  `,

  // Drawer container
  container: `
    fixed top-0
    h-full
    bg-white
    shadow-2xl
    z-50
    flex flex-col
    [direction:rtl]
  `,

  // Side variants
  sides: {
    right: 'right-0 animate-slideLeft',
    left: 'left-0 animate-slideRight',
  },

  // Size variants
  sizes: {
    sm: 'w-[300px]',
    md: 'w-[400px]',
    lg: 'w-[600px]',
  },
} as const;

export const dialogStyles = {
  // Confirm dialog
  confirm: `
    bg-white
    rounded-xl
    shadow-2xl
    w-[450px]
    p-6
    [direction:rtl]
  `,

  // Dialog icon
  icon: {
    success: 'w-12 h-12 text-[#2cc28d] bg-[#2cc28d]/10 rounded-full flex items-center justify-center mx-auto mb-4',
    error: 'w-12 h-12 text-[#ff0000] bg-[#ff0000]/10 rounded-full flex items-center justify-center mx-auto mb-4',
    warning: 'w-12 h-12 text-[#f59e0b] bg-[#f59e0b]/10 rounded-full flex items-center justify-center mx-auto mb-4',
    info: 'w-12 h-12 text-[#41d1fe] bg-[#41d1fe]/10 rounded-full flex items-center justify-center mx-auto mb-4',
  },

  // Dialog title
  title: `
    text-xl
    font-semibold
    text-[#0E0D24]
    text-center
    mb-2
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
  `,

  // Dialog message
  message: `
    text-base
    text-[#00000080]
    text-center
    mb-6
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
  `,

  // Dialog actions
  actions: `
    flex items-center gap-3
    justify-center
    [direction:rtl]
  `,
} as const;

// Pre-composed modal classes
export const modalClasses = {
  // Standard modal
  modal: `bg-white rounded-xl shadow-2xl w-[600px] max-h-[90vh] overflow-hidden flex flex-col [direction:rtl]`,
  
  // Small modal
  modalSm: `bg-white rounded-xl shadow-2xl w-[400px] max-h-[90vh] overflow-hidden flex flex-col [direction:rtl]`,
  
  // Large modal
  modalLg: `bg-white rounded-xl shadow-2xl w-[800px] max-h-[90vh] overflow-hidden flex flex-col [direction:rtl]`,
  
  // XL modal
  modalXl: `bg-white rounded-xl shadow-2xl w-[1000px] max-h-[90vh] overflow-hidden flex flex-col [direction:rtl]`,
  
  // Full screen modal
  modalFull: `bg-white rounded-xl shadow-2xl w-[95vw] h-[95vh] overflow-hidden flex flex-col [direction:rtl]`,
  
  // Modal overlay
  overlay: `fixed inset-0 bg-black/50 z-50 flex items-center justify-center animate-fadeIn`,
  
  // Modal header
  modalHeader: `px-6 py-4 border-b border-[#e2e2e2] flex items-center justify-between flex-shrink-0`,
  
  // Modal title
  modalTitle: `[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xl font-semibold text-[#0E0D24]`,
  
  // Close button
  closeButton: `w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f8f8f8] transition-colors cursor-pointer`,
  
  // Modal body
  modalBody: `px-6 py-5 overflow-y-auto flex-1`,
  
  // Modal footer
  modalFooter: `px-6 py-4 border-t border-[#e2e2e2] flex items-center gap-3 justify-end flex-shrink-0 [direction:rtl]`,
  
  // Confirm dialog
  confirmDialog: `bg-white rounded-xl shadow-2xl w-[450px] p-6 [direction:rtl]`,
  
  // Dialog title
  dialogTitle: `text-xl font-semibold text-[#0E0D24] text-center mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`,
  
  // Dialog message
  dialogMessage: `text-base text-[#00000080] text-center mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`,
  
  // Dialog actions
  dialogActions: `flex items-center gap-3 justify-center [direction:rtl]`,
} as const;

export type ModalClass = keyof typeof modalClasses;
