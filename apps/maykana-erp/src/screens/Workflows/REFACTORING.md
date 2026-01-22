# Workflow Components - Refactoring Documentation

## نظرة عامة
تم تقسيم صفحة `AddEditWorkflow.tsx` إلى مكونات أصغر وأكثر قابلية للصيانة، وتم فصل جميع البيانات التجريبية (Dummy Data) إلى Hook مخصص.

## هيكل المكونات الجديدة

### 📁 المجلد: `components/`

#### 1. **types.ts**
تعريفات الأنواع المشتركة:
- `ViewMode`: أوضاع العرض (form | flow | formBuilder)
- `ScreenSize`: أحجام الشاشة (mobile | tablet | desktop)
- `FieldType`: نوع الحقل
- `Section`: نوع القسم
- `Field`: نوع الحقل المستخدم في النموذج
- `CustomNodeData`: بيانات العقدة المخصصة
- وغيرها...

#### 2. **dummyData.ts** ✨ جديد
ملف يحتوي على جميع البيانات التجريبية (Dummy Data):
- `FORM_BUILDER_FIELDS`: حقول بناء النموذج
- `FORM_BUILDER_TABLE_ROWS`: صفوف جدول بناء النموذج
- `FORM_BUILDER_INITIAL_NODES`: عقد ReactFlow لبناء النموذج
- `FORM_BUILDER_INITIAL_EDGES`: روابط عقد بناء النموذج
- `INITIAL_SECTIONS`: الأقسام الأولية للنموذج
- `FIELD_TYPES`: أنواع الحقول المتاحة
- `FLOW_INITIAL_NODES`: عقد مخطط التدفق الرئيسية
- `FLOW_INITIAL_EDGES`: روابط مخطط التدفق الرئيسية

#### 3. **useDummyData.ts** ✨ جديد
Hook مخصص لإدارة جميع البيانات التجريبية:
```typescript
export const useDummyData = () => {
  // Form Builder State
  const [formBuilderFields, setFormBuilderFields] = useState(FORM_BUILDER_FIELDS);
  const [formBuilderTableRows, setFormBuilderTableRows] = useState(FORM_BUILDER_TABLE_ROWS);
  const [formBuilderNodes, setFormBuilderNodes] = useState<Node[]>(FORM_BUILDER_INITIAL_NODES);
  const [formBuilderEdges, setFormBuilderEdges] = useState<Edge[]>(FORM_BUILDER_INITIAL_EDGES);

  // Form View State
  const [sections, setSections] = useState<Section[]>(INITIAL_SECTIONS);

  // Static Data (Read-only)
  const fieldTypes: FieldType[] = FIELD_TYPES;

  // Flow View State
  const [flowNodes, setFlowNodes] = useState<Node[]>(FLOW_INITIAL_NODES);
  const [flowEdges, setFlowEdges] = useState<Edge[]>(FLOW_INITIAL_EDGES);

  return {
    formBuilderFields, setFormBuilderFields,
    formBuilderTableRows, setFormBuilderTableRows,
    formBuilderNodes, setFormBuilderNodes,
    formBuilderEdges, setFormBuilderEdges,
    sections, setSections,
    fieldTypes,
    flowNodes, setFlowNodes,
    flowEdges, setFlowEdges,
  };
};
```

**الفوائد:**
- فصل المنطق عن البيانات
- سهولة التعديل والصيانة
- إمكانية استبدال البيانات التجريبية ببيانات حقيقية من API
- إعادة الاستخدام في المكونات الأخرى

#### 4. **NavigationSidebar.tsx**
الأيقونات الجانبية للتبديل بين أوضاع العرض:
- عرض النموذج (Form)
- عرض المخطط الانسيابي (Flow)
- باني النموذج (Form Builder)

**Props:**
```typescript
interface NavigationSidebarProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  primaryColor: string;
  dir: string;
}
```

#### 5. **FieldsSidebar.tsx**
القائمة الجانبية التي تعرض الحقول المتاحة للسحب والإفلات:
- حقول أساسية (Basic)
- عناصر التحكم (Control)
- جداول وقوائم التحقق (Tables & Checklists)

**Props:**
```typescript
interface FieldsSidebarProps {
  fieldTypes: FieldType[];
  onDragStart: (field: FieldType) => void;
  onDragEnd: () => void;
  dir: string;
}
```

#### 4. **CustomFlowNode.tsx**
مكون العقدة المخصصة في المخطط الانسيابي:
- عقدة البداية (Start)
- عقدة المهمة (Task)
- عقدة النجاح (Success)
- عقدة الفشل (Failure)
- عقدة النهاية (End)

**Props:**
```typescript
interface CustomFlowNodeProps {
  data: CustomNodeData;
  isSelected: boolean;
  onAddNode: (type: 'task' | 'condition') => void;
}
```

