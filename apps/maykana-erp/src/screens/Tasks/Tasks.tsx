import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { Filter, Upload, RowsIcon, Plus, Search, MoreVertical } from 'lucide-react';

interface Task {
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

const sampleTasks: Task[] = [
  {
    id: '1',
    taskNumber: 'TSK-001',
    taskName: 'إعداد تقرير الأداء الشهري',
    taskType: 'تقارير',
    priority: 'عالية',
    assignedTo: 'أحمد محمد',
    assignedDate: '2024-01-15',
    dueDate: '2024-01-25',
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
    assignedDate: '2024-01-10',
    dueDate: '2024-01-20',
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
    assignedDate: '2024-01-12',
    dueDate: '2024-01-18',
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
    assignedDate: '2024-01-14',
    dueDate: '2024-01-22',
    progress: 30,
    status: 'in-progress',
  },
];

export const Tasks = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [tasks] = useState<Task[]>(sampleTasks);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-[#e8ecec87] text-[#0e0d24]';
      case 'in-progress':
        return 'bg-[#ff00000f] text-[#ff0000]';
      case 'pending':
        return 'bg-[#ffa5000f] text-[#ffa500]';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'مكتملة';
      case 'in-progress':
        return 'قيد التنفيذ';
      case 'pending':
        return 'معلقة';
      default:
        return status;
    }
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header with Search and Actions */}
        <MaykanaCard>
          <div className="flex items-center justify-between gap-4 p-4">
            {/* Right side: Search */}
            <div className="relative w-[367px]">
              <Input
                type="text"
                placeholder="ابحث من هنا (رقم المهمة، اسم المهمة، المكلف، ...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 bg-[#f0f4f7] border-[#cfcfcf] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Left side: Actions */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#f0f4f7] rounded-lg">
                <RowsIcon className="w-5 h-5 text-[#092e32]" />
                <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">صفوف</span>
              </div>

              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                إظهار/إخفاء أعمدة
              </Button>

              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Upload className="w-4 h-4" />
                تحميل
              </Button>

              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Filter className="w-4 h-4" />
                فلتر
              </Button>

              <Button
                onClick={() => navigate('/strategy/tasks/add')}
                className="bg-[#093738] hover:bg-[#0d5556] text-white gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Plus className="w-5 h-5" />
                مهمة جديدة
              </Button>
            </div>
          </div>
        </MaykanaCard>

        {/* Table */}
        <MaykanaCard>
          <div className="overflow-x-auto">
            <table className="w-full" dir="rtl">
              <thead className="bg-[#f1f5f980] border-b border-slate-100">
                <tr>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    م
                  </th>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    رقم المهمة
                  </th>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    اسم المهمة
                  </th>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    نوع المهمة
                  </th>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    الأولوية
                  </th>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    المكلف
                  </th>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    تاريخ التكليف
                  </th>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    تاريخ الاستحقاق
                  </th>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    نسبة الإنجاز
                  </th>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    الحالة
                  </th>
                  <th className="px-4 py-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                    الإجراءات
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={task.id} className="border-b border-[#e2e2e2] hover:bg-gray-50">
                    <td className="px-4 py-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                      {index + 1}
                    </td>
                    <td className="px-4 py-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base">
                      {task.taskNumber}
                    </td>
                    <td className="px-4 py-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base">
                      {task.taskName}
                    </td>
                    <td className="px-4 py-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base">
                      {task.taskType}
                    </td>
                    <td className="px-4 py-4">
                      <div
                        className={`inline-flex items-center justify-center px-3 py-1.5 rounded-lg ${getStatusColor(
                          task.status
                        )}`}
                      >
                        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-sm">
                          {task.priority}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base">
                      {task.assignedTo}
                    </td>
                    <td className="px-4 py-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base">
                      {task.assignedDate}
                    </td>
                    <td className="px-4 py-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base">
                      {task.dueDate}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base">
                          {task.progress}%
                        </span>
                        <div className="w-[71px] h-[13px] bg-[#68686817] rounded-full relative">
                          <div
                            className="h-full bg-[#2cc28d] rounded-full"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div
                        className={`inline-flex items-center justify-center px-3 py-1.5 rounded-lg ${getStatusColor(
                          task.status
                        )}`}
                      >
                        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-sm">
                          {getStatusText(task.status)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-5 h-5 text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MaykanaCard>
      </div>
    </Layout>
  );
};
