/**
 * Maykana ERP Design System
 * Alert & Notification Styles Configuration
 * 
 * Alerts, toasts, banners, and notification components.
 */

export const alertStyles = {
  // Base alert styles
  base: `
    px-4 py-3
    rounded-lg
    border
    flex items-start gap-3
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    [direction:rtl]
  `,

  // Icon container
  icon: `
    flex-shrink-0
    w-5 h-5
  `,

  // Content
  content: `
    flex-1
  `,

  // Title
  title: `
    font-semibold
    text-sm
    mb-1
  `,

  // Message
  message: `
    text-sm
  `,

  // Close button
  closeButton: `
    flex-shrink-0
    w-5 h-5
    cursor-pointer
    opacity-70
    hover:opacity-100
    transition-opacity
  `,

  // Variants
  variants: {
    success: `
      bg-[#2cc28d]/10
      border-[#2cc28d]/30
      text-[#07b664]
    `,
    error: `
      bg-[#ff0000]/10
      border-[#ff0000]/30
      text-[#ff0000]
    `,
    warning: `
      bg-[#f59e0b]/10
      border-[#f59e0b]/30
      text-[#f59e0b]
    `,
    info: `
      bg-[#41d1fe]/10
      border-[#41d1fe]/30
      text-[#0891b2]
    `,
    default: `
      bg-[#f3f4f6]
      border-[#e5e7eb]
      text-[#1f2937]
    `,
  },
} as const;

export const toastStyles = {
  // Toast container (for positioning)
  container: `
    fixed
    z-[9999]
    pointer-events-none
  `,

  // Container positions
  positions: {
    topRight: 'top-4 right-4',
    topLeft: 'top-4 left-4',
    topCenter: 'top-4 left-1/2 -translate-x-1/2',
    bottomRight: 'bottom-4 right-4',
    bottomLeft: 'bottom-4 left-4',
    bottomCenter: 'bottom-4 left-1/2 -translate-x-1/2',
  },

  // Toast element
  toast: `
    bg-white
    border border-[#e2e2e2]
    rounded-lg
    shadow-xl
    px-4 py-3
    min-w-[300px]
    max-w-[500px]
    flex items-start gap-3
    pointer-events-auto
    animate-fadeUp
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    [direction:rtl]
  `,

  // Icon
  icon: `
    flex-shrink-0
    w-5 h-5
  `,

  // Content
  content: `
    flex-1
  `,

  // Title
  title: `
    font-semibold
    text-sm
    mb-0.5
  `,

  // Message
  message: `
    text-sm
    text-[#00000080]
  `,

  // Close button
  closeButton: `
    flex-shrink-0
    w-5 h-5
    cursor-pointer
    opacity-70
    hover:opacity-100
    transition-opacity
  `,

  // Variants with colored left border
  variants: {
    success: 'border-l-4 border-l-[#2cc28d]',
    error: 'border-l-4 border-l-[#ff0000]',
    warning: 'border-l-4 border-l-[#f59e0b]',
    info: 'border-l-4 border-l-[#41d1fe]',
    default: '',
  },
} as const;

export const bannerStyles = {
  // Banner container
  container: `
    w-full
    px-6 py-4
    border-b
    flex items-center justify-between
    gap-4
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    [direction:rtl]
  `,

  // Content
  content: `
    flex items-center gap-3
    flex-1
  `,

  // Icon
  icon: `
    flex-shrink-0
    w-5 h-5
  `,

  // Text
  text: `
    text-sm
    font-medium
  `,

  // Actions
  actions: `
    flex items-center gap-2
  `,

  // Close button
  closeButton: `
    w-5 h-5
    cursor-pointer
    opacity-70
    hover:opacity-100
    transition-opacity
  `,

  // Variants
  variants: {
    success: `
      bg-[#2cc28d]/10
      border-[#2cc28d]/30
      text-[#07b664]
    `,
    error: `
      bg-[#ff0000]/10
      border-[#ff0000]/30
      text-[#ff0000]
    `,
    warning: `
      bg-[#f59e0b]/10
      border-[#f59e0b]/30
      text-[#f59e0b]
    `,
    info: `
      bg-[#41d1fe]/10
      border-[#41d1fe]/30
      text-[#0891b2]
    `,
    default: `
      bg-[#f3f4f6]
      border-[#e5e7eb]
      text-[#1f2937]
    `,
  },
} as const;

