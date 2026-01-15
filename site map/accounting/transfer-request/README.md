# طلب نقل - Transfer Request

## وصف الصفحة
صفحة لإدارة طلبات نقل المواد أو الأصول

---

## الملفات المطلوبة
- `index.html` - واجهة طلبات النقل
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

## المسار المقترح
```
/accounting/transfer-requests
/accounting/transfer-requests/create
/accounting/transfer-requests/:id
```

---

## البيانات المشتركة

```typescript
interface TransferRequest {
  id: string;
  requestNumber: string;
  date: string;
  fromDepartment: string;
  toDepartment: string;
  requestedBy: string;
  items: TransferRequestItem[];
  status: 'pending' | 'approved' | 'in_progress' | 'completed' | 'rejected';
  transferType: 'permanent' | 'temporary';
  reason: string;
  notes?: string;
  approvedBy?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

interface TransferRequestItem {
  id: string;
  itemName: string;
  itemCode: string;
  quantity: number;
  unit: string;
  currentValue?: number;
  notes?: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] Form
- [ ] DepartmentSelector
- [ ] ItemsTable
- [ ] StatusBadge
- [ ] TransferTypeSelector
- [ ] ApprovalWorkflow

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "transferRequests": {
        "title": "طلبات النقل",
        "create_new": "إنشاء طلب نقل جديد",
        "request_number": "رقم الطلب",
        "from_department": "من قسم",
        "to_department": "إلى قسم",
        "transfer_type": "نوع النقل",
        "permanent": "دائم",
        "temporary": "مؤقت",
        "reason": "السبب",
        "status": "الحالة"
      }
    }
  }
}
```
