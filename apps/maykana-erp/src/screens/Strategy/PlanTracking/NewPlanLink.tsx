import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface Goal {
  id: string;
  number: string;
  name: string;
  isChecked: boolean;
}

interface Initiative {
  id: string;
  number: string;
  name: string;
  isChecked: boolean;
}

interface KPI {
  id: string;
  number: string;
  name: string;
  isChecked: boolean;
}

export const NewPlanLink: React.FC = () => {
  const navigate = useNavigate();
  const { dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<'goals' | 'initiatives' | 'kpis'>('goals');

  // البيانات الوهمية للأهداف
  const [goals, setGoals] = useState<Goal[]>([
    { id: '1', number: '1', name: 'تحسين تجربة المستخدم', isChecked: true },
    { id: '2', number: '2', name: 'تعزيز الأمن السيبراني', isChecked: true },
    { id: '3', number: '3', name: 'تطوير البنيات الرقمية', isChecked: false },
  ]);

  // البيانات الوهمية للمبادرات
  const [initiatives, setInitiatives] = useState<Initiative[]>([
    { id: '1', number: '1', name: 'منصة الخدمات الموحدة', isChecked: true },
    { id: '2', number: '2', name: 'تطوير مراكز البيانات', isChecked: true },
    { id: '3', number: '3', name: 'برنامج تدريب الموظفين', isChecked: false },
  ]);

  // البيانات الوهمية لمؤشرات الأداء
  const [kpis, setKPIs] = useState<KPI[]>([
    { id: '1', number: '1', name: 'نسبة الخدمات الرقمية', isChecked: true },
    { id: '2', number: '2', name: 'عدد الأنظمة المدمجة', isChecked: false },
  ]);

  const handleGoalToggle = (id: string) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, isChecked: !goal.isChecked } : goal
      )
    );
  };

  const handleInitiativeToggle = (id: string) => {
    setInitiatives((prev) =>
      prev.map((initiative) =>
        initiative.id === id ? { ...initiative, isChecked: !initiative.isChecked } : initiative
      )
    );
  };

  const handleKPIToggle = (id: string) => {
    setKPIs((prev) =>
      prev.map((kpi) =>
        kpi.id === id ? { ...kpi, isChecked: !kpi.isChecked } : kpi
      )
    );
  };

  const tabs = [
    { id: 'goals', label: 'الأهداف', badgeCount: 2 },
    { id: 'initiatives', label: 'المبادرات', badgeCount: 2 },
    { id: 'kpis', label: 'مؤشرات الأداء (KPIs)', badgeCount: 1 },
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
                ربط خطة جديدة
              </h1>
            </div>

            {/* Left Side: Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                أضف مرفقات
                <span className="flex items-center justify-center w-5 h-5 bg-[#11383f] text-white rounded text-xs font-semibold">
                  2
                </span>
              </Button>
              <Button className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                إرسال الطلب
              </Button>
            </div>
          </div>
        </div>

        {/* معلومات إجبارية */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            معلومات إجبارية:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* العمود الأول - الحقول الثلاثة */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-right text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  اختر الخطة الرئيسية
                </label>
                <select className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                  <option>رؤية 2030</option>
                  <option>الخطة الثانية ستكون تساهم في التحول الوطني</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-right text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  النموذج المستخدم
                </label>
                <select className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                  <option>خطة التحول الرقمي 2025</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-right text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  اختيار نوع الربط
                </label>
                <select className="w-full px-4 py-2 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                  <option>وزارة كاملة</option>
                </select>
              </div>
            </div>

            {/* العمود الثاني - الملاحظات */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-right text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                ملاحظات (اختياري):
              </label>
              <textarea
                rows={9}
                className="w-full px-4 py-3 border border-[#e2e2e2] rounded-lg text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm focus:ring-2 focus:ring-[#11383f] focus:border-transparent resize-none"
                placeholder="الخطة الثانية تساهم في التحول الوطني"
              ></textarea>
            </div>
          </div>
        </div>

        {/* اختيار العناصر التي سيتم ربطها */}
        <div className="bg-white rounded-xl border border-[#e2e2e2]">
          {/* Header */}
          <div className="px-6 pt-6 pb-3">
            <h3 className="text-sm font-semibold text-gray-700 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              اختيار العناصر التي سيتم ربطها
            </h3>
          </div>
          
          {/* Tabs */}
          <div className="bg-[#f5f5f5] border-y border-[#e2e2e2] px-6">
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
                  {tab.badgeCount > 0 && (
                    <span className="bg-[#11383f] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {tab.badgeCount}
                    </span>
                  )}
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
                        الهدف
                      </th>
                      <th className="text-right py-4 px-4 text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-32">
                        رقم الهدف
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {goals.map((goal) => (
                      <tr key={goal.id} className={`border-b border-[#e2e2e2] transition-colors ${
                        goal.isChecked ? 'bg-[#f5f5f5]' : 'hover:bg-gray-50'
                      }`}>
                        <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {goal.name}
                        </td>
                        <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          <div className="flex items-center justify-between">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={goal.isChecked}
                                onChange={() => handleGoalToggle(goal.id)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#11383f]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#11383f]"></div>
                            </label>
                            <span className="font-medium">{goal.number}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'initiatives' && (
              <div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e2e2]">
                      <th className="text-right py-4 px-4 text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المبادرة
                      </th>
                      <th className="text-right py-4 px-4 text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-32">
                        رقم المبادرة
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {initiatives.map((initiative) => (
                      <tr key={initiative.id} className={`border-b border-[#e2e2e2] transition-colors ${
                        initiative.isChecked ? 'bg-[#f5f5f5]' : 'hover:bg-gray-50'
                      }`}>
                        <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {initiative.name}
                        </td>
                        <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          <div className="flex items-center justify-between">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={initiative.isChecked}
                                onChange={() => handleInitiativeToggle(initiative.id)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#11383f]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#11383f]"></div>
                            </label>
                            <span className="font-medium">{initiative.number}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'kpis' && (
              <div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e2e2]">
                      <th className="text-right py-4 px-4 text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المؤشر
                      </th>
                      <th className="text-right py-4 px-4 text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-32">
                        رقم المؤشر
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {kpis.map((kpi) => (
                      <tr key={kpi.id} className={`border-b border-[#e2e2e2] transition-colors ${
                        kpi.isChecked ? 'bg-[#f5f5f5]' : 'hover:bg-gray-50'
                      }`}>
                        <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {kpi.name}
                        </td>
                        <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          <div className="flex items-center justify-between">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={kpi.isChecked}
                                onChange={() => handleKPIToggle(kpi.id)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#11383f]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#11383f]"></div>
                            </label>
                            <span className="font-medium">{kpi.number}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
