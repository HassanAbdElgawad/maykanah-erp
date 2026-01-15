# دليل إضافة صفحات جديدة - Maykana ERP
## Adding New Pages Guide

> **آخر تحديث:** يناير 2026  
> **الحالة:** Build ✅ ناجح  
> **النظام:** React + TypeScript + Tailwind + Redux

---

## ⚠️ ملاحظة مهمة جداً

**اللغة العربية هي اللغة الأساسية والأصلية للموقع**

- يجب أن تكون جميع النصوص والواجهات باللغة العربية أولاً
- اللغة الإنجليزية هي لغة ثانوية (دعم إضافي)
- الاتجاه الافتراضي هو RTL (من اليمين إلى اليسار)
- عند تصميم المكونات، يجب أن يكون التوجيه العربي (RTL) هو الأساس
- جميع الـ Modals والنوافذ المنبثقة يجب أن تفتح من الجهة اليسرى في الوضع العربي
- الترجمة الإنجليزية اختيارية ويمكن إضافتها لاحقاً

---

## 📋 جدول المحتويات

1. [نظرة عامة على الهيكل](#نظرة-عامة-على-الهيكل)
2. [خطوات إضافة صفحة جديدة](#خطوات-إضافة-صفحة-جديدة)
3. [المكونات المتاحة](#المكونات-المتاحة)
4. [معايير الكود](#معايير-الكود)
5. [الأخطاء الشائعة](#الأخطاء-الشائعة)

---

## 🏗️ نظرة عامة على الهيكل

### البنية الأساسية
```
apps/maykana-erp/
├── src/
│   ├── screens/          # صفحات التطبيق
│   ├── components/       # المكونات المشتركة
│   │   ├── Layout.tsx   # Layout الرئيسي (Sidebar + Header)
│   │   ├── Header.tsx   # الـ Header مع Breadcrumbs
│   │   ├── Breadcrumbs.tsx
│   │   └── ui/          # مكونات UI الأساسية
│   ├── config/          # ملفات التكوين
│   │   ├── navigation.config.ts    # قائمة Sidebar
│   │   └── breadcrumbs.config.ts   # مسارات Breadcrumbs
│   ├── hooks/           # Custom Hooks
│   │   └── useBreadcrumbs.ts
│   ├── data/            # البيانات الثابتة
│   │   └── translations.json
│   ├── contexts/        # React Contexts
│   │   └── LanguageContext.tsx
│   └── App.tsx          # Routes الرئيسي
```

### المكونات الجاهزة
- **Layout Component**: Sidebar ثابت + Header ثابت + Content Area
- **Breadcrumbs**: تلقائي بناءً على المسار
- **UI Components**: Button, Card, Input, Select, Checkbox, Badge, etc.
- **Language System**: دعم العربية والإنجليزية مع RTL/LTR
- **Navigation**: Sidebar مع أيقونات Lucide React

---

## ✨ خطوات إضافة صفحة جديدة

### 1️⃣ إنشاء مجلد الصفحة

```bash
apps/maykana-erp/src/screens/[PageName]/
├── [PageName].tsx       # الملف الرئيسي
├── index.ts            # Export الصفحة
├── sections/           # أقسام الصفحة (إن وجدت)
│   ├── Section1.tsx
│   └── Section2.tsx
└── components/         # مكونات خاصة بالصفحة فقط (اختياري)
```

**مثال:**
```typescript
// apps/maykana-erp/src/screens/Inventory/Inventory.tsx
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";

export const Inventory = (): JSX.Element => {
  const { t, dir } = useLanguage();

  return (
    <Layout>
      <div className="space-y-4">
        {/* محتوى الصفحة */}
        <h1 className="text-2xl font-bold">
          {t('inventory.title')}
        </h1>
      </div>
    </Layout>
  );
};
```

```typescript
// apps/maykana-erp/src/screens/Inventory/index.ts
export { Inventory } from './Inventory';
```

---

### 2️⃣ إضافة الصفحة للـ Navigation (Sidebar)

**الملف:** `apps/maykana-erp/src/config/navigation.config.ts`

```typescript
import { PackageIcon } from 'lucide-react'; // اختر أيقونة مناسبة

export const sidebarMenuItems: MenuItem[] = [
  // ... العناصر الموجودة
  {
    titleKey: 'sidebar.inventory',  // مفتاح الترجمة
    icon: PackageIcon,               // الأيقونة من Lucide
    isActive: false,
    hasDropdown: true,
    path: '/inventory',              // المسار
  },
  // ...
];
```

**الأيقونات المتاحة:** [Lucide Icons](https://lucide.dev/icons/)

---

### 3️⃣ إضافة الترجمات

**الملف:** `apps/maykana-erp/src/data/translations.json`

```json
{
  "ar": {
    "sidebar": {
      "inventory": "إدارة المخزون"
    },
    "inventory": {
      "title": "إدارة المخزون",
      "add_item": "إضافة صنف",
      "search": "بحث في المخزون"
    }
  },
  "en": {
    "sidebar": {
      "inventory": "Inventory Management"
    },
    "inventory": {
      "title": "Inventory Management",
      "add_item": "Add Item",
      "search": "Search Inventory"
    }
  }
}
```

---

### 4️⃣ إضافة Route

**الملف:** `apps/maykana-erp/src/App.tsx`

```typescript
import { Inventory } from "./screens/Inventory";

const router = createBrowserRouter([
  // ... Routes الموجودة
  {
    path: "/inventory",
    element: (
      <ProtectedRoute>
        <Inventory />
      </ProtectedRoute>
    ),
  },
  // ...
]);
```

---

### 5️⃣ إضافة Breadcrumb

**الملف:** `apps/maykana-erp/src/config/breadcrumbs.config.ts`

```typescript
export const breadcrumbRoutes = [
  // ... المسارات الموجودة
  { path: "/inventory", label: "sidebar.inventory" },
  { path: "/inventory/add", label: "inventory.add_item" },
  // ...
];
```

---

## 🧩 المكونات المتاحة للاستخدام

### 1. Layout Components

#### Layout (الرئيسي)
```typescript
import { Layout } from "../../components/Layout";

<Layout>
  {/* محتوى صفحتك */}
</Layout>
```

#### InitialFilters (للفلاتر)
```typescript
import InitialFilters from "../../components/InitialFilters";

<InitialFilters>
  {/* ضع الـ filters هنا */}
</InitialFilters>
```

---

### 2. UI Components (من Shadcn/ui)

#### Button
```typescript
import { Button } from "../../components/ui/button";

<Button 
  className="bg-[#093738] hover:bg-[#093738]/90"
  onClick={handleClick}
>
  {t('common.save')}
</Button>
```

#### Card
```typescript
import { Card, CardContent, CardHeader } from "../../components/ui/card";

<Card>
  <CardHeader>
    <h3>عنوان البطاقة</h3>
  </CardHeader>
  <CardContent>
    {/* المحتوى */}
  </CardContent>
</Card>
```

#### Input
```typescript
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

<div>
  <Label htmlFor="name">{t('common.name')}</Label>
  <Input 
    id="name"
    placeholder={t('common.enter_name')}
    className="h-[45px]"
  />
</div>
```

#### Select
```typescript
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

<Select>
  <SelectTrigger className="h-[45px]">
    <SelectValue placeholder={t('common.select')} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">خيار 1</SelectItem>
    <SelectItem value="2">خيار 2</SelectItem>
  </SelectContent>
</Select>
```

#### Checkbox
```typescript
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">{t('common.accept_terms')}</Label>
</div>
```

#### Badge
```typescript
import { Badge } from "../../components/ui/badge";

<Badge variant="default">نشط</Badge>
<Badge variant="secondary">معلق</Badge>
<Badge variant="destructive">محذوف</Badge>
```

---

### 3. Lucide Icons

```typescript
import { 
  SearchIcon, 
  PlusIcon, 
  EditIcon, 
  TrashIcon,
  CheckIcon,
  XIcon 
} from 'lucide-react';

<SearchIcon className="w-5 h-5 text-gray-500" />
```

**الأيقونات الشائعة:**
- `HomeIcon, InboxIcon, WalletIcon`
- `SearchIcon, FilterIcon, DownloadIcon`
- `PlusIcon, EditIcon, TrashIcon, SaveIcon`
- `CheckIcon, XIcon, AlertCircleIcon`
- `ArrowLeftIcon, ArrowRightIcon`
- `SettingsIcon, UserIcon, BellIcon`

[تصفح جميع الأيقونات](https://lucide.dev/icons/)

---

## 📐 معايير الكود

### 1. Package Manager
```bash
# استخدم pnpm فقط
pnpm install
pnpm run dev
pnpm run build
```

### 2. TypeScript
- **دائماً** حدد الأنواع بشكل صريح
- استخدم `interface` للـ props
- تجنب `any` type

```typescript
interface PageProps {
  title: string;
  onSave?: () => void;
}

export const Page = ({ title, onSave }: PageProps): JSX.Element => {
  // ...
};
```

### 3. Tailwind CSS
- استخدم utility classes
- الألوان الرئيسية: `#093738` (الأخضر الداكن)
- المسافات: استخدم نظام spacing الموحد (gap-4, p-4, m-4)
- الارتفاعات: `h-[45px]` للـ inputs, `h-[51px]` للـ buttons

```typescript
<div className="space-y-4 p-4 bg-white rounded-lg">
  <Input className="h-[45px]" />
  <Button className="h-[51px] bg-[#093738]">
    حفظ
  </Button>
</div>
```

### 4. RTL/LTR Support
```typescript
const { dir } = useLanguage();

<div className={`${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
  {/* المحتوى */}
</div>
```

### 5. فصل البيانات عن العرض

```typescript
// ❌ سيء
<div>
  <Card title="المشتريات" />
  <Card title="المبيعات" />
</div>

// ✅ جيد
const cards = [
  { id: 1, titleKey: 'purchases.title', icon: ShoppingCartIcon },
  { id: 2, titleKey: 'sales.title', icon: ShoppingBagIcon },
];

<div>
  {cards.map(card => (
    <Card key={card.id} title={t(card.titleKey)} icon={card.icon} />
  ))}
</div>
```

### 6. الـ Hooks
```typescript
// ترتيب الـ hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export const Component = () => {
  // 1. State
  const [data, setData] = useState([]);
  
  // 2. Hooks
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  
  // 3. Effects
  useEffect(() => {
    // ...
  }, []);
  
  // 4. Handlers
  const handleClick = () => {
    // ...
  };
  
  // 5. Render
  return <div>...</div>;
};
```

---

## 🎨 ATOM Design Pattern

### Atoms (الذرات - العناصر الأساسية)
```typescript
// components/ui/button.tsx
// components/ui/input.tsx
// components/ui/badge.tsx
```

### Molecules (الجزيئات - مجموعة من الذرات)
```typescript
// components/SearchBar.tsx
import { Input } from './ui/input';
import { Button } from './ui/button';

export const SearchBar = () => (
  <div className="flex gap-2">
    <Input placeholder="بحث..." />
    <Button>بحث</Button>
  </div>
);
```

### Organisms (الكائنات - مجموعة من الجزيئات)
```typescript
// components/Header.tsx
// components/Sidebar.tsx
```

### Templates (القوالب)
```typescript
// components/Layout.tsx
```

### Pages (الصفحات)
```typescript
// screens/Accounting/Accounting.tsx
```

---

## ⚠️ الأخطاء الشائعة وحلولها

### 1. خطأ TypeScript: متغير غير مستخدم
```typescript
// ❌ خطأ
const { t, dir, language } = useLanguage();
// 't' is declared but its value is never read

// ✅ الحل
const { t, dir } = useLanguage(); // احذف ما لا تستخدمه
```

### 2. خطأ Tailwind: تعارض classes

**المشكلة:** لا تستخدم نفس خاصية CSS مرتين في className  
**الحل:** استخدم خاصية واحدة فقط (مثلاً: استخدم `h-12` أو `h-auto` وليس كلاهما)

### 3. خطأ Import: Module not found
```typescript
// ❌ خطأ
import { CONSTANT } from '@repo/utilities/constants';

// ✅ الحل - بناء الـ package أولاً
// في Terminal:
cd packages/utilities
pnpm run build
```

### 4. نسيان إضافة الترجمة
```typescript
// ❌ خطأ - النص ظهر كـ key
<h1>{t('inventory.title')}</h1>
// Output: "inventory.title"

// ✅ الحل - أضف الترجمة في translations.json
{
  "ar": { "inventory": { "title": "إدارة المخزون" } },
  "en": { "inventory": { "title": "Inventory Management" } }
}
```

### 5. Breadcrumb لا يظهر
```typescript
// ✅ تأكد من:
// 1. إضافة المسار في breadcrumbs.config.ts
{ path: "/inventory", label: "sidebar.inventory" }

// 2. المسار يطابق path في Route
<Route path="/inventory" element={<Inventory />} />
```

---

## 🔄 سير العمل (Workflow)

### إضافة صفحة جديدة كاملة

1. **إنشاء Screen Component**
   ```bash
   mkdir apps/maykana-erp/src/screens/NewPage
   touch apps/maykana-erp/src/screens/NewPage/{NewPage.tsx,index.ts}
   ```

2. **كتابة الكود الأساسي**
   ```typescript
   import { Layout } from "../../components/Layout";
   import { useLanguage } from "../../contexts/LanguageContext";
   
   export const NewPage = (): JSX.Element => {
     const { t } = useLanguage();
     return (
       <Layout>
         <div>{t('newpage.title')}</div>
       </Layout>
     );
   };
   ```

3. **إضافة للـ Navigation**
   - افتح `config/navigation.config.ts`
   - أضف item جديد بـ icon ومسار

4. **إضافة الترجمات**
   - افتح `data/translations.json`
   - أضف المفاتيح للعربي والإنجليزي

5. **إضافة Route**
   - افتح `App.tsx`
   - أضف route جديد

6. **إضافة Breadcrumb**
   - افتح `config/breadcrumbs.config.ts`
   - أضف مسار الصفحة

7. **اختبار**
   ```bash
   pnpm run dev
   # افتح المتصفح وتأكد من:
   # - Sidebar يحتوي الصفحة الجديدة
   # - Breadcrumbs يعمل بشكل صحيح
   # - الترجمة تعمل
   # - RTL/LTR يعمل
   ```

8. **Build**
   ```bash
   pnpm run build
   # تأكد من عدم وجود أخطاء
   ```

---

## 📦 تحويل HTML/CSS إلى React

### الخطوات:

1. **تحليل الـ HTML**
   - افصل الأقسام (sections) المختلفة
   - حدد العناصر المتكررة (loops)
   - حدد البيانات الثابتة vs الديناميكية

2. **تحويل CSS إلى Tailwind**
   ```css
   /* CSS */
   .button {
     background-color: #093738;
     padding: 12px 24px;
     border-radius: 8px;
   }
   ```
   
   ```typescript
   // Tailwind
   <button className="bg-[#093738] px-6 py-3 rounded-lg">
   ```

3. **تحويل HTML إلى JSX**
   - غيّر `class` إلى `className`
   - غيّر `for` إلى `htmlFor`
   - أغلق الـ tags الفارغة: `<img />`, `<input />`
   - استخدم `{}` للـ expressions

4. **استخراج البيانات**
   ```typescript
   // بدلاً من:
   <div>
     <Card title="عنوان 1" />
     <Card title="عنوان 2" />
   </div>
   
   // استخدم:
   const items = [
     { id: 1, title: 'عنوان 1' },
     { id: 2, title: 'عنوان 2' },
   ];
   
   {items.map(item => (
     <Card key={item.id} title={item.title} />
   ))}
   ```

5. **استبدل بالمكونات الجاهزة**
   - ابحث عن button → استخدم `<Button />`
   - ابحث عن input → استخدم `<Input />`
   - ابحث عن card → استخدم `<Card />`

---

## 🌍 دعم اللغات

### استخدام الترجمة
```typescript
const { t, dir, language } = useLanguage();

// ترجمة نص
<h1>{t('sidebar.accounting')}</h1>

// اتجاه النص
<div dir={dir}>...</div>

// شرط بناءً على اللغة
{language === 'ar' ? 'عربي' : 'English'}

// class بناءً على الاتجاه
className={`${dir === 'rtl' ? 'text-right' : 'text-left'}`}
```

### إضافة ترجمات جديدة
```json
{
  "ar": {
    "section_name": {
      "key1": "النص بالعربي",
      "key2": "نص آخر"
    }
  },
  "en": {
    "section_name": {
      "key1": "Text in English",
      "key2": "Another text"
    }
  }
}
```

---

## 🚀 أوامر مفيدة

```bash
# تشغيل Development
pnpm run dev

# بناء للـ Production
pnpm run build

# فحص الأخطاء
pnpm run lint

# فحص TypeScript
pnpm run check-types

# بناء package معين
cd packages/utilities && pnpm run build

# تنظيف وإعادة التثبيت
rm -rf node_modules
pnpm install
```

---

## 📚 مراجع مفيدة

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons/)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## ✅ Checklist قبل Commit

- [ ] الكود يعمل بدون أخطاء
- [ ] `pnpm run build` ينجح
- [ ] الترجمات موجودة (عربي + إنجليزي)
- [ ] RTL/LTR يعمل بشكل صحيح
- [ ] Breadcrumbs يظهر بشكل صحيح
- [ ] Sidebar يحتوي الصفحة الجديدة
- [ ] لا توجد console errors/warnings
- [ ] الكود منظم ومقروء
- [ ] استخدمت المكونات الجاهزة
- [ ] فصلت البيانات عن العرض

---

## 📝 ملاحظات إضافية

### Colors الرئيسية
- Primary: `#093738` (الأخضر الداكن)
- Background: `#f7f7f9` (رمادي فاتح)
- White: `#ffffff`
- Border: `#e2e2e2`

### Spacing System
- Extra Small: `gap-1`, `p-1` (4px)
- Small: `gap-2`, `p-2` (8px)
- Medium: `gap-4`, `p-4` (16px)
- Large: `gap-6`, `p-6` (24px)
- Extra Large: `gap-8`, `p-8` (32px)

### Heights الموحدة
- Input: `h-[45px]`
- Button: `h-[51px]`
- Header: `h-[61px]`
- Sidebar (Open): `w-[305px]`
- Sidebar (Closed): `w-[70px]`

---

**آخر تحديث:** يناير 2026  
**المطور:** فريق Maykana ERP  
**الحالة:** جاهز للاستخدام ✅