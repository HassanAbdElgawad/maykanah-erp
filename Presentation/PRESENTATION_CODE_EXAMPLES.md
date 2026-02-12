# أمثلة الكود للعرض التقديمي | Presentation Code Examples

> **أمثلة React جاهزة للاستخدام مباشرة**  
> استخدم هذه الأمثلة لبناء العرض التقديمي في التطبيق

---

## 📦 التثبيت | Installation

```bash
# Animation Libraries
pnpm add framer-motion
pnpm add swiper
pnpm add react-intersection-observer

# Charts للتقارير والتحليلات
pnpm add recharts

# Icons (إذا لم تكن مثبتة)
pnpm add lucide-react
```

---

## 🎯 المكون الرئيسي | Main Component

### `PresentationView.tsx`

```typescript
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { SlideNavigation } from './components/SlideNavigation';
import { ProgressBar } from './components/ProgressBar';
import { LanguageToggle } from './components/LanguageToggle';
import { FullscreenToggle } from './components/FullscreenToggle';
import { SLIDES } from './data/slides';
import { useKeyboardControls } from './hooks/useKeyboardControls';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PresentationView: React.FC = () => {
  const navigate = useNavigate();
  const { slideNumber } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [currentSlide, setCurrentSlide] = useState(
    slideNumber ? parseInt(slideNumber) - 1 : 0
  );
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>(
    (searchParams.get('lang') as 'ar' | 'en') || 'ar'
  );
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const totalSlides = SLIDES.length;

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      navigate(`/presentation/${index + 1}?lang=${language}`);
    }
  }, [currentSlide, totalSlides, navigate, language]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const previousSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    setSearchParams({ lang: newLang });
  }, [language, setSearchParams]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard controls
  useKeyboardControls({
    onNext: nextSlide,
    onPrevious: previousSlide,
    onFirst: () => goToSlide(0),
    onLast: () => goToSlide(totalSlides - 1),
    onToggleFullscreen: toggleFullscreen,
    onToggleLanguage: toggleLanguage,
    onToggleAutoPlay: () => setIsAutoPlay(!isAutoPlay)
  });

  // Auto-play
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      if (currentSlide < totalSlides - 1) {
        nextSlide();
      } else {
        setIsAutoPlay(false);
      }
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, [isAutoPlay, currentSlide, totalSlides, nextSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide].component;

  return (
    <Layout>
      <div className="relative h-screen bg-white overflow-hidden">
        {/* Progress Bar */}
        <ProgressBar 
          current={currentSlide + 1} 
          total={totalSlides} 
        />

        {/* Controls */}
        <div className="absolute top-4 left-4 z-50 flex gap-2">
          <LanguageToggle 
            language={language} 
            onToggle={toggleLanguage} 
          />
          <FullscreenToggle 
            isFullscreen={isFullscreen} 
            onToggle={toggleFullscreen} 
          />
        </div>

        {/* Slide Content */}
        <div className="h-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full h-full"
            >
              <CurrentSlideComponent language={language} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <SlideNavigation
          current={currentSlide}
          total={totalSlides}
          onPrevious={previousSlide}
          onNext={nextSlide}
          onGoToSlide={goToSlide}
        />

        {/* Mobile Navigation Buttons */}
        <button
          onClick={previousSlide}
          disabled={currentSlide === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primaryHover transition-colors z-40"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primaryHover transition-colors z-40"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </Layout>
  );
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};
```

---

## 🧩 المكونات الفرعية | Sub Components

### `ProgressBar.tsx`

```typescript
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <motion.div
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute top-2 right-4 text-xs text-gray-600">
        {current} / {total}
      </div>
    </div>
  );
};
```

### `LanguageToggle.tsx`

```typescript
import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  language: 'ar' | 'en';
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  language, 
  onToggle 
}) => {
  return (
    <button
      onClick={onToggle}
      className="bg-white shadow-md rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors"
      title="تبديل اللغة | Toggle Language (L)"
    >
      <Languages className="w-5 h-5 text-primary" />
      <span className="text-sm font-medium">
        {language === 'ar' ? 'EN' : 'عربي'}
      </span>
    </button>
  );
};
```

### `FullscreenToggle.tsx`

```typescript
import React from 'react';
import { Maximize, Minimize } from 'lucide-react';

interface FullscreenToggleProps {
  isFullscreen: boolean;
  onToggle: () => void;
}

export const FullscreenToggle: React.FC<FullscreenToggleProps> = ({ 
  isFullscreen, 
  onToggle 
}) => {
  return (
    <button
      onClick={onToggle}
      className="bg-white shadow-md rounded-lg p-2 hover:bg-gray-50 transition-colors"
      title={isFullscreen ? "خروج من ملء الشاشة" : "ملء الشاشة"}
    >
      {isFullscreen ? (
        <Minimize className="w-5 h-5 text-primary" />
      ) : (
        <Maximize className="w-5 h-5 text-primary" />
      )}
    </button>
  );
};
```

