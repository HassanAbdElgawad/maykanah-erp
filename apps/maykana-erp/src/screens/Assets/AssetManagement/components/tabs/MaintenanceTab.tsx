import { Button } from '../../../../../components/ui/button';

interface MaintenanceTabProps {
  formatCurrency: (value: number) => React.ReactNode;
  onOpenCreateMaintenanceModal: () => void;
  onOpenAddMaintenanceRecordModal: () => void;
}

export function MaintenanceTab({ 
  formatCurrency, 
  onOpenCreateMaintenanceModal,
  onOpenAddMaintenanceRecordModal 
}: MaintenanceTabProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">طلبات الصيانة</h3>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onOpenAddMaintenanceRecordModal}
            >
              إضافة سجل صيانة
            </Button>
            <Button 
              size="sm" 
              className="bg-[#11383f] hover:bg-[#0f2f35] text-white"
              onClick={onOpenCreateMaintenanceModal}
            >
              إنشاء طلب صيانة
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  التاريخ
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  النوع
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  التكلفة
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  الحالة
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  التفاصيل
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  date: '2026-03-18',
                  type: 'عطل في البطارية',
                  cost: 450,
                  status: 'مكتمل',
                  details: 'تم تغيير البطارية',
                },
                {
                  date: '2023-12-02',
                  type: 'صيانة دورية',
                  cost: 0,
                  status: 'مكتمل',
                  details: 'فحص وتنظيف',
                },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{row.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {formatCurrency(row.cost)}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="text-green-600">{row.status}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
