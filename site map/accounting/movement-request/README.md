# طلب تحرك - Movement Request

## وصف الصفحة
صفحة لإدارة طلبات التحرك (نقل المواد بين المواقع أو الأقسام)

---

## الملفات المطلوبة
- `index.html` - واجهة طلبات التحرك
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

## المسار المقترح
```
/accounting/movement-requests
/accounting/movement-requests/create
/accounting/movement-requests/:id
```

---

## البيانات المشتركة

```typescript
interface MovementRequest {
  id: string;
  requestNumber: string;
  date: string;
  fromLocation: string;
  toLocation: string;
  requestedBy: string;
  items: MovementRequestItem[];
  status: 'pending' | 'approved' | 'in_transit' | 'completed' | 'cancelled';
  reason: string;
  notes?: string;
  approvedBy?: string;
  createdAt: string;
  updatedAt: string;
}

interface MovementRequestItem {
  id: string;
  materialName: string;
  materialCode: string;
  quantity: number;
  unit: string;
  notes?: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] Form
- [ ] LocationSelector
- [ ] ItemsTable
- [ ] StatusBadge
- [ ] ApprovalDialog

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "movementRequests": {
        "title": "طلبات التحرك",
        "create_new": "إنشاء طلب تحرك جديد",
        "request_number": "رقم الطلب",
        "from_location": "من موقع",
        "to_location": "إلى موقع",
        "reason": "السبب",
        "status": "الحالة"
      }
    }
  }
}
```
