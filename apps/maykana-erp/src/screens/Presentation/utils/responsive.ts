/**
 * Responsive Design Utilities for Presentation
 * Tailwind breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
 */

import { useState, useEffect } from 'react';

// Breakpoint values
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

// Hook to detect current breakpoint
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('2xl');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width >= breakpoints['2xl']) {
        setBreakpoint('2xl');
      } else if (width >= breakpoints.xl) {
        setBreakpoint('xl');
      } else if (width >= breakpoints.lg) {
        setBreakpoint('lg');
      } else if (width >= breakpoints.md) {
        setBreakpoint('md');
      } else if (width >= breakpoints.sm) {
        setBreakpoint('sm');
      } else {
        setBreakpoint('sm');
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

// Hook to detect if mobile device
export const useIsMobile = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'sm' || breakpoint === 'md';
};

// Hook to detect if tablet
export const useIsTablet = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'md' || breakpoint === 'lg';
};

// Hook to detect if desktop
export const useIsDesktop = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'xl' || breakpoint === '2xl';
};

// Responsive font size classes
export const responsiveText = {
  // Headings
  h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
  h4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
  h5: 'text-base sm:text-lg md:text-xl lg:text-2xl',
  
  // Body text
  body: 'text-sm sm:text-base md:text-lg',
  bodyLarge: 'text-base sm:text-lg md:text-xl',
  bodySmall: 'text-xs sm:text-sm md:text-base',
  
  // Display text
  display: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
} as const;

// Responsive spacing classes
export const responsiveSpacing = {
  // Margins
  marginTop: {
    xs: 'mt-2 md:mt-3 lg:mt-4',
    sm: 'mt-4 md:mt-6 lg:mt-8',
    md: 'mt-6 md:mt-8 lg:mt-12',
    lg: 'mt-8 md:mt-12 lg:mt-16',
    xl: 'mt-12 md:mt-16 lg:mt-24',
  },
  marginBottom: {
    xs: 'mb-2 md:mb-3 lg:mb-4',
    sm: 'mb-4 md:mb-6 lg:mb-8',
    md: 'mb-6 md:mb-8 lg:mb-12',
    lg: 'mb-8 md:mb-12 lg:mb-16',
    xl: 'mb-12 md:mb-16 lg:mb-24',
  },
  
  // Padding
  padding: {
    xs: 'p-2 md:p-3 lg:p-4',
    sm: 'p-4 md:p-6 lg:p-8',
    md: 'p-6 md:p-8 lg:p-12',
    lg: 'p-8 md:p-12 lg:p-16',
    xl: 'p-12 md:p-16 lg:p-24',
  },
  
  // Gaps
  gap: {
    xs: 'gap-2 md:gap-3 lg:gap-4',
    sm: 'gap-4 md:gap-6 lg:gap-8',
    md: 'gap-6 md:gap-8 lg:gap-12',
    lg: 'gap-8 md:gap-12 lg:gap-16',
  },
} as const;

// Responsive container classes
export const responsiveContainer = {
  // Max widths
  narrow: 'max-w-sm md:max-w-md lg:max-w-lg',
  normal: 'max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl',
  wide: 'max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl',
  full: 'max-w-3xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl',
  
  // Padding
  padding: 'px-4 sm:px-6 md:px-8 lg:px-12',
} as const;

// Responsive grid classes
export const responsiveGrid = {
  cols2: 'grid-cols-1 md:grid-cols-2',
  cols3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  cols4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  cols6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6',
} as const;

// Logo sizes
export const responsiveLogoSize = {
  small: 'h-8 md:h-10 lg:h-12',
  medium: 'h-12 md:h-16 lg:h-20',
  large: 'h-20 md:h-28 lg:h-36',
  xlarge: 'h-28 md:h-36 lg:h-44',
} as const;

// Slide content padding for different screen sizes
export const slideContentPadding = 'p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20';

// Navigation button sizes
export const navButtonSize = {
  mobile: 'p-2 w-10 h-10',
  tablet: 'md:p-3 md:w-12 md:h-12',
  desktop: 'lg:p-4 lg:w-14 lg:h-14',
} as const;

// Helper function to combine classes
export const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Responsive animation delays based on device
export const getAnimationDelay = (isMobile: boolean, baseDelay: number) => {
  return isMobile ? baseDelay * 0.7 : baseDelay;
};

// Reduce motion detection
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};
