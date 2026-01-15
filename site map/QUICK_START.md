# 🚀 Quick Start - البداية السريعة

> دليل سريع لإضافة صفحة جديدة من HTML/CSS إلى React

---

## 📦 ما تحتاجه قبل البدء

1. ملف HTML للصفحة
2. ملف CSS للصفحة
3. الصور والأيقونات (assets)
4. وصف وظيفة الصفحة

---

## ⚡ الخطوات السريعة

### الخطوة 1: تنظيم الملفات (5 دقائق)

```bash
# ضع ملفاتك في المكان الصحيح
site map/
└── [module-name]/
    └── [page-name]/
        ├── index.html
        ├── styles.css
        ├── assets/
        └── README.md
```

**مثال:**
```bash
site map/
└── accounting/
    └── entries/
        ├── index.html
        ├── styles.css
        ├── assets/
        │   └── icons/
        └── README.md
```

---

### الخطوة 2: توثيق الصفحة (10 دقائق)

انسخ `_TEMPLATE.md` واملأ المعلومات:

```markdown
# القيود المحاسبية

## وصف الصفحة
صفحة لعرض وإدارة القيود المحاسبية اليومية

## المسار المقترح
/accounting/entries

## الترجمات المطلوبة
...

## المكونات المطلوبة
- [x] Layout
- [x] Table
- [ ] Form
...
```

---

### الخطوة 3: التحليل (15 دقائق)

افتح HTML وحدد:

1. **الأقسام (Sections)**
   ```html
   <!-- Header Section -->
   <div class="header">...</div>
   
   <!-- Filters Section -->
   <div class="filters">...</div>
   
   <!-- Table Section -->
   <div class="table">...</div>
   ```

2. **البيانات الثابتة**
   ```html
   <!-- ابحث عن البيانات المتكررة -->
   <tr>
     <td>قيد 1</td>
     <td>5000</td>
   </tr>
   <tr>
     <td>قيد 2</td>
     <td>3000</td>
   </tr>
   ```

3. **المكونات القابلة لإعادة الاستخدام**
   - Buttons → `<Button />`
   - Inputs → `<Input />`
   - Cards → `<Card />`

---

### الخطوة 4: التحويل (30-60 دقيقة)

#### 4.1 إنشاء ملف الصفحة

```bash
mkdir apps/maykana-erp/src/screens/AccountingEntries
touch apps/maykana-erp/src/screens/AccountingEntries/AccountingEntries.tsx
touch apps/maykana-erp/src/screens/AccountingEntries/index.ts
```

#### 4.2 الكود الأساسي

```typescript
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export const AccountingEntries = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {t('accounting.entries.title')}
          </h1>
          <Button className="bg-[#093738]">
            {t('accounting.entries.add_new')}
          </Button>
        </div>

        {/* Content */}
        <Card>
          {/* محتوى الصفحة */}
        </Card>
      </div>
    </Layout>
  );
};
```

```typescript
// index.ts
export { AccountingEntries } from './AccountingEntries';
```

#### 4.3 تحويل CSS إلى Tailwind

```css
/* من CSS */
.button {
  background-color: #093738;
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
}
```

```typescript
// إلى Tailwind
<Button className="bg-[#093738] px-6 py-3 rounded-lg text-white">
```

