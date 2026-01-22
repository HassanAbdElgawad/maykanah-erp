# 📁 Data Architecture - بنية البيانات

## نظرة عامة
هذا المشروع يتبع معمارية فصل البيانات (Data Separation Architecture) حيث يتم عزل جميع البيانات التجريبية والثابتة عن المكونات (Components) لتسهيل الصيانة والاختبار.

## 🏗️ الهيكل العام

```
src/
├── data/              # جميع ملفات البيانات
│   ├── index.ts       # تصدير مركزي لكل البيانات
│   ├── accounting.data.ts
│   ├── auth.data.ts
│   ├── suppliers.data.ts
│   ├── ui.data.ts
│   ├── workflows.data.ts
│   └── ...
│
├── hooks/             # Custom Hooks لإدارة البيانات
│   ├── index.ts       # تصدير مركزي لكل الـ Hooks
│   ├── useWorkflowsData.ts
│   ├── useSuppliersData.ts
│   └── ...
│
└── screens/           # مكونات الصفحات
    └── [PageName]/    # كل صفحة في مجلدها
```

---

## 📝 قواعد التسمية

### ملفات البيانات (Data Files)
- **الموقع**: `src/data/`
- **التسمية**: `[module-name].data.ts`
- **أمثلة**:
  - `workflows.data.ts` - بيانات مسارات العمل
  - `suppliers.data.ts` - بيانات الموردين
  - `auth.data.ts` - بيانات صفحات المصادقة
  - `ui.data.ts` - بيانات واجهة المستخدم العامة

### Custom Hooks
- **الموقع**: `src/hooks/`
- **التسمية**: `use[ModuleName]Data.ts`
- **أمثلة**:
  - `useWorkflowsData.ts` - Hook لإدارة بيانات Workflows
  - `useSuppliersData.ts` - Hook لإدارة بيانات Suppliers

---

## 📚 أنواع ملفات البيانات

### 1. بيانات خاصة بصفحة محددة
**مثال**: `workflows.data.ts`

```typescript
// ✅ تعريف الأنواع
export interface WorkflowNode {
  id: string;
  type: string;
  data: any;
}

// ✅ تصدير البيانات الثابتة
export const FLOW_INITIAL_NODES: WorkflowNode[] = [
  { id: '1', type: 'start', data: {...} },
  // ...
];
```

### 2. بيانات مشتركة بين صفحات متعددة
**مثال**: `ui.data.ts`

```typescript
// بيانات الإشعارات - مستخدمة في Header
export const MOCK_NOTIFICATIONS: Notification[] = [...];

// بيانات البحث - مستخدمة في Header
export const SEARCHABLE_PAGES: SearchResult[] = [...];
```

### 3. بيانات ديناميكية حسب اللغة
**مثال**: `auth.data.ts`

```typescript
/**
 * Get content slides based on current language
 * @param language Current language ('ar' | 'en')
 */
export const getAuthContentSlides = (language: string): ContentSlide[] => [
  {
    title: language === 'ar' ? 'أتمتة ذكية' : 'Smart Automation',
    // ...
  }
];
```

---

## 🔧 كيفية إنشاء Data File جديد

### الخطوة 1: إنشاء ملف البيانات

في `src/data/[module-name].data.ts`:

```typescript
// 1. استيراد الأنواع المطلوبة (إن وجدت)
import type { SomeType } from '../screens/SomePage/types';

// 2. تعريف الأنواع الخاصة
export interface MyDataItem {
  id: number;
  name: string;
  // ...
}

// 3. تصدير البيانات
export const MY_MOCK_DATA: MyDataItem[] = [
  { id: 1, name: 'Item 1' },
  // ...
];
```

### الخطوة 2: إنشاء Custom Hook (اختياري)

في `src/hooks/use[ModuleName]Data.ts`:

```typescript
import { useState } from 'react';
import { MY_MOCK_DATA, type MyDataItem } from '../data/[module].data';

/**
 * Custom Hook for managing [module] data
 */
export const useMyModuleData = () => {
  const [data, setData] = useState<MyDataItem[]>(MY_MOCK_DATA);

  return {
    data,
    setData,
  };
};
```

### الخطوة 3: استخدام البيانات في المكون

```typescript
import { useMyModuleData } from '../../hooks/useMyModuleData';
// أو
import { MY_MOCK_DATA } from '../../data';

export const MyComponent = () => {
  // مع Hook
  const { data, setData } = useMyModuleData();
  
  // أو بدون Hook (للبيانات الثابتة)
  const staticData = MY_MOCK_DATA;
  
  // ...
};
```