// Pre-composed alert classes
export const alertClasses = {
  // Alert base
  alert: `px-4 py-3 rounded-lg border flex items-start gap-3 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]`,
  
  // Success alert
  alertSuccess: `px-4 py-3 rounded-lg border flex items-start gap-3 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] bg-[#2cc28d]/10 border-[#2cc28d]/30 text-[#07b664]`,
  
  // Error alert
  alertError: `px-4 py-3 rounded-lg border flex items-start gap-3 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] bg-[#ff0000]/10 border-[#ff0000]/30 text-[#ff0000]`,
  
  // Warning alert
  alertWarning: `px-4 py-3 rounded-lg border flex items-start gap-3 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] bg-[#f59e0b]/10 border-[#f59e0b]/30 text-[#f59e0b]`,
  
  // Info alert
  alertInfo: `px-4 py-3 rounded-lg border flex items-start gap-3 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] bg-[#41d1fe]/10 border-[#41d1fe]/30 text-[#0891b2]`,
  
  // Default alert
  alertDefault: `px-4 py-3 rounded-lg border flex items-start gap-3 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] bg-[#f3f4f6] border-[#e5e7eb] text-[#1f2937]`,
  
  // Alert icon
  alertIcon: `flex-shrink-0 w-5 h-5`,
  
  // Alert content
  alertContent: `flex-1`,
  
  // Alert title
  alertTitle: `font-semibold text-sm mb-1`,
  
  // Alert message
  alertMessage: `text-sm`,
  
  // Close button
  alertClose: `flex-shrink-0 w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity`,
  
  // Toast container
  toastContainer: `fixed z-[9999] pointer-events-none`,
  
  // Toast element
  toast: `bg-white border border-[#e2e2e2] rounded-lg shadow-xl px-4 py-3 min-w-[300px] max-w-[500px] flex items-start gap-3 pointer-events-auto animate-fadeUp [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]`,
  
  // Toast with variants
  toastSuccess: `bg-white border border-[#e2e2e2] rounded-lg shadow-xl px-4 py-3 min-w-[300px] max-w-[500px] flex items-start gap-3 pointer-events-auto animate-fadeUp [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] border-l-4 border-l-[#2cc28d]`,
  toastError: `bg-white border border-[#e2e2e2] rounded-lg shadow-xl px-4 py-3 min-w-[300px] max-w-[500px] flex items-start gap-3 pointer-events-auto animate-fadeUp [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] border-l-4 border-l-[#ff0000]`,
  toastWarning: `bg-white border border-[#e2e2e2] rounded-lg shadow-xl px-4 py-3 min-w-[300px] max-w-[500px] flex items-start gap-3 pointer-events-auto animate-fadeUp [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] border-l-4 border-l-[#f59e0b]`,
  toastInfo: `bg-white border border-[#e2e2e2] rounded-lg shadow-xl px-4 py-3 min-w-[300px] max-w-[500px] flex items-start gap-3 pointer-events-auto animate-fadeUp [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] border-l-4 border-l-[#41d1fe]`,
  
  // Toast content
  toastContent: `flex-1`,
  toastTitle: `font-semibold text-sm mb-0.5`,
  toastMessage: `text-sm text-[#00000080]`,
  
  // Banner
  banner: `w-full px-6 py-4 border-b flex items-center justify-between gap-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]`,
  
  // Banner variants
  bannerSuccess: `w-full px-6 py-4 border-b flex items-center justify-between gap-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] bg-[#2cc28d]/10 border-[#2cc28d]/30 text-[#07b664]`,
  bannerError: `w-full px-6 py-4 border-b flex items-center justify-between gap-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] bg-[#ff0000]/10 border-[#ff0000]/30 text-[#ff0000]`,
  bannerWarning: `w-full px-6 py-4 border-b flex items-center justify-between gap-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] bg-[#f59e0b]/10 border-[#f59e0b]/30 text-[#f59e0b]`,
  bannerInfo: `w-full px-6 py-4 border-b flex items-center justify-between gap-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] bg-[#41d1fe]/10 border-[#41d1fe]/30 text-[#0891b2]`,
  
  // Banner content
  bannerContent: `flex items-center gap-3 flex-1`,
  bannerIcon: `flex-shrink-0 w-5 h-5`,
  bannerText: `text-sm font-medium`,
  bannerActions: `flex items-center gap-2`,
  bannerClose: `w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity`,
} as const;

export type AlertClass = keyof typeof alertClasses;
