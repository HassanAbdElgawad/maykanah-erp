import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { buttonClasses } from '../../styles';
import {
  Search,
  Star,
  Archive,
  Trash2,
  Reply,
  Forward,
  MoreVertical,
  Paperclip,
  Send,
  Inbox as InboxIcon,
} from 'lucide-react';

interface Message {
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

export const Inbox = (): JSX.Element => {
  const { t, language } = useLanguage();
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [replyText, setReplyText] = useState('');

  const messages: Message[] = [
    {
      id: '1',
      sender: 'أحمد محمد العلي',
      senderEn: 'Ahmed Mohammed Al-Ali',
      senderEmail: 'ahmed.ali@company.com',
      subject: 'طلب شراء جديد - معدات مكتبية',
      subjectEn: 'New Purchase Request - Office Equipment',
      preview: 'السلام عليكم، أود تقديم طلب شراء جديد للمعدات المكتبية التالية...',
      previewEn: 'Hello, I would like to submit a new purchase request for the following office equipment...',
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
      isRead: false,
      isStarred: false,
      hasAttachment: true,
      category: 'inbox',
    },
    {
      id: '3',
      sender: 'خالد عبدالله المطيري',
      senderEn: 'Khalid Abdullah Al-Mutairi',
      senderEmail: 'khalid.almutairi@company.com',
      subject: 'استفسار حول طلب رقم #12345',
      subjectEn: 'Inquiry about Request #12345',
      preview: 'مرحباً، لدي استفسار بخصوص طلب الشراء رقم 12345...',
      previewEn: 'Hello, I have an inquiry about purchase request #12345...',
      body: `مرحباً،

لدي استفسار بخصوص طلب الشراء رقم 12345 الذي تم تقديمه بتاريخ 10 يناير.

هل تم اعتماد الطلب من الإدارة؟
متى سيتم توفير المعدات المطلوبة؟

في انتظار ردكم`,
      bodyEn: `Hello,

I have an inquiry about purchase request #12345 submitted on January 10.

Has the request been approved by management?
When will the requested equipment be available?

Looking forward to your response`,
      timestamp: 'منذ ساعتين',
      timestampEn: '2 hours ago',
      isRead: false,
      isStarred: false,
      hasAttachment: false,
      category: 'inbox',
    },
    {
      id: '4',
      sender: 'فاطمة إبراهيم',
      senderEn: 'Fatima Ibrahim',
      senderEmail: 'fatima.ibrahim@company.com',
      subject: 'دعوة لحضور اجتماع الفريق',
      subjectEn: 'Invitation to Team Meeting',
      preview: 'يسعدنا دعوتكم لحضور اجتماع الفريق القادم...',
      previewEn: 'We are pleased to invite you to the upcoming team meeting...',
      body: `عزيزي الزميل،

يسعدنا دعوتكم لحضور اجتماع الفريق القادم:

التاريخ: 20 يناير 2026
الوقت: 10:00 صباحاً
المكان: قاعة الاجتماعات الرئيسية

الموضوعات المقترحة:
1. مراجعة أهداف الربع الأول
2. خطة العمل للشهر القادم
3. مناقشة التحديثات الجديدة

نأمل تأكيد حضوركم`,
      bodyEn: `Dear Colleague,

We are pleased to invite you to the upcoming team meeting:

Date: January 20, 2026
Time: 10:00 AM
Location: Main Conference Room

Proposed Topics:
1. Review of Q1 goals
2. Work plan for next month
3. Discussion of new updates

We hope you can confirm your attendance`,
      timestamp: 'منذ 3 ساعات',
      timestampEn: '3 hours ago',
      isRead: false,
      isStarred: true,
      hasAttachment: false,
      category: 'inbox',
    },
    {
      id: '5',
      sender: 'محمد سعيد الغامدي',
      senderEn: 'Mohammed Saeed Al-Ghamdi',
      senderEmail: 'mohammed.alghamdi@company.com',
      subject: 'مشكلة تقنية في النظام',
      subjectEn: 'Technical Issue in the System',
      preview: 'السلام عليكم، أواجه مشكلة تقنية في نظام إدارة المشتريات...',
      previewEn: 'Hello, I am facing a technical issue in the procurement management system...',
      body: `السلام عليكم،

أواجه مشكلة تقنية في نظام إدارة المشتريات:

الخطأ: لا يمكن تحميل صفحة الطلبات
رسالة الخطأ: "فشل الاتصال بالخادم"
المتصفح: Chrome
الوقت: 15 يناير 2026، 2:00 مساءً

يرجى المساعدة في حل هذه المشكلة في أقرب وقت.

شكراً`,
      bodyEn: `Hello,

I am facing a technical issue in the procurement management system:

Error: Cannot load orders page
Error message: "Failed to connect to server"
Browser: Chrome
Time: January 15, 2026, 2:00 PM

Please help resolve this issue as soon as possible.

Thank you`,
      timestamp: 'منذ يوم',
      timestampEn: '1 day ago',
      isRead: false,
      isStarred: false,
      hasAttachment: true,
      category: 'inbox',
    },
    {
      id: '6',
      sender: 'نورة عبدالعزيز',
      senderEn: 'Noura Abdulaziz',
      senderEmail: 'noura.abdulaziz@company.com',
      subject: 'تحديث بيانات الموظفين',
      subjectEn: 'Update Employee Data',
      preview: 'تحية طيبة، نرجو منكم تحديث بيانات الموظفين في النظام...',
      previewEn: 'Greetings, please update employee data in the system...',
      body: `تحية طيبة،

نرجو منكم تحديث بيانات الموظفين التالية في النظام:

1. تحديث معلومات الاتصال
2. إضافة الشهادات الجديدة
3. تحديث المسميات الوظيفية

الموعد النهائي للتحديث: 25 يناير 2026

شكراً لتعاونكم`,
      bodyEn: `Greetings,

Please update the following employee data in the system:

1. Update contact information
2. Add new certificates
3. Update job titles

Deadline for update: January 25, 2026

Thank you for your cooperation`,
      timestamp: 'منذ يومين',
      timestampEn: '2 days ago',
      isRead: false,
      isStarred: false,
      hasAttachment: false,
      category: 'inbox',
    },
    {
      id: '7',
      sender: 'يوسف عمر الشهري',
      senderEn: 'Yousef Omar Al-Shehri',
      senderEmail: 'yousef.alshehri@company.com',
      subject: 'موافقة على طلب الإجازة',
      subjectEn: 'Leave Request Approved',
      preview: 'مرحباً، تمت الموافقة على طلب الإجازة الخاص بك...',
      previewEn: 'Hello, your leave request has been approved...',
      body: `مرحباً،

تمت الموافقة على طلب الإجازة الخاص بك:

من: 1 فبراير 2026
إلى: 7 فبراير 2026
المدة: 7 أيام

نتمنى لك إجازة سعيدة.

قسم الموارد البشرية`,
      bodyEn: `Hello,

Your leave request has been approved:

From: February 1, 2026
To: February 7, 2026
Duration: 7 days

Wishing you a pleasant vacation.

Human Resources Department`,
      timestamp: 'منذ 3 أيام',
      timestampEn: '3 days ago',
      isRead: false,
      isStarred: false,
      hasAttachment: false,
      category: 'inbox',
    },
    {
      id: '8',
      sender: 'عبدالرحمن الشمري',
      senderEn: 'Abdulrahman Al-Shammari',
      senderEmail: 'abdulrahman.alshammari@company.com',
      subject: 'موافقة مدير القسم على الطلب',
      subjectEn: 'Department Manager Approval on Request',
      preview: 'السلام عليكم، تمت الموافقة على الطلب المقدم من قبلكم...',
      previewEn: 'Hello, the request submitted by you has been approved...',
      body: `السلام عليكم،

تمت الموافقة على الطلب المقدم من قبلكم رقم #54321.

يرجى المتابعة مع قسم المشتريات لاستكمال الإجراءات.

شكراً`,
      bodyEn: `Hello,

The request submitted by you #54321 has been approved.

Please follow up with the procurement department to complete the procedures.

Thank you`,
      timestamp: 'منذ 4 أيام',
      timestampEn: '4 days ago',
      isRead: false,
      isStarred: false,
      hasAttachment: false,
      category: 'inbox',
    },
    {
      id: '9',
      sender: 'منى القحطاني',
      senderEn: 'Mona Al-Qahtani',
      senderEmail: 'mona.alqahtani@company.com',
      subject: 'دورة تدريبية جديدة',
      subjectEn: 'New Training Course',
      preview: 'تحية طيبة، يسرنا دعوتكم للتسجيل في الدورة التدريبية الجديدة...',
      previewEn: 'Greetings, we are pleased to invite you to register for the new training course...',
      body: `تحية طيبة،

يسرنا دعوتكم للتسجيل في الدورة التدريبية الجديدة:

الموضوع: إدارة المشاريع الاحترافية
المدة: 5 أيام
التاريخ: من 1 فبراير إلى 5 فبراير 2026

للتسجيل، يرجى التواصل مع قسم التدريب.

مع التحية`,
      bodyEn: `Greetings,

We are pleased to invite you to register for the new training course:

Topic: Professional Project Management
Duration: 5 days
Date: February 1 to February 5, 2026

To register, please contact the training department.

Best regards`,
      timestamp: 'منذ 5 أيام',
      timestampEn: '5 days ago',
      isRead: false,
      isStarred: true,
      hasAttachment: true,
      category: 'inbox',
    },
    {
      id: '10',
      sender: 'طلال الدوسري',
      senderEn: 'Talal Al-Dosari',
      senderEmail: 'talal.aldosari@company.com',
      subject: 'تحديث السياسات الداخلية',
      subjectEn: 'Internal Policies Update',
      preview: 'مرحباً، نود إعلامكم بتحديث السياسات الداخلية للشركة...',
      previewEn: 'Hello, we would like to inform you of the company internal policies update...',
      body: `مرحباً،

نود إعلامكم بتحديث السياسات الداخلية للشركة:

1. سياسة العمل عن بُعد
2. سياسة الإجازات
3. سياسة المصروفات

يرجى الاطلاع على المرفقات وتطبيق السياسات الجديدة.

قسم الموارد البشرية`,
      bodyEn: `Hello,

We would like to inform you of the company internal policies update:

1. Remote work policy
2. Leave policy
3. Expenses policy

Please review the attachments and apply the new policies.

Human Resources Department`,
      timestamp: 'منذ أسبوع',
      timestampEn: '1 week ago',
      isRead: false,
      isStarred: false,
      hasAttachment: true,
      category: 'inbox',
    },
    {
      id: '11',
      sender: 'ريم الزهراني',
      senderEn: 'Reem Al-Zahrani',
      senderEmail: 'reem.alzahrani@company.com',
      subject: 'ملاحظات على التقرير السنوي',
      subjectEn: 'Comments on Annual Report',
      preview: 'السلام عليكم، لدي بعض الملاحظات على التقرير السنوي...',
      previewEn: 'Hello, I have some comments on the annual report...',
      body: `السلام عليكم،

لدي بعض الملاحظات على التقرير السنوي المقدم:

1. يرجى تحديث الأرقام في الصفحة 15
2. إضافة الرسوم البيانية المطلوبة
3. مراجعة التوصيات النهائية

في انتظار التعديلات.

شكراً`,
      bodyEn: `Hello,

I have some comments on the submitted annual report:

1. Please update the numbers on page 15
2. Add the required charts
3. Review final recommendations

Waiting for the modifications.

Thank you`,
      timestamp: 'منذ أسبوع',
      timestampEn: '1 week ago',
      isRead: true,
      isStarred: false,
      hasAttachment: false,
      category: 'inbox',
    },
    {
      id: '12',
      sender: 'بدر المالكي',
      senderEn: 'Badr Al-Malki',
      senderEmail: 'badr.almalki@company.com',
      subject: 'اجتماع طارئ',
      subjectEn: 'Urgent Meeting',
      preview: 'تحية طيبة، هناك اجتماع طارئ اليوم الساعة 3 مساءً...',
      previewEn: 'Greetings, there is an urgent meeting today at 3 PM...',
      body: `تحية طيبة،

هناك اجتماع طارئ اليوم الساعة 3 مساءً لمناقشة:

- تحديثات المشروع الجديد
- الميزانية السنوية
- خطة التوظيف

يرجى التأكيد على الحضور.

الإدارة`,
      bodyEn: `Greetings,

There is an urgent meeting today at 3 PM to discuss:

- New project updates
- Annual budget
- Hiring plan

Please confirm your attendance.

Management`,
      timestamp: 'منذ أسبوعين',
      timestampEn: '2 weeks ago',
      isRead: true,
      isStarred: true,
      hasAttachment: false,
      category: 'inbox',
    },
  ];

  const filteredMessages = messages.filter(
    (msg) => {
      const query = searchQuery.toLowerCase();
      return (
        msg.sender.toLowerCase().includes(query) ||
        msg.subject.toLowerCase().includes(query) ||
        msg.preview.toLowerCase().includes(query) ||
        (msg.senderEn && msg.senderEn.toLowerCase().includes(query)) ||
        (msg.subjectEn && msg.subjectEn.toLowerCase().includes(query)) ||
        (msg.previewEn && msg.previewEn.toLowerCase().includes(query))
      );
    }
  );

  const handleReply = () => {
    console.log('Reply:', replyText);
    setReplyText('');
  };

  const toggleStar = (messageId: string) => {
    // In real app, this would update the message in the backend
    console.log('Toggle star for message:', messageId);
  };

  return (
    <Layout>
      <div className="flex h-[calc(100vh-120px)] gap-4">
        {/* Messages List Sidebar */}
        <div className="w-[400px] flex-shrink-0 bg-white rounded-xl border border-gray-200 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#0b4041] mb-4 font-['IBM_Plex_Sans_Arabic']">
              {t('inbox.title')}
            </h2>
            <div className="relative">
              <Input
                type="text"
                placeholder={t('inbox.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 bg-gray-50 border-gray-200 font-['IBM_Plex_Sans_Arabic']"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                onClick={() => setSelectedMessage(message)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                  selectedMessage?.id === message.id
                    ? `bg-[#093738]/5  ${language === 'ar' ? 'border-r-4 border-r-[#093738]' : 'border-l-4 border-l-[#093738]'}`
                    : 'hover:bg-gray-50'
                } ${!message.isRead ? 'bg-blue-50/30' : ''}`}
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#093738] to-[#0d5556] flex items-center justify-center text-white font-semibold flex-shrink-0 font-['IBM_Plex_Sans_Arabic']">
                    {(language === 'ar' ? message.sender : (message.senderEn || message.sender)).charAt(0)}
                  </div>

                  {/* Message Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`font-semibold text-gray-900 truncate font-['IBM_Plex_Sans_Arabic'] ${
                          !message.isRead ? 'font-bold' : 'font-medium'
                        }`}
                      >
                        {language === 'ar' ? message.sender : (message.senderEn || message.sender)}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStar(message.id);
                        }}
                        className="flex-shrink-0"
                      >
                        <Star
                          className={`w-4 h-4 ${
                            message.isStarred
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300 hover:text-yellow-400'
                          }`}
                        />
                      </button>
                    </div>
                    <p
                      className={`text-sm mb-1 truncate font-['IBM_Plex_Sans_Arabic'] ${
                        !message.isRead ? 'font-semibold text-gray-900' : 'text-gray-700'
                      }`}
                    >
                      {language === 'ar' ? message.subject : (message.subjectEn || message.subject)}
                    </p>
                    <p className="text-xs text-gray-500 truncate font-['IBM_Plex_Sans_Arabic']">
                      {language === 'ar' ? message.preview : (message.previewEn || message.preview)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-400 font-['IBM_Plex_Sans_Arabic']">
                        {language === 'ar' ? message.timestamp : (message.timestampEn || message.timestamp)}
                      </span>
                      {message.hasAttachment && <Paperclip className="w-3 h-3 text-gray-400" />}
                      {!message.isRead && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Footer Stats */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-lg font-bold text-[#093738] font-['IBM_Plex_Sans_Arabic']">
                  {messages.filter((m) => !m.isRead).length}
                </div>
                <div className="text-xs text-gray-600 font-['IBM_Plex_Sans_Arabic']">
                  {t('inbox.unread')}
                </div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#093738] font-['IBM_Plex_Sans_Arabic']">
                  {messages.filter((m) => m.isStarred).length}
                </div>
                <div className="text-xs text-gray-600 font-['IBM_Plex_Sans_Arabic']">
                  {t('inbox.starred')}
                </div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#093738] font-['IBM_Plex_Sans_Arabic']">
                  {messages.length}
                </div>
                <div className="text-xs text-gray-600 font-['IBM_Plex_Sans_Arabic']">
                  {t('inbox.total')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Content Area */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 flex flex-col">
          {selectedMessage ? (
            <>
              {/* Message Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 font-['IBM_Plex_Sans_Arabic']">
                      {language === 'ar' ? selectedMessage.subject : (selectedMessage.subjectEn || selectedMessage.subject)}
                    </h2>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#093738] to-[#0d5556] flex items-center justify-center text-white font-semibold font-['IBM_Plex_Sans_Arabic']">
                        {(language === 'ar' ? selectedMessage.sender : (selectedMessage.senderEn || selectedMessage.sender)).charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 font-['IBM_Plex_Sans_Arabic']">
                          {language === 'ar' ? selectedMessage.sender : (selectedMessage.senderEn || selectedMessage.sender)}
                        </p>
                        <p className="text-xs text-gray-500 font-['IBM_Plex_Sans_Arabic']">
                          {selectedMessage.senderEmail}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 font-['IBM_Plex_Sans_Arabic']">
                      {language === 'ar' ? selectedMessage.timestamp : (selectedMessage.timestampEn || selectedMessage.timestamp)}
                    </span>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Star
                        className={`w-5 h-5 ${
                          selectedMessage.isStarred
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Archive className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Trash2 className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className={buttonClasses.primary}>
                    <Reply className="w-4 h-4 mr-2" />
                    <span>{t('inbox.reply')}</span>
                  </button>
                  <Button variant="outline" className="font-['IBM_Plex_Sans_Arabic']">
                    <Forward className="w-4 h-4 mr-2" />
                    <span>{t('inbox.forward')}</span>
                  </Button>
                </div>
              </div>

              {/* Message Body */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-wrap font-['IBM_Plex_Sans_Arabic'] leading-relaxed">
                    {language === 'ar' ? selectedMessage.body : (selectedMessage.bodyEn || selectedMessage.body)}
                  </p>
                </div>

                {/* Attachments */}
                {selectedMessage.hasAttachment && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 font-['IBM_Plex_Sans_Arabic']">
                      {t('inbox.attachments')} (2)
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#093738] transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center">
                          <Paperclip className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 font-['IBM_Plex_Sans_Arabic']">
                            Equipment_List.pdf
                          </p>
                          <p className="text-xs text-gray-500">245 KB</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#093738] transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-green-50 rounded flex items-center justify-center">
                          <Paperclip className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 font-['IBM_Plex_Sans_Arabic']">
                            Price_Quote.xlsx
                          </p>
                          <p className="text-xs text-gray-500">128 KB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Reply Section */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col gap-3">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={t('inbox.replyPlaceholder')}
                    className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#093738] font-['IBM_Plex_Sans_Arabic']"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button
                        onClick={handleReply}
                        className={buttonClasses.primary}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        <span>{t('inbox.send')}</span>
                      </button>
                      <Button variant="outline" className="font-['IBM_Plex_Sans_Arabic']">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Empty State
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <InboxIcon className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['IBM_Plex_Sans_Arabic']">
                  {t('inbox.noMessageSelected')}
                </h3>
                <p className="text-gray-500 font-['IBM_Plex_Sans_Arabic']">
                  {t('inbox.selectMessagePrompt')}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
