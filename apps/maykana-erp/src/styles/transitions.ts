/**
 * Maykana ERP Design System
 * Transitions & Animations Configuration
 * 
 * Animation durations, easing functions, and common transitions.
 */

export const transitions = {
  // Durations
  duration: {
    fast: '150ms',
    base: '200ms',
    medium: '300ms',
    slow: '500ms',
  },

  // Easing functions
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    custom: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Common transitions
  all: 'all 0.2s ease-in-out',
  colors: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
  transform: 'transform 0.3s ease',
  opacity: 'opacity 0.2s ease',
  shadow: 'box-shadow 0.3s ease',
} as const;

export const animations = {
  // Keyframe animations
  fadeIn: {
    name: 'fade-in',
    duration: '1s',
    easing: 'ease',
    keyframes: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
  },

  fadeUp: {
    name: 'fade-up',
    duration: '1s',
    easing: 'ease',
    keyframes: {
      '0%': { opacity: '0', transform: 'translateY(30px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },

  spin: {
    name: 'spin',
    duration: '1s',
    easing: 'linear',
    infinite: true,
    keyframes: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },

  slideDown: {
    name: 'accordion-down',
    duration: '0.2s',
    easing: 'ease-out',
    keyframes: {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' },
    },
  },

  slideUp: {
    name: 'accordion-up',
    duration: '0.2s',
    easing: 'ease-out',
    keyframes: {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' },
    },
  },
} as const;

// Tailwind class helpers
export const transitionClasses = {
  // Base transitions
  transition: 'transition-all duration-200',
  transitionColors: 'transition-colors duration-200',
  transitionTransform: 'transition-transform duration-300',
  transitionOpacity: 'transition-opacity duration-200',
  transitionShadow: 'transition-shadow duration-300',

  // Hover effects
  hoverScale: 'hover:scale-105 transition-transform',
  hoverLift: 'hover:-translate-y-1 transition-transform',
  hoverShadow: 'hover:shadow-lg transition-shadow',

  // Animation classes
  animateFadeIn: 'animate-fade-in',
  animateFadeUp: 'animate-fade-up',
  animateSpin: 'animate-spin',
  animateSlideDown: 'animate-accordion-down',
  animateSlideUp: 'animate-accordion-up',
} as const;

export type TransitionClass = keyof typeof transitionClasses;
