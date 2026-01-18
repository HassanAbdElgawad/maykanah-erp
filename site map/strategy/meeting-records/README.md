# سجلات الاجتماعات - Meeting Records

## الصفحات

### 1. قائمة الاجتماعات (Meetings List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع سجلات الاجتماعات

**الملفات المطلوبة:**
- `index.html` - واجهة قائمة الاجتماعات
- `styles.css` - تنسيقات الصفحة

---

### 2. تسجيل اجتماع (Add Meeting)
**المجلد:** `add/`
**الوظيفة:** توثيق اجتماع جديد مع القرارات والإجراءات

**الملفات المطلوبة:**
- `index.html` - نموذج تسجيل اجتماع
- `styles.css` - تنسيقات النموذج

---

## المسارات المقترحة

```
/strategy/meetings              → قائمة الاجتماعات
/strategy/meetings/add          → تسجيل اجتماع جديد
/strategy/meetings/:id          → تفاصيل الاجتماع
/strategy/meetings/:id/edit     → تعديل الاجتماع
```

---

## البيانات المشتركة

```typescript
interface MeetingRecord {
  id: string;
  title: string;
  type: 'strategic' | 'project' | 'review' | 'emergency' | 'other';
  date: string;
  startTime: string;
  endTime: string;
  location?: string;
  isVirtual: boolean;
  meetingLink?: string;
  organizer: string;
  attendees: Attendee[];
  agenda: AgendaItem[];
  minutes: string;
  decisions: Decision[];
  actionItems: ActionItem[];
  relatedPlanId?: string;
  relatedProjectId?: string;
  attachments: Document[];
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## المكونات المطلوبة

- [ ] Layout
- [ ] DataTable
- [ ] MeetingCard
- [ ] AttendeesList
- [ ] AgendaBuilder
- [ ] DecisionsTracker
- [ ] ActionItemsList

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "strategy": {
      "meetings": {
        "title": "سجلات الاجتماعات",
        "add_new": "تسجيل اجتماع جديد",
        "meeting_title": "عنوان الاجتماع",
        "date": "التاريخ",
        "time": "الوقت",
        "location": "المكان",
        "organizer": "المنظم",
        "attendees": "الحضور",
        "agenda": "جدول الأعمال",
        "minutes": "محضر الاجتماع",
        "decisions": "القرارات",
        "action_items": "الإجراءات المطلوبة",
        "status": "الحالة"
      }
    }
  }
}
```
