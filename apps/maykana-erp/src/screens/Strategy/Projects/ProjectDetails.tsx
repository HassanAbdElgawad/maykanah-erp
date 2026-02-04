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
} from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';

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
          <div className="space-y-6">
            {/* Project Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                  الميزانية الكلية
                </div>
                <div className="text-2xl font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {projectData.budget}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                  الإنفاق الحالي
                </div>
                <div className="text-2xl font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {projectData.spent}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                  نسبة الإنجاز
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {projectData.progress}%
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#2CC28D] h-2 rounded-full"
                      style={{ width: `${projectData.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                  حالة المشروع
                </div>
                <div className="text-xl font-semibold text-green-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {projectData.status}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-4">
                معلومات المشروع
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                    رقم المشروع
                  </label>
                  <div className="text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {projectData.projectNumber}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                    اسم المشروع
                  </label>
                  <div className="text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {projectData.projectName}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                    مدير المشروع
                  </label>
                  <div className="text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {projectData.projectManager}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                    مدة المشروع
                  </label>
                  <div className="text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {projectData.duration}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                    تاريخ البداية
                  </label>
                  <div className="text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {projectData.startDate}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                    تاريخ النهاية
                  </label>
                  <div className="text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {projectData.endDate}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2">
                  وصف المشروع
                </label>
                <div className="text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] leading-relaxed">
                  {projectData.description}
                </div>
              </div>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-4">
              الجدول الزمني
            </h3>
            <div className="text-center py-12 text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              مخطط جانت سيتم إضافته هنا
            </div>
          </div>
        );

      case 'budget':
        return (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-4">
                تفاصيل الميزانية
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الميزانية المعتمدة
                  </span>
                  <span className="font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    200,000 ر.س
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المصروف الفعلي
                  </span>
                  <span className="font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    34,000 ر.س
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المتبقي
                  </span>
                  <span className="font-semibold text-green-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    166,000 ر.س
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    نسبة الإنفاق
                  </span>
                  <span className="font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    17%
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'outputs':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                المخرجات
              </h3>
              <Button className="bg-[#11383f] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                إضافة مخرج جديد
              </Button>
            </div>

            <div className="space-y-3">
              {[
                { title: 'نموذج أول للمنصة', status: 'مكتمل', progress: 100 },
                { title: 'نسخة تجريبية', status: 'قيد التنفيذ', progress: 65 },
                { title: 'لوحة تحكم للإدارة', status: 'لم يبدأ', progress: 0 },
              ].map((output, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {output.title}
                    </h4>
                    <span
                      className={`px-2 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                        output.status === 'مكتمل'
                          ? 'bg-green-100 text-green-700'
                          : output.status === 'قيد التنفيذ'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {output.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#2CC28D] h-2 rounded-full"
                        style={{ width: `${output.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {output.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'milestones':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                المعالم
              </h3>
              <Button className="bg-[#11383f] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                إضافة معلم جديد
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      اسم المعلم
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      التاريخ المستهدف
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      نسبة الإنجاز
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: 'إطلاق النسخة التجريبية',
                      date: '٢٠٢٥/٠٣/١٥',
                      status: 'مكتمل',
                      progress: 100,
                    },
                    {
                      name: 'تطوير لوحة التحكم',
                      date: '٢٠٢٥/٠٦/٣٠',
                      status: 'قيد التنفيذ',
                      progress: 70,
                    },
                    {
                      name: 'الاختبار النهائي',
                      date: '٢٠٢٥/٠٨/١٥',
                      status: 'لم يبدأ',
                      progress: 0,
                    },
                  ].map((milestone, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {milestone.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {milestone.date}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            milestone.status === 'مكتمل'
                              ? 'bg-green-100 text-green-700'
                              : milestone.status === 'قيد التنفيذ'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {milestone.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                            <div
                              className="bg-[#2CC28D] h-2 rounded-full"
                              style={{ width: `${milestone.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                            {milestone.progress}%
                          </span>
                        </div>
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
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                المهام
              </h3>
              <Button className="bg-[#11383f] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                إضافة مهمة جديدة
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      اسم المهمة
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      المسؤول
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تاريخ الاستحقاق
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      نسبة الإنجاز
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: 'تصميم واجهة المستخدم',
                      responsible: 'سارة محمد',
                      dueDate: '٢٠٢٥/٠٢/٢٠',
                      status: 'مكتمل',
                      progress: 100,
                    },
                    {
                      name: 'تطوير قاعدة البيانات',
                      responsible: 'خالد أحمد',
                      dueDate: '٢٠٢٥/٠٣/١٠',
                      status: 'قيد التنفيذ',
                      progress: 75,
                    },
                    {
                      name: 'اختبار الأداء',
                      responsible: 'فاطمة علي',
                      dueDate: '٢٠٢٥/٠٤/٠٥',
                      status: 'لم يبدأ',
                      progress: 0,
                    },
                  ].map((task, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {task.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {task.responsible}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {task.dueDate}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            task.status === 'مكتمل'
                              ? 'bg-green-100 text-green-700'
                              : task.status === 'قيد التنفيذ'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {task.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                            <div
                              className="bg-[#2CC28D] h-2 rounded-full"
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                            {task.progress}%
                          </span>
                        </div>
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
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                المخاطر
              </h3>
              <Button className="bg-[#11383f] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                إضافة خطر جديد
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الخطر
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      مستوى الخطورة
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      خطة المعالجة
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      risk: 'نقص الكفاءات التقنية',
                      severity: 'عالي',
                      mitigation: 'تدريب إضافي للفريق',
                      status: 'قيد المعالجة',
                    },
                    {
                      risk: 'تأخر توريد المعدات',
                      severity: 'متوسط',
                      mitigation: 'خطة بديلة للموردين',
                      status: 'تم المعالجة',
                    },
                    {
                      risk: 'ضعف أداء المورد',
                      severity: 'منخفض',
                      mitigation: 'ترقية البحث عن البدائل',
                      status: 'قيد المراقبة',
                    },
                  ].map((risk, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {risk.risk}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                            risk.severity === 'عالي'
                              ? 'bg-red-100 text-red-700'
                              : risk.severity === 'متوسط'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {risk.severity}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {risk.mitigation}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {risk.status}
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
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                المستندات
              </h3>
              <Button className="bg-[#11383f] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                رفع مستند جديد
              </Button>
            </div>

            <div className="space-y-3">
              {[
                {
                  name: 'خطة المشروع التفصيلية.pdf',
                  date: '٢٠٢٥/٠١/١٥',
                  size: '2.5 MB',
                  uploadedBy: 'أحمد الخالدي',
                },
                {
                  name: 'تقرير التقدم الشهري.xlsx',
                  date: '٢٠٢٥/٠٢/٠١',
                  size: '1.2 MB',
                  uploadedBy: 'سارة محمد',
                },
                {
                  name: 'مستندات الموافقات.docx',
                  date: '٢٠٢٥/٠١/٢٠',
                  size: '850 KB',
                  uploadedBy: 'خالد أحمد',
                },
              ].map((doc, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-gray-400" />
                    <div>
                      <div className="font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {doc.name}
                      </div>
                      <div className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {doc.size} • {doc.date} • بواسطة {doc.uploadedBy}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    تحميل
                  </Button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'meetings':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                الاجتماعات
              </h3>
              <Button className="bg-[#11383f] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                جدولة اجتماع جديد
              </Button>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'اجتماع بدء المشروع',
                  date: '٢٠٢٥/٠١/٠٥',
                  time: '١٠:٠٠ ص',
                  attendees: 12,
                  status: 'مكتمل',
                },
                {
                  title: 'مراجعة التقدم الشهري',
                  date: '٢٠٢٥/٠٢/١٥',
                  time: '١٤:٠٠ م',
                  attendees: 8,
                  status: 'مكتمل',
                },
                {
                  title: 'اجتماع تخطيط المرحلة القادمة',
                  date: '٢٠٢٥/٠٣/٢٠',
                  time: '١١:٠٠ ص',
                  attendees: 10,
                  status: 'مجدول',
                },
              ].map((meeting, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {meeting.title}
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                        meeting.status === 'مكتمل'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {meeting.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {meeting.date} • {meeting.time} • {meeting.attendees} مشارك
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'approvals':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-4">
              الموافقات
            </h3>

            <div className="space-y-4">
              {[
                {
                  stage: 'الموافقة المبدئية',
                  department: 'إدارة التخطيط',
                  responsible: 'مدير الإدارة',
                  date: '٢٠٢٥/٠١/٠٣',
                  status: 'موافق',
                },
                {
                  stage: 'موافقة الميزانية',
                  department: 'الشؤون المالية',
                  responsible: 'المدير المالي',
                  date: '٢٠٢٥/٠١/١٠',
                  status: 'موافق',
                },
                {
                  stage: 'الموافقة النهائية',
                  department: 'الإدارة العليا',
                  responsible: 'المدير التنفيذي',
                  date: '-',
                  status: 'قيد المراجعة',
                },
              ].map((approval, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1">
                        {approval.stage}
                      </div>
                      <div className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {approval.department} • {approval.responsible}
                      </div>
                    </div>
                    <div className="text-left">
                      <span
                        className={`px-2 py-1 text-xs rounded-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                          approval.status === 'موافق'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {approval.status}
                      </span>
                      <div className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mt-1">
                        {approval.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="border-b border-[#e2e2e2] bg-gray-50">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap border-b-2 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                      activeTab === tab.id
                        ? 'border-[#11383f] text-[#11383f] bg-white'
                        : 'border-transparent text-gray-600 hover:text-[#11383f] hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">{renderTabContent()}</div>
        </div>
      </div>
    </Layout>
  );
}
