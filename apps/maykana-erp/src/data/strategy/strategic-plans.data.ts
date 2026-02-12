// Strategic Plans data for Strategy module

export interface Plan {
  id: string;
  planNumber: string;
  planName: string;
  model: string;
  startYear: number;
  endYear: number;
  manager: string;
  progress: number;
  status: 'active' | 'pending' | 'completed';
}

export const strategicPlansData: Plan[] = [
  {
    id: '1',
    planNumber: '2025-PL-001',
    planName: 'خطة التحول الرقمي 2025-2027',
    model: 'بطاقة الأداء المتوازن (Balanced Scorecard)',
    startYear: 2025,
    endYear: 2027,
    manager: 'م. أحمد العرفاني',
    progress: 35,
    status: 'active',
  },
  {
    id: '2',
    planNumber: '2026-PL-005',
    planName: 'الخطة الاستراتيجية للموارد البشرية',
    model: 'بطاقة الأداء المتوازن',
    startYear: 2026,
    endYear: 2026,
    manager: 'سارة الباجري',
    progress: 78,
    status: 'active',
  },
  {
    id: '3',
    planNumber: '2025-PL-002',
    planName: 'خطة الأمن السيبراني',
    model: 'نموذج التميز المؤسسي',
    startYear: 2025,
    endYear: 2028,
    manager: 'خالد الديومي',
    progress: 15,
    status: 'pending',
  },
];
