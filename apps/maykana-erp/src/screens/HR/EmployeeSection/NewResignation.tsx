import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ArrowRight, ArrowLeft, Paperclip } from 'lucide-react';
import { buttonClasses } from '../../../styles';

export const NewResignation: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const [formData, setFormData] = useState({
    employeeName: 'أحمد محمد العلي',
    employeeNumber: 'EMP-2026-001',
    department: '',
    resignationType: '',
    lastWorkingDay: '',
    reason: '',
    additionalNotes: '',
  });

  const getBackToList = () => '/hr/employee/resignation';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Resignation Request:', formData);
    navigate(getBackToList());
  };

  const resignationTypeOptions = [
    { value: 'personal', label: 'استقالة شخصية' },
    { value: 'retirement', label: 'استقالة للتقاعد' },
    { value: 'health', label: 'استقالة لظروف صحية' },
    { value: 'education', label: 'استقالة للتعليم' },
    { value: 'relocation', label: 'استقالة للانتقال' },
    { value: 'other', label: 'أخرى' },
  ];

  return (
    <Layout>
      <div  style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(getBackToList())}
              className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <h1 className="text-xl font-medium text-gray-900">{t('hr.resignation')}</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <Paperclip className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">{t('hr.add_attachments')}</span>
            </button>

            <button
              onClick={handleSubmit}
              className={buttonClasses.primary}
            >
              {t('hr.submit_request')}
            </button>
          </div>
        </div>

       

        {/* Form */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <form onSubmit={handleSubmit}>
            {/* Basic Information Section */}
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4 text-right">
                {t('hr.basic_information')}
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {/* Employee Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.employee_name')}</label>
                  <input
                    type="text"
                    value={formData.employeeName}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-gray-50"
                    disabled
                    dir="rtl"
                  />
                </div>

                {/* Employee Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.employee_number')}</label>
                  <input
                    type="text"
                    value={formData.employeeNumber}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-gray-50"
                    disabled
                    dir="rtl"
                  />
                </div>

                {/* Department */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.department')}</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-white"
                    dir="rtl"
                    required
                  >
                    <option value="">{t('hr.select_department')}</option>
                    <option value="it">تقنية المعلومات</option>
                    <option value="hr">الموارد البشرية</option>
                    <option value="finance">المالية</option>
                    <option value="marketing">التسويق</option>
                    <option value="sales">المبيعات</option>
                  </select>
                </div>

                {/* Resignation Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.resignation_type')}</label>
                  <select
                    value={formData.resignationType}
                    onChange={(e) => setFormData({ ...formData, resignationType: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right bg-white"
                    dir="rtl"
                    required
                  >
                    <option value="">{t('hr.select_resignation_type')}</option>
                    {resignationTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Last Working Day */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.last_working_day')}</label>
                  <input
                    type="date"
                    value={formData.lastWorkingDay}
                    onChange={(e) => setFormData({ ...formData, lastWorkingDay: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right"
                    dir="rtl"
                    required
                  />
                </div>

                {/* Reason */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-gray-600 text-right">{t('hr.resignation_reason')}</label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right min-h-[100px]"
                    dir="rtl"
                    placeholder={t('hr.resignation_reason_placeholder')}
                    required
                  />
                </div>

                {/* Additional Notes */}
                <div className="flex flex-col gap-1.5 col-span-2">
                  <label className="text-base text-gray-600 text-right">{t('hr.additional_notes')}</label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent text-right min-h-[120px]"
                    dir="rtl"
                    placeholder={t('hr.notes_placeholder')}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
