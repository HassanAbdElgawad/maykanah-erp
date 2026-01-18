# وحدة الموافقات - Approvals

## الصفحات

### 1. قائمة الموافقات (Approvals List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع الموافقات على الخطط والأهداف

**الملفات المطلوبة:**
- `index.html` - واجهة قائمة الموافقات
- `styles.css` - تنسيقات الصفحة

---

### 2. الموافقات المعلقة (Pending Approvals)
**المجلد:** `pending/`
**الوظيفة:** عرض الموافقات التي تحتاج إلى إجراء

**الملفات المطلوبة:**
- `index.html` - واجهة الموافقات المعلقة
- `styles.css` - تنسيقات الصفحة

---

## المسارات المقترحة

```
/strategy/approvals              → قائمة الموافقات
/strategy/approvals/pending      → الموافقات المعلقة
/strategy/approvals/:id          → تفاصيل الموافقة
/strategy/approvals/:id/review   → مراجعة الموافقة
```

---

## البيانات المشتركة

```typescript
interface Approval {
  id: string;
  type: 'plan' | 'project' | 'budget' | 'goal' | 'modification';
  title: string;
  description?: string;
  relatedEntityId: string;
  relatedEntityType: 'strategic_plan' | 'project' | 'budget' | 'goal';
  requestedBy: string;
  requestDate: string;
  approvalLevel: number;
  currentApprover: string;
  approvalChain: ApprovalStep[];
  status: 'pending' | 'approved' | 'rejected' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  dueDate?: string;
  comments: Comment[];
  attachments: Document[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## المكونات المطلوبة

- [ ] Layout
- [ ] DataTable
- [ ] ApprovalCard
- [ ] ApprovalWorkflow
- [ ] ApproversList
- [ ] StatusBadge
- [ ] CommentsSection

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "strategy": {
      "approvals": {
        "title": "وحدة الموافقات",
        "pending": "الموافقات المعلقة",
        "approved": "تمت الموافقة",
        "rejected": "مرفوضة",
        "type": "نوع الموافقة",
        "requested_by": "المطلوب من",
        "request_date": "تاريخ الطلب",
        "approver": "المعتمد",
        "status": "الحالة",
        "priority": "الأولوية",
        "due_date": "تاريخ الاستحقاق",
        "review": "مراجعة",
        "approve": "موافقة",
        "reject": "رفض",
        "comments": "التعليقات"
      }
    }
  }
}
```
