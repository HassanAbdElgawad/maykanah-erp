import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { buttonClasses } from '../../styles';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import { salesReportData } from '../../data/sales-reports.data';
import InitialFilters from '../../components/InitialFilters';

export const SalesReport = (): JSX.Element => {
  const [showExportOptions, setShowExportOptions] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="[direction:rtl] space-y-4">
        {/* Header with InitialFilters */}
        <InitialFilters>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/reports?selected=sales')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowRight className="h-5 w-5" />
            </button>
            <span className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">تقرير المبيعات</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
            >
              تحميل
              <Download className="w-4 h-4" />
            </Button>
            <div className="relative">
              <Button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                إظهار/إخفاء أعمدة
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </InitialFilters>

        {/* Filters Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-4" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* Date From */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                تاريخ من
              </label>
              <input
                type="date"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Date To */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                تاريخ إلى
              </label>
              <input
                type="date"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Sales Order Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                رقم أمر البيع
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                <option value=""></option>
              </select>
            </div>

            {/* Warehouse */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                المخزن
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                <option value=""></option>
                <option value="مخزن 1">مخزن 1</option>
                <option value="مخزن 2">مخزن 2</option>
              </select>
            </div>

            {/* Representative */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                المندوب
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                <option value=""></option>
                <option value="سالم حسين">سالم حسين</option>
                <option value="أحمد محمد">أحمد محمد</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir="rtl">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    رقم الفاتورة
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تاريخ الفاتورة
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    العميل
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    كود الصنف
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم الصنف
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    وصف
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    كمية
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    السعر
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    رقم أمر البيع
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المخزن
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    قيمة الفاتورة
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المندوب
                  </th>
                </tr>
              </thead>
              <tbody>
                {salesReportData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.invoiceNumber}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.date}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.customer}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.itemCode}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.itemName}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.description}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.quantity}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.price}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.orderNumber}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.warehouse}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.invoiceAmount}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.customer}
                    </td>
                  </tr>
                ))}
                {/* Total Row */}
                <tr className="bg-gray-50 font-semibold">
                  <td colSpan={12} className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center">
                    الإجمالي
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between py-4" dir="rtl">
          <Button className={buttonClasses.secondary}>
            السابق
          </Button>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded bg-[#0e4a3f] text-white text-sm">1</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100 text-sm">2</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100 text-sm">3</button>
          </div>
          <Button className={buttonClasses.primary}>
            التالي
          </Button>
        </div>
      </div>
    </Layout>
  );
};
