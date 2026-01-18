# إدارة المبالغ - Budget Management

## الصفحات

### 1. إدارة المبالغ التشغيلية (Operational Budget)
**المجلد:** `operational-budget/`
**الوظيفة:** إدارة الميزانيات التشغيلية المخصصة للمشاريع والخطط الاستراتيجية

**الملفات المطلوبة:**
- `index.html` - واجهة إدارة المبالغ التشغيلية
- `styles.css` - تنسيقات الصفحة

---

## المسارات المقترحة

```
/strategy/budget-management                    → لوحة إدارة المبالغ
/strategy/budget-management/operational        → إدارة المبالغ التشغيلية
/strategy/budget-management/operational/:id    → تفاصيل ميزانية محددة
```

---

## البيانات المشتركة

```typescript
interface OperationalBudget {
  id: string;
  code: string;
  name: string;
  fiscalYear: string;
  totalAmount: number;
  allocatedAmount: number;
  spentAmount: number;
  remainingAmount: number;
  department?: string;
  projectId?: string;
  planId?: string;
  status: 'draft' | 'approved' | 'active' | 'closed';
  startDate: string;
  endDate: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## المكونات المطلوبة

- [ ] Layout
- [ ] BudgetOverviewCard
- [ ] BudgetAllocationChart
- [ ] SpendingProgressBar
- [ ] FilterPanel
- [ ] StatusBadge

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "strategy": {
      "budget": {
        "title": "إدارة المبالغ",
        "operational": "المبالغ التشغيلية",
        "total_amount": "إجمالي الميزانية",
        "allocated": "المخصص",
        "spent": "المنفق",
        "remaining": "المتبقي",
        "fiscal_year": "السنة المالية",
        "department": "القسم",
        "status": "الحالة",
        "start_date": "تاريخ البداية",
        "end_date": "تاريخ النهاية"
      }
    }
  }
}
```
