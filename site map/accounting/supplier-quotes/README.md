# عروض أسعار الموردين - Supplier Quotes

## الصفحات

### 1. قائمة عروض أسعار الموردين (Supplier Quotes List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع طلبات عروض الأسعار للموردين

**الملفات المطلوبة:**
- `index.html` - واجهة القائمة
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

### 2. إنشاء طلب عروض للموردين (Create Supplier Quote Request)
**المجلد:** `create/`
**الوظيفة:** نموذج لإنشاء طلب عروض أسعار من الموردين

**الملفات المطلوبة:**
- `index.html` - نموذج إنشاء طلب
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/supplier-quotes         → قائمة طلبات العروض
/accounting/supplier-quotes/create  → إنشاء طلب جديد
/accounting/supplier-quotes/:id     → تفاصيل الطلب
/accounting/supplier-quotes/:id/compare → مقارنة العروض
```

---

## البيانات المشتركة

```typescript
interface SupplierQuoteRequest {
  id: string;
  requestNumber: string;
  title: string;
  date: string;
  deadline: string;
  suppliers: string[]; // Supplier IDs
  items: QuoteRequestItem[];
  status: 'draft' | 'sent' | 'receiving' | 'closed';
  receivedQuotes: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

interface QuoteRequestItem {
  id: string;
  materialName: string;
  materialCode?: string;
  description: string;
  quantity: number;
  unit: string;
  specifications?: string;
}

interface SupplierQuote {
  id: string;
  requestId: string;
  supplier: Supplier;
  date: string;
  validUntil: string;
  items: SupplierQuoteItem[];
  subtotal: number;
  taxAmount: number;
  totalAmount: number;
  paymentTerms: string;
  deliveryTerms: string;
  status: 'pending' | 'accepted' | 'rejected';
  notes?: string;
}

interface SupplierQuoteItem {
  id: string;
  requestItemId: string;
  unitPrice: number;
  taxRate: number;
  totalPrice: number;
  deliveryTime: string;
  notes?: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] DataTable
- [ ] Form
- [ ] SupplierMultiSelect
- [ ] ItemsTable
- [ ] QuoteComparisonTable
- [ ] StatusBadge
- [ ] DatePicker

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "supplierQuotes": {
        "title": "عروض أسعار الموردين",
        "create_new": "إنشاء طلب عروض جديد",
        "request_number": "رقم الطلب",
        "suppliers": "الموردين",
        "deadline": "الموعد النهائي",
        "received_quotes": "العروض المستلمة",
        "compare": "مقارنة العروض",
        "valid_until": "صالح حتى",
        "payment_terms": "شروط الدفع",
        "delivery_terms": "شروط التسليم"
      }
    }
  }
}
```
