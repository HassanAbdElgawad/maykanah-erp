import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { buttonClasses } from '../../../styles';

interface EvaluationFormData {
  jobTitle: string;
  evaluationTitle: string;
  startDate: string;
  evaluationType: string;
  estimatedCost: string;
  endDate: string;
  reason: string;
  singleFreedom: string;
}

export const NewEvaluationRequest: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const [formData, setFormData] = useState<EvaluationFormData>({
    jobTitle: '',
    evaluationTitle: '',
    startDate: '',
    evaluationType: '',
    estimatedCost: '',
    endDate: '',
    reason: '',
    singleFreedom: '',
  });

  const [expandedSection, setExpandedSection] = useState<string>('job');

  const getBackPath = () => {
    return '/hr/employee/evaluations-training?tab=evaluations';
  };

  const handleInputChange = (field: keyof EvaluationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Evaluation Request:', formData);
    navigate(getBackPath());
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <Layout>
      <div style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(getBackPath())}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <h1 className="text-xl font-medium text-gray-900">
              {t('hr.add_evaluation')}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(getBackPath())}
              className={buttonClasses.secondary}
            >
              {t('common.cancel')}
            </button>
            <button onClick={handleSubmit} className={buttonClasses.primary}>
              {t('hr.submit_request')}
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Job Information Section */}
          <div className="bg-white rounded-xl border border-gray-200">
            <button
              onClick={() => toggleSection('job')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-base font-medium text-gray-900">
                {t('hr.job_information')}
              </h2>
              {expandedSection === 'job' ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedSection === 'job' && (
              <div className="px-6 pb-6 space-y-4 border-t border-gray-100">
                <div className="grid grid-cols-1 gap-4 pt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.job_title')}
                    </label>
                    <select
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    >
                      <option value="">{t('hr.select_job_title')}</option>
                      <option value="developer">
                        {isRTL ? 'مطور برمجيات' : 'Software Developer'}
                      </option>
                      <option value="designer">{isRTL ? 'مصمم' : 'Designer'}</option>
                      <option value="manager">{isRTL ? 'مدير' : 'Manager'}</option>
                      <option value="analyst">{isRTL ? 'محلل' : 'Analyst'}</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Other Information Section */}
          <div className="bg-white rounded-xl border border-gray-200">
            <button
              onClick={() => toggleSection('other')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-base font-medium text-gray-900">
                {t('hr.other_information')}
              </h2>
              {expandedSection === 'other' ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedSection === 'other' && (
              <div className="px-6 pb-6 space-y-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {/* Evaluation Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.evaluation_title')}
                    </label>
                    <input
                      type="text"
                      value={formData.evaluationTitle}
                      onChange={(e) =>
                        handleInputChange('evaluationTitle', e.target.value)
                      }
                      placeholder={t('hr.enter_evaluation_title')}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    />
                  </div>

                  {/* Start Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.start_date')}
                    </label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    />
                  </div>

                  {/* Evaluation Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.evaluation_type')}
                    </label>
                    <select
                      value={formData.evaluationType}
                      onChange={(e) =>
                        handleInputChange('evaluationType', e.target.value)
                      }
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    >
                      <option value="">{t('hr.select_evaluation_type')}</option>
                      <option value="annual">
                        {isRTL ? 'تقييم سنوي' : 'Annual Evaluation'}
                      </option>
                      <option value="quarterly">
                        {isRTL ? 'تقييم ربع سنوي' : 'Quarterly Evaluation'}
                      </option>
                      <option value="probation">
                        {isRTL ? 'تقييم فترة تجريبية' : 'Probation Evaluation'}
                      </option>
                      <option value="project">
                        {isRTL ? 'تقييم مشروع' : 'Project Evaluation'}
                      </option>
                    </select>
                  </div>

                  {/* Estimated Cost */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.estimated_cost')}
                    </label>
                    <input
                      type="number"
                      value={formData.estimatedCost}
                      onChange={(e) =>
                        handleInputChange('estimatedCost', e.target.value)
                      }
                      placeholder={t('hr.enter_estimated_cost')}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    />
                  </div>

                  {/* End Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.end_date')}
                    </label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    />
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.reason')}
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => handleInputChange('reason', e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    >
                      <option value="">{t('hr.select_reason')}</option>
                      <option value="performance-review">
                        {isRTL ? 'مراجعة الأداء' : 'Performance Review'}
                      </option>
                      <option value="promotion-consideration">
                        {isRTL ? 'النظر في الترقية' : 'Promotion Consideration'}
                      </option>
                      <option value="development-plan">
                        {isRTL ? 'خطة التطوير' : 'Development Plan'}
                      </option>
                      <option value="feedback-session">
                        {isRTL ? 'جلسة تقييم' : 'Feedback Session'}
                      </option>
                    </select>
                  </div>

                  {/* Single Freedom */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.single_freedom')}
                    </label>
                    <input
                      type="text"
                      value={formData.singleFreedom}
                      onChange={(e) =>
                        handleInputChange('singleFreedom', e.target.value)
                      }
                      placeholder={t('hr.enter_single_freedom')}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
