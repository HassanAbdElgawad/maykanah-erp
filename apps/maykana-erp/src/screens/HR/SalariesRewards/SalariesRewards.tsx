import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Search, Download, MoreVertical } from 'lucide-react';

interface SalaryRecord {
  id: string;
  totalEmployees: string;
  totalNetSalary: string;
  period: string;
  processingDate: string;
  status: 'مسودة' | 'تحت الموافقة' | 'معلقة';
}

interface AdvanceRequest {
  id: string;
  employee: string;
  employeeId: string;
  amount: string;
  reason: string;
  status: 'مقبول' | 'مرفوض' | 'معلق';
}

interface PromotionRequest {
  id: string;
  job: string;
  employeeId: string;
  birthDate: string;
  modificationType: string;
  promoteTo: string;
  status: 'مقبول' | 'مرفوض' | 'معلق';
}

export function SalariesRewards() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('salaries');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState<string | null>(null);

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

  const advanceRequests: AdvanceRequest[] = [
    {
      id: '1',
      employee: 'أحمد عبد السلام',
      employeeId: '2522169654126',
      amount: '500',
      reason: 'السبب التعديل الطاولب',
      status: 'معلق',
    },
    {
      id: '2',
      employee: 'عمر السعيد',
      employeeId: '2511685255556',
      amount: '400',
      reason: 'السبب التعديل الطاولب',
      status: 'معلق',
    },
    {
      id: '3',
      employee: 'يوسف النجار',
      employeeId: '251165552256',
      amount: '400',
      reason: 'السبب التعديل الطاولب',
      status: 'مرفوض',
    },
    {
      id: '4',
      employee: 'خالد فؤاد',
      employeeId: '251163698216',
      amount: '600',
      reason: 'السبب التعديل الطاولب',
      status: 'معلق',
    },
  ];

  const promotionRequests: PromotionRequest[] = [
    {
      id: '1',
      job: 'أحمد عبد السلام',
      employeeId: '2522169654126',
      birthDate: '9 - 12 - 2023',
      modificationType: 'نوع التعديل المطلوب',
      promoteTo: 'ترقية إلى',
      status: 'مقبول',
    },
    {
      id: '2',
      job: 'عمر السعيد',
      employeeId: '2511685255556',
      birthDate: '20 - 2 - 2023',
      modificationType: 'نوع التعديل المطلوب',
      promoteTo: 'ترقية إلى',
      status: 'مقبول',
    },
    {
      id: '3',
      job: 'يوسف النجار',
      employeeId: '251165552256',
      birthDate: '15 - 2 - 2023',
      modificationType: 'نوع التعديل المطلوب',
      promoteTo: 'ترقية إلى',
      status: 'مرفوض',
    },
    {
      id: '4',
      job: 'خالد فؤاد',
      employeeId: '251163698216',
      birthDate: '10 - 2 - 2020',
      modificationType: 'نوع التعديل المطلوب',
      promoteTo: 'ترقية إلى',
      status: 'مقبول',
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
      case 'معلق':
        return 'bg-blue-100 text-blue-700';
      case 'مقبول':
        return 'bg-green-100 text-green-700';
      case 'مرفوض':
        return 'bg-red-100 text-red-700';
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
            <Button
              onClick={() => {
                if (activeTab === 'salaries') {
                  navigate('/hr/salaries-rewards/new');
                } else if (activeTab === 'advance-requests') {
                  navigate('/hr/salaries-rewards/advance/new');
                } else if (activeTab === 'promotion-requests') {
                  navigate('/hr/salaries-rewards/promotion/new');
                }
              }}
              className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
            >
              {t('hr.new_request')}
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-[#e2e2e2]">
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
            <div className="overflow-x-auto overflow-visible">
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
                      <td className="px-6 py-4 relative">
                        <button
                          onClick={() => setShowMenu(showMenu === record.id ? null : record.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>
                        {showMenu === record.id && (
                          <div className="fixed mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <button
                              onClick={() => {
                                navigate(`/hr/salaries-rewards/${record.id}`);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                            >
                              {t('hr.view_details')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Edit', record.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {t('hr.edit')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Delete', record.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-gray-50 rounded-b-lg"
                            >
                              {t('hr.delete')}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'advance-requests' && (
            <div className="overflow-x-auto overflow-visible">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.employee')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.employee_id')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.amount')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.reason')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.request_status')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {advanceRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{request.employee}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.employeeId}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.amount}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.reason}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            request.status
                          )}`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 relative">
                        <button
                          onClick={() => setShowMenu(showMenu === request.id ? null : request.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>
                        {showMenu === request.id && (
                          <div className="fixed mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <button
                              onClick={() => {
                                navigate(`/hr/salaries-rewards/advance/${request.id}`);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                            >
                              {t('hr.view_details')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Edit', request.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {t('hr.edit')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Delete', request.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-gray-50 rounded-b-lg"
                            >
                              {t('hr.delete')}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'promotion-requests' && (
            <div className="overflow-x-auto overflow-visible">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.job')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.employee_id')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.birth_date')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.modification_type')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.promote_to')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.request_status')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {promotionRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{request.job}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.employeeId}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.birthDate}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.modificationType}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.promoteTo}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            request.status
                          )}`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 relative">
                        <button
                          onClick={() => setShowMenu(showMenu === request.id ? null : request.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>
                        {showMenu === request.id && (
                          <div className="fixed mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <button
                              onClick={() => {
                                navigate(`/hr/salaries-rewards/promotion/${request.id}`);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                            >
                              {t('hr.view_details')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Edit', request.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {t('hr.edit')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Delete', request.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-gray-50 rounded-b-lg"
                            >
                              {t('hr.delete')}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
