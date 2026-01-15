# موديول إدارة الحسابات - Accounting Module

## 📊 نظرة عامة

موديول إدارة الحسابات يشمل جميع العمليات المحاسبية الأساسية للشركة.

---

## 📂 الصفحات المخطط لها

### ✅ الصفحات المكتملة

1. **الصفحة الرئيسية** `/accounting`
   - عرض بطاقات الأقسام الأربعة
   - الحالة: مكتمل ✅

### ⏳ الصفحات المخطط لها

2. **القيود المحاسبية** `/accounting/entries`
   - عرض وإدارة القيود المحاسبية
   - الأولوية: عالية 🔴
   
3. **العهد النقدية** `/accounting/cash-custody`
   - إدارة العهد النقدية
   - الأولوية: عالية 🔴

4. **مستندات القبض** `/accounting/receipt-documents`
   - إدارة مستندات القبض
   - الأولوية: متوسطة 🟡

5. **مستندات الدفع** `/accounting/payment-documents`
   - إدارة مستندات الدفع
   - الأولوية: متوسطة 🟡

6. **دليل الحسابات** `/accounting/chart-of-accounts`
   - عرض وإدارة شجرة الحسابات
   - الأولوية: عالية 🔴

7. **التقارير المالية** `/accounting/reports`
   - عرض التقارير المالية المختلفة
   - الأولوية: متوسطة 🟡

---

## 🎯 الأولويات

### المرحلة 1 (عاجل)
1. القيود المحاسبية
2. دليل الحسابات
3. العهد النقدية

### المرحلة 2 (مهم)
4. مستندات القبض
5. مستندات الدفع
6. التقارير الأساسية

### المرحلة 3 (إضافي)
7. التقارير المتقدمة
8. الإعدادات المحاسبية

---

## 🗂️ هيكل الملفات المقترح

```
site map/
└── accounting/
    ├── module-overview.md              # هذا الملف
    │
    ├── entries/                        # القيود المحاسبية
    │   ├── index.html
    │   ├── styles.css
    │   ├── assets/
    │   └── README.md
    │
    ├── cash-custody/                   # العهد النقدية
    │   ├── index.html
    │   ├── styles.css
    │   ├── assets/
    │   └── README.md
    │
    ├── receipt-documents/              # مستندات القبض
    │   ├── index.html
    │   ├── styles.css
    │   ├── assets/
    │   └── README.md
    │
    ├── payment-documents/              # مستندات الدفع
    │   ├── index.html
    │   ├── styles.css
    │   ├── assets/
    │   └── README.md
    │
    ├── chart-of-accounts/              # دليل الحسابات
    │   ├── index.html
    │   ├── styles.css
    │   ├── assets/
    │   └── README.md
    │
    └── reports/                        # التقارير المالية
        ├── index.html
        ├── styles.css
        ├── assets/
        └── README.md
```

---

## 📋 الترجمات المطلوبة

### translations.json - Accounting Section

```json
{
  "ar": {
    "accounting": {
      "title": "إدارة الحسابات",
      "subtitle": "إدارة جميع العمليات المحاسبية",
      
      "entries": {
        "title": "القيود المحاسبية",
        "description": "تسجيل العمليات المالية في الدفاتر",
        "add_new": "إضافة قيد جديد",
        "entry_number": "رقم القيد",
        "date": "التاريخ",
        "description": "الوصف",
        "debit": "مدين",
        "credit": "دائن",
        "total": "الإجمالي"
      },
      
      "cash_custody": {
        "title": "العهد النقدية",
        "description": "المبالغ التي تصرف مؤقتاً وتسوى لاحقاً",
        "add_new": "إضافة عهدة جديدة",
        "custody_number": "رقم العهدة",
        "employee": "الموظف",
        "amount": "المبلغ",
        "status": "الحالة",
        "pending": "معلقة",
        "settled": "مسواة"
      },
      
      "receipt_documents": {
        "title": "مستندات القبض",
        "description": "توثيق المبالغ المالية الواردة",
        "add_new": "إضافة مستند قبض",
        "document_number": "رقم المستند",
        "from": "من",
        "amount": "المبلغ",
        "payment_method": "طريقة الدفع"
      },
      
      "payment_documents": {
        "title": "مستندات الدفع",
        "description": "توثيق المبالغ المالية الصادرة",
        "add_new": "إضافة مستند دفع",
        "document_number": "رقم المستند",
        "to": "إلى",
        "amount": "المبلغ",
        "payment_method": "طريقة الدفع"
      },
      
      "chart_of_accounts": {
        "title": "دليل الحسابات",
        "description": "شجرة الحسابات المحاسبية",
        "add_account": "إضافة حساب",
        "account_code": "رمز الحساب",
        "account_name": "اسم الحساب",
        "account_type": "نوع الحساب",
        "parent_account": "الحساب الأب"
      },
      
      "reports": {
        "title": "التقارير المالية",
        "income_statement": "قائمة الدخل",
        "balance_sheet": "الميزانية العمومية",
        "trial_balance": "ميزان المراجعة",
        "cash_flow": "قائمة التدفقات النقدية"
      }
    }
  },
  "en": {
    "accounting": {
      "title": "Accounting Management",
      "subtitle": "Manage all accounting operations",
      
      "entries": {
        "title": "Accounting Entries",
        "description": "Recording financial operations in the books",
        "add_new": "Add New Entry",
        "entry_number": "Entry Number",
        "date": "Date",
        "description": "Description",
        "debit": "Debit",
        "credit": "Credit",
        "total": "Total"
      },
      
      "cash_custody": {
        "title": "Cash Custody",
        "description": "Amounts disbursed temporarily and settled later",
        "add_new": "Add New Custody",
        "custody_number": "Custody Number",
        "employee": "Employee",
        "amount": "Amount",
        "status": "Status",
        "pending": "Pending",
        "settled": "Settled"
      },
      
      "receipt_documents": {
        "title": "Receipt Documents",
        "description": "Documentation of incoming funds",
        "add_new": "Add Receipt Document",
        "document_number": "Document Number",
        "from": "From",
        "amount": "Amount",
        "payment_method": "Payment Method"
      },
      
      "payment_documents": {
        "title": "Payment Documents",
        "description": "Documentation of outgoing funds",
        "add_new": "Add Payment Document",
        "document_number": "Document Number",
        "to": "To",
        "amount": "Amount",
        "payment_method": "Payment Method"
      },
      
      "chart_of_accounts": {
        "title": "Chart of Accounts",
        "description": "Accounting accounts tree",
        "add_account": "Add Account",
        "account_code": "Account Code",
        "account_name": "Account Name",
        "account_type": "Account Type",
        "parent_account": "Parent Account"
      },
      
      "reports": {
        "title": "Financial Reports",
        "income_statement": "Income Statement",
        "balance_sheet": "Balance Sheet",
        "trial_balance": "Trial Balance",
        "cash_flow": "Cash Flow Statement"
      }
    }
  }
}
```