#### 5. **ActionButtons.tsx**
الأزرار السفلية للإجراءات:
- حفظ وإغلاق
- معاينة
- نشر مباشر

**Props:**
```typescript
interface ActionButtonsProps {
  onSave: () => void;
  onPublish: () => void;
  primaryColor: string;
}
```

#### 6. **AddNodeModal.tsx**
نافذة منبثقة لإضافة عقدة جديدة:
- إضافة مهمة جديدة
- إضافة نتيجة إيجابية
- إضافة نتيجة سلبية

**Props:**
```typescript
interface AddNodeModalProps {
  show: boolean;
  onClose: () => void;
  modalType: 'task' | 'condition';
  onAddNode: (type: 'task' | 'success' | 'failure') => void;
  dir: string;
}
```

#### 7. **sectionHandlers.ts**
Custom Hook لإدارة العمليات على الأقسام:
```typescript
export const useSectionHandlers = (
  sections: Section[],
  setSections: (sections: Section[]) => void
) => ({
  addSection,
  moveSection,
  copySection,
  deleteSection,
  handleDropOnSection,
});
```

#### 8. **index.ts**
ملف التصدير المركزي لجميع المكونات.

## الفوائد

### ✅ قابلية الصيانة
- كود أقصر وأسهل للفهم
- كل مكون له مسؤولية واحدة
- سهولة العثور على الأخطاء وإصلاحها

### ✅ إعادة الاستخدام
- يمكن إعادة استخدام المكونات في صفحات أخرى
- تعريفات الأنواع مشتركة
- البيانات التجريبية معزولة في Hook واحد

### ✅ الاختبار
- سهولة كتابة اختبارات الوحدة لكل مكون
- عزل المنطق التجاري
- سهولة mock البيانات التجريبية

### ✅ الأداء
- React يمكنه تحسين إعادة الرسم بشكل أفضل
- Lazy loading ممكن للمكونات الكبيرة
- البيانات التجريبية لا تؤثر على أداء المكونات

## الاستخدام

```typescript
import {
  NavigationSidebar,
  FieldsSidebar,
  ActionButtons,
  AddNodeModal,
  CustomFlowNode,
  useSectionHandlers,
  useDummyData,  // ✨ جديد
  ViewMode,
  Section,
} from './components';

// في المكون الرئيسي
const dummyData = useDummyData();

// استخدام البيانات
const sections = dummyData.sections;
const setSections = dummyData.setSections;
const fieldTypes = dummyData.fieldTypes;
```

// في المكون الرئيسي
const [sections, setSections] = useState<Section[]>([]);
const {
  addSection,
  moveSection,
  copySection,
  deleteSection,
  handleDropOnSection,
} = useSectionHandlers(dummyData.sections, dummyData.setSections);
```

## الملفات المعدلة

### 📝 قبل Refactoring
- `AddEditWorkflow.tsx`: ~2500 سطر (تحتوي على جميع البيانات التجريبية)

### 📝 بعد Refactoring - المرحلة الأولى
- `AddEditWorkflow.tsx`: ~2033 سطر (↓ 18.7%)
- `components/types.ts`: 79 سطر
- `components/NavigationSidebar.tsx`: 53 سطر
- `components/FieldsSidebar.tsx`: 126 سطر
- `components/ActionButtons.tsx`: 37 سطر
- `components/AddNodeModal.tsx`: 79 سطر
- `components/CustomFlowNode.tsx`: 223 سطر
- `components/sectionHandlers.ts`: 113 سطر
- `components/index.ts`: 7 سطر

### 📝 بعد Refactoring - المرحلة الثانية ✨
- `AddEditWorkflow.tsx`: ~1762 سطر (↓ 29.5% من الأصلي)
- `components/dummyData.ts`: 313 سطر (جديد) ✨
- `components/useDummyData.ts`: 67 سطر (جديد) ✨
- `components/index.ts`: 9 سطور (محدث)
- باقي المكونات: بدون تغيير

**إجمالي التحسينات**:
- ✅ تقليل حجم الملف الرئيسي بنسبة **29.5%**
- ✅ فصل جميع البيانات التجريبية (8 مصادر بيانات)
- ✅ إنشاء Hook مركزي لإدارة البيانات
- ✅ سهولة استبدال البيانات التجريبية بـ API
- ✅ كود أكثر تنظيمًا وقابلية للصيانة

## ملاحظات

- تم الحفاظ على جميع الوظائف الموجودة
- لم يتم تغيير واجهة المستخدم
- تحسين TypeScript type safety
- إضافة تعليقات توضيحية

## الخطوات التالية المقترحة

1. ✨ استخراج PropertiesSidebar كمكون منفصل
2. ✨ استخراج FormView و FlowView و FormBuilderView
3. 🧪 إضافة اختبارات الوحدة
4. 📚 إضافة Storybook للمكونات
5. ♿ تحسين إمكانية الوصول (Accessibility)
