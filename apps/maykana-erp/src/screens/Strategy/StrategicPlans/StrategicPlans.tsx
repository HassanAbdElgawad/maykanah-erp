import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Filter, ChevronDown, MoreVertical, Plus } from 'lucide-react';

interface Plan {
  id: string;
  planNumber: string;
  planName: string;
  model: string;
  startYear: number;
  endYear: number;
  manager: string;
  progress: number;
  status: 'active' | 'pending' | 'completed';
}

export function StrategicPlans() {
  const navigate = useNavigate();
  const { dir, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const mockPlans: Plan[] = [
    {
      id: '1',
      planNumber: '2025-PL-001',
      planName: 'خطة التحول الرقمي 2025-2027',
      model: 'بطاقة الأداء المتوازن (Balanced Scorecard)',
      startYear: 2025,
      endYear: 2027,
      manager: 'م. أحمد العرفاني',
      progress: 35,
      status: 'active',
    },
    {
      id: '2',
      planNumber: '2026-PL-005',
      planName: 'الخطة الاستراتيجية للموارد البشرية',
      model: 'بطاقة الأداء المتوازن',
      startYear: 2026,
      endYear: 2026,
      manager: 'سارة الباجري',
      progress: 78,
      status: 'active',
    },
    {
      id: '3',
      planNumber: '2025-PL-002',
      planName: 'خطة الأمن السيبراني',
      model: 'نموذج التميز المؤسسي',
      startYear: 2025,
      endYear: 2028,
      manager: 'خالد الديومي',
      progress: 15,
      status: 'pending',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'قيد التنفيذ';
      case 'pending':
        return 'ينتظر الاعتماد';
      case 'completed':
        return 'مكتملة';
      default:
        return status;
    }
  };

  return (
    <Layout>
      <div className="space-y-4" dir={dir}>
        {/* Header with Search and Actions */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-4">
          <div className="flex items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder={t('common.search_placeholder') || 'ابحث عن خطة...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                إخفاء/إظهار أعمدة
                <ChevronDown className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Download className="w-4 h-4" />
                تحميل
              </Button>

              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Filter className="w-4 h-4" />
                فلتر
              </Button>

              <Button
                onClick={() => navigate('/strategy/strategic-plans/new')}
                className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Plus className="w-4 h-4" />
                خطة جديدة
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8f9fa] border-b border-[#e2e2e2]">
                <tr>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    رقم الخطة
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم الخطة
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    النموذج المستخدم
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الفترة
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مدير الخطة
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    نسبة التقدم
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحالة
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-[#0e0d24] w-16">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockPlans.map((plan) => (
                  <tr
                    key={plan.id}
                    className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {plan.planNumber}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {plan.planName}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {plan.model}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {plan.startYear} - {plan.endYear}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {plan.manager}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-[100px]">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${plan.progress}%`,
                              backgroundColor: plan.progress >= 70 ? '#2CC28D' : '#F00',
                            }}
                          ></div>
                        </div>
                        <span
                          className="text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          style={{
                            color: plan.progress >= 70 ? '#2CC28D' : '#F00',
                          }}
                        >
                          {plan.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-right">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${getStatusColor(
                          plan.status
                        )}`}
                      >
                        {getStatusLabel(plan.status)}
                      </span>
                    </td>
                    <td className="px-4 py-4 relative">
                      <button
                        onClick={() => setOpenMenuId(openMenuId === plan.id ? null : plan.id)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                      </button>

                      {openMenuId === plan.id && (
                        <>
                          <div
                            className="fixed inset-0 z-10"
                            onClick={() => setOpenMenuId(null)}
                          />
                          <div className="absolute left-0 top-full mt-1 bg-white border border-[#e2e2e2] rounded-lg shadow-lg py-1 z-20 min-w-[180px]">
                            <button
                              onClick={() => {
                                navigate(`/strategy/strategic-plans/${plan.id}`);
                                setOpenMenuId(null);
                              }}
                              className="w-full px-4 py-2 text-right text-sm text-[#0e0d24] hover:bg-gray-50 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              تفاصيل الخطة
                            </button>
                            <button
                              onClick={() => {
                                setOpenMenuId(null);
                              }}
                              className="w-full px-4 py-2 text-right text-sm text-[#0e0d24] hover:bg-gray-50 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              تعديل
                            </button>
                            <button
                              onClick={() => {
                                setOpenMenuId(null);
                              }}
                              className="w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-gray-50 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              حذف
                            </button>
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
