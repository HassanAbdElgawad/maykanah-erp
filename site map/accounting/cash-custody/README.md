# العهد النقدية - Cash Custody

## الصفحات

### 1. قائمة العهد النقدية (Cash Custody List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع العهد النقدية مع حالتها

**الملفات المطلوبة:**
- `index.html` - واجهة قائمة العهد
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

### 2. طلب عهدة جديدة (Request New Custody)
**المجلد:** `request-new/`
**الوظيفة:** نموذج لطلب عهدة نقدية جديدة

**الملفات المطلوبة:**
- `index.html` - نموذج طلب عهدة
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

### 3. تصفية العهد النقدية (Cash Settlement)
**المجلد:** `settlement/`
**الوظيفة:** نموذج لتصفية العهدة النقدية

**الملفات المطلوبة:**
- `index.html` - نموذج التصفية
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/cash-custody         → قائمة العهد النقدية
/accounting/cash-custody/request → طلب عهدة جديدة
/accounting/cash-custody/settle  → تصفية العهد
/accounting/cash-custody/:id     → تفاصيل عهدة
```

---

## البيانات المشتركة

```typescript
interface CashCustody {
  id: string;
  custodyNumber: string;
  date: string;
  employeeId: string;
  employeeName: string;
  department: string;
  amount: number;
  purpose: string;
  approvedBy: string;
  status: 'pending' | 'approved' | 'disbursed' | 'settled' | 'rejected';
  disbursedAt?: string;
  settledAt?: string;
  settlementAmount?: number;
  remainingAmount?: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface CustodySettlement {
  id: string;
  custodyId: string;
  settlementDate: string;
  items: CustodySettlementItem[];
  totalExpenses: number;
  returnedAmount: number;
  attachments?: string[];
  notes?: string;
}

interface CustodySettlementItem {
  id: string;
  description: string;
  amount: number;
  category: string;
  receiptNumber?: string;
  date: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] DataTable
- [ ] CustodyForm
- [ ] SettlementForm
- [ ] EmployeeSelector
- [ ] StatusBadge
- [ ] DatePicker
- [ ] FileUpload
- [ ] ApprovalDialog

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "cashCustody": {
        "title": "العهد النقدية",
        "request_new": "طلب عهدة جديدة",
        "settle": "تصفية العهد النقدية",
        "custody_number": "رقم العهدة",
        "employee": "الموظف",
        "department": "القسم",
        "amount": "المبلغ",
        "purpose": "الغرض",
        "settled_amount": "المبلغ المصفى",
        "remaining": "المتبقي",
        "add_expense": "إضافة مصروف",
        "total_expenses": "إجمالي المصروفات"
      }
    }
  }
}
```
