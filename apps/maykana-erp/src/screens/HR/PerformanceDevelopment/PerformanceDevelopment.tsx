import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download, MoreVertical } from 'lucide-react';

interface Evaluation {
  id: string;
  name: string;
  employeeId: string;
  evaluationCourse: string;
  period: string;
  status: string;
  result: string;
}

export function PerformanceDevelopment() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('evaluations');
  const [showMenu, setShowMenu] = useState<string | null>(null);

  const evaluations: Evaluation[] = [
    {
      id: '1',
      name: 'أحمد عبد السلام',
      employeeId: '2522169654126',
      evaluationCourse: 'الإلكتروني',
      period: '9 - 12 - 2023',
      status: 'مكتمل',
      result: 'النجاحة',
    },
    {
      id: '2',
      name: 'عمر السعيد',
      employeeId: '2511685255556',
      evaluationCourse: 'التقني',
      period: '20 - 2 - 2023',
      status: 'مكتمل',
      result: 'النجاحة',
    },
    {
      id: '3',
      name: 'يوسف النجار',
      employeeId: '251165552256',
      evaluationCourse: 'التقني',
      period: '15 - 2 - 2023',
      status: 'مكتمل',
      result: 'النجاحة',
    },
    {
      id: '4',
      name: 'خالد فؤاد',
      employeeId: '251163698216',
      evaluationCourse: 'التقني',
      period: '10 - 2 - 2020',
      status: 'مكتمل',
      result: 'النجاحة',
    },
  ];

  const tabs = [
    { id: 'evaluations', label: 'التقييمات' },
    { id: 'training', label: 'التدريب' },
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
            <h1 className="text-xl font-semibold text-[#11383f]">{t('hr.performance_development')}</h1>
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
              onClick={() => navigate('/hr/performance-development/add-evaluation')}
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
          {activeTab === 'evaluations' && (
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
                      {t('hr.evaluation_course_name')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.period')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.status')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.result')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {evaluations.map((evaluation) => (
                    <tr key={evaluation.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{evaluation.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{evaluation.employeeId}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{evaluation.evaluationCourse}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{evaluation.period}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{evaluation.status}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{evaluation.result}</td>
                      <td className="px-6 py-4 relative">
                        <button
                          onClick={() => setShowMenu(showMenu === evaluation.id ? null : evaluation.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>
                        {showMenu === evaluation.id && (
                          <div className="fixed mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <button
                              onClick={() => {
                                navigate(`/hr/performance-development/${evaluation.id}`);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                            >
                              {t('hr.view_details')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Edit', evaluation.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {t('hr.edit')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Delete', evaluation.id);
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

          {activeTab === 'training' && (
            <div className="p-8 text-center text-gray-500">
              <p>لا توجد بيانات للتدريب</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {activeTab === 'evaluations' && (
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
            <button className="px-4 py-2 rounded-lg bg-[#11383f] hover:bg-[#0f2f35] text-white text-sm">
              {t('hr.next')}
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
