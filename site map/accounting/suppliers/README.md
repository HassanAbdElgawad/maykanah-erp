# الموردون - Suppliers

## الصفحات

### 1. قائمة الموردون (Suppliers List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع الموردين مع إمكانية البحث والتصفية

**الملفات المطلوبة:**
- `index.html` - واجهة قائمة الموردين
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

### 2. إضافة مورد (Add Supplier)
**المجلد:** `add/`
**الوظيفة:** نموذج لإضافة مورد جديد

**الملفات المطلوبة:**
- `index.html` - نموذج إضافة مورد
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/suppliers          → قائمة الموردين
/accounting/suppliers/add      → إضافة مورد جديد
/accounting/suppliers/:id      → تفاصيل المورد
/accounting/suppliers/:id/edit → تعديل المورد
```

---

## البيانات المشتركة

```typescript
interface Supplier {
  id: string;
  name: string;
  nameEn?: string;
  code: string;
  taxNumber?: string;
  phone: string;
  email?: string;
  address?: string;
  city?: string;
  country?: string;
  category?: string;
  paymentTerms?: string;
  creditLimit?: number;
  balance: number;
  status: 'active' | 'inactive' | 'blocked';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] DataTable (للقائمة)
- [ ] Form (للإضافة/التعديل)
- [ ] SearchBar
- [ ] FilterPanel
- [ ] SupplierCard
- [ ] StatusBadge
- [ ] DeleteConfirmDialog

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "suppliers": {
        "title": "الموردون",
        "add_new": "إضافة مورد جديد",
        "edit": "تعديل المورد",
        "delete": "حذف المورد",
        "search": "البحث عن مورد",
        "code": "كود المورد",
        "name": "اسم المورد",
        "phone": "رقم الهاتف",
        "email": "البريد الإلكتروني",
        "balance": "الرصيد",
        "status": "الحالة",
        "active": "نشط",
        "inactive": "غير نشط",
        "blocked": "محظور"
      }
    }
  }
}
```