**استخدم الـ converter:** [Tailwind CSS Converter](https://transform.tools/css-to-tailwind)

#### 4.4 استخراج البيانات

```typescript
// بدلاً من HTML المتكرر
const entries = [
  { id: 1, number: 'QD-001', date: '2024-01-01', amount: 5000 },
  { id: 2, number: 'QD-002', date: '2024-01-02', amount: 3000 },
];

return (
  <table>
    {entries.map(entry => (
      <tr key={entry.id}>
        <td>{entry.number}</td>
        <td>{entry.date}</td>
        <td>{entry.amount}</td>
      </tr>
    ))}
  </table>
);
```

---

### الخطوة 5: إضافة الترجمات (10 دقائق)

في `apps/maykana-erp/src/data/translations.json`:

```json
{
  "ar": {
    "accounting": {
      "entries": {
        "title": "القيود المحاسبية",
        "add_new": "إضافة قيد جديد"
      }
    }
  },
  "en": {
    "accounting": {
      "entries": {
        "title": "Accounting Entries",
        "add_new": "Add New Entry"
      }
    }
  }
}
```

---

### الخطوة 6: إضافة Route (5 دقائق)

#### في `App.tsx`:

```typescript
import { AccountingEntries } from "./screens/AccountingEntries";

{
  path: "/accounting/entries",
  element: (
    <ProtectedRoute>
      <AccountingEntries />
    </ProtectedRoute>
  ),
}
```

#### في `config/breadcrumbs.config.ts`:

```typescript
{ path: "/accounting/entries", label: "accounting.entries.title" },
```

---

### الخطوة 7: الاختبار (10 دقائق)

```bash
# تشغيل Dev Server
pnpm run dev

# افتح المتصفح
http://localhost:5173/accounting/entries

# تأكد من:
# ✅ الصفحة تظهر بشكل صحيح
# ✅ Breadcrumbs يعمل
# ✅ الترجمة تعمل (AR/EN)
# ✅ RTL/LTR يعمل
# ✅ لا توجد console errors
```

---

### الخطوة 8: Build والتأكد (5 دقائق)

```bash
# Build للإنتاج
pnpm run build

# تأكد من عدم وجود أخطاء
# ✓ built in X.XXs
```

---

## 🎯 مثال كامل في 10 دقائق

### السيناريو: إضافة صفحة "قائمة المنتجات"

1. **ضع الملفات** (1 دقيقة)
   ```
   site map/inventory/products/index.html
   ```

2. **أنشئ الصفحة** (3 دقائق)
   ```typescript
   export const Products = (): JSX.Element => {
     const { t } = useLanguage();
     const products = [
       { id: 1, name: 'منتج 1', price: 100 },
       { id: 2, name: 'منتج 2', price: 200 },
     ];
     
     return (
       <Layout>
         <h1>{t('inventory.products.title')}</h1>
         {products.map(p => (
           <Card key={p.id}>{p.name} - {p.price}</Card>
         ))}
       </Layout>
     );
   };
   ```

3. **أضف الترجمات** (2 دقيقة)
   ```json
   {
     "ar": { "inventory": { "products": { "title": "المنتجات" } } },
     "en": { "inventory": { "products": { "title": "Products" } } }
   }
   ```

4. **أضف Route** (2 دقيقة)
   ```typescript
   { path: "/inventory/products", element: <Products /> }
   ```

5. **اختبر** (2 دقائق)
   ```bash
   pnpm run dev
   ```

**✅ Done! في 10 دقائق فقط**

---

## 🔧 أدوات مساعدة

### تحويل CSS إلى Tailwind
- [Transform Tools](https://transform.tools/css-to-tailwind)
- [Tailwind Play](https://play.tailwindcss.com/)

### أيقونات
- [Lucide Icons](https://lucide.dev/icons/)
- [Heroicons](https://heroicons.com/)

### Colors
- [Coolors](https://coolors.co/)
- [Color Hunt](https://colorhunt.co/)

### أدوات التطوير
- [VS Code Extensions](https://marketplace.visualstudio.com/)
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier
  - Auto Rename Tag

---

## 🚨 الأخطاء الشائعة وحلولها السريعة

### 1. الصفحة لا تظهر
```bash
# تأكد من:
✅ استيراد الصفحة في App.tsx
✅ المسار صحيح
✅ ProtectedRoute موجود
```

### 2. الترجمة لا تعمل
```bash
# تأكد من:
✅ المفتاح موجود في translations.json
✅ استخدام t() بشكل صحيح
✅ المفتاح مطابق تماماً
```

### 3. Build فشل
```bash
# تأكد من:
✅ لا توجد متغيرات غير مستخدمة
✅ لا توجد imports غير موجودة
✅ TypeScript types صحيحة
```

---

## 📚 مراجع سريعة

### المكونات الأساسية
```typescript
import { Layout } from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
```

### Hooks الأساسية
```typescript
const { t, dir, language } = useLanguage();
const navigate = useNavigate();
const [state, setState] = useState();
```

### Tailwind Classes الشائعة
```typescript
// Layout
"flex justify-between items-center"
"grid grid-cols-4 gap-4"
"space-y-4"

// Spacing
"p-4" "px-4" "py-4" "gap-4"

// Colors
"bg-[#093738]" "text-white" "border-[#e2e2e2]"

// Sizes
"h-[45px]" "w-full" "text-lg"

// Effects
"hover:opacity-90" "transition-all" "rounded-lg"
```

---

## ⏱️ الجدول الزمني المتوقع

| المهمة | الوقت المتوقع |
|-------|---------------|
| تنظيم الملفات | 5 دقائق |
| التوثيق | 10 دقائق |
| التحليل | 15 دقائق |
| التحويل | 30-60 دقيقة |
| الترجمات | 10 دقائق |
| Routes | 5 دقائق |
| الاختبار | 10 دقائق |
| **المجموع** | **1.5 - 2 ساعة** |

---

## ✅ Checklist السريع

- [ ] الملفات منظمة في site map
- [ ] README.md مكتمل
- [ ] الصفحة تعمل في dev
- [ ] الترجمات موجودة
- [ ] Build ينجح
- [ ] Breadcrumbs يعمل
- [ ] RTL/LTR يعمل

---

**💡 نصيحة:** ابدأ بصفحة بسيطة أولاً لتتعلم السير، ثم انتقل للصفحات المعقدة!

**آخر تحديث:** يناير 2026
