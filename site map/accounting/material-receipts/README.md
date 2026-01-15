# إستلام المواد - Material Receipts

## الصفحات

### 1. قائمة إستلام المواد (Material Receipts List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع سندات استلام المواد

**الملفات المطلوبة:**
- `index.html` - واجهة القائمة
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

### 2. إنشاء إستلام المواد (Create Material Receipt)
**المجلد:** `create/`
**الوظيفة:** نموذج لإنشاء سند استلام مواد جديد

**الملفات المطلوبة:**
- `index.html` - نموذج إنشاء سند
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/material-receipts         → قائمة سندات الاستلام
/accounting/material-receipts/create  → إنشاء سند استلام جديد
/accounting/material-receipts/:id     → تفاصيل السند
```

---

## البيانات المشتركة

```typescript
interface MaterialReceipt {
  id: string;
  receiptNumber: string;
  date: string;
  purchaseOrderId: string;
  purchaseOrderNumber: string;
  supplier: Supplier;
  warehouse: string;
  items: MaterialReceiptItem[];
  receivedBy: string;
  inspectedBy?: string;
  status: 'pending' | 'inspected' | 'accepted' | 'rejected';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface MaterialReceiptItem {
  id: string;
  materialName: string;
  materialCode: string;
  orderedQuantity: number;
  receivedQuantity: number;
  unit: string;
  condition: 'good' | 'damaged' | 'defective';
  notes?: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] DataTable
- [ ] Form
- [ ] PurchaseOrderSelector
- [ ] ItemsInspectionTable
- [ ] WarehouseSelector
- [ ] StatusBadge
- [ ] SignatureField
- [ ] PrintButton

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "materialReceipts": {
        "title": "إستلام المواد",
        "create_new": "إنشاء سند استلام جديد",
        "receipt_number": "رقم السند",
        "po_number": "رقم أمر الشراء",
        "warehouse": "المخزن",
        "received_by": "المستلم",
        "inspected_by": "الفاحص",
        "ordered_qty": "الكمية المطلوبة",
        "received_qty": "الكمية المستلمة",
        "condition": "الحالة"
      }
    }
  }
}
```
