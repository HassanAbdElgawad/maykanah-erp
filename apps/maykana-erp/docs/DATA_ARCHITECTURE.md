# هيكل البيانات والتكامل - Data Architecture & Integration

> **ملف مرجعي** — ارجع له عند الحاجة لفهم أو تطبيق هيكل البيانات والتكامل.

---

## 1. التحقق من الهيكل

الحديث التالي صحيح ويُطبَّق في المشروع:

| الركن | الوصف | الموقع |
|-------|-------|--------|
| **1. فصل البيانات** | أي ملف فيه Data يجب فصل الـ Data عنه | `@/data/` |
| **2. الـ Hook كجسر** | Hook يربط بين بيانات كل صفحة والصفحة نفسها | `@/hooks/useXxxData.ts` |
| **3. الطبقة المركزية** | مكان مركزي لتحديد أي صفحة/جزء يعمل ببيانات حقيقية وأيها ما زال بـ Dummy | `@/config/integration-status.config.ts` |

---

## 2. الطبقات الثلاث + الطبقة المركزية

```
┌─────────────────────────────────────────────────────────────────┐
│                        SCREEN (الصفحة)                           │
│  ReportsPage.tsx | Settings.tsx | Customers.tsx | ...            │
│  - يعرض الواجهة فقط                                              │
│  - لا يحتوي على بيانات                                           │
└────────────────────────────┬────────────────────────────────────┘
                             │ يستدعي
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    HOOK (الجسر)                                   │
│  usePurchasesAnalysisData | useUnitOfMeasuresData | ...           │
│  - يربط بين الـ Data والـ Screen                                 │
│  - يتحقق من الطبقة المركزية: dummy أم integrated؟                 │
└────────────────────────────┬────────────────────────────────────┘
                             │ يستورد من
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DATA LAYER (طبقة البيانات)                    │
│  @/data/reports/purchases/purchases-analysis.data.ts             │
│  - دوال/ثوابت: getXxxData(), mockXxx                              │
│  - عند Integration: نفس الدالة تستدعي API بدل المصفوفة الثابتة   │
└────────────────────────────┬────────────────────────────────────┘
                             │
              ┌──────────────┴──────────────┐
              ▼                             ▼
┌──────────────────────┐    ┌──────────────────────────────────────┐
│   DUMMY DATA         │    │   INTEGRATION STATUS (الطبقة المركزية)  │
│   مصفوفات/كائنات     │    │   @/config/integration-status.config   │
│   ثابتة داخل الملف   │    │   - dummy | integrated                 │
└──────────────────────┘    │   - مكان واحد لتحديد ما تم تكاملَه     │
              │             └──────────────────────────────────────┘
              │
              ▼
┌──────────────────────┐
│   REAL API           │
│   عند Integration    │
│   fetch/axios/etc     │
└──────────────────────┘
```

---

## 3. مسار العمل

### أ) صفحة جديدة أو فصل بيانات

1. أنشئ ملف Data في `@/data/...` وانقل البيانات إليه
2. أنشئ Hook في `@/hooks/useXxxData.ts` يستورد من ملف الـ Data
3. عدّل الـ Screen لاستخدام الـ Hook
4. أضف الصفحة في `integration-status.config.ts` بحالة `dummy`

### ب) عند بدء التكامل (Integration)

1. افتح `@/config/integration-status.config.ts`
2. غيّر الحالة من `'dummy'` إلى `'integrated'` للصفحة المعنية
3. عدّل ملف الـ Data (أو الـ Hook) لاستدعاء الـ API بدلاً من البيانات الثابتة
4. الـ Screen يبقى كما هو؛ التبديل يتم في الـ Hook أو الـ Data

---

## 4. أمثلة موجودة في المشروع

### مثال كامل: Workflows

| الطبقة | الملف | الوصف |
|--------|------|-------|
| Data | `@/data/workflows/workflows.data.ts` | INITIAL_SECTIONS, FLOW_INITIAL_NODES, ... |
| Hook | `@/hooks/useWorkflowsData.ts` | يجمّع البيانات ويعيدها + setters |
| Screen | `AddEditWorkflow.tsx` | `const workflowsData = useWorkflowsData()` |
| Integration | `integration-status.config.ts` | `'workflows': 'dummy'` أو `'integrated'` |

### مثال: Reports Purchases

| الطبقة | الملف |
|--------|------|
| Data | `@/data/reports/purchases/purchases-analysis.data` |
| Hook | `usePurchasesAnalysisData` |
| Screen | `PurchasesAnalysis.tsx` |

---

## 5. الملفات المرجعية

| الملف | الغرض |
|-------|-------|
| `docs/DATA_ARCHITECTURE.md` | هذا الملف — هيكل البيانات ومسار العمل |
| `src/config/integration-status.config.ts` | السجل المركزي: dummy أم integrated |
| `src/screens/DATA_PENDING_SEPARATION.md` | قائمة الصفحات التي تحتاج فصل بيانات |

---

## 6. الاستخدام في الكود

```typescript
// في الـ Hook عند Integration
import { isIntegrated } from '@/config/integration-status.config';

export const useInventoryBalanceData = (screenKey = 'reports/inventory-balance') => {
  const [data, setData] = useState<InventoryBalanceItem[]>([]);

  useEffect(() => {
    if (isIntegrated(screenKey)) {
      // جلب من API
      fetch('/api/reports/inventory-balance').then(r => r.json()).then(setData);
    } else {
      // بيانات dummy
      setData(getInventoryBalanceSampleData());
    }
  }, [screenKey]);

  return { data, setData };
};
```

---

## 7. ملخص

- **Data**: في `@/data` منفصل عن الـ UI
- **Hook**: جسر بين Data والـ Screen
- **Integration Status**: طبقة مركزية في `integration-status.config.ts` لتحديد dummy/integrated
- عند Integration: التعديل يكون في Data/Hook والـ Config، والـ Screen يظل ثابتًا قدر الإمكان
