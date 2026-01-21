# Workflow Components Structure

## Overview
تم إعادة هيكلة ملف `AddEditWorkflow.tsx` لتحسين قابلية القراءة والصيانة من خلال تقسيم الـ Components إلى ملفات منفصلة.

## Structure

```
Workflows/
├── AddEditWorkflow.tsx          # Main component (العنصر الرئيسي)
├── Workflows.tsx                # Workflows list (قائمة سير العمل)
├── index.ts                     # Exports (التصديرات)
└── components/
    ├── FormBuilderNodes.tsx    # Custom nodes for form builder workflow tree
    ├── FlowNodes.tsx           # Custom nodes for flow diagram
    └── WorkflowModals.tsx      # Modal components (Column, Checklist, Publish)
```

## Components

### 1. FormBuilderNodes.tsx
يحتوي على الـ Custom Nodes الخاصة بـ Form Builder workflow tree:
- `ProcessStartNode` - بداية العملية
- `ProcessActiveNode` - العملية النشطة
- `ProcessBranchNode` - فرع العملية
- `ProcessEndNode` - نهاية العملية
- `formBuilderNodeTypes` - Object يحتوي على جميع الأنواع

**استخدام:**
```tsx
import { formBuilderNodeTypes } from './components/FormBuilderNodes';

<ReactFlow nodeTypes={formBuilderNodeTypes} ... />
```

### 2. FlowNodes.tsx
يحتوي على الـ Custom Nodes الخاصة بـ Flow diagram:
- `StartNode` - عقدة البداية
- `ActionNode` - عقدة الإجراء
- `BranchNode` - عقدة الفرع
- `EndNode` - عقدة النهاية
- `nodeTypes` - Object يحتوي على جميع الأنواع

**استخدام:**
```tsx
import { nodeTypes } from './components/FlowNodes';

<ReactFlow nodeTypes={nodeTypes} ... />
```

### 3. WorkflowModals.tsx
يحتوي على الـ Modal Components:
- `ColumnModal` - لإضافة عمود جديد للجدول
- `ChecklistItemModal` - لإضافة عنصر للقائمة
- `PublishModal` - لنشر سير العمل

**استخدام:**
```tsx
import { ColumnModal, ChecklistItemModal, PublishModal } from './components/WorkflowModals';

<ColumnModal
  showColumnModal={showColumnModal}
  setShowColumnModal={setShowColumnModal}
  newColumnName={newColumnName}
  setNewColumnName={setNewColumnName}
  addColumn={addColumn}
  primaryColor={primaryColor}
  dir={dir}
/>
```

## Benefits (الفوائد)

1. **أفضل تنظيمًا**: كل نوع من الـ Components في ملف منفصل
2. **أسهل للصيانة**: يمكن تعديل كل component بشكل مستقل
3. **قابل لإعادة الاستخدام**: يمكن استخدام هذه الـ Components في أماكن أخرى
4. **حجم ملف أصغر**: AddEditWorkflow.tsx أصبح أقصر بحوالي 200 سطر
5. **أسرع للتطوير**: أسهل في البحث والتعديل

## Notes (ملاحظات)

- لم يتم تغيير أي Logic أو وظيفة
- جميع الـ imports تم تحديثها تلقائيًا
- الـ Types والـ Props تم الحفاظ عليها
- RTL support موجود في جميع الـ Components
