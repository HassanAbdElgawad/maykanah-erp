import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ChevronRight, Trash2, Building, MessageSquare, Lightbulb } from 'lucide-react';

type TabType = 'summary' | 'info' | 'framework' | 'goals' | 'initiatives' | 'kpis' | 'approval';

interface GoalRow {
  id: number;
  strategic: string;
  description: string;
  alignment: string;
}

interface InitiativeRow {
  id: number;
  name: string;
  type: string;
  start: string;
  end: string;
  budget: string;
  outputs: string;
  responsible: string;
  status: string;
  progress: string;
}

interface KpiRow {
  id: number;
  indicator: string;
  frequency: string;
  target: string;
  type: string;
  current: string;
  status: string;
}

interface ApprovalRow {
  id: number;
  stage: string;
  department: string;
  responsible: string;
  status: string;
  date: string;
}

export function StrategicPlanDetails() {
  const navigate = useNavigate();
  const { dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('summary');

  const [goalsRows, setGoalsRows] = useState<GoalRow[]>([
    { id: 1, strategic: 'تعزيز التحول الرقمي في الخدمات', description: 'رفعه إعمليات الداخلية والخارجية وتحسين تجربة المستخدم', alignment: 'رؤية 2030 - حكومة رقمية' },
    { id: 2, strategic: 'وضع كادر إدارة الخدمات الرقمية', description: 'تدريب وتأهيل الكوادر على التقنيات الحديثة وأتمتة بنية العمل', alignment: 'رؤية 2030 - تنمية القدرات' },
    { id: 3, strategic: 'تعزيز أمن المعلومات والبيانات', description: 'تطبيق معايير أمن المعلومات لضمان سرية وسلامة البيانات', alignment: 'رؤية 2030 - حكومة رقمية' },
  ]);
  const [goalsRowCount, setGoalsRowCount] = useState(goalsRows.length);

  const [initiativesRows, setInitiativesRows] = useState<InitiativeRow[]>([
    { id: 1, name: 'تطوير منصة الخدمات الموحدة', type: 'مشروع شامل', start: '01/03/2025', end: '30/12/2025', budget: '1,200,000 ريال', outputs: 'إطلاق منصة موحدة تضم 20 خدمة', responsible: 'خالد الديومي', status: 'قيد التنفيذ', progress: '50%' },
    { id: 2, name: 'نظام إدارة الوثائق الإلكترونية', type: 'مشروع تقني', start: '15/04/2025', end: '15/09/2025', budget: '800,000 ريال', outputs: 'نظام لأرشفة ومشاركة الوثائق', responsible: 'فاطمة الغامدي', status: 'في الإنتظار', progress: '0%' },
    { id: 3, name: 'برنامج التوعية بأمن المعلومات', type: 'برنامج تدريبي', start: '01/06/2025', end: '30/11/2025', budget: '300,000 ريال', outputs: 'تدريب 500 موظف على أمن المعلومات', responsible: 'أحمد الحربي', status: 'مخطط', progress: '0%' },
  ]);
  const [initiativesRowCount, setInitiativesRowCount] = useState(initiativesRows.length);

  const [kpisRows, setKpisRows] = useState<KpiRow[]>([
    { id: 1, indicator: 'نسبة إنجاز المبادرات', frequency: 'ربع سنوي', target: '75%', type: 'نسبة', current: '50%', status: 'تحت المتابعة' },
    { id: 2, indicator: 'درجة رضا المستفيدين', frequency: 'سنوي', target: '85%', type: 'نسبة', current: '78%', status: 'قيد التحسين' },
    { id: 3, indicator: 'عدد الخدمات الرقمية المتاحة', frequency: 'شهري', target: '20 خدمة', type: 'عدد', current: '12 خدمة', status: 'جاري العمل' },
  ]);
  const [kpisRowCount, setKpisRowCount] = useState(kpisRows.length);

  const [approvalRows, setApprovalRows] = useState<ApprovalRow[]>([
    { id: 1, stage: 'المراجعة المبدئية', department: 'إدارة التخطيط الاستراتيجي', responsible: 'محمد الصالح', status: 'تمت الموافقة', date: '15/01/2025' },
    { id: 2, stage: 'اعتماد الإدارة التنفيذية', department: 'الإدارة التنفيذية', responsible: 'نورة العتيبي', status: 'تمت الموافقة', date: '20/01/2025' },
    { id: 3, stage: 'الموافقة النهائية', department: 'مجلس الإدارة', responsible: 'عبدالله المانع', status: 'تمت الموافقة', date: '25/01/2025' },
  ]);
  const [approvalRowCount, setApprovalRowCount] = useState(approvalRows.length);

  const addGoalRows = () => {
    const newRows: GoalRow[] = [];
    for (let i = 0; i < goalsRowCount; i++) {
      newRows.push({
        id: goalsRows.length + i + 1,
        strategic: '',
        description: '',
        alignment: '',
      });
    }
    setGoalsRows([...goalsRows, ...newRows]);
  };

  const addInitiativeRows = () => {
    const newRows: InitiativeRow[] = [];
    for (let i = 0; i < initiativesRowCount; i++) {
      newRows.push({
        id: initiativesRows.length + i + 1,
        name: '',
        type: '',
        start: '',
        end: '',
        budget: '',
        outputs: '',
        responsible: '',
        status: '',
        progress: '',
      });
    }
    setInitiativesRows([...initiativesRows, ...newRows]);
  };

  const addKpiRows = () => {
    const newRows: KpiRow[] = [];
    for (let i = 0; i < kpisRowCount; i++) {
      newRows.push({
        id: kpisRows.length + i + 1,
        indicator: '',
        frequency: '',
        target: '',
        type: '',
        current: '',
        status: '',
      });
    }
    setKpisRows([...kpisRows, ...newRows]);
  };

  const addApprovalRows = () => {
    const newRows: ApprovalRow[] = [];
    for (let i = 0; i < approvalRowCount; i++) {
      newRows.push({
        id: approvalRows.length + i + 1,
        stage: '',
        department: '',
        responsible: '',
        status: '',
        date: '',
      });
    }
    setApprovalRows([...approvalRows, ...newRows]);
  };

  const deleteGoalRow = (id: number) => {
    setGoalsRows(goalsRows.filter(row => row.id !== id));
  };

  const deleteInitiativeRow = (id: number) => {
    setInitiativesRows(initiativesRows.filter(row => row.id !== id));
  };

  const deleteKpiRow = (id: number) => {
    setKpisRows(kpisRows.filter(row => row.id !== id));
  };

  const deleteApprovalRow = (id: number) => {
    setApprovalRows(approvalRows.filter(row => row.id !== id));
  };

  const tabs = [
    { id: 'summary', label: 'الملخص العام' },
    { id: 'info', label: 'معلومات عامة' },
    { id: 'framework', label: 'الإطار العلوي' },
    { id: 'goals', label: 'الأهداف الاستراتيجية' },
    { id: 'initiatives', label: 'المبادرات' },
    { id: 'kpis', label: 'مؤشرات الأداء العامة' },
    { id: 'approval', label: 'سير الاعتماد' },
  ];

  return (
    <Layout>
      <div className="space-y-4" dir={dir}>
        {/* Header */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#0e0d24]" />
              </button>
              <h1 className="text-xl font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                تفاصيل خطة - PL-001-2025
              </h1>
            </div>

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

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-[#e2e2e2]">
          <div className="bg-[#f5f5f5] border-b border-[#e2e2e2] px-6 overflow-x-auto">
            <div className="flex gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`py-3 px-2 relative text-sm whitespace-nowrap [font-family:'IBM_Plex_Sans_Arabic',Helvetica] transition-colors ${
                    activeTab === tab.id
                      ? 'text-[#11383f] font-semibold'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#11383f]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* الملخص العام */}
            {activeTab === 'summary' && (
              <div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e2e2]">
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المؤشر
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        القيمة الحالية
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المستهدف
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الحالة
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e2e2e2]">
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        نسبة التقدم الإجمالي للخطة
                      </td>
                      <td className="py-4 px-4 text-sm font-semibold text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" style={{ color: '#F00' }}>
                        35%
                      </td>
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        100%
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                          قيد التنفيذ
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#e2e2e2]">
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        عدد المبادرات المستخدمة
                      </td>
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        2
                      </td>
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        ----
                      </td>
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        ----
                      </td>
                    </tr>
                    <tr className="border-b border-[#e2e2e2]">
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        مستوى رضا المستخدمين
                      </td>
                      <td className="py-4 px-4 text-sm font-semibold text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" style={{ color: '#2CC28D' }}>
                        78%
                      </td>
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        90%
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          جيد
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        آخر تحديث
                      </td>
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        20 / 11 / 2025
                      </td>
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        ----
                      </td>
                      <td className="py-4 px-4 text-sm text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        ----
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* معلومات عامة */}
            {activeTab === 'info' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      رقم الخطة
                    </label>
                    <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      2025-PL-001
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      اسم الخطة
                    </label>
                    <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      خطة التحول الرقمي 2025-2027
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      النموذج المستخدم
                    </label>
                    <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      بطاقة الأداء المتوازن (Balanced Scorecard)
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      التوجه الوطني أو السياسة أو الرؤية
                    </label>
                    <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      رؤية المملكة 2030 – محور الحكومة الرقمية
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      سنة البداية
                    </label>
                    <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      2025
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      سنة النهاية
                    </label>
                    <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      2027
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      مدير الخطة
                    </label>
                    <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      م. أحمد العرفاني
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الفريق المسؤول
                    </label>
                    <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      خالد الديومي – حق العمدالله – سارة الباجري
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الحالة الحالية
                    </label>
                    <span className="inline-flex px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      ينتظر الاعتماد
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تاريخ الإنشاء
                    </label>
                    <p className="text-base font-semibold text-[#0e0d24] text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      11 / 11 / 2025
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* الإطار العلوي */}
            {activeTab === 'framework' && (
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#0e0d24] mb-2 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الرؤية
                    </h3>
                    <p className="text-sm text-gray-700 text-right leading-relaxed [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      أن تكون المؤسسة رائدة في التحول الرقمي الحكومي وتعزيز الكفاءة التشغيلية في الخدمات العامة.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#0e0d24] mb-2 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الرسالة
                    </h3>
                    <p className="text-sm text-gray-700 text-right leading-relaxed [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تمكين الشخصات الحكومية من خلال تطوير بنية رقمية متكاملة، وتبسيط الإجراءات، وتوفير الخدمات الشخصية الرقمية.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#0e0d24] mb-2 text-right [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      القيم
                    </h3>
                    <p className="text-sm text-gray-700 text-right leading-relaxed [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الابتكار – الشفافية – العمل الجماعي – الاستدامة – التميز
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* الأهداف الاستراتيجية */}
            {activeTab === 'goals' && (
              <div>
                <table className="w-full mb-4">
                  <thead>
                    <tr className="border-b border-[#e2e2e2]">
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الهدف الاستراتيجي
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الوصف المختصر
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        التوجه الربط
                      </th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-[#0e0d24] w-16"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e2e2e2] hover:bg-gray-50">
                      <td className="py-2 px-4 border-r border-[#e2e2e2]">
                        <input
                          type="text"
                          defaultValue="تعزيز التحول الرقمي في الخدمات"
                                          className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </td>
                      <td className="py-2 px-4 border-r border-[#e2e2e2]">
                        <input
                          type="text"
                          defaultValue="رفعه إعمليات الداخلية والخارجية وتحسين تجربة المستخدم"
                          className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </td>
                      <td className="py-2 px-4 border-r border-[#e2e2e2]">
                        <input
                          type="text"
                          defaultValue="رؤية 2030 - حكومة رقمية"
                          className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </td>
                      <td className="py-2 px-4 text-center">
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-[#e2e2e2] hover:bg-gray-50">
                      <td className="py-2 px-4 border-r border-[#e2e2e2]">
                        <input
                          type="text"
                          defaultValue="وضع كادر إدارة الخدمات الرقمية"
                          className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </td>
                      <td className="py-2 px-4 border-r border-[#e2e2e2]">
                        <input
                          type="text"
                          defaultValue="تدريب وتأهيل الكوادر على التقنيات الحديثة وأتمتة بنية العمل"
                          className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </td>
                      <td className="py-2 px-4 border-r border-[#e2e2e2]">
                        <input
                          type="text"
                          defaultValue="رؤية 2030 - تنمية القدرات"
                          className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </td>
                      <td className="py-2 px-4 text-center">
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-r border-[#e2e2e2]">
                        <input
                          type="text"
                          defaultValue="تعزيز أمن المعلومات والبيانات"
                          className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </td>
                      <td className="py-2 px-4 border-r border-[#e2e2e2]">
                        <input
                          type="text"
                          defaultValue="تطبيق معايير أمن المعلومات لضمان سرية وسلامة البيانات"
                          className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </td>
                      <td className="py-2 px-4 border-r border-[#e2e2e2]">
                        <input
                          type="text"
                          defaultValue="رؤية 2030 - حكومة رقمية"
                          className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </td>
                      <td className="py-2 px-4 text-center">
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                    {goalsRows.slice(3).map((row) => (
                      <tr key={row.id} className="border-b border-[#e2e2e2] hover:bg-gray-50">
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input
                            type="text"
                            defaultValue={row.strategic}
                            className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input
                            type="text"
                            defaultValue={row.description}
                            className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input
                            type="text"
                            defaultValue={row.alignment}
                            className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                          />
                        </td>
                        <td className="py-2 px-4 text-center">
                          <button 
                            onClick={() => deleteGoalRow(row.id)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors text-red-500"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-center justify-start gap-4 mt-4">
                  <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    أسطر في الجدول
                  </span>
                  <input
                    type="number"
                    value={goalsRowCount}
                    onChange={(e) => setGoalsRowCount(Number(e.target.value))}
                    className="w-16 px-2 py-1 text-sm font-medium text-[#0e0d24] text-center border border-[#e2e2e2] rounded focus:outline-none focus:border-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    min="1"
                  />
                  <Button 
                    onClick={addGoalRows}
                    className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    أضف
                  </Button>
                </div>
              </div>
            )}

            {/* المبادرات */}
            {activeTab === 'initiatives' && (
              <div>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#e2e2e2]">
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[150px]">
                          اسم المبادرة
                        </th>
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          النوع
                        </th>
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          بداية
                        </th>
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          نهاية
                        </th>
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          الموازنة
                        </th>
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          المخرجات
                        </th>
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          المسؤول
                        </th>
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          الحالة
                        </th>
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          نسبة التقدم
                        </th>
                        <th className="text-center py-4 px-4 text-sm font-semibold text-[#0e0d24] w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {initiativesRows.map((row) => (
                        <tr key={row.id} className="border-b border-[#e2e2e2] hover:bg-gray-50">
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input type="text" defaultValue={row.name} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input type="text" defaultValue={row.type} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input type="text" defaultValue={row.start} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input type="text" defaultValue={row.end} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input type="text" defaultValue={row.budget} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input type="text" defaultValue={row.outputs} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input type="text" defaultValue={row.responsible} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input type="text" defaultValue={row.status} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input type="text" defaultValue={row.progress} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                          </td>
                          <td className="py-2 px-4 text-center">
                            <button 
                              onClick={() => deleteInitiativeRow(row.id)}
                              className="p-1 hover:bg-gray-100 rounded transition-colors text-red-500"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-start gap-4 mt-4">
                  <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    أسطر في الجدول
                  </span>
                  <input
                    type="number"
                    value={initiativesRowCount}
                    onChange={(e) => setInitiativesRowCount(Number(e.target.value))}
                    className="w-16 px-2 py-1 text-sm font-medium text-[#0e0d24] text-center border border-[#e2e2e2] rounded focus:outline-none focus:border-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    min="1"
                  />
                  <Button 
                    onClick={addInitiativeRows}
                    className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    أضف
                  </Button>
                </div>
              </div>
            )}

            {/* مؤشرات الأداء العامة */}
            {activeTab === 'kpis' && (
              <div>
                <table className="w-full mb-4">
                  <thead>
                    <tr className="border-b border-[#e2e2e2]">
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[200px]">
                        المؤشر
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        التكرار
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        القيمة المستهدفة
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        النوع
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[160px]">
                        القيمة الحالية
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الحالة الحالية
                      </th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-[#0e0d24] w-16"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {kpisRows.map((row) => (
                      <tr key={row.id} className="border-b border-[#e2e2e2] hover:bg-gray-50">
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.indicator} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.frequency} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.target} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.type} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.current} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.status} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 text-center">
                          <button 
                            onClick={() => deleteKpiRow(row.id)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors text-red-500"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-center justify-start gap-4 mt-4">
                  <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    أسطر في الجدول
                  </span>
                  <input
                    type="number"
                    value={kpisRowCount}
                    onChange={(e) => setKpisRowCount(Number(e.target.value))}
                    className="w-16 px-2 py-1 text-sm font-medium text-[#0e0d24] text-center border border-[#e2e2e2] rounded focus:outline-none focus:border-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    min="1"
                  />
                  <Button 
                    onClick={addKpiRows}
                    className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    أضف
                  </Button>
                </div>
              </div>
            )}

            {/* سير الاعتماد */}
            {activeTab === 'approval' && (
              <div>
                <table className="w-full mb-4">
                  <thead>
                    <tr className="border-b border-[#e2e2e2]">
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        المرحلة
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الجهة
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        للمسؤول
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الحالة
                      </th>
                      <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        تاريخ
                      </th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-[#0e0d24] w-16"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {approvalRows.map((row) => (
                      <tr key={row.id} className="border-b border-[#e2e2e2] hover:bg-gray-50">
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.stage} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.department} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.responsible} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.status} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 border-r border-[#e2e2e2]">
                          <input type="text" defaultValue={row.date} className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" />
                        </td>
                        <td className="py-2 px-4 text-center">
                          <button 
                            onClick={() => deleteApprovalRow(row.id)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors text-red-500"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-center justify-start gap-4 mt-4">
                  <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    أسطر في الجدول
                  </span>
                  <input
                    type="number"
                    value={approvalRowCount}
                    onChange={(e) => setApprovalRowCount(Number(e.target.value))}
                    className="w-16 px-2 py-1 text-sm font-medium text-[#0e0d24] text-center border border-[#e2e2e2] rounded focus:outline-none focus:border-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    min="1"
                  />
                  <Button 
                    onClick={addApprovalRows}
                    className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    أضف
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
