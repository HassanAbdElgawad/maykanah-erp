// Verification Templates Data - Sample templates for verification processes

export interface ChecklistItem {
  id: string;
  text: string;
  type: 'checkbox' | 'text' | 'number' | 'yesno';
}

export const getVerificationTemplateInitialChecklistItems = (): ChecklistItem[] => [
  { id: '1', text: '', type: 'checkbox' },
];

export interface VerificationTemplate {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'inactive';
  icon: string;
}

export const SAMPLE_TEMPLATES: VerificationTemplate[] = [
  {
    id: '1',
    title: 'عرض المنتجات',
    description: 'فحص ترتيب وجودة الواجهة.',
    status: 'inactive',
    icon: '📦',
  },
  {
    id: '2',
    title: 'نظافة يومية',
    description: 'التحقق من نظافة المكان والمعدات.',
    status: 'inactive',
    icon: '🧹',
  },
  {
    id: '3',
    title: 'جودة المخبوزات',
    description: 'تقييم طزاجة وجودة المعروض.',
    status: 'active',
    icon: '🍞',
  },
  {
    id: '4',
    title: 'إغلاق الفرع',
    description: 'مراجعة المهام قبل الإغلاق.',
    status: 'active',
    icon: '🔒',
  },
  {
    id: '5',
    title: 'سلامة الأغذية',
    description: 'التأكد من التخزين ودرجات الحرارة.',
    status: 'inactive',
    icon: '❄️',
  },
  {
    id: '6',
    title: 'تجهيز الصباح',
    description: 'متابعة تحضير الفرع قبل الافتتاح.',
    status: 'active',
    icon: '☀️',
  },
  {
    id: '7',
    title: 'فحص المعدات',
    description: 'التأكد من جاهزية وصيانة الأجهزة.',
    status: 'active',
    icon: '🔧',
  },
  {
    id: '8',
    title: 'خدمة الزبائن',
    description: 'مراقبة تعامل الطاقم مع الزبائن.',
    status: 'inactive',
    icon: '👥',
  },
];
