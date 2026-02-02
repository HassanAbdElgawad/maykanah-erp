# Asset Management Tabs

تم استخراج التبويبات (Tabs) من ملف AssetDetail.tsx إلى ملفات منفصلة لتحسين قابلية الصيانة وإعادة الاستخدام.

## الملفات المُنشأة

### 1. MetadataTab.tsx
- **الوصف**: يعرض بيانات تعريف الأصل الأساسية
- **Props**:
  - `assetData`: بيانات الأصل (فئة، مجموعة، قسم، مركز التكلفة، المورد، التواريخ، الضمان)

### 2. DepreciationTab.tsx
- **الوصف**: يعرض معلومات الإهلاك وجدول الإهلاك
- **Props**:
  - `formatCurrency`: دالة لتنسيق العملة
  - `onOpenResetModal`: دالة لفتح نافذة إعادة ضبط الإهلاك
  - `onOpenChangePaymentsModal`: دالة لفتح نافذة تعديل عدد الدفعات

### 3. MovementsTab.tsx
- **الوصف**: يعرض سجل النقل بين المواقع
- **Props**: لا توجد

### 4. MaintenanceTab.tsx
- **الوصف**: يعرض طلبات الصيانة وسجلاتها
- **Props**:
  - `formatCurrency`: دالة لتنسيق العملة
  - `onOpenCreateMaintenanceModal`: دالة لفتح نافذة إنشاء طلب صيانة
  - `onOpenAddMaintenanceRecordModal`: دالة لفتح نافذة إضافة سجل صيانة

### 5. ImprovementsTab.tsx
- **الوصف**: يعرض جدول التحسينات على الأصل
- **Props**:
  - `formatCurrency`: دالة لتنسيق العملة
  - `onOpenEditAssetValueModal`: دالة لفتح نافذة تعديل قيمة الأصل

### 6. DisposalTab.tsx
- **الوصف**: يعرض معلومات الاستبعاد/البيع
- **Props**:
  - `formatCurrency`: دالة لتنسيق العملة

### 7. AttachmentsTab.tsx
- **الوصف**: يعرض المرفقات المرتبطة بالأصل
- **Props**: لا توجد

## الاستخدام

```tsx
import {
  MetadataTab,
  DepreciationTab,
  MovementsTab,
  MaintenanceTab,
  ImprovementsTab,
  DisposalTab,
  AttachmentsTab,
} from './components/tabs';

// في ملف AssetDetail.tsx
{activeTab === 'metadata' && <MetadataTab assetData={assetData} />}
{activeTab === 'depreciation' && (
  <DepreciationTab
    formatCurrency={formatCurrency}
    onOpenResetModal={() => setIsResetDepreciationModalOpen(true)}
    onOpenChangePaymentsModal={() => setIsChangePaymentsModalOpen(true)}
  />
)}
// ... إلخ
```

## الفوائد

1. **تحسين القراءة**: كل تبويب في ملف منفصل يسهل قراءته وصيانته
2. **إعادة الاستخدام**: يمكن إعادة استخدام التبويبات في أماكن أخرى
3. **الصيانة**: سهولة تعديل أو إصلاح تبويب واحد دون التأثير على الآخرين
4. **الاختبار**: يمكن اختبار كل تبويب بشكل منفصل
5. **تقليل حجم الملف**: ملف AssetDetail.tsx أصبح أصغر وأسهل في التنقل

## التحديثات المطلوبة مستقبلاً

- استبدال البيانات الثابتة (mock data) ببيانات حقيقية من API
- إضافة معالجة الأخطاء
- إضافة حالات التحميل (loading states)
- إضافة التحقق من الصلاحيات (permissions)
