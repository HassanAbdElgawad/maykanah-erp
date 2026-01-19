# Table Component Documentation

## 📋 نظرة عامة

مكون جدول احترافي قابل لإعادة الاستخدام مع دعم كامل للغة العربية وRTL.

## 🎯 المميزات

- ✅ تصميم احترافي متوافق مع نظام التصميم
- ✅ دعم كامل للغة العربية و RTL
- ✅ أعمدة قابلة للتخصيص
- ✅ إجراءات (Actions) مع أيقونات ملونة
- ✅ تحديد صفوف متعدد (Selectable Rows)
- ✅ Hover Effects و Animations
- ✅ رسائل فارغة قابلة للتخصيص
- ✅ خطوط IBM Plex Sans Arabic

## 📦 التصدير

```typescript
import { Table, AdvancedTable, TableColumn, ActionButton } from '@/components/ui/Table';
```

## 🔧 الاستخدام الأساسي

### Table Component

```tsx
import { Table, TableColumn } from '@/components/ui/Table';

const columns: TableColumn[] = [
  {
    key: 'name',
    label: 'الاسم',
    align: 'right',
  },
  {
    key: 'email',
    label: 'البريد الإلكتروني',
    align: 'right',
  },
  {
    key: 'status',
    label: 'الحالة',
    align: 'center',
    render: (value) => (
      <span className={`badge ${value === 'active' ? 'badge-success' : 'badge-danger'}`}>
        {value}
      </span>
    ),
  },
];

const data = [
  { id: 1, name: 'أحمد', email: 'ahmed@example.com', status: 'active' },
  { id: 2, name: 'فاطمة', email: 'fatima@example.com', status: 'inactive' },
];

<Table
  columns={columns}
  data={data}
  onRowClick={(row) => console.log(row)}
  emptyMessage="لا توجد بيانات"
/>
```

### AdvancedTable Component

```tsx
import { AdvancedTable, ActionButton } from '@/components/ui/Table';
import { Edit2, Trash2, Eye } from 'lucide-react';

const actions: ActionButton[] = [
  {
    icon: Eye,
    label: 'عرض',
    onClick: (row) => navigate(`/view/${row.id}`),
    color: 'blue',
  },
  {
    icon: Edit2,
    label: 'تعديل',
    onClick: (row) => navigate(`/edit/${row.id}`),
    color: 'green',
  },
  {
    icon: Trash2,
    label: 'حذف',
    onClick: (row) => handleDelete(row.id),
    color: 'red',
    show: (row) => row.canDelete, // عرض شرطي
  },
];

<AdvancedTable
  columns={columns}
  data={data}
  actions={actions}
  selectableRows={true}
  selectedRows={selectedRows}
  onSelectRow={(row) => handleSelectRow(row)}
  onSelectAll={(selected) => handleSelectAll(selected)}
/>
```

## 📝 Props

### Table Props

| Prop | النوع | الافتراضي | الوصف |
|------|-------|----------|-------|
| `columns` | `TableColumn[]` | **مطلوب** | تعريف الأعمدة |
| `data` | `any[]` | **مطلوب** | بيانات الجدول |
| `onRowClick` | `(row: any) => void` | - | دالة عند الضغط على الصف |
| `emptyMessage` | `string` | 'لا توجد بيانات' | رسالة عند عدم وجود بيانات |
| `hoverable` | `boolean` | `true` | تفعيل hover effect |
| `striped` | `boolean` | `false` | صفوف متباينة اللون |

### AdvancedTable Props

يرث جميع props من Table بالإضافة إلى:

| Prop | النوع | الافتراضي | الوصف |
|------|-------|----------|-------|
| `actions` | `ActionButton[]` | `[]` | قائمة الإجراءات |
| `selectableRows` | `boolean` | `false` | تفعيل تحديد الصفوف |
| `selectedRows` | `any[]` | `[]` | الصفوف المحددة |
| `onSelectRow` | `(row: any) => void` | - | دالة عند تحديد صف |
| `onSelectAll` | `(selected: boolean) => void` | - | دالة عند تحديد الكل |

### TableColumn Interface

```typescript
interface TableColumn {
  key: string;              // مفتاح البيانات
  label: string;            // عنوان العمود
  align?: 'left' | 'right' | 'center'; // محاذاة النص
  width?: string;           // عرض العمود (مثال: '200px')
  render?: (value: any, row: any) => React.ReactNode; // دالة عرض مخصصة
}
```

### ActionButton Interface

```typescript
interface ActionButton {
  icon: React.ElementType;  // أيقونة من lucide-react
  label: string;            // نص الزر
  onClick: (row: any) => void; // دالة عند الضغط
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'gray'; // لون الزر
  show?: (row: any) => boolean; // شرط العرض (اختياري)
}
```

## 🎨 الألوان المتاحة للإجراءات

- `blue` - أزرق (للعرض/التفاصيل)
- `green` - أخضر (للموافقة/التعديل)
- `red` - أحمر (للحذف/الرفض)
- `yellow` - أصفر (للتحذير)
- `gray` - رمادي (افتراضي)

## 💡 أمثلة متقدمة

### مع Avatar

```tsx
{
  key: 'name',
  label: 'الموظف',
  render: (value) => (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold">{value.charAt(0)}</span>
      </div>
      <span>{value}</span>
    </div>
  ),
}
```

### مع Status Badge

```tsx
{
  key: 'status',
  label: 'الحالة',
  align: 'center',
  render: (value) => {
    const colors = {
      approved: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      rejected: 'bg-red-100 text-red-800',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[value]}`}>
        {value}
      </span>
    );
  },
}
```

### مع تحديد الصفوف

```tsx
const [selectedRows, setSelectedRows] = useState([]);

const handleSelectRow = (row) => {
  setSelectedRows(prev => 
    prev.some(r => r.id === row.id)
      ? prev.filter(r => r.id !== row.id)
      : [...prev, row]
  );
};

const handleSelectAll = (selected) => {
  setSelectedRows(selected ? data : []);
};

<AdvancedTable
  selectableRows
  selectedRows={selectedRows}
  onSelectRow={handleSelectRow}
  onSelectAll={handleSelectAll}
  // ... باقي الـ props
/>
```

## 🔄 الانتقال من الجداول القديمة

### قبل

```tsx
<table className="w-full">
  <thead>
    <tr>
      <th>الاسم</th>
      <th>البريد</th>
    </tr>
  </thead>
  <tbody>
    {data.map(row => (
      <tr key={row.id}>
        <td>{row.name}</td>
        <td>{row.email}</td>
      </tr>
    ))}
  </tbody>
</table>
```

### بعد

```tsx
<Table
  columns={[
    { key: 'name', label: 'الاسم', align: 'right' },
    { key: 'email', label: 'البريد', align: 'right' },
  ]}
  data={data}
/>
```

## 📦 الملفات المحدثة

تم تطبيق الـ Component في الصفحات التالية:
1. ✅ `/screens/HR/MyRequests/MyRequests.tsx`
2. ✅ `/screens/HR/EmployeeCenter/EmployeeCenter.tsx`
3. 🔄 `/screens/Customers/Customers.tsx` (قيد التطبيق)
4. 🔄 `/screens/VendorQualification/VendorQualification.tsx` (قادم)
5. 🔄 `/screens/Tasks/Tasks.tsx` (قادم)
6. 🔄 وغيرها...

## 🎯 التحسينات المستقبلية

- [ ] Sorting للأعمدة
- [ ] Filtering مدمج
- [ ] Pagination مدمج
- [ ] Export إلى Excel/PDF
- [ ] Column Resizing
- [ ] Drag & Drop للصفوف
