# مستندات الدفع - Payment Vouchers

## الصفحات

### 1. قائمة مستندات الدفع (Payment Vouchers List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع سندات الدفع

**الملفات المطلوبة:**
- `index.html` - واجهة قائمة السندات
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

### 2. إنشاء سند دفع جديد (Create New Payment)
**المجلد:** `create/`
**الوظيفة:** نموذج لإنشاء سند دفع جديد

**الملفات المطلوبة:**
- `index.html` - نموذج إنشاء سند
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/payments             → قائمة مستندات الدفع
/accounting/payments/create      → إنشاء سند دفع جديد
/accounting/payments/:id         → تفاصيل سند دفع
/accounting/payments/:id/print   → طباعة السند
```

---

## البيانات المشتركة

```typescript
interface PaymentVoucher {
  id: string;
  voucherNumber: string;
  date: string;
  paidTo: string;
  amount: number;
  paymentMethod: 'cash' | 'check' | 'bank_transfer';
  checkNumber?: string;
  bankName?: string;
  description: string;
  accountCode: string;
  accountName: string;
  costCenter?: string;
  approvedBy?: string;
  status: 'draft' | 'posted' | 'approved' | 'cancelled';
  createdBy: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] DataTable
- [ ] VoucherForm
- [ ] AccountSelector
- [ ] PaymentMethodSelector
- [ ] AmountInput
- [ ] DatePicker
- [ ] StatusBadge
- [ ] ApprovalDialog
- [ ] PrintButton

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "payments": {
        "title": "مستندات الدفع",
        "create_new": "إنشاء سند دفع جديد",
        "voucher_number": "رقم السند",
        "date": "التاريخ",
        "paid_to": "مدفوع إلى",
        "amount": "المبلغ",
        "payment_method": "طريقة الدفع",
        "check_number": "رقم الشيك",
        "bank_name": "اسم البنك",
        "description": "البيان",
        "account": "الحساب",
        "cost_center": "مركز التكلفة",
        "approved_by": "معتمد بواسطة",
        "print": "طباعة"
      }
    }
  }
}
```
