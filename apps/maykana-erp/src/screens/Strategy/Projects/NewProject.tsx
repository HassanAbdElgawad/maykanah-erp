import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Trash2 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
  getNewProjectSteps,
  getNewProjectInitialRisks,
  getNewProjectInitialApprovalStages,
  type NewProjectRisk,
  type NewProjectApprovalStage,
} from '@/data/strategy/new-project.data';

export function NewProject() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = getNewProjectSteps();
  const [risks, setRisks] = useState<NewProjectRisk[]>(() => getNewProjectInitialRisks());
  const [risksRowCount, setRisksRowCount] = useState(10);

  const [approvalStages, setApprovalStages] = useState<NewProjectApprovalStage[]>(
    () => getNewProjectInitialApprovalStages()
  );
  const [approvalRowCount, setApprovalRowCount] = useState(10);

  const [formData, setFormData] = useState({
    // Step 1
    projectNumber: '2025-PL-001',
    projectName: '',
    projectDescription: '',
    projectManager: '',
    projectTeam: '',
    startDate: '',
    endDate: '',
    projectDuration: '9 أشهر',
    // Step 2
    totalBudget: '',
    currentCost: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addRiskRows = () => {
    const newRisks: NewProjectRisk[] = [];
    const startId = risks.length > 0 ? Math.max(...risks.map((r) => r.id)) + 1 : 1;
    for (let i = 0; i < risksRowCount; i++) {
      newRisks.push({
        id: startId + i,
        risk: '',
        severity: '',
        mitigation: '',
      });
    }
    setRisks([...risks, ...newRisks]);
  };

  const removeRisk = (id: number) => {
    setRisks(risks.filter((risk) => risk.id !== id));
  };

  const updateRisk = (id: number, field: keyof NewProjectRisk, value: string) => {
    setRisks(risks.map((risk) => (risk.id === id ? { ...risk, [field]: value } : risk)));
  };

  const addApprovalRows = () => {
    const newStages: NewProjectApprovalStage[] = [];
    const startId =
      approvalStages.length > 0 ? Math.max(...approvalStages.map((s) => s.id)) + 1 : 1;
    for (let i = 0; i < approvalRowCount; i++) {
      newStages.push({
        id: startId + i,
        stage: '',
        department: '',
        responsible: '',
        details: '',
      });
    }
    setApprovalStages([...approvalStages, ...newStages]);
  };

  const removeApprovalStage = (id: number) => {
    setApprovalStages(approvalStages.filter((stage) => stage.id !== id));
  };

  const updateApprovalStage = (id: number, field: keyof NewProjectApprovalStage, value: string) => {
    setApprovalStages(
      approvalStages.map((stage) => (stage.id === id ? { ...stage, [field]: value } : stage))
    );
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSaveDraft = () => {
    console.log('Saving draft...');
  };

  const handleSubmit = () => {
    console.log('Submitting...');
    navigate('/strategy/projects');
  };

  const getStepProgress = (step: number): number => {
    if (step < currentStep) return 100;
    if (step === currentStep) return 50;
    return 0;
  };

  return (
    <Layout>
      <div className="flex flex-col gap-4 min-h-[calc(100vh-120px)]">
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
            <h1 className="text-xl font-medium text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              مشروع جديد
            </h1>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between relative">
              {/* Connecting Lines */}
              <div
                className="absolute top-6 left-0 right-0 flex items-center"
                style={{ zIndex: 0, paddingLeft: '10%', paddingRight: '10%' }}
              >
                {steps.slice(0, -1).map((_, index) => {
                  const isCompleted = currentStep > index + 1;
                  const isActive = currentStep === index + 1;
                  const stepProgress = isActive ? getStepProgress(currentStep) : 0;
                  const gradientPercentage = isCompleted ? 100 : isActive ? stepProgress : 0;

                  return (
                    <div
                      key={index}
                      className="flex-1 h-1 mx-2 transition-all"
                      style={{
                        background: isCompleted
                          ? '#11383f'
                          : isActive && gradientPercentage > 0
                            ? `linear-gradient(to left, #11383f ${gradientPercentage}%, #d1d5db ${gradientPercentage}%)`
                            : '#d1d5db',
                      }}
                    />
                  );
                })}
              </div>

              {/* Step Icons */}
              {steps.map((step) => {
                const isCompleted = currentStep > step.id;
                const isActive = currentStep === step.id;
                const IconComponent = step.icon;

                return (
                  <div
                    key={step.id}
                    className="flex flex-col items-center gap-3 z-10"
                    style={{ flexBasis: `${100 / steps.length}%` }}
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
                        isCompleted
                          ? 'bg-[#11383f] border-2 border-[#11383f]'
                          : isActive
                            ? 'bg-white border-2 border-[#11383f]'
                            : 'bg-white border-2 border-gray-300'
                      }`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          isCompleted ? 'text-white' : isActive ? 'text-[#11383f]' : 'text-gray-400'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-center text-sm max-w-[150px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                        isActive || isCompleted ? 'text-[#0e0d24] font-medium' : 'text-gray-500'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Content */}
          <div className="px-6 pb-6">
            <div className=" rounded-lg p-6">
              {/* Step 1 */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المعلومات الأساسية والجدول الزمني
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        رقم المشروع
                      </label>
                      <input
                        type="text"
                        value={formData.projectNumber}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        اسم المشروع
                      </label>
                      <input
                        type="text"
                        placeholder="اسم المشروع هنا..."
                        value={formData.projectName}
                        onChange={(e) => handleInputChange('projectName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      وصف المشروع
                    </label>
                    <textarea
                      placeholder="وصف المشروع هنا..."
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        مدير المشروع
                      </label>
                      <select
                        value={formData.projectManager}
                        onChange={(e) => handleInputChange('projectManager', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        <option value="">اختر مدير المشروع</option>
                        <option value="manager1">أحمد</option>
                        <option value="manager2">سارة</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        فريق المشروع
                      </label>
                      <select
                        value={formData.projectTeam}
                        onChange={(e) => handleInputChange('projectTeam', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        <option value="">اختر فريق المشروع</option>
                        <option value="team1">فريق التطوير</option>
                      </select>
                    </div>
                  </div>

                  <h3 className="text-md font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mt-6">
                    الجدول الزمني
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        تاريخ البداية
                      </label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        تاريخ الانتهاء المتوقع
                      </label>
                      <input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => handleInputChange('endDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        مدة المشروع (بحسب الأشهر)
                      </label>
                      <input
                        type="text"
                        value={formData.projectDuration}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الميزانية
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الميزانية الكلية
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="200,000"
                          value={formData.totalBudget}
                          onChange={(e) => handleInputChange('totalBudget', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                        <span className="text-sm text-gray-600">ر.س</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        التكلفة الحالية
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="34,000"
                          value={formData.currentCost}
                          onChange={(e) => handleInputChange('currentCost', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                        <span className="text-sm text-gray-600">ر.س</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        نسبة الإنفاق (بحسب الأشهر)
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#2CC28D]">17%</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#2CC28D] h-2 rounded-full" style={{ width: '17%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-md font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mt-6">
                    المخرجات
                  </h3>

                  <div className="space-y-3">
                    <div className="text-sm text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      المخرجات
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <li>نموذج أول للمنصة</li>
                      <li>نسخة تجريبية</li>
                      <li>لوحة بتحكم للإدارة</li>
                    </ul>
                  </div>

                  <div className="border border-gray-300 rounded-lg p-4 min-h-[200px] bg-white">
                    <div className="flex gap-2 border-b border-gray-200 pb-2 mb-4">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <span className="text-sm font-bold">I</span>
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <span className="text-sm font-bold">B</span>
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <span className="text-sm font-bold underline">U</span>
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <span className="text-sm font-bold">U</span>
                      </button>
                    </div>
                    <textarea
                      placeholder="اكتب المخرجات هنا..."
                      className="w-full min-h-[120px] focus:outline-none border-none [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Risks */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المخاطر
                  </h2>

                  <table className="w-full mb-4">
                    <thead>
                      <tr className="border-b border-[#e2e2e2] ">
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          الخطر
                        </th>
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          مستوى الخطورة
                        </th>
                        <th className="text-right py-4 px-4 border-r border-[#e2e2e2] text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          خطة المعالجة
                        </th>
                        <th className="text-center py-4 px-4 text-sm font-semibold text-[#0e0d24] w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {risks.map((risk) => (
                        <tr key={risk.id} className="border-b border-[#e2e2e2]">
                          <td className="py-2 px-4 border-r border-[#e2e2e2] ">
                            <input
                              type="text"
                              value={risk.risk}
                              onChange={(e) => updateRisk(risk.id, 'risk', e.target.value)}
                              placeholder="اسم الخطر"
                              className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <select
                              value={risk.severity}
                              onChange={(e) => updateRisk(risk.id, 'severity', e.target.value)}
                              className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-pointer [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <option value="">اختر المستوى</option>
                              <option value="عالي">عالي</option>
                              <option value="متوسط">متوسط</option>
                              <option value="منخفض">منخفض</option>
                            </select>
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input
                              type="text"
                              value={risk.mitigation}
                              onChange={(e) => updateRisk(risk.id, 'mitigation', e.target.value)}
                              placeholder="خطة المعالجة"
                              className="w-full px-2 py-2 text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            />
                          </td>
                          <td className="py-2 px-4 text-center">
                            <button
                              onClick={() => removeRisk(risk.id)}
                              className="p-1 hover:bg-gray-100 rounded transition-colors text-red-500"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex items-center gap-2 justify-start">
                    <Button
                      onClick={addRiskRows}
                      className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      أضف
                    </Button>
                    <input
                      type="number"
                      value={risksRowCount}
                      onChange={(e) => setRisksRowCount(Number(e.target.value))}
                      className="w-16 px-2 py-1 text-sm font-medium text-[#0e0d24] text-center border border-[#e2e2e2] rounded focus:outline-none focus:border-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      min="1"
                    />
                    <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      أسطر في الجدول
                    </span>
                  </div>
                </div>
              )}

              {/* Step 4: Approval Stage */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مرحلة الإعتماد
                  </h2>

                  <table className="w-full mb-4">
                    <thead>
                      <tr className="border-b border-[#e2e2e2] ">
                        <th className="py-4 px-4 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-r border-[#e2e2e2]">
                          المرحلة
                        </th>
                        <th className="py-4 px-4 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-r border-[#e2e2e2]">
                          الجهة
                        </th>
                        <th className="py-4 px-4 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-r border-[#e2e2e2]">
                          المسؤول
                        </th>
                        <th className="py-4 px-4 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-r border-[#e2e2e2]">
                          تفاصيل المرحلة
                        </th>
                        <th className="py-4 px-4 text-center text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {approvalStages.map((stage) => (
                        <tr key={stage.id} className="border-b border-[#e2e2e2]">
                          <td className="py-2 px-4 border-r border-[#e2e2e2] ">
                            <input
                              type="text"
                              value={stage.stage}
                              onChange={(e) =>
                                updateApprovalStage(stage.id, 'stage', e.target.value)
                              }
                              placeholder="رقم المرحلة"
                              className="w-full text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input
                              type="text"
                              value={stage.department}
                              onChange={(e) =>
                                updateApprovalStage(stage.id, 'department', e.target.value)
                              }
                              placeholder="اسم الجهة"
                              className="w-full text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input
                              type="text"
                              value={stage.responsible}
                              onChange={(e) =>
                                updateApprovalStage(stage.id, 'responsible', e.target.value)
                              }
                              placeholder="اسم المسؤول"
                              className="w-full text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            />
                          </td>
                          <td className="py-2 px-4 border-r border-[#e2e2e2]">
                            <input
                              type="text"
                              value={stage.details}
                              onChange={(e) =>
                                updateApprovalStage(stage.id, 'details', e.target.value)
                              }
                              placeholder="تفاصيل المرحلة"
                              className="w-full text-sm text-[#0e0d24] text-right bg-transparent border-none focus:outline-none focus:bg-gray-50 cursor-text [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            />
                          </td>
                          <td className="py-2 px-4 text-center">
                            <button
                              onClick={() => removeApprovalStage(stage.id)}
                              className="p-1 hover:bg-gray-100 rounded transition-colors text-red-500"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="flex items-center gap-2 justify-start">
                    <Button
                      onClick={addApprovalRows}
                      className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    >
                      أضف
                    </Button>
                    <input
                      type="number"
                      value={approvalRowCount}
                      onChange={(e) => setApprovalRowCount(Number(e.target.value))}
                      className="w-16 px-2 py-1 text-sm font-medium text-[#0e0d24] text-center border border-[#e2e2e2] rounded focus:outline-none focus:border-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      min="1"
                    />
                    <span className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      أسطر في الجدول
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="border-t border-[#e2e2e2] px-6 py-4 bg-white flex items-center justify-between">
            <div></div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={handleSaveDraft}
                className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                حفظ كمسودة
              </Button>

              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  السابق
                </Button>
              )}

              {currentStep < steps.length ? (
                <Button
                  onClick={handleNext}
                  className="bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  التالي
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  إرسال الطلب
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
