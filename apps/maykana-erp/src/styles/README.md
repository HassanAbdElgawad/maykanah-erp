# نظام التصميم (Design System) - Maykana ERP

نظام تصميم شامل ومركزي لجميع أنماط التطبيق.

## 📁 الهيكل

```
src/styles/
├── index.ts              # نقطة الاستيراد المركزية
├── typography.ts         # الخطوط والأحجام والأوزان
├── colors.ts            # لوحة الألوان الكاملة
├── spacing.ts           # المسافات والهوامش
├── borders.ts           # الحدود والانحناءات
├── shadows.ts           # الظلال والأبعاد
├── transitions.ts       # الحركات والتحولات
└── components/
    ├── buttons.ts       # أزرار
    ├── inputs.ts        # حقول الإدخال
    ├── cards.ts         # البطاقات
    ├── modals.ts        # النوافذ المنبثقة
    ├── tables.ts        # الجداول
    ├── badges.ts        # الشارات
    ├── dropdowns.ts     # القوائم المنسدلة
    └── alerts.ts        # التنبيهات
```

## 🎯 الاستخدام

### استيراد الأنماط

```typescript
// استيراد كل شيء
import * as ds from '@/styles';

// أو استيراد محدد
import { buttonClasses, inputClasses, colors } from '@/styles';
```

### أمثلة الاستخدام

#### 1. الأزرار (Buttons)

```tsx
import { buttonClasses } from '@/styles';

// زر أساسي
<button className={buttonClasses.primary}>حفظ</button>

// زر نجاح صغير
<button className={buttonClasses.successSm}>إرسال</button>

// زر خطر كبير
<button className={buttonClasses.dangerLg}>حذف</button>

// زر أيقونة
<button className={buttonClasses.icon}>
  <Icon />
</button>
```

#### 2. حقول الإدخال (Inputs)

```tsx
import { inputClasses, labelClasses } from '@/styles';

// حقل إدخال عادي
<input className={inputClasses.input} />

// حقل بحث
<input className={inputClasses.inputSearch} />

// حقل مع خطأ
<input className={inputClasses.inputError} />

// تسمية مع علامة إلزامي
<label className={labelClasses.label}>
  الاسم <span className={labelClasses.required}>*</span>
</label>
```

#### 3. البطاقات (Cards)

```tsx
import { cardClasses } from '@/styles';

// بطاقة عادية
<div className={cardClasses.card}>
  المحتوى
</div>

// بطاقة تفاعلية
<div className={cardClasses.cardHover}>
  انقر هنا
</div>

// قسم مع رأس
<div className={cardClasses.panel}>
  <div className={cardClasses.sectionHeader}>
    <h3>العنوان</h3>
  </div>
  <div className={cardClasses.sectionContent}>
    المحتوى
  </div>
</div>
```

#### 4. النوافذ المنبثقة (Modals)

```tsx
import { modalClasses } from '@/styles';

<div className={modalClasses.overlay}>
  <div className={modalClasses.modal}>
    <div className={modalClasses.modalHeader}>
      <h2 className={modalClasses.modalTitle}>العنوان</h2>
      <button className={modalClasses.closeButton}>×</button>
    </div>
    <div className={modalClasses.modalBody}>
      المحتوى
    </div>
    <div className={modalClasses.modalFooter}>
      <button>حفظ</button>
      <button>إلغاء</button>
    </div>
  </div>
</div>
```

#### 5. الجداول (Tables)

```tsx
import { tableClasses } from '@/styles';

<div className={tableClasses.container}>
  <table className={tableClasses.table}>
    <thead className={tableClasses.thead}>
      <tr>
        <th className={tableClasses.th}>العمود 1</th>
        <th className={tableClasses.th}>العمود 2</th>
      </tr>
    </thead>
    <tbody className={tableClasses.tbody}>
      <tr className={tableClasses.tr}>
        <td className={tableClasses.td}>بيانات 1</td>
        <td className={tableClasses.td}>بيانات 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### 6. الشارات (Badges)

```tsx
import { badgeClasses } from '@/styles';

// شارة نجاح
<span className={badgeClasses.badgeSuccess}>نشط</span>

// شارة خطأ فاتحة
<span className={badgeClasses.badgeErrorLight}>متوقف</span>

// مؤشر حالة
<span className={badgeClasses.statusActive}>
  <span className={badgeClasses.statusDotActive}></span>
  نشط
</span>
```

#### 7. التنبيهات (Alerts)

```tsx
import { alertClasses } from '@/styles';

