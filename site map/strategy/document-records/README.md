# سجلات المستندات - Document Records

## الصفحات

### 1. قائمة المستندات (Documents List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع المستندات والوثائق المرتبطة بالخطط والمشاريع

**الملفات المطلوبة:**
- `index.html` - واجهة قائمة المستندات
- `styles.css` - تنسيقات الصفحة

---

### 2. رفع مستند (Upload Document)
**المجلد:** `upload/`
**الوظيفة:** رفع وحفظ مستند جديد

**الملفات المطلوبة:**
- `index.html` - نموذج رفع مستند
- `styles.css` - تنسيقات النموذج

---

## المسارات المقترحة

```
/strategy/documents              → قائمة المستندات
/strategy/documents/upload       → رفع مستند جديد
/strategy/documents/:id          → تفاصيل المستند
/strategy/documents/:id/edit     → تعديل بيانات المستند
```

---

## البيانات المشتركة

```typescript
interface DocumentRecord {
  id: string;
  title: string;
  description?: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  fileUrl: string;
  category: 'plan' | 'project' | 'meeting' | 'report' | 'other';
  relatedPlanId?: string;
  relatedProjectId?: string;
  relatedMeetingId?: string;
  tags: string[];
  version: string;
  isConfidential: boolean;
  uploadedBy: string;
  uploadDate: string;
  lastModified: string;
  accessLevel: 'public' | 'internal' | 'restricted' | 'confidential';
  status: 'active' | 'archived' | 'deleted';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## المكونات المطلوبة

- [ ] Layout
- [ ] DataTable
- [ ] DocumentCard
- [ ] FileUploader
- [ ] DocumentPreview
- [ ] CategoryFilter
- [ ] AccessLevelBadge

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "strategy": {
      "documents": {
        "title": "سجلات المستندات",
        "upload_new": "رفع مستند جديد",
        "document_title": "عنوان المستند",
        "file_name": "اسم الملف",
        "file_type": "نوع الملف",
        "file_size": "حجم الملف",
        "category": "التصنيف",
        "tags": "الوسوم",
        "version": "الإصدار",
        "confidential": "سري",
        "access_level": "مستوى الوصول",
        "uploaded_by": "تم الرفع بواسطة",
        "upload_date": "تاريخ الرفع"
      }
    }
  }
}
```
