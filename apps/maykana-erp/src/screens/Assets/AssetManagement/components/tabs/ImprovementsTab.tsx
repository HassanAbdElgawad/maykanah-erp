import { Button } from '../../../../../components/ui/button';

interface ImprovementsTabProps {
  formatCurrency: (value: number) => React.ReactNode;
  onOpenEditAssetValueModal: () => void;
}

export function ImprovementsTab({ formatCurrency, onOpenEditAssetValueModal }: ImprovementsTabProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">جدول التحسينات</h3>
          </div>
          <Button 
            size="sm"
            className="bg-[#11383f] hover:bg-[#0f2f35] text-white"
            onClick={onOpenEditAssetValueModal}
          >
            تعديل قيمة الأصل
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  التاريخ
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  نوع التحسين
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  القيمة
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
                  type: 'زيادة RAM من 8GB إلى 16GB',
                  value: 700,
                  details: 'تحسين الأداء',
                },
                {
                  date: '2023-11-25',
                  type: 'إضافة SSD 512GB',
                  value: 900,
                  details: 'رفع سرعة التشغيل',
                },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{row.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {formatCurrency(row.value)}
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
