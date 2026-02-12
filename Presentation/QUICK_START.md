# 🚀 Quick Start - البدء السريع

> **كيف تبدأ مع عرض ميكنة التقديمي في 5 دقائق**

---

## ⚡ الخطوات السريعة

### 1️⃣ تثبيت المكتبات الأساسية (دقيقة واحدة)

```bash
cd apps/maykana-erp
pnpm add framer-motion swiper recharts react-countup
```

---

### 2️⃣ إنشاء هيكل المجلدات (30 ثانية)

```bash
# في PowerShell
mkdir src\screens\Presentation
mkdir src\screens\Presentation\components
mkdir src\screens\Presentation\components\slides
mkdir src\screens\Presentation\data
mkdir src\screens\Presentation\hooks
```

---

### 3️⃣ إنشاء الملفات الأساسية (دقيقة واحدة)

#### A) `src/screens/Presentation/index.tsx`
```tsx
export { PresentationView } from './PresentationView';
```

#### B) `src/screens/Presentation/PresentationView.tsx`
```tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PresentationView = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // ابدأ بـ 3 سلايدات فقط

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-gradient-to-b from-black/50 to-transparent">
        <div className="text-white font-bold text-xl">LamdaX - ميكنة</div>
        <div className="text-white">{currentSlide + 1} / {totalSlides}</div>
      </div>

      {/* Slides Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="h-full flex items-center justify-center"
        >
          {currentSlide === 0 && <CoverSlide />}
          {currentSlide === 1 && <OverviewSlide />}
          {currentSlide === 2 && <Vision2030Slide />}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 disabled:opacity-30 p-3 rounded-full backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 disabled:opacity-30 p-3 rounded-full backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide 
                ? 'bg-[#2cc28d] w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Slide 1: Cover
const CoverSlide = () => (
  <div className="text-center">
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className="text-9xl mb-8"
    >
      🏢
    </motion.div>
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-7xl font-bold text-white mb-4"
    >
      ميكنة
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-3xl text-white/80 mb-8"
    >
      نظام تخطيط موارد المؤسسات
    </motion.p>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9 }}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e7e34] to-[#093738] px-6 py-3 rounded-full"
    >
      <span className="text-3xl">🇸🇦</span>
      <span className="text-white font-bold text-xl">داعم لرؤية 2030</span>
    </motion.div>
  </div>
);

// Slide 2: Overview
const OverviewSlide = () => {
  const features = [
    { icon: "🇸🇦", text: "نظام سعودي 100%" },
    { icon: "🎯", text: "رؤية 2030" },
    { icon: "♻️", text: "تطوير مستمر" },
    { icon: "⚡", text: "تقنيات حديثة" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-12">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-6xl font-bold text-white mb-12 text-center"
      >
        نظرة عامة
      </motion.h2>
      <div className="grid grid-cols-2 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center"
          >
            <div className="text-7xl mb-4">{feature.icon}</div>
            <p className="text-2xl text-white font-medium">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Slide 3: Vision 2030
const Vision2030Slide = () => (
  <div className="max-w-4xl mx-auto p-12 text-center">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="text-9xl mb-8"
    >
      🇸🇦
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-bold text-white mb-8"
    >
      ميكنة ورؤية 2030
    </motion.h2>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="space-y-4 text-2xl text-white/90"
    >
      <p>✓ دعم التحول الرقمي في المملكة</p>
      <p>✓ تطوير مستمر لمواكبة السوق</p>
      <p>✓ منتج سعودي بفريق محلي</p>
      <p>✓ شريككم في التحول الرقمي</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-12 text-3xl text-[#2cc28d] font-bold"
    >
      LamdaX - ميكنة
    </motion.div>
  </div>
);
```

---

### 4️⃣ إضافة Route في App.tsx (30 ثانية)

```tsx
// في App.tsx
import { PresentationView } from './screens/Presentation';

// أضف في routes:
{
  path: '/presentation',
  element: <PresentationView />
}
```

---

### 5️⃣ تشغيل التطبيق (10 ثوانٍ)

```bash
pnpm dev
```

افتح المتصفح على:
```
http://localhost:5173/presentation
```

---

## 🎉 تهانينا!

لديك الآن عرض تقديمي يعمل مع:
- ✅ 3 سلايدات متحركة
- ✅ Navigation سلس
- ✅ Animations جميلة
- ✅ Responsive design
- ✅ شعار LamdaX
- ✅ رؤية 2030

---

## 📈 الخطوات التالية

### لإضافة المزيد من السلايدات:

1. **انسخ من `PRESENTATION_CONTENT.md`**
   - كل محتوى الـ 20 سلايد جاهز

2. **راجع `ANIMATIONS_GUIDE.md`**
   - أمثلة كود كاملة لكل سلايد

3. **ثبت المكتبات المتقدمة**
   ```bash
   pnpm add gsap canvas-confetti react-tsparticles
   ```

4. **أنشئ slide components منفصلة**
   ```
   components/slides/
   ├── CoverSlide.tsx
   ├── OverviewSlide.tsx
   ├── GoalsSlide.tsx
   └── ...
   ```

---

## 🎨 تخصيصات سريعة

### تغيير الألوان:
```tsx
// في PresentationView.tsx
className="bg-gradient-to-br from-[#093738] to-[#1e7e34]"
// غير الألوان هنا
```

### إضافة Keyboard Controls:
```tsx
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') nextSlide();
    if (e.key === 'ArrowRight') prevSlide();
  };
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [currentSlide]);
```

### إضافة Language Toggle:
```tsx
const [language, setLanguage] = useState<'ar' | 'en'>('ar');

<button onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}>
  {language === 'ar' ? '🇬🇧 EN' : '🇸🇦 AR'}
</button>
```

---

## 💡 نصائح

1. **ابدأ بسيط** - 3 سلايدات كافية للبداية
2. **أضف تدريجياً** - سلايد واحد في المرة
3. **اختبر باستمرار** - تأكد من كل سلايد قبل الانتقال للتالي
4. **استخدم الملفات الجاهزة** - كل الكود موجود في `ANIMATIONS_GUIDE.md`

---

## 📚 الملفات المرجعية

1. **PRESENTATION_CONTENT.md** → المحتوى الكامل
2. **ANIMATIONS_GUIDE.md** → أمثلة الكود
3. **VISION_2030_INTEGRATION.md** → تفاصيل رؤية 2030
4. **PRESENTATION_CODE_EXAMPLES.md** → أمثلة متقدمة

---

## ⚡ الوقت المتوقع

- **الإعداد الأساسي**: 5 دقائق ✅
- **3 سلايدات**: 10 دقائق
- **10 سلايدات**: 30 دقيقة
- **20 سلايد كامل**: 1-2 ساعة
- **مع animations متقدمة**: 3-4 ساعات

---

## 🚀 ابدأ الآن!

```bash
# نسخ والصق هذه الأوامر
cd apps/maykana-erp
pnpm add framer-motion swiper recharts
mkdir -p src/screens/Presentation/components/slides
# انسخ الكود من الأعلى
pnpm dev
```

**✨ استمتع بالبناء!**
