import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Download, Columns3, List } from 'lucide-react';
import { buttonClasses } from '../../styles';

interface InventoryVarianceItem {
  id: string;
  date: string;
  itemCode: string;
  itemName: string;
  systemQuantity: number;
  actualQuantity: number;
  variance: number;
  varianceValue: number;
}

export const InventoryVarianceReport = (): JSX.Element => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [data] = useState<InventoryVarianceItem[]>([
    { id: '1', date: '1/18/2025', itemCode: 'SR-2500096', itemName: 'شركة افاق الخليج', systemQuantity: 100, actualQuantity: 95, variance: -5, varianceValue: -500 },
    { id: '2', date: '3/16/2025', itemCode: 'SR-2500097', itemName: 'شركة نور', systemQuantity: 200, actualQuantity: 200, variance: 0, varianceValue: 0 },
    { id: '3', date: '7/16/2025', itemCode: 'SR-2500098', itemName: 'مؤسسة مجد', systemQuantity: 150, actualQuantity: 148, variance: -2, varianceValue: -300 },
    { id: '4', date: '2/20/2025', itemCode: 'SR-2500099', itemName: 'شركة الأمل', systemQuantity: 80, actualQuantity: 82, variance: 2, varianceValue: 200 },
    { id: '5', date: '4/10/2025', itemCode: 'SR-2500100', itemName: 'مؤسسة التقدم', systemQuantity: 300, actualQuantity: 295, variance: -5, varianceValue: -750 },
    { id: '6', date: '5/05/2025', itemCode: 'SR-2500101', itemName: 'شركة النجاح', systemQuantity: 120, actualQuantity: 120, variance: 0, varianceValue: 0 },
    { id: '7', date: '6/15/2025', itemCode: 'SR-2500102', itemName: 'مؤسسة الإبداع', systemQuantity: 90, actualQuantity: 88, variance: -2, varianceValue: -180 },
    { id: '8', date: '7/22/2025', itemCode: 'SR-2500103', itemName: 'شركة المستقبل', systemQuantity: 250, actualQuantity: 253, variance: 3, varianceValue: 450 },
  ]);

  const filteredData = data.filter(item => {
    const matchesWarehouse = !warehouseFilter || item.itemName.includes(warehouseFilter);
    return matchesWarehouse;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleExport = () => {
    console.log('Exporting report...');
  };

  const formatVariance = (value: number) => {
    const isNegative = value < 0;
    const isPositive = value > 0;
    return (
      <span className={isNegative ? 'text-red-500' : isPositive ? 'text-green-600' : ''}>
        {value}
      </span>
    );
  };

  const formatVarianceValue = (value: number) => {
    const isNegative = value < 0;
    const isPositive = value > 0;
    return (
      <span className={isNegative ? 'text-red-500' : isPositive ? 'text-green-600' : ''}>
        {value.toLocaleString()}
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
            <h1 className="text-xl font-semibold text-[#093738]">تقرير الجرد والفروقات</h1>
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
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">التاريخ</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">كود الصنف</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">اسم الصنف</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الكمية النظامية</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الكمية الفعلية</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الفرق</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">قيمة الفرق</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{item.date}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.itemCode}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.itemName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.systemQuantity}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.actualQuantity}</td>
                    <td className="px-4 py-3 text-sm">{formatVariance(item.variance)}</td>
                    <td className="px-4 py-3 text-sm">{formatVarianceValue(item.varianceValue)}</td>
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
