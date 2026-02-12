import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';

interface Goal {
  id: string;
  name: string;
  progress: number;
  source: string;
}

interface Initiative {
  id: string;
  name: string;
  progress: number;
  source: string;
}

interface KPI {
  id: string;
  name: string;
  progress: number;
  source: string;
}

export function PlanLinkDetails() {
  const navigate = useNavigate();
  const { dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<'goals' | 'initiatives' | 'kpis'>('goals');

  // بيانات وهمية
  const planData = {
    planNumber: 'PL-001-2025',
    mainPlan: 'رؤية 2030',
    usedModel: 'خطة التحول الرقمي 2025',
    linkType: 'وزارة كاملة',
    linkDate: '5 فبراير 2025',
    notes: 'الخطة الثانية تساهم في التحول الوطني',
  };

  const goals: Goal[] = [
    { id: '1', name: 'تحسين تجربة المستخدم', progress: 90, source: 'رئيسية' },
    { id: '2', name: 'تعزيز الأمن السيبراني', progress: 40, source: 'رئيسية' },
    { id: '3', name: 'تطوير البنيات الرقمية', progress: 90, source: 'رئيسية' },
  ];

  const initiatives: Initiative[] = [];
  const kpis: KPI[] = [];

  const tabs = [
    { id: 'goals', label: 'الأهداف الموروثة', badgeCount: goals.length },
    { id: 'initiatives', label: 'المبادرات الموروثة', badgeCount: initiatives.length },
    { id: 'kpis', label: 'مؤشرات الأداء (KPIs)', badgeCount: kpis.length },
  ];

  return (
    <Layout>
      <div className="space-y-4" dir={dir}>
        {/* Header */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-4">
          <div className="flex items-center justify-between">
            {/* Right Side: Back Button + Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#0e0d24]" />
              </button>
              <h1 className="text-xl font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                تفاصيل ربط خطة رقم {planData.planNumber}
              </h1>
            </div>
          </div>
        </div>

        {/* معلومات الخطة */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                الخطة الرئيسية
              </label>
              <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {planData.mainPlan}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                النموذج المستخدم
              </label>
              <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {planData.usedModel}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                اختيار نوع الربط
              </label>
              <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {planData.linkType}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                تاريخ الربط
              </label>
              <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {planData.linkDate}
              </p>
            </div>
          </div>

          {/* الملاحظات */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              ملاحظات
            </label>
            <div className="bg-[#f5f5f5] rounded-lg p-4">
              <p className="text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {planData.notes}
              </p>
            </div>
          </div>
        </div>

        {/* التابات والجداول */}
        <div className="bg-white rounded-xl border border-[#e2e2e2]">
          {/* Tabs */}
          <div className="bg-[#f5f5f5] border-b border-[#e2e2e2] px-6">
            <div className="flex gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3 px-2 relative flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] transition-colors ${
                    activeTab === tab.id
                      ? 'text-[#11383f] font-semibold'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="bg-[#11383f] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {tab.badgeCount}
                  </span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#11383f]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'goals' && (
              <div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e2e2]">
                      <th className="text-right py-4 px-4 text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        اسم الهدف
                      </th>
                      <th className="text-right py-4 px-4 text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-48">
                        التقدم
                      </th>
                      <th className="text-right py-4 px-4 text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-32">
                        المصدر
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {goals.map((goal) => (
                      <tr key={goal.id} className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {goal.name}
                        </td>
                        <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all"
                                style={{
                                  width: `${goal.progress}%`,
                                  backgroundColor: goal.progress >= 70 ? '#2CC28D' : '#F00',
                                }}
                              ></div>
                            </div>
                            <span
                              className="text-sm font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[40px]"
                              style={{
                                color: goal.progress >= 70 ? '#2CC28D' : '#F00',
                              }}
                            >
                              {goal.progress}%
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {goal.source}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'initiatives' && (
              <div className="text-center py-12">
                <p className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  لا توجد مبادرات موروثة
                </p>
              </div>
            )}

            {activeTab === 'kpis' && (
              <div className="text-center py-12">
                <p className="text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  لا توجد مؤشرات أداء
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
