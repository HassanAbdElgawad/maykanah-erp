# إدارة الخطط الاستراتيجية - Strategic Plans

## الصفحات

### 1. قائمة الخطط (Plans List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع الخطط الاستراتيجية

**الملفات المطلوبة:**
- `index.html` - واجهة قائمة الخطط
- `styles.css` - تنسيقات الصفحة

---

### 2. إضافة خطة (Add Plan)
**المجلد:** `add/`
**الوظيفة:** إنشاء خطة استراتيجية جديدة

**الملفات المطلوبة:**
- `index.html` - نموذج إضافة خطة
- `styles.css` - تنسيقات النموذج

---

### 3. تعديل الخطة (Edit Plan)
**المجلد:** `edit/`
**الوظيفة:** تعديل خطة استراتيجية موجودة

**الملفات المطلوبة:**
- `index.html` - نموذج تعديل الخطة
- `styles.css` - تنسيقات النموذج

---

### 4. متابعة الخطة (Monitor Plan)
**المجلد:** `monitor/`
**الوظيفة:** متابعة تنفيذ الخطة الاستراتيجية

**الملفات المطلوبة:**
- `index.html` - واجهة متابعة الخطة
- `styles.css` - تنسيقات الصفحة

---

## المسارات المقترحة

```
/strategy/strategic-plans              → قائمة الخطط
/strategy/strategic-plans/add          → إضافة خطة جديدة
/strategy/strategic-plans/:id          → تفاصيل الخطة
/strategy/strategic-plans/:id/edit     → تعديل الخطة
/strategy/strategic-plans/:id/monitor  → متابعة الخطة
```

---

## البيانات المشتركة

```typescript
interface StrategicPlan {
  id: string;
  code: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  vision: string;
  mission: string;
  goals: Goal[];
  objectives: Objective[];
  initiatives: Initiative[];
  kpis: KPI[];
  budget: number;
  status: 'draft' | 'approved' | 'active' | 'completed' | 'archived';
  approvalStatus: 'pending' | 'approved' | 'rejected';
  owner: string;
  stakeholders: string[];
  documents: Document[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## المكونات المطلوبة

- [ ] Layout
- [ ] DataTable
- [ ] PlanCard
- [ ] GoalsTree
- [ ] KPIDashboard
- [ ] ApprovalWorkflow
- [ ] ProgressMonitor

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "strategy": {
      "strategic_plans": {
        "title": "إدارة الخطط الاستراتيجية",
        "add_new": "إضافة خطة جديدة",
        "edit": "تعديل الخطة",
        "monitor": "متابعة الخطة",
        "code": "رمز الخطة",
        "name": "اسم الخطة",
        "vision": "الرؤية",
        "mission": "الرسالة",
        "goals": "الأهداف",
        "objectives": "الغايات",
        "initiatives": "المبادرات",
        "start_date": "تاريخ البداية",
        "end_date": "تاريخ النهاية"
      }
    }
  }
}
```
