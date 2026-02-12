# ⚡ Quick Reference - التعديلات السريعة

## 🎨 تغيير الألوان

### في CoverSlide.tsx:

```tsx
// الخلفية الرئيسية
bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34]

// ألوان Vision 2030 Badge
from-[#1e7e34] to-[#093738]

// لون الـ Tagline
text-[#2cc28d]

// لون النقطة النابضة
bg-[#2cc28d]
```

### في PresentationView.tsx:

```tsx
// Progress Dots Active
bg-[#2cc28d]

// Progress Bar
from-[#2cc28d] to-[#07b664]

// Navigation Buttons
bg-white/10 hover:bg-white/20
```

---

## 🖼️ تغيير الشعارات

### Logo LamdaX:

في `CoverSlide.tsx` السطر ~40:
```tsx
// الحالي
<div className="text-7xl">🏢</div>

// استبدله بـ:
<img 
  src="/lamdax-logo.svg" 
  alt="LamdaX" 
  className="w-24 h-24"
/>
```

### علم السعودية:

في `CoverSlide.tsx` السطر ~142:
```tsx
// الحالي
<span className="text-4xl">🇸🇦</span>

// يمكن استبداله بصورة:
<img src="/saudi-flag.svg" className="w-10 h-10" />
```

---

## ✏️ تغيير النصوص

### في CoverSlide.tsx:

```tsx
// اسم الشركة
<span className="text-3xl">LamdaX</span>
// → غير "LamdaX" حسب اسمك

// العنوان الرئيسي
<h1>ميكنة</h1>
// → غير "ميكنة" للاسم المطلوب

// Subtitle
<p>نظام تخطيط موارد المؤسسات</p>
// → غير حسب وصفك

// Tagline
<p>حلول ذكية لرؤية 2030 | Smart Solutions for Vision 2030</p>
// → خصص حسب رسالتك

// Vision Badge
<span>داعم لرؤية المملكة 2030</span>
// → عدل النص
```

---

## ⚙️ تعديل الـ Animations

### سرعة الـ Animations:

```tsx
// في Logo animation
transition={{ duration: 1.5 }}
// → غير 1.5 لأسرع أو أبطأ

// في Title animation
transition={{ delay: 0.5, duration: 1 }}
// → delay = وقت الانتظار
// → duration = مدة الحركة
```

### نوع الـ Animation:

```tsx
// Spring (ارتداد)
transition={{ type: 'spring', stiffness: 100 }}

// Linear (خطي)
transition={{ ease: 'linear' }}

// EaseInOut (سلس)
transition={{ ease: 'easeInOut' }}
```

---

## 🎯 تعطيل/تفعيل ميزات

### إخفاء Progress Bar:

في `PresentationView.tsx`:
```tsx
// احذف أو علق هذا السطر:
<ProgressBar current={currentSlide + 1} total={totalSlides} />
```

### إخفاء Progress Dots:

```tsx
// احذف أو علق:
<ProgressDots ... />
```

### إخفاء Navigation Arrows:

```tsx
// غير الشرط !isFullscreen إلى false
{false && (
  <>
    <NavigationButton ... />
  </>
)}
```

---

## 📱 تعديلات Responsive

### لشاشات الموبايل:

في `CoverSlide.tsx`:
```tsx
// العنوان
className="text-8xl md:text-9xl"
// → text-8xl للموبايل
// → md:text-9xl للشاشات المتوسطة فأكبر

// غير لتخصيصك:
className="text-6xl md:text-8xl lg:text-9xl"
```

---

## ⌨️ تخصيص Keyboard Shortcuts

في `PresentationView.tsx` داخل `handleKeyPress`:

```tsx
// إضافة shortcut جديد:
case 'p':  // حرف P
  // فعل شيء
  break;

// تغيير shortcut موجود:
case 'f':  // Fullscreen
  // غير 'f' لحرف آخر
```

---

## 🔧 إضافة سلايد جديد

### 1. أنشئ الملف:
```
components/slides/NewSlide.tsx
```

### 2. الكود الأساسي:
```tsx
import { motion } from 'framer-motion';

export const NewSlide = () => {
  return (
    <div className="h-full flex items-center justify-center bg-white">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold"
      >
        محتوى السلايد الجديد
      </motion.h1>
    </div>
  );
};
```

### 3. في PresentationView.tsx:

```tsx
// Import
import { NewSlide } from './components/slides/NewSlide';

// غير totalSlides
const totalSlides = 2;  // كان 1

// أضف في renderSlide
case 1:
  return <NewSlide />;
```

---

## 🎨 قوالب جاهزة

### سلايد بسيط:
```tsx
<div className="h-full bg-gradient-to-br from-[#093738] to-[#1e7e34] p-12">
  <h2 className="text-6xl text-white mb-8">العنوان</h2>
  <p className="text-2xl text-white/80">المحتوى</p>
</div>
```

### سلايد بعمودين:
```tsx
<div className="h-full grid grid-cols-2 gap-8 p-12 bg-white">
  <div>عمود 1</div>
  <div>عمود 2</div>
</div>
```

### سلايد ببطاقات:
```tsx
<div className="h-full p-12 bg-gray-50">
  <div className="grid grid-cols-3 gap-6">
    {[1,2,3].map(i => (
      <motion.div 
        key={i}
        className="bg-white p-6 rounded-xl shadow-lg"
      >
        بطاقة {i}
      </motion.div>
    ))}
  </div>
</div>
```

---

## 🚀 Performance

### تقليل حجم الـ Animations:

```tsx
// بدلاً من animation معقد:
animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}

// استخدم أبسط:
whileHover={{ scale: 1.05 }}
```

### Lazy Loading للصور:

```tsx
<img 
  src="/image.jpg" 
  loading="lazy"
  alt="..."
/>
```

---

## 📍 الملفات المهمة

```
✏️ CoverSlide.tsx        → تعديل السلايد الأول
✏️ PresentationView.tsx  → تعديل التحكمات والـ navigation
📝 README.md             → التوثيق الكامل
⚡ QUICK_REFERENCE.md    → هذا الملف
```

---

## 💡 نصائح سريعة

1. **استخدم hot reload** - التعديلات تظهر فوراً
2. **جرب الألوان** - غير وشوف النتيجة مباشرة
3. **احفظ باستمرار** - تجنب خسارة العمل
4. **استخدم console.log** - للتصحيح

---

**⚡ حفظ هذا الملف للرجوع السريع!**
