import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Columns3, List } from 'lucide-react';
import { buttonClasses } from '@/styles';

interface InventoryBalanceItem {
  id: string;
  itemCode: string;
  name: string;
  warehouse: string;
  movementDate: string;
  quantity: string;
  amount: number;
  totalValue: number;
}

export const InventoryBalanceReport = (): JSX.Element => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [data] = useState<InventoryBalanceItem[]>([
    { id: '1', itemCode: 'SR-2500096', name: 'شركة افاق الخليج', warehouse: 'الجبيل', movementDate: '1/18/2025', quantity: 'الكمية', amount: 4500, totalValue: 4500 },
    { id: '2', itemCode: 'SR-2500096', name: 'شركة نور', warehouse: 'الرياض', movementDate: '3/16/2025', quantity: 'الكمية', amount: -500, totalValue: -500 },
    { id: '3', itemCode: 'SR-2500096', name: 'مؤسسة مجد', warehouse: 'الرياض', movementDate: '7/16/2025', quantity: 'الكمية', amount: 4500, totalValue: 4500 },
    { id: '4', itemCode: 'SR-2500097', name: 'شركة الأمل', warehouse: 'جدة', movementDate: '2/20/2025', quantity: 'الكمية', amount: 3200, totalValue: 3200 },
    { id: '5', itemCode: 'SR-2500098', name: 'مؤسسة التقدم', warehouse: 'الدمام', movementDate: '4/10/2025', quantity: 'الكمية', amount: 7800, totalValue: 7800 },
    { id: '6', itemCode: 'SR-2500099', name: 'شركة النجاح', warehouse: 'الرياض', movementDate: '5/05/2025', quantity: 'الكمية', amount: -1200, totalValue: -1200 },
    { id: '7', itemCode: 'SR-2500100', name: 'مؤسسة الإبداع', warehouse: 'الجبيل', movementDate: '6/15/2025', quantity: 'الكمية', amount: 5600, totalValue: 5600 },
    { id: '8', itemCode: 'SR-2500101', name: 'شركة المستقبل', warehouse: 'جدة', movementDate: '7/22/2025', quantity: 'الكمية', amount: 2300, totalValue: 2300 },
  ]);

  const filteredData = data.filter(item => {
    const matchesName = !nameFilter || item.name.includes(nameFilter);
    const matchesWarehouse = !warehouseFilter || item.warehouse.includes(warehouseFilter);
    return matchesName && matchesWarehouse;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleExport = () => {
    console.log('Exporting report...');
  };

  const formatAmount = (amount: number) => {
    const isNegative = amount < 0;
    return (
      <span className={isNegative ? 'text-red-500' : ''}>
        {amount.toLocaleString()}
      </span>
    );
  };

  return (
    <Layout>
      <div className="space-y-6" dir="rtl">
        {/* Header - Initial Filter style */}
        <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <List className="w-6 h-6 text-[#093738]" />
            <h1 className="text-xl font-semibold text-[#093738]">تقرير أرصدة المخزون</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button className="h-[40px] px-4 bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-2 rounded-lg border border-[#e2e2e2]">
              <Columns3 className="w-4 h-4" />
              <span className="text-sm">إظهار/إخفاء أعمدة</span>
            </Button>
            <button onClick={handleExport} className={`${buttonClasses.secondary} flex items-center gap-2`}>
              <Download className="w-4 h-4" />
              <span>تحميل</span>
            </button>
          </div>
        </div>

        {/* Table with Filters */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Filters Row */}
          <div className="flex items-center gap-4 p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700">تاريخ من</label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="h-[40px] w-[150px] bg-white border-[#e2e2e2] rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700">تاريخ إلى</label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="h-[40px] w-[150px] bg-white border-[#e2e2e2] rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700">الاسم</label>
              <select
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                className="h-[40px] w-[150px] px-3 bg-white border border-[#e2e2e2] rounded-lg text-sm"
              >
                <option value="">الاسم</option>
                <option value="شركة افاق الخليج">شركة افاق الخليج</option>
                <option value="شركة نور">شركة نور</option>
                <option value="مؤسسة مجد">مؤسسة مجد</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700">المستودع</label>
              <select
                value={warehouseFilter}
                onChange={(e) => setWarehouseFilter(e.target.value)}
                className="h-[40px] w-[150px] px-3 bg-white border border-[#e2e2e2] rounded-lg text-sm"
              >
                <option value="">المستودع</option>
                <option value="الجبيل">الجبيل</option>
                <option value="الرياض">الرياض</option>
                <option value="جدة">جدة</option>
                <option value="الدمام">الدمام</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F1F5F980] border-b border-gray-200">
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">كود الصنف</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الاسم</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">المستودع</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">تاريخ الحركة</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الكمية</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">المبلغ</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">اجمالي القيمة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{item.itemCode}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.warehouse}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.movementDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.quantity}</td>
                    <td className="px-4 py-3 text-sm">{formatAmount(item.amount)}</td>
                    <td className="px-4 py-3 text-sm">{formatAmount(item.totalValue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              لا توجد بيانات
            </div>
          )}
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={buttonClasses.primary}
          >
            التالي
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-sm font-medium ${
                  currentPage === page
                    ? 'bg-[#093738] text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            السابق
          </button>
        </div>
      </div>
    </Layout>
  );
};
