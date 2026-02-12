import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { buttonClasses } from '@/styles';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import { customerAcquisitionData } from '@/data/reports/sales/sales-reports.data';
import InitialFilters from '@/components/InitialFilters';

export const CustomerAcquisitionReport = (): JSX.Element => {
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
            <span className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">واقع اكتساب العملاء</span>
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
            {/* Year */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                عام
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                <option value=""></option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2023">2023</option>
              </select>
            </div>

            {/* Month */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                شهر
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                <option value="">نصف شهري</option>
                <option value="1">يناير</option>
                <option value="2">فبراير</option>
                <option value="3">مارس</option>
                <option value="4">أبريل</option>
                <option value="5">مايو</option>
                <option value="6">يونيو</option>
                <option value="7">يوليو</option>
                <option value="8">أغسطس</option>
                <option value="9">سبتمبر</option>
                <option value="10">أكتوبر</option>
                <option value="11">نوفمبر</option>
                <option value="12">ديسمبر</option>
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
                    عام
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    شهر
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    العملاء الجدد
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الريال الجدد
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    ايرادات الريال الجدد
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    ايرادات الريال المكررين
                  </th>
                  <th className="p-3 text-right text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مجموعة العمولة
                  </th>
                </tr>
              </thead>
              <tbody>
                {customerAcquisitionData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.year}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.month}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.newClients}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.newClientsRevenue}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.newClientsRevenue}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.renewedClientsRevenue}
                    </td>
                    <td className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {item.totalCommission}
                    </td>
                  </tr>
                ))}
                {/* Total Row */}
                <tr className="bg-gray-50 font-semibold">
                  <td colSpan={7} className="p-3 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center">
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
