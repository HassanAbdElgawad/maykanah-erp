# إدارة المشاريع - Project Management

## الصفحات

### 1. قائمة المشاريع (Projects List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع المشاريع الاستراتيجية مع إمكانية البحث والتصفية

**الملفات المطلوبة:**
- `index.html` - واجهة قائمة المشاريع
- `styles.css` - تنسيقات الصفحة

---

### 2. إضافة مشروع (Add Project)
**المجلد:** `add/`
**الوظيفة:** إنشاء مشروع استراتيجي جديد

**الملفات المطلوبة:**
- `index.html` - نموذج إضافة مشروع
- `styles.css` - تنسيقات النموذج

---

### 3. حالة المشروع (Project Status)
**المجلد:** `status/`
**الوظيفة:** متابعة حالة وتقدم المشروع

**الملفات المطلوبة:**
- `index.html` - واجهة حالة المشروع
- `styles.css` - تنسيقات الصفحة

---

## المسارات المقترحة

```
/strategy/projects              → قائمة المشاريع
/strategy/projects/add          → إضافة مشروع جديد
/strategy/projects/:id          → تفاصيل المشروع
/strategy/projects/:id/edit     → تعديل المشروع
/strategy/projects/:id/status   → حالة المشروع
```

---

## البيانات المشتركة

```typescript
interface Project {
  id: string;
  code: string;
  name: string;
  description?: string;
  planId?: string;
  budget: number;
  startDate: string;
  endDate: string;
  actualStartDate?: string;
  actualEndDate?: string;
  status: 'planning' | 'in-progress' | 'on-hold' | 'completed' | 'cancelled';
  progress: number;
  manager: string;
  team: string[];
  objectives: string[];
  kpis: KPI[];
  risks: Risk[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## المكونات المطلوبة

- [ ] Layout
- [ ] DataTable
- [ ] ProjectCard
- [ ] ProgressBar
- [ ] StatusBadge
- [ ] TimelineChart
- [ ] KPITracker

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "strategy": {
      "projects": {
        "title": "إدارة المشاريع",
        "add_new": "إضافة مشروع جديد",
        "list": "قائمة المشاريع",
        "status": "حالة المشروع",
        "code": "رمز المشروع",
        "name": "اسم المشروع",
        "budget": "الميزانية",
        "progress": "نسبة الإنجاز",
        "start_date": "تاريخ البداية",
        "end_date": "تاريخ النهاية",
        "manager": "مدير المشروع",
        "team": "فريق العمل"
      }
    }
  }
}
```
