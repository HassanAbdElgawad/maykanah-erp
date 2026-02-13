import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardContainer } from '@/components/ui/CardContainer';
import { AdvancedTable } from '@/components/ui/Table';
import { Filter, Upload, RowsIcon, Plus, Search, MoreVertical } from 'lucide-react';
import { buttonClasses } from '@/styles';
import { useTasksData } from '@/hooks/useTasksData';
import type { Task } from '@/data/common/tasks.data';

export const Tasks = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { tasks } = useTasksData();

  const getStatusColor = (status: Task['status']) => {
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
        <CardContainer>
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

              <button
                onClick={() => navigate('/strategy/tasks/add')}
                className={buttonClasses.primary}
              >
                <Plus className="w-5 h-5" />
                مهمة جديدة
              </button>
            </div>
          </div>
        </CardContainer>

        {/* Table */}
        <CardContainer>
          <AdvancedTable
            columns={[
              {
                key: 'index',
                label: 'م',
                align: 'right',
                width: '60px',
                render: (row) => tasks.findIndex(t => t.id === row.id) + 1,
              },
              {
                key: 'taskNumber',
                label: 'رقم المهمة',
                align: 'right',
              },
              {
                key: 'taskName',
                label: 'اسم المهمة',
                align: 'right',
              },
              {
                key: 'taskType',
                label: 'نوع المهمة',
                align: 'right',
              },
              {
                key: 'priority',
                label: 'الأولوية',
                align: 'right',
                render: (row) => (
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-[#e8ecec87] text-[#0e0d24]">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-xs">
                      {row.priority}
                    </span>
                  </div>
                ),
              },
              {
                key: 'assignedTo',
                label: 'المكلف',
                align: 'right',
              },
              {
                key: 'assignedDate',
                label: 'تاريخ التكليف',
                align: 'right',
              },
              {
                key: 'dueDate',
                label: 'تاريخ الاستحقاق',
                align: 'right',
              },
              {
                key: 'progress',
                label: 'نسبة الإنجاز',
                align: 'right',
                render: (row) => (
                  <div className="flex flex-col gap-1">
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-xs">
                      {row.progress}%
                    </span>
                    <div className="w-[71px] h-[13px] bg-[#68686817] rounded-full relative">
                      <div
                        className="h-full bg-[#2cc28d] rounded-full"
                        style={{ width: `${row.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ),
              },
              {
                key: 'status',
                label: 'الحالة',
                align: 'right',
                render: (row) => (
                  <div className={`inline-flex items-center justify-center px-3 py-1.5 rounded-lg ${getStatusColor(row.status)}`}>
                    <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-xs">
                      {getStatusText(row.status)}
                    </span>
                  </div>
                ),
              },
            ]}
            data={tasks}
            actions={[
              {
                icon: MoreVertical,
                label: 'المزيد',
                onClick: (row) => console.log('More actions', row),
                color: 'gray',
              },
            ]}
          />
        </CardContainer>
      </div>
    </Layout>
  );
};
