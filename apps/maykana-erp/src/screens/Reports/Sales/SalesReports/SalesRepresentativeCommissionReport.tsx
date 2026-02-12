import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { buttonClasses } from '@/styles';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import { representativeCommissionData } from '@/data/reports/sales/sales-reports.data';
import InitialFilters from '@/components/InitialFilters';

export const SalesRepresentativeCommissionReport = (): JSX.Element => {
  const [showExportOptions, setShowExportOptions] = useState(false);
  const navigate = useNavigate();

  const total = representativeCommissionData.reduce((sum, item) => sum + item.commissionAmount, 0);

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
            <span className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">عمولة المندوب</span>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Date From */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                تاريخ من
              </label>
              <input
                type="date"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Date To */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                تاريخ إلى
              </label>
              <input
                type="date"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>

            {/* Sales Representative */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                مندوب المبيعات
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                <option value="">الكل</option>
                <option value="سالم حسين">سالم حسين</option>
                <option value="أحمد محمد">أحمد محمد</option>
              </select>
            </div>

            {/* Additional Filters */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                &nbsp;
              </label>
              <div className="flex gap-2">
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  <option value="">الكل</option>
                </select>
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  <option value="">الكل</option>
                </select>
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  <option value="">الكل</option>
                </select>
              </div>
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
                    العميل
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تاريخ الإصدار
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المبلغ
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مندوب المبيعات
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    نسبة العمولة %
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مجموع العمولة
                  </th>
                </tr>
              </thead>
              <tbody>
                {representativeCommissionData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.invoiceNumber}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.customer}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.issueDate}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.amount}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.representative}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.commissionPercentage} %
                    </td>
                    <td className={`p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${item.commissionAmount < 0 ? 'text-red-600' : ''}`}>
                      {item.commissionAmount}
                    </td>
                  </tr>
                ))}
                {/* Total Row */}
                <tr className="bg-gray-50 font-semibold">
                  <td colSpan={6} className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                    الإجمالي
                  </td>
                  <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {total}
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
