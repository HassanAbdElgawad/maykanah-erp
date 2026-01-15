# طلبات عروض الاستثمار - Investment Quotes

## الصفحات

### 1. قائمة طلبات عروض الاستثمار (Investment Quotes List)
**المجلد:** `list/`
**الوظيفة:** عرض جميع طلبات عروض الاستثمار

**الملفات المطلوبة:**
- `index.html` - واجهة القائمة
- `styles.css` - تنسيقات الصفحة
- `assets/` - الصور والأيقونات

---

### 2. إنشاء طلب عروض أسعار (Create Quote Request)
**المجلد:** `create/`
**الوظيفة:** نموذج لإنشاء طلب عروض أسعار استثماري جديد

**الملفات المطلوبة:**
- `index.html` - نموذج إنشاء طلب
- `styles.css` - تنسيقات النموذج
- `assets/` - الصور والأيقونات

---

## المسارات المقترحة

```
/accounting/investment-quotes         → قائمة طلبات العروض
/accounting/investment-quotes/create  → إنشاء طلب جديد
/accounting/investment-quotes/:id     → تفاصيل الطلب
```

---

## البيانات المشتركة

```typescript
interface InvestmentQuote {
  id: string;
  requestNumber: string;
  title: string;
  description: string;
  date: string;
  deadline: string;
  items: InvestmentQuoteItem[];
  status: 'draft' | 'published' | 'closed';
  responses: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

interface InvestmentQuoteItem {
  id: string;
  description: string;
  specifications: string;
  quantity: number;
  unit: string;
  notes?: string;
}
```

---

## المكونات المطلوبة

- [x] Layout
- [ ] DataTable
- [ ] Form
- [ ] ItemsTable
- [ ] StatusBadge
- [ ] DatePicker
- [ ] RichTextEditor

---

## الترجمات المطلوبة

```json
{
  "ar": {
    "accounting": {
      "investmentQuotes": {
        "title": "طلبات عروض الاستثمار",
        "create_new": "إنشاء طلب عروض جديد",
        "request_number": "رقم الطلب",
        "deadline": "الموعد النهائي",
        "responses": "الردود المستلمة"
      }
    }
  }
}
```
