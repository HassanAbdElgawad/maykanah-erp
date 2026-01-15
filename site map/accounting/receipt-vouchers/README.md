# مستندات القبض - Receipt Vouchers

## الصفحات

### 1. قائمة مستندات القبض (Receipt Vouchers List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع سندات القبض

**الملفات المطلوبة:**
- `index.html` - واجهة قائمة السندات
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

### 2. إنشاء سند قبض جديد (Create New Receipt)
**المجلد:** `create/`
**الوظيفة:** نموذج لإنشاء سند قبض جديد

**الملفات المطلوبة:**
- `index.html` - نموذج إنشاء سند
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/receipts             → قائمة مستندات القبض
/accounting/receipts/create      → إنشاء سند قبض جديد
/accounting/receipts/:id         → تفاصيل سند قبض
/accounting/receipts/:id/print   → طباعة السند
```

---

## البيانات المشتركة

```typescript
interface ReceiptVoucher {
  id: string;
  voucherNumber: string;
  date: string;
  receivedFrom: string;
  amount: number;
  paymentMethod: 'cash' | 'check' | 'bank_transfer' | 'credit_card';
  checkNumber?: string;
  bankName?: string;
  description: string;
  accountCode: string;
  accountName: string;
  costCenter?: string;
  status: 'draft' | 'posted' | 'cancelled';
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
- [ ] PrintButton

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "receipts": {
        "title": "مستندات القبض",
        "create_new": "إنشاء سند قبض جديد",
        "voucher_number": "رقم السند",
        "date": "التاريخ",
        "received_from": "مستلم من",
        "amount": "المبلغ",
        "payment_method": "طريقة الدفع",
        "check_number": "رقم الشيك",
        "bank_name": "اسم البنك",
        "description": "البيان",
        "account": "الحساب",
        "cost_center": "مركز التكلفة",
        "print": "طباعة"
      }
    }
  }
}
```
