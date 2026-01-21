/**
 * Maykana ERP Design System
 * Badge & Pill Styles Configuration
 * 
 * Badges, pills, status indicators, and tag components.
 */

export const badgeStyles = {
  // Base badge styles
  base: `
    inline-flex
    items-center
    px-2.5 py-1
    rounded-lg
    text-xs
    font-medium
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
    whitespace-nowrap
  `,

  // Size variants
  sizes: {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
  },

  // Color variants
  variants: {
    primary: 'bg-[#093738] text-white',
    primaryLight: 'bg-[#093738]/10 text-[#093738]',
    success: 'bg-[#2cc28d] text-white',
    successLight: 'bg-[#2cc28d]/10 text-[#07b664]',
    error: 'bg-[#ff0000] text-white',
    errorLight: 'bg-[#ff0000]/10 text-[#ff0000]',
    warning: 'bg-[#f59e0b] text-white',
    warningLight: 'bg-[#f59e0b]/10 text-[#f59e0b]',
    info: 'bg-[#41d1fe] text-white',
    infoLight: 'bg-[#41d1fe]/10 text-[#0891b2]',
    purple: 'bg-[#8b5cf6] text-white',
    purpleLight: 'bg-[#8b5cf6]/10 text-[#8b5cf6]',
    gray: 'bg-[#6b7280] text-white',
    grayLight: 'bg-[#f3f4f6] text-[#6b7280]',
  },

  // Badge with dot indicator
  withDot: `
    inline-flex
    items-center
    gap-1.5
  `,

  // Dot element
  dot: 'w-2 h-2 rounded-full',

  // Badge with close button
  withClose: `
    inline-flex
    items-center
    gap-2
    pr-1.5
  `,

  // Close button
  closeButton: `
    w-4 h-4
    flex items-center justify-center
    rounded
    hover:bg-black/10
    transition-colors
    cursor-pointer
  `,
} as const;

export const statusIndicatorStyles = {
  // Base indicator
  base: `
    inline-flex
    items-center
    gap-2
    text-sm
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
  `,

  // Indicator dot
  dot: `
    w-2.5 h-2.5
    rounded-full
  `,

  // Status colors
  statuses: {
    active: 'bg-[#2cc28d]',
    inactive: 'bg-[#6b7280]',
    pending: 'bg-[#f59e0b]',
    error: 'bg-[#ff0000]',
    success: 'bg-[#07b664]',
    info: 'bg-[#41d1fe]',
  },

  // Animated pulse
  pulse: 'animate-pulse',
} as const;

export const pillStyles = {
  // Base pill (rounded full)
  base: `
    inline-flex
    items-center
    px-3 py-1
    rounded-full
    text-xs
    font-medium
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
  `,

  // Interactive pill (clickable)
  interactive: `
    cursor-pointer
    hover:opacity-80
    transition-opacity
  `,
} as const;

export const counterBadgeStyles = {
  // Base counter
  base: `
    inline-flex
    items-center
    justify-center
    min-w-[20px]
    h-5
    px-1.5
    rounded-full
    text-[10px]
    font-semibold
    [font-family:'IBM_Plex_Sans_Arabic',Helvetica]
  `,

  // Positions (for absolute positioning on icons/buttons)
  positions: {
    topRight: 'absolute -top-1 -right-1',
    topLeft: 'absolute -top-1 -left-1',
  },
} as const;

// Pre-composed badge classes
export const badgeClasses = {
  // Primary badges
  badge: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#093738] text-white`,
  badgeLight: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#093738]/10 text-[#093738]`,
  
  // Success badges
  badgeSuccess: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#2cc28d] text-white`,
  badgeSuccessLight: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#2cc28d]/10 text-[#07b664]`,
  
  // Error badges
  badgeError: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#ff0000] text-white`,
  badgeErrorLight: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#ff0000]/10 text-[#ff0000]`,
  
  // Warning badges
  badgeWarning: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#f59e0b] text-white`,
  badgeWarningLight: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#f59e0b]/10 text-[#f59e0b]`,
  
  // Info badges
  badgeInfo: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#41d1fe] text-white`,
  badgeInfoLight: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#41d1fe]/10 text-[#0891b2]`,
  
  // Purple badges
  badgePurple: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#8b5cf6] text-white`,
  badgePurpleLight: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#8b5cf6]/10 text-[#8b5cf6]`,
  
  // Gray badges
  badgeGray: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#6b7280] text-white`,
  badgeGrayLight: `inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#f3f4f6] text-[#6b7280]`,
  
  // Small badges
  badgeSm: `inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#093738] text-white`,
  
  // Large badges
  badgeLg: `inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] whitespace-nowrap bg-[#093738] text-white`,
  
  // Status indicators
  statusActive: `inline-flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`,
  statusDot: `w-2.5 h-2.5 rounded-full`,
  statusDotActive: `w-2.5 h-2.5 rounded-full bg-[#2cc28d]`,
  statusDotInactive: `w-2.5 h-2.5 rounded-full bg-[#6b7280]`,
  statusDotPending: `w-2.5 h-2.5 rounded-full bg-[#f59e0b]`,
  statusDotError: `w-2.5 h-2.5 rounded-full bg-[#ff0000]`,
  
  // Pills
  pill: `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] bg-[#093738]/10 text-[#093738]`,
  
  // Counter badge
  counter: `inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] bg-[#ff0000] text-white`,
} as const;

export type BadgeClass = keyof typeof badgeClasses;
