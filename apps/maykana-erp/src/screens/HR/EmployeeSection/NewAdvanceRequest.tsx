import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { buttonClasses } from '@/styles';

interface AdvanceFormData {
  jobTitle: string;
  amount: string;
  reason: string;
  paymentPlan: string;
  installments: string;
}

export const NewAdvanceRequest: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const [formData, setFormData] = useState<AdvanceFormData>({
    jobTitle: '',
    amount: '',
    reason: '',
    paymentPlan: '',
    installments: '',
  });

  const [expandedSection, setExpandedSection] = useState<string>('job');

  const getBackPath = () => {
    return '/hr/employee/salaries-compensations?tab=advances';
  };

  const handleInputChange = (field: keyof AdvanceFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Advance Request:', formData);
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
              {t('hr.new_advance_request')}
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
                      <option value="developer">{isRTL ? 'مطور برمجيات' : 'Software Developer'}</option>
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
                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.amount')}
                    </label>
                    <input
                      type="number"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      placeholder={t('hr.enter_amount')}
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
                      <option value="personal">{isRTL ? 'شخصي' : 'Personal'}</option>
                      <option value="medical">{isRTL ? 'طبي' : 'Medical'}</option>
                      <option value="education">{isRTL ? 'تعليمي' : 'Education'}</option>
                      <option value="emergency">{isRTL ? 'طارئ' : 'Emergency'}</option>
                    </select>
                  </div>

                  {/* Payment Plan */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.payment_plan')}
                    </label>
                    <select
                      value={formData.paymentPlan}
                      onChange={(e) => handleInputChange('paymentPlan', e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    >
                      <option value="">{t('hr.select_payment_plan')}</option>
                      <option value="monthly">{isRTL ? 'شهري' : 'Monthly'}</option>
                      <option value="quarterly">{isRTL ? 'ربع سنوي' : 'Quarterly'}</option>
                      <option value="semi-annual">{isRTL ? 'نصف سنوي' : 'Semi-Annual'}</option>
                      <option value="lump-sum">{isRTL ? 'دفعة واحدة' : 'Lump Sum'}</option>
                    </select>
                  </div>

                  {/* Number of Installments */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      {t('hr.installments_count')}
                    </label>
                    <select
                      value={formData.installments}
                      onChange={(e) => handleInputChange('installments', e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    >
                      <option value="">{t('hr.select_installments_count')}</option>
                      <option value="3">3 {isRTL ? 'أقساط' : 'Installments'}</option>
                      <option value="6">6 {isRTL ? 'أقساط' : 'Installments'}</option>
                      <option value="12">12 {isRTL ? 'قسط' : 'Installments'}</option>
                      <option value="24">24 {isRTL ? 'قسط' : 'Installments'}</option>
                    </select>
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