// تنبيه نجاح
<div className={alertClasses.alertSuccess}>
  <div className={alertClasses.alertIcon}>✓</div>
  <div className={alertClasses.alertContent}>
    <div className={alertClasses.alertTitle}>نجاح!</div>
    <div className={alertClasses.alertMessage}>تم الحفظ بنجاح</div>
  </div>
</div>

// توست
<div className={alertClasses.toastSuccess}>
  <div className={alertClasses.alertIcon}>✓</div>
  <div className={alertClasses.toastContent}>
    <div className={alertClasses.toastTitle}>نجاح</div>
    <div className={alertClasses.toastMessage}>تم الإرسال</div>
  </div>
</div>
```

## 🎨 الخطوط (Typography)

### أحجام الخطوط

```typescript
import { fontSize } from '@/styles';

// xs: 12px
// sm: 13px
// base: 14px
// md: 15px
// lg: 16px
// xl: 18px
// 2xl: 20px
// 3xl: 24px
// 4xl: 28px
// 5xl: 30px
// 6xl: 32px
```

### أوزان الخطوط

```typescript
import { fontWeight } from '@/styles';

// light: 300
// normal: 400
// medium: 500
// semibold: 600
// bold: 700
```

### عائلات الخطوط

```typescript
import { fontFamily } from '@/styles';

// primary: 'IBM Plex Sans Arabic'
// secondary: 'Graphik Arabic'
```

## 🎨 الألوان (Colors)

### الألوان الأساسية

```typescript
import { colors } from '@/styles';

// Primary: #093738
// Success: #2cc28d
// Error: #ff0000
// Warning: #f59e0b
// Info: #41d1fe
// Purple: #8b5cf6
```

كل لون لديه درجات من 50 إلى 900.

## 📏 المسافات (Spacing)

```typescript
import { spacing } from '@/styles';

// الوحدة الأساسية: 4px
// المقياس: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96
```

## 🔲 الحدود (Borders)

```typescript
import { borderRadius } from '@/styles';

// sm: 4px
// md: 8px
// lg: 12px
// xl: 14px
// 2xl: 16px
// full: 9999px
```

## 🌑 الظلال (Shadows)

```typescript
import { shadows } from '@/styles';

// sm, base, md, lg, xl, 2xl
// مع ظلال مخصصة للمكونات: button, card, modal, dropdown
```

## ⚡ التحولات (Transitions)

```typescript
import { duration, easing } from '@/styles';

// Duration: fast (150ms), base (200ms), medium (300ms), slow (500ms)
// Easing: linear, easeIn, easeOut, easeInOut
```

## 🔄 التكامل مع Tailwind

يمكن دمج هذا النظام مع تكوين Tailwind:

```javascript
// tailwind.config.js
import { colors, fontSize, fontFamily, spacing } from './src/styles';

export default {
  theme: {
    extend: {
      colors,
      fontSize,
      fontFamily,
      spacing,
    },
  },
};
```

## 📝 ملاحظات مهمة

1. **RTL Support**: جميع المكونات تدعم اتجاه RTL بشكل افتراضي
2. **TypeScript**: جميع الملفات مكتوبة بـ TypeScript مع أنواع كاملة
3. **Consistency**: الأنماط مستخرجة من الكود الحالي للحفاظ على الاتساق
4. **Flexibility**: يمكن استخدام الفئات الجاهزة أو الكائنات الأساسية
5. **Maintainability**: تغيير نمط واحد يؤثر على جميع التطبيق

## 🚀 الترحيل (Migration)

لترحيل الكود الحالي:

1. استورد الفئات المناسبة من `@/styles`
2. استبدل الفئات المضمنة بالفئات المستوردة
3. تحقق من التوافق والتصميم
4. كرر العملية لكل مكون

مثال:

```tsx
// قبل
<button className="bg-[#093738] hover:bg-[#0a4849] text-white px-[18px] py-[9px] rounded-lg">
  حفظ
</button>

// بعد
import { buttonClasses } from '@/styles';
<button className={buttonClasses.primary}>
  حفظ
</button>
```

## 🎯 الفوائد

✅ **مركزية**: جميع الأنماط في مكان واحد
✅ **اتساق**: نفس الأنماط في كل مكان
✅ **صيانة**: سهولة تحديث الأنماط
✅ **أداء**: تقليل التكرار في CSS
✅ **تطوير**: سرعة في التطوير مع الفئات الجاهزة
✅ **أنواع**: دعم TypeScript الكامل

---

**تم الإنشاء بواسطة**: GitHub Copilot
**التاريخ**: 2024
**النسخة**: 1.0.0
