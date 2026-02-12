import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowRight,
  Eye,
  Calendar,
  DollarSign,
  TrendingUp,
  Flag,
  CheckSquare,
  AlertTriangle,
  FileText,
  Users,
  CheckCircle,
  Zap,
  Slash,
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'overview', label: 'نظرة عامة', icon: Eye },
  { id: 'timeline', label: 'الجدول الزمني', icon: Calendar },
  { id: 'budget', label: 'الميزانية', icon: DollarSign },
  { id: 'outputs', label: 'المخرجات', icon: TrendingUp },
  { id: 'milestones', label: 'المعالم', icon: Flag },
  { id: 'tasks', label: 'المهام', icon: CheckSquare },
  { id: 'risks', label: 'المخاطر', icon: AlertTriangle },
  { id: 'documents', label: 'المستندات', icon: FileText },
  { id: 'meetings', label: 'الاجتماعات', icon: Users },
  { id: 'approvals', label: 'الموافقات', icon: CheckCircle },
];

export function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Sample project data
  const projectData = {
    projectNumber: '2025-PL-001',
    projectName: 'منصة التحول الرقمي الموحدة',
    projectManager: 'أحمد الخالدي',
    startDate: '٢٠٢٥/٠١/٠١',
    endDate: '٢٠٢٥/٠٩/٣٠',
    duration: '9 أشهر',
    progress: 58,
    budget: '200,000 ر.س',
    spent: '34,000 ر.س',
    status: 'نشط',
    description:
      'مشروع تطوير منصة رقمية موحدة لتحسين الخدمات الإدارية والإلكترونية ودعم التحول الرقمي الشامل.',
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4">
            {/* First Card - Basic Info (4 columns) */}
            <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    اسم المشروع
                  </div>
                  <div className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    منصة الخدمات الموحدة
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    رقم المشروع
                  </div>
                  <div className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    PRJ-001-2025
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    نوع المشروع
                  </div>
                  <div className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    التنفيذ
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    المرحلة الحالية
                  </div>
                  <div className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    1.5 M ₪
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card - Progress and Manager (4 columns) */}
            <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* نسبة التقدم */}
                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-3">
                    نسبة التقدم
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      55%
                    </span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#2CC28D] h-2 rounded-full" style={{ width: '55%' }} />
                    </div>
                  </div>
                </div>

                {/* نسبة الإنفاق */}
                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-3">
                    نسبة الإنفاق
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      55%
                    </span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#2CC28D] h-2 rounded-full" style={{ width: '55%' }} />
                    </div>
                  </div>
                </div>

                {/* الحالة */}
                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-3">
                    الحالة
                  </div>
                  <span className="inline-block px-4 py-1.5 bg-[#2CC28D] text-white rounded-full text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    نشط
                  </span>
                </div>

                {/* مدير المشروع */}
                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-3">
                    مدير المشروع
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center text-white text-base font-bold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      خ
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        خالد الذبيحي
                      </div>
                      <div className="text-xs text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        khalid@org.sa
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card - Goals and Scope (2 columns) */}
            <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Right Side - Project Goals */}
                <div>
                  <h3 className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-4">
                    أهداف المشروع
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2CC28D] text-lg font-bold mt-0.5">✓</span>
                      <span className="text-sm font-semibold text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        تطوير منصة حكومية موحدة 20 خدمة
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2CC28D] text-lg font-bold mt-0.5">✓</span>
                      <span className="text-sm font-semibold text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        تحسين تجربة للمستفيد
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2CC28D] text-lg font-bold mt-0.5">✓</span>
                      <span className="text-sm font-semibold text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        تقليل زمن الخدمة بنسبة 35%
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Left Side - Project Scope */}
                <div>
                  <h3 className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-4">
                    نطاق المشروع
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2CC28D] text-lg font-bold mt-0.5">✓</span>
                      <span className="text-sm font-semibold text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        تطوير النسخة المرجعية الأساسية
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2CC28D] text-lg font-bold mt-0.5">✓</span>
                      <span className="text-sm font-semibold text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        ربط 7 أنظمة حكومية
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2CC28D] text-lg font-bold mt-0.5">✓</span>
                      <span className="text-sm font-semibold text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        توفير لوحة تحكم للإدارة
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-4">
            {/* First Card - Project Timeline Info */}
            <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    تاريخ البداية
                  </div>
                  <div className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    01/03/2025
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    تاريخ الإنتهاء المتوقع
                  </div>
                  <div className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    30/12/2025
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    المدة
                  </div>
                  <div className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    9 أشهر
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card - Gantt Chart */}
            <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  المهام الزمنية الرئيسية
                </h3>

                {/* Legend */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                      <Slash size={14} className="text-red-600" />
                    </div>
                    <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      لم يبدأ
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Zap size={14} className="text-yellow-600" />
                    </div>
                    <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      جاري التنفيذ
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle size={14} className="text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      مكتملة
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline Grid */}
              <div className="overflow-x-auto">
                <div className="min-w-[900px]">
                  {/* Timeline Header - Dates */}
                  <div className="grid grid-cols-8 mb-4 pb-2 border-b border-[#e2e2e2]">
                    <div className="text-center border-l border-gray-200 px-2">
                      <div className="text-xs font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        01/03/2025
                      </div>
                      <div className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        البداية
                      </div>
                    </div>
                    <div className="text-center border-l border-gray-200 px-2">
                      <div className="text-xs font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        15/04/2025
                      </div>
                      <div className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المرحلة
                      </div>
                    </div>
                    <div className="text-center border-l border-gray-200 px-2">
                      <div className="text-xs font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        20/04/2025
                      </div>
                      <div className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المرحلة
                      </div>
                    </div>
                    <div className="text-center border-l border-gray-200 px-2">
                      <div className="text-xs font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        20/05/2025
                      </div>
                      <div className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المرحلة
                      </div>
                    </div>
                    <div className="text-center border-l border-gray-200 px-2">
                      <div className="text-xs font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        25/05/2025
                      </div>
                      <div className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المرحلة
                      </div>
                    </div>
                    <div className="text-center border-l border-gray-200 px-2">
                      <div className="text-xs font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        30/09/2025
                      </div>
                      <div className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المرحلة
                      </div>
                    </div>
                    <div className="text-center border-l border-gray-200 px-2">
                      <div className="text-xs font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        01/10/2025
                      </div>
                      <div className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        البداية
                      </div>
                    </div>
                    <div className="text-center border-l border-gray-200 px-2">
                      <div className="text-xs font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        30/11/2025
                      </div>
                      <div className="text-xs text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        النهاية
                      </div>
                    </div>
                  </div>

                  {/* Timeline Tasks */}
                  <div className="relative">
                    {/* Vertical Grid Lines */}
                    <div className="absolute inset-0 grid grid-cols-8 pointer-events-none">
                      <div className="border-l border-gray-200"></div>
                      <div className="border-l border-gray-200"></div>
                      <div className="border-l border-gray-200"></div>
                      <div className="border-l border-gray-200"></div>
                      <div className="border-l border-gray-200"></div>
                      <div className="border-l border-gray-200"></div>
                      <div className="border-l border-gray-200"></div>
                      <div className="border-l border-gray-200"></div>
                    </div>

                    {/* Tasks Map */}
                    {[
                      {
                        name: 'إطلاق التجريبي',
                        position: '5%',
                        width: '18%',
                        bgColor: '#5BB4E8',
                        textColor: 'text-white',
                        image: 12,
                        icon: CheckCircle,
                        iconColor: '#2CC28D',
                      },
                      {
                        name: 'الاختبارات',
                        position: '28%',
                        width: '22%',
                        bgColor: '#5BB4E8',
                        textColor: 'text-white',
                        image: 33,
                        icon: CheckCircle,
                        iconColor: '#2CC28D',
                      },
                      {
                        name: 'التطوير المرجعي',
                        position: '40%',
                        width: '25%',
                        bgColor: '#E8F8EE',
                        textColor: 'text-[#2CC28D]',
                        image: 68,
                        icon: Zap,
                        iconColor: '#F4A72D',
                      },
                      {
                        name: 'التصميم النهائي',
                        position: '55%',
                        width: '28%',
                        bgColor: '#FFE8F5',
                        textColor: 'text-[#FF99CC]',
                        image: 51,
                        icon: CheckCircle,
                        iconColor: '#2CC28D',
                      },
                      {
                        name: 'التحليل والمتطلبات',
                        position: '2%',
                        width: '20%',
                        bgColor: '#E3F5FF',
                        textColor: 'text-[#5BB4E8]',
                        image: 56,
                        icon: Slash,
                        iconColor: '#E53E3E',
                      },
                    ].map((task, index) => (
                      <div key={index} className="relative h-16 border-b border-gray-200">
                        <div
                          className="absolute top-1/2 -translate-y-1/2 h-12 rounded-full flex items-center justify-between px-2"
                          style={{
                            right: task.position,
                            width: task.width,
                            backgroundColor: task.bgColor,
                          }}
                        >
                          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                            <img
                              src={`https://i.pravatar.cc/150?img=${task.image}`}
                              alt="Member"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span
                            className={`text-sm font-semibold ${task.textColor} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
                          >
                            {task.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                              <task.icon size={20} style={{ color: task.iconColor }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'budget':
        return (
          <div className="space-y-4">
            {/* First Card - Budget Summary */}
            <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    إجمالي الميزانية المعتمدة
                  </div>
                  <div className="text-xl font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center justify-center gap-1">
                    1,200,000
                    <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    المصروف حتى الآن
                  </div>
                  <div className="text-xl font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center justify-center gap-1">
                    204,000
                    <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                    المتبقي
                  </div>
                  <div className="text-xl font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center justify-center gap-1">
                    996,000
                    <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card - Budget Items Table */}
            <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        البند
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المبلغ (ريال)
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الحالة
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { item: 'ميزانية التطوير', amount: '800,000', status: 'جاري الصرف', statusType: 'yellow' },
                      { item: 'ميزانية الاختبارات', amount: '150,000', status: 'لم تُصرف', statusType: 'green' },
                      { item: 'دعم الخوادم', amount: '120,000', status: 'جاري الصرف', statusType: 'yellow' },
                      { item: 'تكاليف التدريب', amount: '80,000', status: 'لم تُصرف', statusType: 'green' },
                      { item: 'ميزانية الطوارئ', amount: '50,000', status: 'لم تُستخدم', statusType: 'red' },
                    ].map((budgetItem, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {budgetItem.item}
                        </td>
                        <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {budgetItem.amount}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className={`inline-block px-3 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                              budgetItem.statusType === 'yellow'
                                ? 'bg-yellow-100 text-yellow-700'
                                : budgetItem.statusType === 'green'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {budgetItem.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'outputs':
        return (
          <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      المخرج
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الوصف
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      output: 'الوثيقة الأولية للتطوير',
                      description: 'المستند التقني للمنصة',
                      status: 'مكتمل',
                      statusType: 'green',
                    },
                    {
                      output: 'النسخة الأولية (Prototype)',
                      description: 'شاشة الدخول - صفحة الخدمات',
                      status: 'مكتمل',
                      statusType: 'green',
                    },
                    {
                      output: 'API Gateway',
                      description: 'بوابة ربط الأنظمة',
                      status: 'جاري التنفيذ',
                      statusType: 'yellow',
                    },
                    {
                      output: 'لوحة التحكم',
                      description: 'رسمية Dashboard',
                      status: 'لم يبدأ',
                      statusType: 'red',
                    },
                    {
                      output: 'دليل المستخدم',
                      description: 'دليل الوظائف والتشغيد',
                      status: 'لم يبدأ',
                      statusType: 'red',
                    },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {item.output}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {item.description}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-3 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            item.statusType === 'green'
                              ? 'bg-green-100 text-green-700'
                              : item.statusType === 'yellow'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'milestones':
        return (
          <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      المعلم
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      التاريخ
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: 'اعتماد المتطلبات',
                      date: '15/04/2025',
                      status: 'مكتمل',
                      statusType: 'green',
                    },
                    {
                      name: 'الانتهاء من التصميم النهائي',
                      date: '20/05/2025',
                      status: 'مكتمل',
                      statusType: 'green',
                    },
                    {
                      name: 'تسليم النسخة الأولية',
                      date: '30/08/2025',
                      status: 'جاري التنفيذ',
                      statusType: 'yellow',
                    },
                    {
                      name: 'اختبار التكامل',
                      date: '15/11/2025',
                      status: 'لم يبدأ',
                      statusType: 'red',
                    },
                    {
                      name: 'الإطلاق التجريبي',
                      date: '30/12/2025',
                      status: 'لم يبدأ',
                      statusType: 'red',
                    },
                  ].map((milestone, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {milestone.name}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {milestone.date}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-3 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            milestone.statusType === 'green'
                              ? 'bg-green-100 text-green-700'
                              : milestone.statusType === 'yellow'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {milestone.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'tasks':
        return (
          <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      المهمة
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      المسؤول
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      التقدم
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      task: 'إعداد واجهة الدخول',
                      responsible: 'أحمد',
                      image: 12,
                      progress: 80,
                      status: 'نشط',
                      statusType: 'green',
                      progressColor: 'bg-[#2CC28D]',
                    },
                    {
                      task: 'الانتهاء من التصميم النهائي',
                      responsible: 'فريق التطوير',
                      image: 33,
                      progress: 50,
                      status: 'نشط',
                      statusType: 'yellow',
                      progressColor: 'bg-[#F4A72D]',
                    },
                    {
                      task: 'تسليم النسخة الأولية',
                      responsible: 'سامر',
                      image: 56,
                      progress: 100,
                      status: 'مكتمل',
                      statusType: 'green',
                      progressColor: 'bg-[#2CC28D]',
                    },
                    {
                      task: 'اختبار التكامل',
                      responsible: 'عادل',
                      image: 51,
                      progress: 10,
                      status: 'متأخر',
                      statusType: 'red',
                      progressColor: 'bg-[#E53E3E]',
                    },
                    {
                      task: 'الإطلاق التجريبي',
                      responsible: 'فريق الجودة',
                      image: 68,
                      progress: 0,
                      status: 'لم يبدأ',
                      statusType: 'gray',
                      progressColor: 'bg-gray-400',
                    },
                  ].map((task, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {task.task}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <img
                              src={`https://i.pravatar.cc/150?img=${task.image}`}
                              alt={task.responsible}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                            {task.responsible}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-3">
                          <div className="flex-1 max-w-[120px] bg-gray-200 rounded-full h-2">
                            <div
                              className={`${task.progressColor} h-2 rounded-full`}
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[40px]">
                            {task.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-3 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            task.statusType === 'green'
                              ? 'bg-green-100 text-green-700'
                              : task.statusType === 'yellow'
                                ? 'bg-yellow-100 text-yellow-700'
                                : task.statusType === 'red'
                                  ? 'bg-red-100 text-red-700'
                                  : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {task.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'risks':
        return (
          <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الخطر
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      مستوى الخطورة
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      التأثير
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      خطة المعالجة
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      risk: 'تأخير الأنشطة',
                      severity: 'عالي',
                      severityType: 'red',
                      impact: 'تأخير الإطلاق',
                      mitigation: 'زيادة عدد المطورين',
                      status: 'مغلق',
                      statusType: 'green',
                    },
                    {
                      risk: 'نقص الموظفين من الخبرات الحكومية',
                      severity: 'متوسط',
                      severityType: 'yellow',
                      impact: 'تأخير التطوير',
                      mitigation: 'التواصل المباشر',
                      status: 'جاري المعالجة',
                      statusType: 'yellow',
                    },
                    {
                      risk: 'ضعف أداء السيرفر',
                      severity: 'منخفض',
                      severityType: 'green',
                      impact: 'بطء النظام',
                      mitigation: 'ترقية الخادم',
                      status: 'منتهي',
                      statusType: 'green',
                    },
                  ].map((risk, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {risk.risk}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-3 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            risk.severityType === 'red'
                              ? 'bg-red-100 text-red-700'
                              : risk.severityType === 'yellow'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {risk.severity}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {risk.impact}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {risk.mitigation}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-3 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            risk.statusType === 'green'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {risk.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      المستند
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      النوع
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الرفع بواسطة
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      التاريخ
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تحميل
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: 'تأخير الأنشطة',
                      type: 'PDF',
                      uploadedBy: 'أحمد',
                      image: 12,
                      date: '10/03/2025',
                    },
                    {
                      name: 'نقص الموظفين من الخبرات الحكومية',
                      type: 'DOCX',
                      uploadedBy: 'عادل',
                      image: 51,
                      date: '10/03/2025',
                    },
                    {
                      name: 'ضعف أداء السيرفر',
                      type: 'PDF',
                      uploadedBy: 'عادل',
                      image: 51,
                      date: '10/03/2025',
                    },
                  ].map((doc, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {doc.name}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {doc.type}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <img
                              src={`https://i.pravatar.cc/150?img=${doc.image}`}
                              alt={doc.uploadedBy}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                            {doc.uploadedBy}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {doc.date}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center mx-auto transition-colors">
                          <svg
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'meetings':
        return (
          <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      التاريخ
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      النوع
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الموضوع
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      المحضر
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      للتحسن
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      date: '12/04/2025',
                      type: 'اجتماع تحليل',
                      subject: 'مراجعة المتطلبات',
                      attendees: 'الفريق + الميبل',
                      improvement: 'تم اعتماد المتطلبات',
                    },
                    {
                      date: '12/04/2025',
                      type: 'اجتماع فني',
                      subject: 'مناقشة التصميم',
                      attendees: 'فريق التطوير',
                      improvement: 'اعتماد التصميم',
                    },
                    {
                      date: '12/04/2025',
                      type: 'متابعة تنفيذ',
                      subject: 'تقديم التطوير',
                      attendees: 'الفريق',
                      improvement: 'للمرجع ضمن الجدولة',
                    },
                  ].map((meeting, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {meeting.date}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {meeting.type}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {meeting.subject}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {meeting.attendees}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {meeting.improvement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'approvals':
        return (
          <div className="bg-white border border-[#e2e2e2] rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      العملية
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الشخص المسؤول
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      التاريخ
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      operation: 'اعتماد ميزانية المشروع',
                      responsible: 'المدير المالي',
                      date: '20/03/2025',
                      status: 'منتهي',
                      statusType: 'green',
                    },
                    {
                      operation: 'اعتماد الموازنة',
                      responsible: 'الشؤون المالية',
                      date: '01/04/2025',
                      status: 'منتهي',
                      statusType: 'green',
                    },
                    {
                      operation: 'الموافقة على الإطلاق',
                      responsible: 'مدير عام العمليات',
                      date: '-----',
                      status: 'بانتظار الاعتماد',
                      statusType: 'yellow',
                    },
                  ].map((approval, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {approval.operation}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {approval.responsible}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {approval.date}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-3 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            approval.statusType === 'green'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {approval.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-3">
            <div className="relative w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg">
              <button
                onClick={() => navigate('/strategy/projects')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {projectData.projectName}
              </h1>
              <div className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {projectData.projectNumber}
              </div>
            </div>
          </div>

          <Button
            onClick={() => navigate(`/strategy/projects/${id}/edit`)}
            className="bg-[#11383f] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
          >
            تعديل المشروع
          </Button>
        </div>

        {/* Tabs */}
        <div className="bg-[rgba(9,55,56,0.10)] rounded-xl px-[1rem] border-[#e2e2e2]">
          <div className="flex">
            {tabs.map((tab) => {
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 whitespace-nowrap border-b-[3px]  transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                    activeTab === tab.id
                      ? 'border-[#11383f] text-[#11383f] '
                      : 'border-transparent text-gray-600 hover:text-[#11383f]'
                  }`}
                >
                  <span className="text-[.75rem]">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-4">{renderTabContent()}</div>
      </div>
    </Layout>
  );
}