### الخطوة 4: تحديث index.ts

في `src/data/index.ts`:
```typescript
export * from './my-module.data';
```

في `src/hooks/index.ts` (إذا أنشأت Hook):
```typescript
export * from './useMyModuleData';
```

---

## ✅ الفوائد

### 1. فصل المسؤوليات (Separation of Concerns)
- البيانات منفصلة عن المكونات
- سهولة الصيانة والتعديل

### 2. إعادة الاستخدام (Reusability)
- استخدام نفس البيانات في صفحات متعددة
- مثال: `SEARCHABLE_PAGES` في Header و Sidebar

### 3. الاختبار (Testing)
- سهولة كتابة Unit Tests
- إمكانية Mock البيانات بسهولة

### 4. الاستبدال بـ API
```typescript
// قبل
const data = MY_MOCK_DATA;

// بعد
const { data } = useQuery('myData', fetchDataFromAPI);
```

---

## 📖 أمثلة واقعية

### مثال 1: Workflows
```typescript
// في src/data/workflows.data.ts
export const FIELD_TYPES = [...];
export const INITIAL_SECTIONS = [...];

// في src/hooks/useWorkflowsData.ts
export const useWorkflowsData = () => {
  const [sections, setSections] = useState(INITIAL_SECTIONS);
  const fieldTypes = FIELD_TYPES; // static
  
  return { sections, setSections, fieldTypes };
};

// في src/screens/Workflows/AddEditWorkflow.tsx
const workflowsData = useWorkflowsData();
// استخدام: workflowsData.sections, workflowsData.fieldTypes
```

### مثال 2: Suppliers
```typescript
// في src/data/suppliers.data.ts
export const MOCK_SUPPLIERS: Supplier[] = [...];

// في src/hooks/useSuppliersData.ts
export const useSuppliersData = () => {
  const [suppliers, setSuppliers] = useState(MOCK_SUPPLIERS);
  return { suppliers, setSuppliers };
};

// في src/screens/Suppliers/Suppliers.tsx
const { suppliers, setSuppliers } = useSuppliersData();
```

### مثال 3: UI Data (مشتركة)
```typescript
// في src/data/ui.data.ts
export const MOCK_NOTIFICATIONS = [...];
export const SEARCHABLE_PAGES = [...];

// في src/components/Header.tsx
import { MOCK_NOTIFICATIONS, SEARCHABLE_PAGES } from '../data';
```

---

## 🚀 خطة التطوير المستقبلية

### المرحلة 1: فصل البيانات ✅
- [x] Workflows
- [x] Suppliers
- [x] Auth Pages
- [x] UI Common Data

### المرحلة 2: إضافة صفحات جديدة
- [ ] Customers
- [ ] Products
- [ ] Orders
- [ ] Reports

### المرحلة 3: الربط بـ API
- [ ] استبدال Mock Data بـ React Query
- [ ] إنشاء Services layer
- [ ] Error Handling & Loading States

---

## 📝 ملاحظات مهمة

1. **لا تضع البيانات داخل المكونات**
   ```typescript
   // ❌ خطأ
   const MyComponent = () => {
     const mockData = [{ id: 1 }, { id: 2 }];
     // ...
   }
   
   // ✅ صحيح
   // في src/data/mymodule.data.ts
   export const MOCK_DATA = [{ id: 1 }, { id: 2 }];
   ```

2. **استخدم UPPER_CASE للبيانات الثابتة**
   ```typescript
   // ✅ صحيح
   export const FIELD_TYPES = [...];
   export const MOCK_SUPPLIERS = [...];
   ```

3. **استخدم Functions للبيانات الديناميكية**
   ```typescript
   // ✅ صحيح
   export const getAuthContentSlides = (language: string) => [...];
   ```

4. **وثّق الـ Hooks بشكل واضح**
   ```typescript
   /**
    * Custom Hook for managing [module] data
    * 
    * @returns {Object} Object containing data and state setters
    */
   export const useMyData = () => { ... };
   ```

---

## 📞 للمزيد من المساعدة

راجع الملفات الموجودة في:
- `src/data/workflows.data.ts` - مثال كامل ومعقد
- `src/hooks/useWorkflowsData.ts` - مثال Hook متقدم
- `src/data/ui.data.ts` - مثال بيانات مشتركة
