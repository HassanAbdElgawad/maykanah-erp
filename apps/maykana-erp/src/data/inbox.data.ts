// Inbox Messages Data - Sample messages for inbox
export interface Message {
  id: string;
  sender: string;
  senderEmail: string;
  subject: string;
  preview: string;
  body: string;
  timestamp: string;
  isRead: boolean;
  isStarred: boolean;
  hasAttachment: boolean;
  category: 'inbox' | 'sent' | 'draft';
  avatar?: string;
  // Bilingual support
  senderEn?: string;
  subjectEn?: string;
  previewEn?: string;
  bodyEn?: string;
  timestampEn?: string;
}

export const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'أحمد محمد العلي',
    senderEn: 'Ahmed Mohammed Al-Ali',
    senderEmail: 'ahmed.ali@company.com',
    subject: 'طلب شراء جديد - معدات مكتبية',
    subjectEn: 'New Purchase Request - Office Equipment',
    preview: 'السلام عليكم، أود تقديم طلب شراء جديد للمعدات المكتبية التالية...',
    previewEn:
      'Hello, I would like to submit a new purchase request for the following office equipment...',
    body: `السلام عليكم ورحمة الله وبركاته،

أود تقديم طلب شراء جديد للمعدات المكتبية التالية:

1. أجهزة كمبيوتر محمولة (5 وحدات)
2. طابعات ليزر (2 وحدة)
3. كراسي مكتبية (10 وحدات)
4. مكاتب عمل (10 وحدات)

يرجى مراجعة الطلب والموافقة عليه في أقرب وقت ممكن.

شكراً لتعاونكم`,
    bodyEn: `Hello,

I would like to submit a new purchase request for the following office equipment:

1. Laptops (5 units)
2. Laser printers (2 units)
3. Office chairs (10 units)
4. Work desks (10 units)

Please review and approve the request at your earliest convenience.

Thank you for your cooperation`,
    timestamp: 'منذ 5 دقائق',
    timestampEn: '5 minutes ago',
    isRead: false,
    isStarred: true,
    hasAttachment: true,
    category: 'inbox',
  },
  {
    id: '2',
    sender: 'سارة أحمد حسن',
    senderEn: 'Sara Ahmed Hassan',
    senderEmail: 'sara.hassan@company.com',
    subject: 'تقرير المبيعات الشهري - يناير 2026',
    subjectEn: 'Monthly Sales Report - January 2026',
    preview: 'تحية طيبة، إليكم تقرير المبيعات الشهري لشهر يناير...',
    previewEn: 'Greetings, here is the monthly sales report for January...',
    body: `تحية طيبة،

إليكم تقرير المبيعات الشهري لشهر يناير 2026:

- إجمالي المبيعات: 2,450,000 ريال
- عدد الطلبات: 1,248 طلب
- معدل النمو: +12.5%

التفاصيل الكاملة في الملف المرفق.

مع أطيب التحيات`,
    bodyEn: `Greetings,

Here is the monthly sales report for January 2026:

- Total Sales: 2,450,000 SAR
- Number of Orders: 1,248 orders
- Growth Rate: +12.5%

Full details in the attached file.

Best regards`,
    timestamp: 'منذ ساعة',
    timestampEn: '1 hour ago',
    isRead: true,
    isStarred: false,
    hasAttachment: true,
    category: 'inbox',
  },
  {
    id: '3',
    sender: 'خالد عبدالله الشمري',
    senderEn: 'Khaled Abdullah Al-Shammari',
    senderEmail: 'khaled.shammari@company.com',
    subject: 'اجتماع فريق العمل - الأربعاء القادم',
    subjectEn: 'Team Meeting - Next Wednesday',
    preview: 'مرحباً، نود دعوتكم لحضور اجتماع فريق العمل...',
    previewEn: 'Hello, we would like to invite you to attend the team meeting...',
    body: `مرحباً،

نود دعوتكم لحضور اجتماع فريق العمل الأسبوعي يوم الأربعاء القادم في تمام الساعة 10 صباحاً في قاعة الاجتماعات الرئيسية.

جدول الأعمال:
1. استعراض إنجازات الأسبوع الماضي
2. مناقشة خطة العمل للأسبوع القادم
3. حل المشاكل والتحديات

نأمل حضوركم`,
    bodyEn: `Hello,

We would like to invite you to attend the weekly team meeting next Wednesday at 10:00 AM in the main conference room.

Agenda:
1. Review last week's achievements
2. Discuss next week's work plan
3. Problem solving and challenges

We hope to see you there`,
    timestamp: 'منذ ساعتين',
    timestampEn: '2 hours ago',
    isRead: true,
    isStarred: true,
    hasAttachment: false,
    category: 'inbox',
  },
];
