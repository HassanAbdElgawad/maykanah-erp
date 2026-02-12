# Responsive & Localization Guide

## Overview

This guide explains how to implement responsive design and localization in the Maykana ERP presentation slides.

## Responsive Design

### 1. Using Responsive Utilities

Import the utilities:

```tsx
import { 
  useBreakpoint, 
  useIsMobile, 
  responsiveText, 
  responsiveSpacing,
  responsiveContainer,
  cn 
} from '../utils/responsive';
```

### 2. Responsive Hooks

```tsx
const MySlide = () => {
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  
  return (
    <div>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
      <p>Current breakpoint: {breakpoint}</p>
    </div>
  );
};
```

### 3. Responsive Text Classes

```tsx
// Headings
<h1 className={responsiveText.h1}>Main Title</h1>
<h2 className={responsiveText.h2}>Subtitle</h2>

// Body text
<p className={responsiveText.body}>Regular text</p>
<p className={responsiveText.bodyLarge}>Large text</p>
```

### 4. Responsive Spacing

```tsx
// Margins
<div className={responsiveSpacing.marginBottom.md}>
  Content with responsive bottom margin
</div>

// Padding
<div className={responsiveSpacing.padding.lg}>
  Content with responsive padding
</div>

// Gaps
<div className={cn('flex', responsiveSpacing.gap.sm)}>
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### 5. Responsive Containers

```tsx
// Different container sizes
<div className={cn('mx-auto', responsiveContainer.wide)}>
  Wide container
</div>

<div className={cn('mx-auto', responsiveContainer.normal, responsiveContainer.padding)}>
  Normal container with padding
</div>
```

### 6. Responsive Grids

```tsx
import { responsiveGrid } from '../utils/responsive';

<div className={cn('grid', responsiveGrid.cols3, responsiveSpacing.gap.md)}>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

## Localization

### 1. Using Translation Files

Import translations:

```tsx
import { getTranslation, coverSlide } from '../translations';
import { useLanguage } from '../../../contexts/LanguageContext';

const MySlide = () => {
  const { language } = useLanguage();
  const t = getTranslation(coverSlide, language);
  
  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      {t.bullets?.map((bullet, i) => (
        <li key={i}>{bullet}</li>
      ))}
    </div>
  );
};
```

### 2. Adding New Slide Translations

In `translations.ts`:

```tsx
export const myNewSlide: SlideContent = {
  ar: {
    title: 'العنوان بالعربي',
    subtitle: 'العنوان الفرعي',
    content: [
      'نقطة أولى',
      'نقطة ثانية',
    ],
    bullets: [
      'ميزة 1',
      'ميزة 2',
      'ميزة 3',
    ],
  },
  en: {
    title: 'English Title',
    subtitle: 'Subtitle',
    content: [
      'First point',
      'Second point',
    ],
    bullets: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
  },
};

// Add to slides dictionary
export const slides: Record<number, SlideContent> = {
  1: coverSlide,
  2: myNewSlide,
  // ...
};
```

### 3. RTL Support

The application automatically applies RTL when Arabic is selected:

```tsx
import { useLanguage } from '../../../contexts/LanguageContext';

const MyComponent = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'text-right' : 'text-left'}>
      Content
    </div>
  );
};
```

## Complete Example

Here's a complete responsive and localized slide component:

```tsx
import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getTranslation, overviewSlide } from '../translations';
import { 
  useIsMobile, 
  responsiveText, 
  responsiveSpacing,
  responsiveContainer,
  cn 
} from '../utils/responsive';

export const OverviewSlide = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const isRTL = language === 'ar';
  const t = getTranslation(overviewSlide, language);

  return (
    <div 
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-br from-[#093738] to-[#1e7e34] flex items-center justify-center"
    >
      <div className={cn(
        responsiveContainer.wide,
        responsiveContainer.padding,
        'text-center'
      )}>
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            responsiveText.h1,
            'text-white font-bold',
            responsiveSpacing.marginBottom.md
          )}
        >
          {t.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={cn(
            responsiveText.h3,
            'text-success',
            responsiveSpacing.marginBottom.lg
          )}
        >
          {t.subtitle}
        </motion.h2>

        {/* Content */}
        <div className={cn(
          'grid',
          isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3',
          responsiveSpacing.gap.md
        )}>
          {t.bullets?.map((bullet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={cn(
                'bg-white/10 backdrop-blur-sm rounded-lg',
                responsiveSpacing.padding.md
              )}
            >
              <p className={cn(
                responsiveText.body,
                'text-white'
              )}>
                {bullet}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
```

## Best Practices

### Responsive Design

1. **Mobile First**: Start with mobile layout, then add larger breakpoints
2. **Use Hooks**: Leverage `useIsMobile()`, `useIsTablet()` for conditional rendering
3. **Consistent Spacing**: Use predefined spacing utilities
4. **Test on Multiple Devices**: Test on mobile, tablet, and desktop
5. **Reduce Animations on Mobile**: Use `getAnimationDelay()` to adjust timing

### Localization

1. **Complete Translations**: Always provide both AR and EN
2. **RTL Testing**: Test Arabic layout thoroughly
3. **Text Length**: Account for different text lengths in layouts
4. **Cultural Considerations**: Use appropriate imagery and colors
5. **Date/Number Formatting**: Consider locale-specific formats

## Testing Checklist

- [ ] Mobile (< 640px) - Portrait and landscape
- [ ] Tablet (640px - 1024px) - Portrait and landscape
- [ ] Desktop (> 1024px) - Multiple resolutions
- [ ] Arabic RTL layout
- [ ] English LTR layout
- [ ] All text translated
- [ ] Images and icons properly aligned
- [ ] Animations smooth on all devices
- [ ] Password protection working
- [ ] Session timeout functioning

## Next Steps

1. Apply responsive utilities to CoverSlide
2. Create second slide (OverviewSlide) with full i18n
3. Add more slide translations to translations.ts
4. Test on different screen sizes
5. Optimize animations for mobile
