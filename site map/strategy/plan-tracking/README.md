# ربط الخطط وتتبع التقدم - Plan Tracking

## الصفحات

### 1. ربط المتطلبات الرئيسية (Link Requirements)
**المجلد:** `link-requirements/`
**الوظيفة:** ربط المتطلبات والأهداف بالخطط والمشاريع

**الملفات المطلوبة:**
- `index.html` - واجهة ربط المتطلبات
- `styles.css` - تنسيقات الصفحة

---

### 2. تتبع الأداء (Track Performance)
**المجلد:** `track-performance/`
**الوظيفة:** متابعة وتقييم أداء الخطط والمشاريع

**الملفات المطلوبة:**
- `index.html` - واجهة تتبع الأداء
- `styles.css` - تنسيقات الصفحة

---

## المسارات المقترحة

```
/strategy/plan-tracking                     → لوحة التتبع الرئيسية
/strategy/plan-tracking/link-requirements   → ربط المتطلبات
/strategy/plan-tracking/track-performance   → تتبع الأداء
/strategy/plan-tracking/:planId             → تتبع خطة محددة
```

---

## البيانات المشتركة

```typescript
interface PlanTracking {
  id: string;
  planId: string;
  requirements: Requirement[];
  kpis: KPI[];
  milestones: Milestone[];
  performance: PerformanceMetric[];
  status: 'on-track' | 'at-risk' | 'delayed' | 'completed';
  overallProgress: number;
  lastReviewDate?: string;
  nextReviewDate?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## المكونات المطلوبة

- [ ] Layout
- [ ] RequirementsMapper
- [ ] PerformanceChart
- [ ] ProgressIndicator
- [ ] KPIDashboard
- [ ] MilestoneTimeline

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "strategy": {
      "plan_tracking": {
        "title": "ربط الخطط وتتبع التقدم",
        "link_requirements": "ربط المتطلبات الرئيسية",
        "track_performance": "تتبع الأداء",
        "requirements": "المتطلبات",
        "performance": "الأداء",
        "progress": "التقدم",
        "kpis": "مؤشرات الأداء",
        "milestones": "المعالم الرئيسية",
        "on_track": "على المسار الصحيح",
        "at_risk": "في خطر",
        "delayed": "متأخر"
      }
    }
  }
}
```