### `SlideNavigation.tsx`

```typescript
import React from 'react';
import { motion } from 'framer-motion';

interface SlideNavigationProps {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  current,
  total,
  onGoToSlide
}) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
      {Array.from({ length: total }, (_, i) => (
        <motion.button
          key={i}
          onClick={() => onGoToSlide(i)}
          className={`w-3 h-3 rounded-full transition-all ${
            i === current 
              ? 'bg-primary w-8' 
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title={`السلايد ${i + 1}`}
        />
      ))}
    </div>
  );
};
```

---

## 🎨 أمثلة السلايدات | Slide Examples

### `CoverSlide.tsx`

```typescript
import React from 'react';
import { motion } from 'framer-motion';

interface CoverSlideProps {
  language: 'ar' | 'en';
}

export const CoverSlide: React.FC<CoverSlideProps> = ({ language }) => {
  const content = {
    ar: {
      title: "نظام ميكنة لتخطيط موارد المؤسسات",
      subtitle: "نظام متكامل لإدارة كافة عمليات المؤسسة",
      highlight: "Maykana ERP System"
    },
    en: {
      title: "Maykana ERP System",
      subtitle: "Complete Enterprise Resource Planning Solution",
      highlight: "Enterprise Management System"
    }
  };

  const t = content[language];

  return (
    <div 
      className="h-full flex flex-col items-center justify-center text-white"
      style={{ background: 'linear-gradient(135deg, #093738 0%, #0a4849 100%)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Icon/Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="text-8xl">🏢</div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-6xl font-bold mb-4"
          style={{ fontFamily: language === 'ar' ? 'IBM Plex Sans Arabic' : 'inherit' }}
        >
          {t.title}
        </motion.h1>

        {/* Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="text-4xl font-semibold mb-6"
          style={{ color: '#2cc28d' }}
        >
          {t.highlight}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-2xl max-w-3xl mx-auto"
        >
          {t.subtitle}
        </motion.p>

        {/* Animated Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            delay: 1.2,
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="mt-12 text-3xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </div>
  );
};
```

### `ModuleSlide.tsx` (قابل لإعادة الاستخدام)

```typescript
import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  icon: string;
  ar: string;
  en: string;
  description: {
    ar: string;
    en: string;
  };
}

interface ModuleSlideProps {
  language: 'ar' | 'en';
  title: { ar: string; en: string };
  icon: string;
  color: string;
  description: { ar: string; en: string };
  features: Feature[];
  background?: string;
}

export const ModuleSlide: React.FC<ModuleSlideProps> = ({
  language,
  title,
  icon,
  color,
  description,
  features,
  background = '#FFFFFF'
}) => {
  const isRTL = language === 'ar';

  return (
    <div 
      className="h-full p-12 overflow-auto"
      style={{ backgroundColor: background }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-7xl mb-4"
        >
          {icon}
        </motion.div>
        
        <h2 
          className="text-5xl font-bold mb-3"
          style={{ color }}
        >
          {title[language]}
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description[language]}
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-100"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2" style={{ color }}>
              {feature[language]}
            </h3>
            <p className="text-gray-600 text-sm">
              {feature.description[language]}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
```

### `TwoColumnSlide.tsx`

```typescript
import React from 'react';
import { motion } from 'framer-motion';

interface TwoColumnSlideProps {
  language: 'ar' | 'en';
  title: { ar: string; en: string };
  icon: string;
  leftColumn: {
    header: { ar: string; en: string };
    items: { ar: string; en: string }[];
  };
  rightColumn: {
    header: { ar: string; en: string };
    items: { ar: string; en: string }[];
  };
}

export const TwoColumnSlide: React.FC<TwoColumnSlideProps> = ({
  language,
  title,
  icon,
  leftColumn,
  rightColumn
}) => {
  const isRTL = language === 'ar';

  return (
    <div className="h-full p-12 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="text-6xl mb-4">{icon}</div>
        <h2 className="text-5xl font-bold text-primary">
          {title[language]}
        </h2>
      </motion.div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8"
        >
          <h3 className="text-3xl font-bold mb-6 text-primary">
            {leftColumn.header[language]}
          </h3>
          <ul className="space-y-4">
            {leftColumn.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-success text-2xl">•</span>
                <span className="text-lg">{item[language]}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg p-8"
        >
          <h3 className="text-3xl font-bold mb-6 text-success">
            {rightColumn.header[language]}
          </h3>
          <ul className="space-y-4">
            {rightColumn.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary text-2xl">•</span>
                <span className="text-lg">{item[language]}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
```

---

## 🎹 Keyboard Controls Hook

### `useKeyboardControls.ts`

```typescript
import { useEffect } from 'react';

interface KeyboardControlsProps {
  onNext: () => void;
  onPrevious: () => void;
  onFirst: () => void;
  onLast: () => void;
  onToggleFullscreen: () => void;
  onToggleLanguage: () => void;
  onToggleAutoPlay: () => void;
}

export const useKeyboardControls = ({
  onNext,
  onPrevious,
  onFirst,
  onLast,
  onToggleFullscreen,
  onToggleLanguage,
  onToggleAutoPlay
}: KeyboardControlsProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ': // Space
          e.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onPrevious();
          break;
        case 'Home':
          e.preventDefault();
          onFirst();
          break;
        case 'End':
          e.preventDefault();
          onLast();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          onToggleFullscreen();
          break;
        case 'l':
        case 'L':
          e.preventDefault();
          onToggleLanguage();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          onToggleAutoPlay();
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrevious, onFirst, onLast, onToggleFullscreen, onToggleLanguage, onToggleAutoPlay]);
};
```

---

## 📊 مثال لسلايد التحليلات مع Charts

### `AnalyticsSlide.tsx`

```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface AnalyticsSlideProps {
  language: 'ar' | 'en';
}

export const AnalyticsSlide: React.FC<AnalyticsSlideProps> = ({ language }) => {
  // Sample data
  const lineData = [
    { month: 'يناير', revenue: 4000, expenses: 2400 },
    { month: 'فبراير', revenue: 3000, expenses: 1398 },
    { month: 'مارس', revenue: 2000, expenses: 9800 },
    { month: 'أبريل', revenue: 2780, expenses: 3908 },
    { month: 'مايو', revenue: 1890, expenses: 4800 },
    { month: 'يونيو', revenue: 2390, expenses: 3800 },
  ];

  const pieData = [
    { name: 'المبيعات', value: 400 },
    { name: 'المشتريات', value: 300 },
    { name: 'الرواتب', value: 200 },
    { name: 'أخرى', value: 100 },
  ];

  const COLORS = ['#093738', '#2cc28d', '#fbbf24', '#ef4444'];

  const content = {
    ar: {
      title: "التحليلات والرؤى",
      subtitle: "لوحات معلومات ذكية لاتخاذ قرارات مبنية على البيانات",
      revenueChart: "الإيرادات والمصروفات",
      distributionChart: "توزيع المصروفات"
    },
    en: {
      title: "Analytics & Insights",
      subtitle: "Smart dashboards for data-driven decisions",
      revenueChart: "Revenue & Expenses",
      distributionChart: "Expense Distribution"
    }
  };

  const t = content[language];

  return (
    <div className="h-full p-12 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="text-6xl mb-4">📈</div>
        <h2 className="text-4xl font-bold text-primary mb-2">
          {t.title}
        </h2>
        <p className="text-lg text-gray-600">{t.subtitle}</p>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-100"
        >
          <h3 className="text-xl font-bold mb-4 text-center">
            {t.revenueChart}
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#2cc28d" 
                strokeWidth={3}
                name="الإيرادات"
              />
              <Line 
                type="monotone" 
                dataKey="expenses" 
                stroke="#ef4444" 
                strokeWidth={3}
                name="المصروفات"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-100"
        >
          <h3 className="text-xl font-bold mb-4 text-center">
            {t.distributionChart}
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer> 
        </motion.div>
      </div>
    </div>
  );
};
```

---

## 🎨 Tailwind Config للألوان

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#093738',
        primaryHover: '#0a4849',
        success: '#2cc28d',
        successAlt: '#07b664',
        danger: '#ff0000',
      }
    }
  }
}
```

---

## 📝 ملف البيانات | Data File

### `src/screens/Presentation/data/slides.ts`

```typescript
import { CoverSlide } from '../components/slides/CoverSlide';
import { OverviewSlide } from '../components/slides/OverviewSlide';
// ... import all slide components

export const SLIDES = [
  {
    id: 1,
    component: CoverSlide,
    type: 'cover'
  },
  {
    id: 2,
    component: OverviewSlide,
    type: 'content'
  },
  // ... rest of slides
];

// استخدم البيانات من PRESENTATION_CONTENT.md
export const SLIDE_CONTENT = {
  // ... محتوى كل سلايد من الملف
};
```

---

## 🚀 كيفية الاستخدام | How to Use

### 1. إضافة Route

في `App.tsx`:

```typescript
import { PresentationView } from './screens/Presentation/PresentationView';

// في routes
{
  path: '/presentation',
  element: <PresentationView />,
},
{
  path: '/presentation/:slideNumber',
  element: <PresentationView />,
}
```

### 2. إضافة رابط في القائمة

```typescript
{
  title: 'العرض التقديمي',
  titleEn: 'Presentation',
  path: '/presentation',
  icon: <Presentation className="w-5 h-5" />
}
```

### 3. تخصيص المحتوى

استخدم البيانات من `PRESENTATION_CONTENT.md` واستبدلها في الملفات.

---

**تم إنشاء هذا الملف**: فبراير 2026  
**الحالة**: ✅ جاهز للاستخدام  
**الملفات المطلوبة**: 
- `PRESENTATION_CONTENT.md` (المحتوى)
- هذا الملف (الكود)
