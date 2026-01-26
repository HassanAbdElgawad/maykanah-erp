import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { buttonClasses } from '../../styles';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import { customerAgingData } from '../../data/sales-reports.data';
import InitialFilters from '../../components/InitialFilters';

export const CustomerAgingReport = (): JSX.Element => {
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
            <span className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">تقرير أعمار الديون للعملاء</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir="rtl">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم العميل
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    إجمالي الفواتير
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مردودات
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    دفعات مقدمة
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    إجمالي الدفوع
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الباقي بعد الدفع
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    0-30
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    31-60
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    61-90
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    أكثر 90
                  </th>
                </tr>
              </thead>
              <tbody>
                {customerAgingData.map((item, index) => (
                  <tr key={item.id} className={`border-b border-gray-200 ${index === customerAgingData.length - 1 ? 'bg-gray-50 font-semibold' : 'hover:bg-gray-50'}`}>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.customerName}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.totalInvoices}
                    </td>
                    <td className={`p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${item.paid < 0 ? 'text-red-600' : ''}`}>
                      {item.paid > 0 ? item.paid : `${item.paid}-`}
                    </td>
                    <td className={`p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${item.unpaid < 0 ? 'text-red-600' : ''}`}>
                      {item.unpaid > 0 ? item.unpaid : `${item.unpaid}-`}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.advancePayments}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.remainingAfterPayment}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.range0to30 || ''}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.range31to60 || ''}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.range61to90 || ''}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.rangeOver90 || ''}
                    </td>
                  </tr>
                ))}
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
