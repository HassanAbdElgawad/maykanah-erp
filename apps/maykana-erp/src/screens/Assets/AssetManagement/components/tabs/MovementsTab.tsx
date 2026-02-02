export function MovementsTab() {
  return (
    <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
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
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">سجل النقل بين المواقع</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  التاريخ
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">من</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  إلى
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  بواسطة
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  للإرشادات
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  date: '2024-05-12',
                  from: 'قسم IT',
                  to: 'قسم HR',
                  by: 'Admin',
                  notes: 'تفعيل موقف لعمليات اجتماع',
                },
                {
                  date: '2023-09-01',
                  from: 'مكتب الطابق 1',
                  to: 'مكتب الطابق 2',
                  by: 'IT Manager',
                  notes: 'تغيير مكتب الوظيفة',
                },
                {
                  date: '2023-04-15',
                  from: 'المخزن',
                  to: 'قسم IT',
                  by: 'Inventory Officer',
                  notes: 'تسليم الجهاز للموظف',
                },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{row.from}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{row.to}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{row.by}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
