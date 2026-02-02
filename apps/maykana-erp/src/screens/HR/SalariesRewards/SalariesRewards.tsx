import { useState } from 'react';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Search, Download } from 'lucide-react';

interface SalaryRecord {
  id: string;
  totalEmployees: string;
  totalNetSalary: string;
  period: string;
  processingDate: string;
  status: 'مسودة' | 'تحت الموافقة' | 'معلقة';
}

export function SalariesRewards() {
  const { dir, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('salaries');
  const [searchQuery, setSearchQuery] = useState('');

  const salaryRecords: SalaryRecord[] = [
    {
      id: '1',
      totalEmployees: '50',
      totalNetSalary: '2522169654126',
      period: 'الألكتروني',
      processingDate: '9 - 12 - 2023',
      status: 'مسودة',
    },
    {
      id: '2',
      totalEmployees: '40',
      totalNetSalary: '251168525556',
      period: 'التقني',
      processingDate: '20 - 2 - 2023',
      status: 'مسودة',
    },
    {
      id: '3',
      totalEmployees: '30',
      totalNetSalary: '251165552256',
      period: 'التقني',
      processingDate: '15 - 2 - 2023',
      status: 'تحت الموافقة',
    },
    {
      id: '4',
      totalEmployees: '2211',
      totalNetSalary: '251163698216',
      period: 'التقني',
      processingDate: '10 - 2 - 2020',
      status: 'معلقة',
    },
  ];

  const tabs = [
    { id: 'salaries', label: 'الرواتب' },
    { id: 'advance-requests', label: 'طلبات السلف' },
    { id: 'promotion-requests', label: 'طلبات الترقية' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'مسودة':
        return 'bg-gray-100 text-gray-700';
      case 'تحت الموافقة':
        return 'bg-yellow-100 text-yellow-700';
      case 'معلقة':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={t('hr.search_salaries')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 py-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              {t('hr.filter')}
            </Button>
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2">
              <Download className="w-4 h-4" />
              {t('hr.download')}
            </Button>
            <Button className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg">
              {t('hr.new_request')}
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium transition-colors border-b-4 ${
                  activeTab === tab.id
                    ? 'border-[#11383f] text-[#11383f]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table */}
          {activeTab === 'salaries' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.total_employees')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.total_net_salary')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.period')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.processing_date')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.status')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {salaryRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{record.totalEmployees}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{record.totalNetSalary}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{record.period}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{record.processingDate}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            record.status
                          )}`}
                        >
                          {record.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">⋮</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'advance-requests' && (
            <div className="p-8 text-center text-gray-500">
              <p>لا توجد بيانات لطلبات السلف</p>
            </div>
          )}

          {activeTab === 'promotion-requests' && (
            <div className="p-8 text-center text-gray-500">
              <p>لا توجد بيانات لطلبات الترقية</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {activeTab === 'salaries' && (
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
            <button className="text-sm text-gray-600 hover:text-gray-800">{t('hr.previous')}</button>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-lg bg-[#11383f] text-white">1</button>
              <button className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                3
              </button>
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#11383f] hover:bg-[#0f2f35] text-white text-sm">{t('hr.next')}</button>
          </div>
        )}
      </div>
    </Layout>
  );
}
