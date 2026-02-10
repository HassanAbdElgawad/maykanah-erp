import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Download, Columns3, List } from 'lucide-react';
import { buttonClasses } from '../../styles';

interface DamagedReturnedItem {
  id: string;
  itemCode: string;
  itemName: string;
  warehouse: string;
  unit: string;
  quantity: number;
  damageReason: string;
  movementType: string;
  inspectionStatus: string;
  operationDate: string;
}

export const DamagedReturnedReport = (): JSX.Element => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [movementType, setMovementType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [data] = useState<DamagedReturnedItem[]>([
    { id: '1', itemCode: 'كود الصنف', itemName: 'اسم الصنف', warehouse: 'المستودع', unit: 'وحدة القياس', quantity: 500, damageReason: 'سبب التلف', movementType: 'نوع الحركة', inspectionStatus: 'حالة الفحص', operationDate: '500' },
    { id: '2', itemCode: 'كود الصنف', itemName: 'اسم الصنف', warehouse: 'المستودع', unit: 'وحدة القياس', quantity: 966, damageReason: 'سبب التلف', movementType: 'نوع الحركة', inspectionStatus: 'حالة الفحص', operationDate: '966' },
    { id: '3', itemCode: 'كود الصنف', itemName: 'اسم الصنف', warehouse: 'المستودع', unit: 'وحدة القياس', quantity: 215, damageReason: 'سبب التلف', movementType: 'نوع الحركة', inspectionStatus: 'حالة الفحص', operationDate: '215' },
    { id: '4', itemCode: 'SR-001', itemName: 'قطعة غيار', warehouse: 'الرياض', unit: 'قطعة', quantity: 50, damageReason: 'تلف أثناء النقل', movementType: 'تالف', inspectionStatus: 'تم الفحص', operationDate: '1/15/2025' },
    { id: '5', itemCode: 'SR-002', itemName: 'جهاز إلكتروني', warehouse: 'جدة', unit: 'جهاز', quantity: 12, damageReason: 'عيب مصنعي', movementType: 'مرتجع', inspectionStatus: 'قيد الفحص', operationDate: '2/20/2025' },
    { id: '6', itemCode: 'SR-003', itemName: 'مواد خام', warehouse: 'الدمام', unit: 'كيلو', quantity: 300, damageReason: 'انتهاء الصلاحية', movementType: 'تالف', inspectionStatus: 'تم الفحص', operationDate: '3/10/2025' },
    { id: '7', itemCode: 'SR-004', itemName: 'أدوات صيانة', warehouse: 'الجبيل', unit: 'طقم', quantity: 25, damageReason: 'عدم مطابقة المواصفات', movementType: 'مرتجع', inspectionStatus: 'تم الفحص', operationDate: '4/05/2025' },
    { id: '8', itemCode: 'SR-005', itemName: 'مستلزمات مكتبية', warehouse: 'الرياض', unit: 'علبة', quantity: 100, damageReason: 'تلف بسبب الرطوبة', movementType: 'تالف', inspectionStatus: 'قيد الفحص', operationDate: '5/18/2025' },
  ]);

  const filteredData = data.filter(item => {
    const matchesMovement = !movementType || item.movementType.includes(movementType);
    return matchesMovement;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleExport = () => {
    console.log('Exporting report...');
  };

  return (
    <Layout>
      <div className="space-y-6" dir="rtl">
        {/* Header - Initial Filter style */}
        <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <List className="w-6 h-6 text-[#093738]" />
            <h1 className="text-xl font-semibold text-[#093738]">تقرير التالف أو المرتجع</h1>
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
              <label className="text-sm text-gray-700">نوع الحركة</label>
              <select
                value={movementType}
                onChange={(e) => setMovementType(e.target.value)}
                className="h-[40px] w-[150px] px-3 bg-white border border-[#e2e2e2] rounded-lg text-sm"
              >
                <option value="">نوع الحركة</option>
                <option value="تالف">تالف</option>
                <option value="مرتجع">مرتجع</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F1F5F980] border-b border-gray-200">
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">كود الصنف</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">اسم الصنف</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">المستودع</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">وحدة القياس</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الكمية</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">سبب التلف</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">نوع الحركة</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">حالة الفحص</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">تاريخ العملية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{item.itemCode}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.itemName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.warehouse}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.unit}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.quantity}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.damageReason}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.movementType}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.inspectionStatus}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.operationDate}</td>
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
