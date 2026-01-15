# أوامر الشراء - Purchase Orders

## الصفحات

### 1. قائمة أوامر الشراء (Purchase Orders List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع أوامر الشراء

**الملفات المطلوبة:**
- `index.html` - واجهة القائمة
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

### 2. إنشاء أمر للشراء (Create Purchase Order)
**المجلد:** `create/`
**الوظيفة:** نموذج لإنشاء أمر شراء جديد

**الملفات المطلوبة:**
- `index.html` - نموذج إنشاء أمر
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/purchase-orders         → قائمة أوامر الشراء
/accounting/purchase-orders/create  → إنشاء أمر شراء جديد
/accounting/purchase-orders/:id     → تفاصيل الأمر
/accounting/purchase-orders/:id/edit → تعديل الأمر
```

---

## البيانات المشتركة

```typescript
interface PurchaseOrder {
  id: string;
  orderNumber: string;
  date: string;
  supplier: Supplier;
  items: PurchaseOrderItem[];
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  paymentTerms: string;
  deliveryDate: string;
  deliveryAddress: string;
  status: 'draft' | 'sent' | 'confirmed' | 'received' | 'cancelled';
  notes?: string;
  createdBy: string;
  approvedBy?: string;
  createdAt: string;
  updatedAt: string;
}

interface PurchaseOrderItem {
  id: string;
  materialName: string;
  materialCode: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  taxRate: number;
  discount: number;
  totalPrice: number;
  specifications?: string;
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
- [ ] StatusBadge
- [ ] DatePicker
- [ ] PrintButton
- [ ] EmailButton

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "purchaseOrders": {
        "title": "أوامر الشراء",
        "create_new": "إنشاء أمر شراء جديد",
        "order_number": "رقم الأمر",
        "supplier": "المورد",
        "date": "التاريخ",
        "delivery_date": "تاريخ التسليم",
        "subtotal": "المبلغ الفرعي",
        "tax": "الضريبة",
        "discount": "الخصم",
        "total": "الإجمالي",
        "status": "الحالة"
      }
    }
  }
}
```