---

## 🔗 Routes المطلوبة

### في App.tsx

```typescript
// Accounting Routes
{
  path: "/accounting",
  element: <ProtectedRoute><Accounting /></ProtectedRoute>,
},
{
  path: "/accounting/entries",
  element: <ProtectedRoute><AccountingEntries /></ProtectedRoute>,
},
{
  path: "/accounting/entries/add",
  element: <ProtectedRoute><AddEntry /></ProtectedRoute>,
},
{
  path: "/accounting/entries/:id/edit",
  element: <ProtectedRoute><EditEntry /></ProtectedRoute>,
},
{
  path: "/accounting/cash-custody",
  element: <ProtectedRoute><CashCustody /></ProtectedRoute>,
},
{
  path: "/accounting/receipt-documents",
  element: <ProtectedRoute><ReceiptDocuments /></ProtectedRoute>,
},
{
  path: "/accounting/payment-documents",
  element: <ProtectedRoute><PaymentDocuments /></ProtectedRoute>,
},
{
  path: "/accounting/chart-of-accounts",
  element: <ProtectedRoute><ChartOfAccounts /></ProtectedRoute>,
},
{
  path: "/accounting/reports",
  element: <ProtectedRoute><AccountingReports /></ProtectedRoute>,
},
```

### في breadcrumbs.config.ts

```typescript
{ path: "/accounting", label: "sidebar.accounting" },
{ path: "/accounting/entries", label: "accounting.entries.title" },
{ path: "/accounting/entries/add", label: "accounting.entries.add_new" },
{ path: "/accounting/cash-custody", label: "accounting.cash_custody.title" },
{ path: "/accounting/receipt-documents", label: "accounting.receipt_documents.title" },
{ path: "/accounting/payment-documents", label: "accounting.payment_documents.title" },
{ path: "/accounting/chart-of-accounts", label: "accounting.chart_of_accounts.title" },
{ path: "/accounting/reports", label: "accounting.reports.title" },
```

---

## 🧩 المكونات المشتركة المطلوبة

### 1. AccountingTable
- جدول عام للبيانات المحاسبية
- يدعم الترتيب والبحث
- يدعم التصدير

### 2. DocumentForm
- فورم عام للمستندات
- يدعم المرفقات
- validation

### 3. AccountSelector
- اختيار حساب من دليل الحسابات
- بحث وفلترة
- عرض شجري

### 4. AmountInput
- إدخال مبلغ مالي
- تنسيق تلقائي
- دعم العملات

### 5. DateRangePicker
- اختيار نطاق تاريخ
- للفلاتر والتقارير

---

## 📊 البيانات المشتركة

### Account Type

```typescript
enum AccountType {
  ASSET = 'asset',
  LIABILITY = 'liability',
  EQUITY = 'equity',
  REVENUE = 'revenue',
  EXPENSE = 'expense'
}
```

### Entry Status

```typescript
enum EntryStatus {
  DRAFT = 'draft',
  POSTED = 'posted',
  VOID = 'void'
}
```

### Payment Method

```typescript
enum PaymentMethod {
  CASH = 'cash',
  CHECK = 'check',
  BANK_TRANSFER = 'bank_transfer',
  CREDIT_CARD = 'credit_card'
}
```

---

## ✅ Checklist

### التخطيط
- [x] تحديد الصفحات المطلوبة
- [x] تحديد الأولويات
- [x] تحديد الترجمات
- [x] تحديد Routes
- [x] تحديد المكونات المشتركة

### التطوير
- [ ] صفحة القيود المحاسبية
- [ ] صفحة العهد النقدية
- [ ] صفحة مستندات القبض
- [ ] صفحة مستندات الدفع
- [ ] صفحة دليل الحسابات
- [ ] صفحة التقارير

### المكونات
- [ ] AccountingTable
- [ ] DocumentForm
- [ ] AccountSelector
- [ ] AmountInput
- [ ] DateRangePicker

---

**آخر تحديث:** يناير 2026  
**الحالة:** قيد التطوير 🚧
