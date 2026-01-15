# طلبات الشراء - Purchase Requests

## الصفحات

### 1. قائمة طلبات الشراء (Purchase Requests List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع طلبات شراء المواد

**الملفات المطلوبة:**
- `index.html` - واجهة القائمة
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

### 2. إضافة طلب مواد جديد (Add New Material Request)
**المجلد:** `add/`
**الوظيفة:** نموذج لإنشاء طلب شراء مواد جديد

**الملفات المطلوبة:**
- `index.html` - نموذج إضافة طلب
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

### 3. تصفية الوعد النقدية (Cash Promise Settlement)
**المجلد:** `cash-settlement/`
**الوظيفة:** إدارة وتصفية الوعود النقدية للطلبات

**الملفات المطلوبة:**
- `index.html` - واجهة التصفية
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/purchase-requests              → قائمة طلبات الشراء
/accounting/purchase-requests/add          → إضافة طلب جديد
/accounting/purchase-requests/:id          → تفاصيل الطلب
/accounting/purchase-requests/:id/edit     → تعديل الطلب
/accounting/purchase-requests/settlements  → تصفية الوعود النقدية
```

---

## البيانات المشتركة

```typescript
interface PurchaseRequest {
  id: string;
  requestNumber: string;
  date: string;
  department: string;
  requestedBy: string;
  items: PurchaseRequestItem[];
  totalAmount: number;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  notes?: string;
  approvedBy?: string;
  approvedAt?: string;
  createdAt: string;
  updatedAt: string;
}

interface PurchaseRequestItem {
  id: string;
  materialName: string;
  materialCode: string;
  quantity: number;
  unit: string;
  estimatedPrice?: number;
  totalPrice?: number;
  specifications?: string;
  notes?: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] DataTable
- [ ] Form
- [ ] ItemsTable (لإدخال المواد)
- [ ] StatusBadge
- [ ] PriorityBadge
- [ ] ApprovalDialog
- [ ] DatePicker
- [ ] SearchableSelect

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "purchaseRequests": {
        "title": "طلبات الشراء",
        "add_new": "إضافة طلب مواد جديد",
        "request_number": "رقم الطلب",
        "date": "التاريخ",
        "department": "القسم",
        "requested_by": "المطلوب بواسطة",
        "status": "الحالة",
        "priority": "الأولوية",
        "total_amount": "المبلغ الإجمالي",
        "cash_settlement": "تصفية الوعد النقدية"
      }
    }
  }
}
```
