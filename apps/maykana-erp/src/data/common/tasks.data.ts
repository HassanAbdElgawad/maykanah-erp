// Tasks Data - Sample tasks for task management
export interface Task {
  id: string;
  taskNumber: string;
  taskName: string;
  taskType: string;
  priority: string;
  assignedTo: string;
  assignedDate: string;
  dueDate: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'pending';
}

export const SAMPLE_TASKS: Task[] = [
  {
    id: '1',
    taskNumber: 'TSK-001',
    taskName: 'إعداد تقرير الأداء الشهري',
    taskType: 'تقارير',
    priority: 'عالية',
    assignedTo: 'أحمد محمد',
    assignedDate: '2026-01-15',
    dueDate: '2026-01-25',
    progress: 75,
    status: 'in-progress',
  },
  {
    id: '2',
    taskNumber: 'TSK-002',
    taskName: 'مراجعة الخطة الاستراتيجية',
    taskType: 'مراجعة',
    priority: 'متوسطة',
    assignedTo: 'سارة أحمد',
    assignedDate: '2026-01-10',
    dueDate: '2026-01-20',
    progress: 50,
    status: 'in-progress',
  },
  {
    id: '3',
    taskNumber: 'TSK-003',
    taskName: 'تحديث قاعدة البيانات',
    taskType: 'تقنية',
    priority: 'عالية',
    assignedTo: 'محمد خالد',
    assignedDate: '2026-01-12',
    dueDate: '2026-01-18',
    progress: 100,
    status: 'completed',
  },
  {
    id: '4',
    taskNumber: 'TSK-004',
    taskName: 'إعداد عرض تقديمي للمشروع',
    taskType: 'عروض',
    priority: 'متوسطة',
    assignedTo: 'فاطمة علي',
    assignedDate: '2026-01-14',
    dueDate: '2026-01-22',
    progress: 30,
    status: 'in-progress',
  },
];
