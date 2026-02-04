import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { ChevronRight, Download, MoreVertical } from 'lucide-react';

interface AlertRequest {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  requestType: string;
  date: string;
  jobStatus: string;
}

export function AlertsRequests() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<string | null>(null);

  const alertsData: AlertRequest[] = [
    {
      id: '1',
      name: 'أحمد عبد السلام',
      employeeId: '2522169654126',
      department: 'الالكتروني',
      requestType: 'نوع الطلب',
      date: '2023 - 12 - 9',
      jobStatus: 'نشط',
    },
    {
      id: '2',
      name: 'عمر السعيد',
      employeeId: '2511685255556',
      department: 'التقني',
      requestType: 'نوع الطلب',
      date: '2023 - 2 - 20',
      jobStatus: 'منتهي الخدمة',
    },
    {
      id: '3',
      name: 'يوسف الحاجر',
      employeeId: '25116555256',
      department: 'التقني',
      requestType: 'نوع الطلب',
      date: '2023 - 2 - 15',
      jobStatus: 'نشط',
    },
    {
      id: '4',
      name: 'خالد فؤاد',
      employeeId: '2511636985216',
      department: 'التقني',
      requestType: 'نوع الطلب',
      date: '2020 - 2 - 10',
      jobStatus: 'منتهي الخدمة',
    },
  ];

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          {/* Right Side: Back Button + Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/hr')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-[#11383f]">{t('hr.alerts_requests_center')}</h1>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              {t('common.filter')}
            </Button>
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2">
              <Download className="w-4 h-4" />
              {t('common.download')}
            </Button>
            <Button
              onClick={() => navigate('/hr/alerts-requests/new')}
              className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
            >
              {t('hr.new_request')}
            </Button>
          </div>
        </div>

        {/* Tab */}
        <div className="bg-white rounded-xl border border-[#e2e2e2]">
          <div className="flex border-b border-gray-200">
            <button
              className="px-6 py-3 text-sm font-medium transition-colors border-b-4 border-[#11383f] text-[#11383f]"
            >
              {t('hr.alerts_requests_setup')}
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto overflow-visible">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('hr.name')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('hr.employee_id')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('hr.department')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('hr.request_type')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('common.date')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('hr.job_status')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {alertsData.map((alert) => (
                  <tr key={alert.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{alert.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{alert.employeeId}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{alert.department}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{alert.requestType}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{alert.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{alert.jobStatus}</td>
                    <td className="px-6 py-4 relative">
                      <button
                        onClick={() => setShowMenu(showMenu === alert.id ? null : alert.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                      {showMenu === alert.id && (
                        <div className="fixed mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                          <button
                            onClick={() => {
                              navigate(`/hr/alerts-requests/${alert.id}`);
                              setShowMenu(null);
                            }}
                            className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                          >
                            {t('hr.view_details')}
                          </button>
                          <button
                            onClick={() => {
                              console.log('Edit', alert.id);
                              setShowMenu(null);
                            }}
                            className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {t('hr.edit')}
                          </button>
                          <button
                            onClick={() => {
                              console.log('Delete', alert.id);
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
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <button className="text-sm text-gray-600 hover:text-gray-800">{t('common.previous')}</button>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-lg bg-[#11383f] text-white">1</button>
            <button className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
              3
            </button>
          </div>
          <button className="px-4 py-2 rounded-lg bg-[#11383f] hover:bg-[#0f2f35] text-white text-sm">
            {t('common.next')}
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default AlertsRequests;
