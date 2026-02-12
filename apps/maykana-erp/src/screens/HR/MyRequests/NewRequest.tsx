import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Paperclip, FileEdit, ChevronDown } from 'lucide-react';
import { buttonClasses } from '@/styles';

export const NewRequest: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const [expandedSection, setExpandedSection] = useState(true);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-4" dir={isRTL ? 'rtl' : 'ltr'}>
            <button
              onClick={() => navigate('/hr/my-requests')}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <h1 className="text-xl font-medium text-gray-900">{t('hr.work_start_request')}</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <Paperclip className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">{t('hr.add_attachments')}</span>
              <span className="px-2 py-0.5 bg-[#092e321f] text-[#0000005e] rounded text-sm">0</span>
            </button>
            <button
              onClick={() => {
                // TODO: Submit request
                navigate('/hr/my-requests');
              }}
              className={buttonClasses.primary}
            >
              {t('hr.submit_request')}
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2]" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <button
              onClick={() => setExpandedSection(!expandedSection)}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  expandedSection ? '' : '-rotate-90'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium text-gray-900">{t('hr.work_start_info')}</h2>
              <div className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg">
                <FileEdit className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>

          {expandedSection && (
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-4 gap-4">
                {/* Employee Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.employee_name')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-gray-50"
                    disabled
                    placeholder="أحمد محمد العلي"
                    dir="rtl"
                  />
                </div>

                {/* Job Title */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.job_title')}</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-gray-50"
                    disabled
                    placeholder="مطور برمجيات"
                    dir="rtl"
                  />
                </div>

                {/* Work Start Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.work_start_date')}
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    dir="rtl"
                  />
                </div>

                {/* Department */}
                <div className="flex flex-col gap-1.5 opacity-60">
                  <label className="text-base text-gray-600 text-right">
                    {t('hr.department')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-gray-50"
                    disabled
                    placeholder="قسم التقنية"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="text-base text-gray-600 text-right">{t('hr.notes')}</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                  placeholder={t('hr.enter_notes')}
                  dir="rtl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
