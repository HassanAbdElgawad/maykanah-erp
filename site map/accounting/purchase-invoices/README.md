# فاتورة المشتريات - Purchase Invoices

## الصفحات

### 1. قائمة فواتير المشتريات (Purchase Invoices List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع فواتير المشتريات

**الملفات المطلوبة:**
- `index.html` - واجهة القائمة
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

### 2. إنشاء فاتورة المشتريات (Create Purchase Invoice)
**المجلد:** `create/`
**الوظيفة:** نموذج لإنشاء فاتورة مشتريات جديدة

**الملفات المطلوبة:**
- `index.html` - نموذج إنشاء فاتورة
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/purchase-invoices         → قائمة فواتير المشتريات
/accounting/purchase-invoices/create  → إنشاء فاتورة جديدة
/accounting/purchase-invoices/:id     → تفاصيل الفاتورة
/accounting/purchase-invoices/:id/pay → تسديد الفاتورة
```

---

## البيانات المشتركة

```typescript
interface PurchaseInvoice {
  id: string;
  invoiceNumber: string;
  supplierInvoiceNumber?: string;
  date: string;
  dueDate: string;
  purchaseOrderId?: string;
  materialReceiptId?: string;
  supplier: Supplier;
  items: PurchaseInvoiceItem[];
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  paymentStatus: 'unpaid' | 'partial' | 'paid' | 'overdue';
  status: 'draft' | 'posted' | 'cancelled';
  notes?: string;
  attachments?: string[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

interface PurchaseInvoiceItem {
  id: string;
  materialName: string;
  materialCode: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  taxRate: number;
  discount: number;
  totalPrice: number;
}

interface InvoicePayment {
  id: string;
  invoiceId: string;
  date: string;
  amount: number;
  paymentMethod: 'cash' | 'bank_transfer' | 'check' | 'credit';
  reference?: string;
  notes?: string;
  createdBy: string;
  createdAt: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] DataTable
- [ ] Form
- [ ] SupplierSelector
- [ ] ItemsTable
- [ ] TotalCalculator
- [ ] PaymentStatusBadge
- [ ] PaymentDialog
- [ ] FileUpload
- [ ] PrintButton

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "purchaseInvoices": {
        "title": "فواتير المشتريات",
        "create_new": "إنشاء فاتورة جديدة",
        "invoice_number": "رقم الفاتورة",
        "supplier_invoice": "فاتورة المورد",
        "date": "التاريخ",
        "due_date": "تاريخ الاستحقاق",
        "supplier": "المورد",
        "subtotal": "المبلغ الفرعي",
        "tax": "الضريبة",
        "discount": "الخصم",
        "total": "الإجمالي",
        "paid": "المدفوع",
        "remaining": "المتبقي",
        "payment_status": "حالة الدفع",
        "pay": "تسديد"
      }
    }
  }
}
```
