# القيود المحاسبية - Accounting Entries

## حالة التنفيذ
- ✅ **قائمة القيود المحاسبية** - تم التصميم والتنفيذ بالكامل
  - المسار: `/accounting/entries`
  - المكون: `AccountingEntries.tsx`
  - التاريخ: 2026-01-14

---

## الصفحات

### 1. قائمة القيود المحاسبية (Accounting Entries List) ✅
**المجلد:** `list/`
**الوظيفة:** عرض جميع القيود المحاسبية مع إمكانية البحث والتصفية
**الحالة:** ✅ تم التنفيذ

**الملفات المطلوبة:**
- ✅ `AccountingEntries.tsx` - واجهة قائمة القيود
- ✅ التصفية والبحث - مطبق بالكامل
- ✅ الأزرار والـ dropdowns - مطبقة بالكامل

---

### 2. قيد جديد (New Entry)
**المجلد:** `create/`
**الوظيفة:** نموذج لإنشاء قيد محاسبي جديد

**الملفات المطلوبة:**
- `index.html` - نموذج إنشاء قيد
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/entries              → قائمة القيود
/accounting/entries/create       → قيد جديد
/accounting/entries/:id          → تفاصيل قيد
/accounting/entries/:id/edit     → تعديل قيد
```

---

## البيانات المشتركة

```typescript
interface AccountingEntry {
  id: string;
  entryNumber: string;
  date: string;
  description: string;
  items: AccountingEntryItem[];
  totalDebit: number;
  totalCredit: number;
  status: 'draft' | 'posted' | 'approved' | 'cancelled';
  referenceType?: 'invoice' | 'receipt' | 'payment' | 'manual';
  referenceId?: string;
  createdBy: string;
  approvedBy?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface AccountingEntryItem {
  id: string;
  accountCode: string;
  accountName: string;
  description: string;
  debit: number;
  credit: number;
  costCenter?: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] AccountingTable (جدول مع مدين/دائن)
- [ ] EntryForm
- [ ] AccountSelector
- [ ] AmountInput
- [ ] DatePicker
- [ ] StatusBadge
- [ ] SearchBar
- [ ] FilterPanel

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "entries": {
        "title": "القيود المحاسبية",
        "create_new": "قيد جديد",
        "entry_number": "رقم القيد",
        "date": "التاريخ",
        "description": "الوصف",
        "account": "الحساب",
        "debit": "مدين",
        "credit": "دائن",
        "total_debit": "إجمالي المدين",
        "total_credit": "إجمالي الدائن",
        "status": "الحالة",
        "add_line": "إضافة سطر",
        "save_draft": "حفظ كمسودة",
        "post": "ترحيل"
      }
    }
  }
}
```
